<script>
  import Math from "$lib/components/Math.svelte";
  import Molstar from "$lib/components/Molstar.svelte";
  import { remote } from "$lib/header";
</script>

<h1>Model</h1>

<h2>Protein Structure Prediction</h2>

<h3>Protein Docking</h3>

<Molstar pdb={remote("/modelling/docking-000.js")} />

<h3>AlphaFold2</h3>

<Molstar pdb={remote("/modelling/alphafold-000.js")} />

<h2>Simulations</h2>

<h3>Thermal Stability</h3>

<p>
  In order to test the thermal stability of the BC-APT membrane, a quantum
  chemistry approach called ReaxFF was used to simulate the stability of the
  membrane at 400 Kelvin, the results of which are shown below:
</p>

<figure>
  <img
    src="https://static.igem.wiki/teams/4714/wiki/modelling/therm.jpg"
    alt=""
  />

  <figcaption>Figure 1: thermal stability simulation result</figcaption>
</figure>

<p>
  Specifically, the ReaxFF method models chemical reactions with atomistic
  potentials based on a range of reactive force fields. Similar to the
  nonreactive force field, the reactive force field categorized the energy of
  the whole system into several different partial energy contributions, as shown
  below:
</p>

<Math
  displayMode
  expression={String.raw`
\begin{align*}
 E_{\text{system}} = E_{\text{bond}} + E_{\text{over}} + E_{\text{under}} + E_{\text{val}} + E_{\text{pen}} + E_{\text{tors}} +\\
 E_{\text{conj}} + E_{\text{vdWaals}} + E_{\text{Coulomb}}
\end{align*}`}
/>

<p>
  Moreover, the basic assumption of ReaxFF is that the bond order
  <Math expression={`\\text{BO}_{ij}'`} />
  between two atoms can be calculated by the interatomic distance
  <Math expression={`r_{ij}`} />
  directly, as shown in the following equation:
</p>

<Math
  displayMode
  expression={String.raw`
\text{BO}_{ij}' = \text{exp}\left [ p_{bo, 1} \cdot (\frac{r_{ij}}{r_{o}} )^{p_{bo, 2}} \right ] + \text{exp}\left [ p_{bo, 3} \cdot (\frac{r_{ij}^{\pi}}{r_{o}} )^{p_{bo, 4}} \right ] + \text{exp}\left [ p_{bo, 5} \cdot (\frac{r_{ij}^{\pi \pi }}{r^{o}} )^{p_{bo, 6}} \right ]
`}
/>

<p>
  Where <Math expression={`p_{bo, 1}`} /> and <Math expression={`p_{bo, 2}`} /> represent
  the exponential terms of sigma term with the unity below
  <Math expression={`\sim 1.5 \\si{\\angstrom}`} /> and negligible above
  <Math expression={`\sim 2.5 \\si{\\angstrom}`} />, <Math
    expression={`p_{bo, 3}`}
  /> and <Math expression={`p_{bo, 4}`} /> mean the exponential terms of the first
  pi bond with the unity below
  <Math expression={`\sim 1.2 \\si{\\angstrom}`} /> and negligible above
  <Math expression={`\sim 1.75 \\si{\\angstrom}`} />, and <Math
    expression={`p_{bo, 5}`}
  /> and <Math expression={`p_{bo, 6}`} /> represent the exponential terms of the
  second pi bond with the unity below
  <Math expression={`\sim 1.0 \\si{\\angstrom}`} /> and negligible above
  <Math expression={`\sim 1.4 \\si{\\angstrom}`} />.
</p>

<p>
  The bond orders <Math expression={`\\text{BO}_{ij}'`} /> should be corrected for
  overcoordination, and the final bond orders <Math
    expression={`\\text{BO}_{ij}`}
  /> in the molecule are acquired by multiplying <Math
    expression={`\\text{BO}_{ij}'`}
  /> to some correction factors. Hence, the following equation is used to calculate
  the bond energies with the bond order <Math expression={`\\text{BO}_{ij}`} />:
</p>

<Math
  displayMode
  expression={String.raw`
E_{\text{bond}} = -D_{\text{e}} \cdot \text{BO}_{ij} \cdot \text{exp} \left [ p_{\text{be, 1}}(1 - \text{BO}_{ij}^{p_{\text{be, 1}}}) \right ]
`}
/>

<p>
  Where <Math expression={`D_{e}`} /> and <Math expression={`p_{be, 1}`} /> are bond
  parameters involved in <Math expression={`\\text{C}-\\text{C}`} />, <Math
    expression={`\\text{C}-\\text{H}`}
  />, and <Math expression={`\\text{H}-\\text{H}`} /> bonds.
</p>

<p>
  To control the overcoordination of the bond orders, <Math
    expression={`E_{\\text{over}}`}
  />, which will converge to 0 rapidly for undercoordinated system, is used to
  punish this phenomenon.
</p>

<Math
  displayMode
  expression={String.raw`
E_{\text{over}} = p_{\text{over}} \cdot \Delta_{i} \cdot (\frac{1}{1 + \text{exp}(\lambda_{6} \cdot \Delta_{i})})`}
/>

<p>
  where <Math expression={`p_{\\text{over}}`} /> is a constant parameter and <Math
    expression={`\\Delta_{i}`}
  /> is the degree of deviation of the sum of the corrected bond orders around an
  atomic center from its valency <Math expression={`\\text{Val}_{i}`} /> (normally
  <Math expression={`\\text{Val}_{i} = 4`} /> for carbon and <Math
    expression={`\\text{Val}_{i} = 1`}
  /> for hydrogen), herein, <Math expression={`\\Delta_{i} > 0`} />. Thus, we
  have:
</p>

<h3>Prediction of Filtration and Absorption Characteristics</h3>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore
error totam similique ab debitis eum optio, voluptatum dolorem illo nihil sequi
cumque cum ipsam, animi, harum voluptate odit reiciendis.m

<figure>
  <video
    src={remote("/modelling/absorb-fibre.js")}
    controls
    style="max-width: 40rem; margin: auto; "
  />

  <figcaption>
    Figure 2: simulation of the absorption of the BC-APT membrane
  </figcaption>
</figure>

<figure>
  <video
    src={remote("/modelling/absorb-prot.js")}
    controls
    style="max-width: 40rem; margin: auto; "
  />

  <figcaption>
    Figure 2: simulation of the absorption of the BC-APT membrane
  </figcaption>
</figure>
