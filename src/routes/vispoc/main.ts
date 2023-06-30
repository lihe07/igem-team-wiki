// @ts-ignore
import * as ranjs from "ranjs";

const k_loss_child = new ranjs.dist.Triangular(0.8, 3, (0.8 + 3) / 2);
const k_loss_adult = new ranjs.dist.Triangular(0.4, 3, (0.4 + 3) / 2);

// InR_adult = LogNormal(meanlog=2.70, sdlog=0.22)
// InR_child = Normal(mu=13.23, sigma=4.07)
const InR_adult = new ranjs.dist.LogNormal(2.7, 0.22);
const InR_child = new ranjs.dist.Normal(13.23, 4.07);

const C_a = new ranjs.dist.SkewNormal(-0.25, 2.2, 67.8);

const f_abs = 0.3 / 100;
const f_dep = 0.83;
const k_tis = 0.614;

const f_an = 1.0;

class Bimodal {
  mus: [number, number];
  sigmas: [number, number];
  lambdas: [number, number];

  constructor(
    mus: [number, number],
    sigmas: [number, number],
    lambdas: [number, number]
  ) {
    this.mus = mus;
    this.sigmas = sigmas;
    this.lambdas = lambdas;
  }

  sample(): number {
    const i = Math.random() > 0.5 ? 0 : 1;
    return new ranjs.dist.LogNormal(this.mus[i], this.sigmas[i]).sample();
  }
}

// C_f = Bimodal((-0.94, 0.09), (1.06, 1.69), (0.71, 0.29))
// C_m = SkewT(xi=0.12, omega=1.19, alpha=2.03)
// C_cr = Bimodal((-1.76, 0.52), (0.40, 0.99), (0.11, 0.89))
// C_tw = Bimodal((1.44, 2.66), (0.99, 0.13), (0.68, 0.32))
// C_bw = Bimodal((1.83, 3.34), (0.78, 0.53), (0.59, 0.41))
// C_s = Bimodal((2.84, 4.62), (0.85, 0.68), (0.80, 0.20))
// C_b = Bimodal((1.19, 2.41), (0.42, 0.73), (0.23, 0.77))
// C_mk = SkewNormal(xi=1.23, omega=1.22, alpha=5.06)

interface CONCS {
  [key: string]: Bimodal | ranjs.dist.SkewNormal;
}

const CONCS: CONCS = {
  Fish: new Bimodal([-0.94, 0.09], [1.06, 1.69], [0.71, 0.29]),
  Mollusc: new ranjs.dist.SkewNormal(0.12, 1.19, 2.03),
  Crustaceans: new Bimodal([-1.76, 0.52], [0.4, 0.99], [0.11, 0.89]),
  "Tap Water": new Bimodal([1.44, 2.66], [0.99, 0.13], [0.68, 0.32]),
  "Bottled Water": new Bimodal([1.83, 3.34], [0.78, 0.53], [0.59, 0.41]),
  Salt: new Bimodal([2.84, 4.62], [0.85, 0.68], [0.8, 0.2]),
  Beer: new Bimodal([1.19, 2.41], [0.42, 0.73], [0.23, 0.77]),
  Milk: new ranjs.dist.SkewNormal(1.23, 1.22, 5.06),
};

interface Sample {
  C_tis: number;
  C_mp: number;
}

interface Irs {
  [key: string]: number;
}

function sum_ir_ci(isAdult: boolean, foods: string[], irs: Irs): number {
  let s = 0;

  for (const food of foods) {
    s += irs[food] * CONCS[food].sample();
  }

  return s;
}

function _kappa(isAdult: boolean, foods: string[], irs: Irs): number {
  const InR = isAdult ? InR_adult.sample() : InR_child.sample();

  return (
    f_abs * f_an * sum_ir_ci(isAdult, foods, irs) +
    f_abs * f_dep * InR * C_a.sample()
  );
}

function _zeta(isAdult: boolean, foods: string[], irs: Irs): number {
  const InR = isAdult ? InR_adult.sample() : InR_child.sample();

  return (
    (1 - f_abs * f_an) * sum_ir_ci(isAdult, foods, irs) +
    (1 - f_abs) * (f_dep * InR * C_a.sample())
  );
}

export default function calculate(
  t: number,
  foods: string[],
  irs: Irs
): Sample {
  const days = t * 365;
  const isAdult = t >= 18;
  const kappa = _kappa(isAdult, foods, irs);
  const k_loss = isAdult ? k_loss_adult.sample() : k_loss_child.sample();
  const zeta = _zeta(isAdult, foods, irs);

  const C_mp =
    (kappa * Math.exp(-k_tis * days)) / (k_tis - k_loss) +
    Math.exp(-k_loss * days) *
      (-zeta / k_loss - kappa / (k_tis - k_loss) - kappa / k_loss) +
    (zeta + kappa) / k_loss;

  const C_tis = kappa / k_tis - (kappa * Math.exp(-k_tis * days)) / k_tis;

  return {
    C_tis: Math.ceil(Math.abs(C_tis)),
    C_mp: Math.ceil(Math.abs(C_mp)),
  };
}
