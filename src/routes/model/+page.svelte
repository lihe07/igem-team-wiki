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

<p>
  In order to obtain the predicted three-dimensional structures of the proteins
  in our membrane, we used a deep learning-based method -- Alphafold. The
  Alphafold method generally includes six steps, which are described below.
</p>

<p>
  First, the Alphafold accepts the amino acid sequence of its primary input.
  Meanwhile, it also derives multiple sequence alignments of the related
  proteins, which provides the evolutionary information of similar proteins for
  the algorithm.
</p>
<p>
  Second, the algorithm will build up the neural network architecture, which is
  based on transformer networks and convolutional layers. The function of these
  neural networks is to capture the long-range dependencies and relationships
  between amino acids in the protein sequence, which is useful in predicting the
  3-D structure.
</p>

<p>
  Third, the Alphafold will train the data by a large and diverse data set,
  which includes protein structures from the Protein Data Bank (PDB) and
  corresponding sequence data, and by observing the data, the model will learn
  to correlate the sequences with the corresponding protein structures.
</p>

<p>
  Fourth, the Root Mean Square Deviation of <Math
    expression={"\\text{C}\\alpha"}
  /> Atoms (<Math expression={"\\text{C}\\alpha"} /> RMSD), which is used to measure
  the dissimilarity between the predicted positions and the real positions from the
  experimental data, will be left during the training of Alphafold. During the optimization,
  Alphafold will adjust the parameters of the model automatically.
</p>

<p>
  Fifth, after the training process, Alphafold will predict the 3-D coordinate
  of a protein's atom based on its amino acid sequence and the evolutionary
  information. Meanwhile, the model uses an attention mechanism to identify the
  interactions between amino acids and predict the distance between them.
  Alphafold also has a "refinement" step where the algorithm will improve the
  initial predictions to enhance the accuracy of the final structure.
</p>

<p>
  Finally, the model will verify the accuracy of the final predictions by
  several different metrics, including Global Distance Test (GDT) scores,
  TM-scores, etc. Such metrics quantify how well the predicted structures match
  the experimental data.
</p>

<Molstar pdb={remote("/modelling/alphafold-000.js")} />

<p>
  The above figure shows the predicted structure of the protein. The Alphafold
  gave us a relatively accurate structural document of our protein, which
  assists future use.
</p>

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
  <Math expression={`\\sim 1.5 \\text{\\AA}`} /> and negligible above
  <Math expression={`\\sim 2.5 \\text{\\AA}`} />, <Math
    expression={`p_{bo, 3}`}
  /> and <Math expression={`p_{bo, 4}`} /> mean the exponential terms of the first
  pi bond with the unity below
  <Math expression={`\\sim 1.2 \\text{\\AA}`} /> and negligible above
  <Math expression={`\\sim 1.75 \\text{\\AA}`} />, and <Math
    expression={`p_{bo, 5}`}
  /> and <Math expression={`p_{bo, 6}`} /> represent the exponential terms of the
  second pi bond with the unity below
  <Math expression={`\\sim 1.0 \\text{\\AA}`} /> and negligible above
  <Math expression={`\\sim 1.4 \\text{\\AA}`} />.
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
E_{\text{over}} = p_{\text{over}} \cdot \Delta_{i} \cdot \left ( \frac{1}{1 + \text{exp}(\lambda_{6} \cdot \Delta_{i})} \right )`}
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

<Math
  displayMode
  expression={String.raw`
\Delta_{i} = \sum_{j = 1}^{n\text{bond} } \text{BO}_{ij} - \text{Val}_{i}
`}
/>

<!-- When undercoordination occurs ($\Delta_{i} < 0$), $E_{\text{under}}$ is used to calculate the energy contribution for the $\pi$-electron between the centers of undercoordinated atoms. -->

<p>
  The valence energy <Math expression={`E_{\\text{val}}`} /> is used to calculate
  the energy contribution for the <Math expression={`\\pi`} />-electron between
  the centers of undercoordinated atoms.
</p>

<Math
  displayMode
  expression={String.raw`
E_{\text{under}} = -p_{\text{under}} \cdot \frac{1-\text{exp}(\mu_{1} \cdot \Delta_{i})}{1 + \text{exp}(-\mu_{2} \cdot \Delta_{i})} \cdot f_{1}(\text{BO}_{ij,\pi}, \Delta_{j})
`}
/>

<Math
  displayMode
  expression={String.raw`
f_{1}(\text{BO}_{ij,\pi}, \Delta_{j}) = \frac{1}{1 + \mu_{3} \cdot \text{exp}(\mu_{4} \cdot \sum_{j = 1}^{\text{neighbors(i)} } \Delta_{j} \cdot \text{BO}_{ij,\pi } )}
`}
/>

<p>
  The penalty energy <Math expression={`E_{\\text{pen}}`} /> is used to calculate
  the energy contribution for the <Math expression={`\\pi`} />-electron between
  the centers of undercoordinated atoms.
</p>

<p>
  Moreover, the following equations are developed to clarify and calculate the
  valence angle energy contribution.
</p>

<Math
  displayMode
  expression={String.raw`
E_{\text{val}} = f_{2}(\text{BO}_{ij}) \cdot f_{2}(\text{BO}_{jk}) \cdot f_{3}(\Delta_{j}) \cdot \left \{ k_{a} - k_{a} \text{exp} \left [ -k_{b}(\Theta_{o} - \Theta_{ijk})^{2} \right ]   \right \} 
`}
/>

<Math
  displayMode
  expression={String.raw`
f_{2}(\text{BO}_{ij}) = 1 - \text{exp}(-\mu_{5} \cdot \text{BO}_{ij}^{\mu_{6}})
`}
/>

<Math
  displayMode
  expression={String.raw`
\begin{align*}
f_{3}(\Delta_{j}) = \frac{2 + \text{exp}(-\mu_{7} \cdot \Delta_{j})}{1 + \text{exp}(-\mu_{7} \cdot \Delta_{j}) + \text{exp}(p_{v, 1} \cdot \Delta_{j})} \cdot \\
\left [ \mu_{8} - (\mu_{8} - 1) \cdot \frac{2 + \text{exp}(\mu_{9} \cdot \Delta_{j}) }{1 + \text{exp}(\mu_{9} \cdot \Delta_{j}) + \text{exp}(-p_{v, 2} \cdot \Delta_{j}) } \right ] 
\end{align*}
`}
/>

<Math
  displayMode
  expression={String.raw`
\Theta_{o} = \pi - \Theta_{0, 0} \cdot \left \{ 1 - \text{exp}\left [ -\mu _{10} \cdot (2 - \text{SBO}2 ) \right ] \right \}
`}
/>

<Math
  displayMode
  expression={String.raw`
\text{SBO} = \Delta_{j} - 2 \cdot \left \{ 1 - \text{exp}\left [ -5 \cdot (\frac{1}{2} \Delta_{j} )^{\mu_{11}} \right ]   \right \} + \sum_{n = 1}^{\text{neighbors}(j) } \text{BO}_{jn, \pi } 
`}
/>

<Math
  displayMode
  expression={String.raw`
\Delta_{j,2} = \Delta_{j} \text{ if } \Delta_{j} < 0
`}
/>

<Math
  displayMode
  expression={String.raw`
\Delta_{j,2} = 0 \text{ if } \Delta_{j} \ge 0
`}
/>

<Math
  displayMode
  expression={String.raw`
\text{SBO}2 = 0 \text{ if SBO} \le 0
`}
/>

<Math
  displayMode
  expression={String.raw`
\text{SBO}2 = \text{SBO}^{\mu_{12}} \text{ if } 0 < \text{SBO} < 1
`}
/>

<Math
  displayMode
  expression={String.raw`
\text{SBO}2 = 2 - (2 - \text{SBO})^{\mu_{12}} \text{ if } 1 < \text{SBO} < 2
`}
/>

<Math
  displayMode
  expression={String.raw`
\text{SBO}2 = 2 \text{ if SBO} > 2
`}
/>

<p>
  where <Math expression={`\\Theta_{ijk}`} /> represents the deviations in valence
  angle from its equilibrium value <Math expression={`\\Theta_{o}`} />, the <Math
    expression={`f_{2}(\\text{BO})`}
  /> is used to guarantee the valence angle energy contribution will converge and
  disappear gradually during bond dissociation, the <Math
    expression={`f_{3}(\\Delta_{j})`}
  /> copes with the phenomena of over/undercoordination in the central atom <Math
    expression={`j`}
  />, the values of <Math expression={`\\Theta_{o}`} /> and <Math
    expression={`\\Theta_{ijk}`}
  /> rely on the sum of <Math expression={`\\pi`} />-bond orders (SBO) around
  the central atom <Math expression={`j`} /> on the valence angle energy, and <Math
    expression={`\\mu_{5}`}
  />, <Math expression={`\\mu_{6}`} />, <Math expression={`\\mu_{7}`} />, <Math
    expression={`\\mu_{8}`}
  />, <Math expression={`\\mu_{9}`} />, <Math expression={`\\mu_{10}`} />, <Math
    expression={`\\mu_{11}`}
  />, <Math expression={`\\mu_{12}`} /> are parameters of valence angle energy, which
  are 1.49, 1.28, 6.30, 2.72, 33.87, 6.70, 1.06, and 2.04 respectively.
</p>

<p>
  For the stability of the system when dealing with double bonds sharing an atom
  at a valency angle, the following equations of energy penalty are developed
  for such systems.
</p>

<Math
  displayMode
  expression={String.raw`
E_{\text{pen}} = \mu_{13} \cdot f_{4}(\Delta_{j}) \cdot \text{exp}\left [ -\mu _{14} \cdot (\text{BO}_{ij} -2)^{2}\right ] \cdot \text{exp}\left [ -\mu_{14} \cdot (\text{BO}_{jk} -2)^{2} \right ]
`}
/>

<Math
  displayMode
  expression={String.raw`
f_{4}(\Delta_{j}) = \frac{2+\text{exp}(-\mu_{15} \cdot \Delta_{j})}{1 + \text{exp}(-\mu_{15} \cdot \Delta_{j}) + \text{exp}(\mu_{16} \cdot \Delta_{j})}
`}
/>

<!-- where $f_{4}(\Delta_{j})$ copes with over/undercoordination in central atom $j$ on the penalty energy, and $\mu_{13}$, $\mu_{14}$, $\mu_{15}$, $\mu_{16}$ are the parameters of penalty energy, which are 36.0, 7.98, 0.40, and 4.00 respectively.
 -->

<p>
  where <Math expression={`f_{4}(\\Delta_{j})`} /> copes with over/undercoordination
  in central atom <Math expression={`j`} /> on the penalty energy, and <Math
    expression={`\\mu_{13}`}
  />, <Math expression={`\\mu_{14}`} />, <Math expression={`\\mu_{15}`} />, <Math
    expression={`\\mu_{16}`}
  /> are the parameters of penalty energy, which are 36.0, 7.98, 0.40, and 4.00 respectively.
</p>

<p>
  To ensure the dependence of the energy of torsion angle <Math
    expression={`\\omega_{ijkl}`}
  /> works accurately for bond orders close to 0 and bond orders larger than 1, the
  following equations were developed.
</p>

<Math
  displayMode
  expression={String.raw`
E_{\text{tors}} = f_{5}(\text{BO}_{ij}, \text{BO}_{jk}, \text{BO}_{kl}) \cdot \sin{\Theta_{ijk}} \cdot \sin{\Theta_{jkl}} \cdot
`}
/>

<Math
  displayMode
  expression={String.raw`
\left [ \frac{1}{2} V_{2} \cdot \text{exp}\left \{ p_{l} (\text{BO}_{jk} - 3 + f_{6}(\Delta_{j}, \Delta_{k}) )^{2} \right \} \cdot (1 - \cos{2\omega _{ijkl}}) + \frac{1}{2} V_{3} \cdot (1 + \cos{3\omega _{ijkl}})  \right ]
`}
/>

<Math
  displayMode
  expression={String.raw`
f_{5}(\text{BO}_{ij}, \text{BO}_{jk}, \text{BO}_{kl}) = \left [ 1 - \text{exp}(-\mu_{17} \cdot \text{BO}_{ij} )  \right ] \cdot
`}
/>

<Math
  displayMode
  expression={String.raw`
\left [ 1 - \text{exp}(-\mu _{17} \cdot \text{BO}_{jk} )  \right ] \cdot \left [ 1 - \text{exp}(-\mu _{17} \cdot \text{BO}_{kl}  )  \right ] 

`}
/>

<Math
  displayMode
  expression={String.raw`
f_{6}(\Delta_{j}, \Delta_{k}) = \frac{2 + \text{exp}\left [ -\mu_{18} \cdot (\Delta_{j} + \Delta_{k}) \right ]  }{1 + \text{exp}\left [ -\mu _{18} \cdot (\Delta_{j} + \Delta_{k})   \right ] + \text{exp} \left [ \mu_{19} \cdot (\Delta_{j} + \Delta_{k}) \right ] } 
`}
/>

<!-- where $V_{2}$ and $V_{3}$ are two sets of terms that are based on the bond order of the central bond $\text{BO}_{jk}$, the value of $\sin{\Theta_{ijk}} \cdot \sin{\Theta_{jkl}}$ guarantees that the torsion energy contribution will vanish when either $\Theta_{ijk}$ or $\Theta_{jkl}$ reaches $\pi$, the $f_{5}(\text{BO}_{ij}, \text{BO}_{jk}, \text{BO}_{kl})$ allows the gradual disappearance of the torsion energy contribution when one of the torsion angle bonds is dissociated, the $f_{6}(\Delta_{j}, \Delta_{k})$ prohibits the occurrence of excessive torsion energy contributions when atom $j$ and $k$ are overcoordinated, and $\mu_{17}, \mu_{18}, \mu_{19}$ are parameters of torsion energy, which are 3.17, 10.00, and 0.90 respectively.
 -->

<p>
  where <Math expression={`V_{2}`} /> and <Math expression={`V_{3}`} /> are two sets
  of terms that are based on the bond order of the central bond <Math
    expression={`\\text{BO}_{jk}`}
  />, the value of <Math
    expression={`\\sin{\\Theta_{ijk}} \\cdot \\sin{\\Theta_{jkl}}`}
  /> guarantees that the torsion energy contribution will vanish when either <Math
    expression={`\\Theta_{ijk}`}
  /> or <Math expression={`\\Theta_{jkl}`} /> reaches <Math
    expression={`\\pi`}
  />, the <Math
    expression={`f_{5}(\\text{BO}_{ij}, \\text{BO}_{jk}, \\text{BO}_{kl})`}
  /> allows the gradual disappearance of the torsion energy contribution when one
  of the torsion angle bonds is dissociated, the <Math
    expression={`f_{6}(\\Delta_{j}, \\Delta_{k})`}
  /> prohibits the occurrence of excessive torsion energy contributions when atom
  <Math expression={`j`} /> and <Math expression={`k`} /> are overcoordinated, and
  <Math expression={`\\mu_{17}, \\mu_{18}, \\mu_{19}`} /> are parameters of torsion
  energy, which are 3.17, 10.00, and 0.90 respectively.
</p>

<p>
  The following equations depict the contribution of conjugation effects toward
  the molecular energy.
</p>

<Math
  displayMode
  expression={String.raw`
E_{\text{conj}} = f_{7}(\text{BO}_{ij}, \text{BO}_{jk}, \text{BO}_{kl}) \cdot \mu_{20} \cdot \left [ 1 + (\cos^{2}{\omega_{ijkl}} -1) \cdot \sin{\Theta_{ijk}} \cdot \sin{\Theta_{jkl}} \right ] 
`}
/>

<Math
  displayMode
  expression={String.raw`
f_{7}(\text{BO}_{ij}, \text{BO}_{jk}, \text{BO}_{kl}) = \text{exp}\left [ -\mu_{21} \cdot (\text{BO}_{ij} - \frac{3}{2}  )^{2} \right ] \cdot
`}
/>

<Math
  displayMode
  expression={String.raw`
\text{exp}\left [ -\mu_{21} \cdot (\text{BO}_{ij} - \frac{3}{2} )^{2} \right ] \cdot \text{exp}\left [ -\mu_{21} \cdot (\text{BO}_{kl} - \frac{3}{2} )^{2}  \right ]
`}
/>

<p>
  where <Math expression={`\\mu_{20}, \\mu_{21}`} /> are parameters of conjugation
  energy, which are -1.14, and 2.17 respectively.
</p>

<p>
  Aside from the overlapping, intermolecular forces such as dipole-dipole
  attractions and dispersion forces should be taken into consideration and such
  forces are included in the categories of van der Waals and Coulomb forces. To
  prevent these two forces from disturbing the energy contribution during bond
  dissociation, the following equations are developed
</p>

<Math
  displayMode
  expression={String.raw`
E_{\text{vdWaals}} = D_{ij} \cdot \left \{ \text{exp}\left [ \alpha _{ij} \cdot (1 - \frac{f_{8}(r_{ij})}{r_{\text{vdW}}} ) \right ] -2 \cdot \text{exp} \left [ \frac{1}{2} \cdot \alpha _{ij} \cdot (1 - \frac{f_{8}(r_{ij})}{r_{\text{vdW}}} )  \right ]   \right \} 
`}
/>

<Math
  displayMode
  expression={String.raw`
f_{8}(r_{ij}) = \left [ r_{ij}^{\mu_{22}} + (\frac{1}{\mu_w{}} )^{\mu_{22}} \right ]^{\mu_{22}}
`}
/>

<p>
  where <Math expression={`D_{ij}`} /> is the bond parameter, the <Math
    expression={`f_{8}(r_{ij})`}
  /> provides a shielded interaction to avoid repulsion and atoms sharing valence
  angle, and <Math expression={`\\mu_{22}`} /> is the parameter of van der Waal energy,
  which is 1.69.
</p>

<p>
  As with the van der Waals interactions, the following equation describes the
  Coulomb interactions between every atom pairs
</p>

<Math
  displayMode
  expression={String.raw`
E_{\text{Coulomb}} = C \cdot \frac{q_{i} \cdot q_{j}}{\left [ r_{ij}^{3} + (1\gamma_{ij})^{3}\right ]^{1/3 } }
`}
/>

<p>
  where <Math expression={`\\gamma_{ij}`} /> is the parameter in the Electron Equilibrium
  Method.
</p>

<p>
  After defining every energy contribution to the force field, the whole system
  is optimized by an approach from van Duin et al, and related quantum chemistry
  data is added to the force field training set. During the optimization, the
  energy of every molecule is minimized continuously, and the quantum chemistry
  data is kept fixed with appropriate bond length or torsion angle restraints.
</p>

<p>
  In order to control the amount of heat in the system, we used Berendsen
  thermostats to reach the demanded temperature. This method leads the system to
  the target temperature by changing the velocities of every atom during the
  simulation, allowing a rapid convergence in a relatively small and constant
  time interval.
</p>

<p>
  The Berendsen thermostat uses the following scaling factor inside its
  algorithm to indicate the proportional scaling of the velocities per time
  step.
</p>

<Math
  displayMode
  expression={String.raw`
\lambda = \left [ 1 + \frac{\Delta t}{\tau _{b}} (\frac{T_{0}}{T} - 1) \right ]^{1/2}
`}
/>

<p>
  where <Math expression={`\\Delta t`} /> is the time step, <Math
    expression={`\\tau_{B}`}
  /> is the time constant in the Berendsen thermostat, <Math
    expression={`T_{0}`}
  /> is the desired temperature, and <Math expression={`T`} /> is the instantaneous
  temperature. In our case, our time constant is 100 fs (strong damping and rapid
  convergence).
</p>

<p>
  As shown in Figure 1 above, at temperatures near its boiling point, our
  protein exhibits a commendable level of stability, demonstrating a resistance
  to significant denaturation. This remarkable trait enables it to maintain its
  structural integrity and functionality under the challenging conditions of
  high temperatures. At the same time, this relatively stable and clear
  simulation method gives strong evidence for the thermal stability of our
  membranes.
</p>

<h3>Prediction of Filtration and Absorption Characteristics</h3>

<p>
  For the simulation of BC-APT membrane permeation and adsorption efficiencies,
  we used a method based on Newtonian electromagnetic physics -- the classical
  force field.
</p>

<p>
  Compared to ReaxFF, the Force Field method does not involve the usage of
  quantum chemical data and the calculation of bond orders, instead, it is a
  relatively fast and simple approach under Newtonian physics. However, it is a
  highly efficient and accurate method for predicting the structures and
  dynamics of molecules.
</p>

<p>
  The Force Field method gives the following relationship between the total
  potential energy and the valence interactions and nonbonded interactions
</p>

<Math
  displayMode
  expression={String.raw`
E = E_{\text{R}} + E_{\theta} + E_{\phi} + E_{\omega} + E_{\text{vdw}} + E_{\text{el}}
`}
/>

<p>
  where <Math expression={`E_{\\text{R}}`} /> is the bond stretching of the valence
  interaction. Valence interactions also include <Math
    expression={`E_{\\theta}`}
  />, the bond angle bending; <Math expression={`E_{\\Phi}`} />, the dihedral
  angle torsion; and <Math expression={`E_{\\omega}`} /> the inversion terms. The
  nonbonded interactions contain <Math expression={`E_{\\text{vdw}}`} />, the
  van der Waal's terms, and <Math expression={`E_{\\text{el}}`} />, the
  electrostatic terms.
</p>

<p>
  The bond stretch interaction can be depicted as the following Morse function.
</p>

<!-- $$E_{\text{R}} = D_{\text{IJ}}\left [ e^{-\alpha (r-r_{\text{IJ} }) } - 1 \right ]^{2}$$
 -->

<Math
  displayMode
  expression={String.raw`
E_{\text{R}} = D_{\text{IJ}}\left [ e^{-\alpha (r-r_{\text{IJ} }) } - 1 \right ]^{2}
`}
/>

<!-- $$\alpha = \left [ k_{\text{IJ} } / 2D_{\text{IJ} } \right ]^{1/2}$$
 -->

<Math
  displayMode
  expression={String.raw`
\alpha = \left [ k_{\text{IJ} } / 2D_{\text{IJ} } \right ]^{1/2}
`}
/>

<!-- where $D_{\text{IJ}}$ is the bond dissociation energy (kcal/mol) and $r_{\text{IJ}}$ is the standard bond length in angstroms. The Morse function is considered to be more accurate in this circumstance since it includes the anharmonic constant $r_{\text{IJ}}$, which nears the equilibrium, and the finite energy $D_{\text{IJ}}$ for breaking bonds.
 -->

<p>
  where <Math expression={`D_{\\text{IJ}}`} /> is the bond dissociation energy (kcal/mol)
  and <Math expression={`r_{\\text{IJ}}`} /> is the standard bond length in angstroms.
  The Morse function is considered to be more accurate in this circumstance since
  it includes the anharmonic constant <Math expression={`r_{\\text{IJ}}`} />,
  which nears the equilibrium, and the finite energy <Math
    expression={`D_{\\text{IJ}}`}
  /> for breaking bonds.
</p>

<!-- The general angle bond terms can be described as the following cosine Fourier expansion in $\theta$
 -->

<p>
  The general angle bond terms can be described as the following cosine Fourier
  expansion in <Math expression={`\\theta`} />
</p>

<!-- $$E_{\theta} = K_{\text{IJK}} \sum_{n = 0}^{m} C_{n} \cos{n\theta }$$
 -->

<Math
  displayMode
  expression={String.raw`
E_{\theta} = K_{\text{IJK}} \sum_{n = 0}^{m} C_{n} \cos{n\theta }
`}
/>

<!-- where the coefficient $C_{n}$ aims to satisfy the boundary conditions including that the function has a minimum at the natural bond angle $\theta_{0}$. Herein, since our membrane contains nonlinear structural molecules, we applied a three-term Fourier expansion with three expansion coefficients
 -->

<p>
  where the coefficient <Math expression={`C_{n}`} /> aims to satisfy the boundary
  conditions including that the function has a minimum at the natural bond angle
  <Math expression={`\\theta_{0}`} />. Herein, since our membrane contains
  nonlinear structural molecules, we applied a three-term Fourier expansion with
  three expansion coefficients.
</p>

<Math
  displayMode
  expression={String.raw`
E_{\theta} = K_{\text{IJK}} \left [ C_{0} + C_{1}\cos{\theta } + C_{2} \cos{2\theta}  \right ] `}
/>

<Math
  displayMode
  expression={String.raw`
C_{2} = 1/(4 \sin^{2}{\theta_{0}}) \quad C_{1} = -4C_{2}\cos{\theta_{0}}`}
/>

<Math
  displayMode
  expression={String.raw`
C_{0} = C_{2}(2\cos^{2}{\theta_{0}} + 1)`}
/>

<!-- The angle bend force constants are produced by Badger's rules, which is the second partial derivative of $E$ with respect to $\theta$
 -->

<p>
  The angle bend force constants are produced by Badger's rules, which is the
  second partial derivative of <Math expression={`E`} /> with respect to <Math
    expression={`\\theta`}
  />
</p>

<Math
  displayMode
  expression={String.raw`
K_{\text{IJK}} = \frac{\partial^{2} E}{\partial \theta^{2}} = \beta \frac{Z_{I}^{*}Z_{k}^{*}}{r_{\text{IK}}^{5}} r_{\text{IJ}} r_{\text{JK}} \left [ r_{\text{IJ}} r_{\text{JK}} (1 - \cos^{2}{\theta_{0}}) -r_{\text{IK}}^{2} \cos{\theta_{0}} \right ] `}
/>

<p>
  where <Math expression={`r_{\\text{IJ}}`} /> and <Math
    expression={`r_{\\text{IK}}`}
  />
  is the natural bond length, <Math expression={`\\beta`} /> is an undetermined coefficient,
  and <Math expression={`Z_{I}^{*}`} /> and <Math expression={`Z_{K}^{*}`} /> are
  the effective charges of the atoms.
</p>

<!-- The torsional terms for two bonds $\text{IJ}$ and $\text{KL}$ connected is described with a cosine Fourier expansion in $\phi$
 -->

<p>
  The torsional terms for two bonds <Math expression={`\\text{IJ}`} /> and <Math
    expression={`\\text{KL}`}
  /> connected is described with a cosine Fourier expansion in <Math
    expression={`\\phi`}
  />
</p>

<!-- $$E_{\phi} = K_{\text{IJKL}} \sum_{n = 0}^{m} C_{n} \cos{n\phi_{\text{IJKL} }} $$
 -->

<Math
  displayMode
  expression={String.raw`
E_{\phi} = K_{\text{IJKL}} \sum_{n = 0}^{m} C_{n} \cos{n\phi_{\text{IJKL} }} `}
/>

<!-- where $K_{\text{IJKL}}$ and the coefficients $C_{n}$ are determined by the rotational barrier $V_{\phi}$ to explain the periodic trend.
 -->

<p>
  where <Math expression={`K_{\\text{IJKL}}`} /> and the coefficients <Math
    expression={`C_{n}`}
  /> are determined by the rotational barrier <Math expression={`V_{\\phi}`} /> to
  explain the periodic trend.
</p>

<!-- For the inversion energy contribution, a one- or two-term cosine Fourier expansion in $\omega$ is developed, and it's used for atoms I, which are bonded to three other atoms J, K, and L
 -->

<p>
  For the inversion energy contribution, a one- or two-term cosine Fourier
  expansion in <Math expression={`\\omega`} /> is developed, and it's used for atoms
  <Math expression={`I`} />, which are bonded to three other atoms <Math
    expression={`J, K, and L`}
  />
</p>

<!-- $$E_{\omega} = K_{\text{IJKL}}(C_{0} + C_{1}\cos{\omega_{\text{IJKL}}} + C_{2}\cos{2\omega_{\text{IJKL}}})$$
 -->

<Math
  displayMode
  expression={String.raw`
E_{\omega} = K_{\text{IJKL}}(C_{0} + C_{1}\cos{\omega_{\text{IJKL}}} + C_{2}\cos{2\omega_{\text{IJKL}}})`}
/>

<!-- where $K_{IJKL}$ is the force field constant in kcal/mol and $\omega_{\text{IJKL}}$ is the angle between the IL axis and the IJK plane
 -->

<p>
  where <Math expression={`K_{IJKL}`} /> is the force field constant in kcal/mol
  and <Math expression={`\\omega_{\\text{IJKL}}`} /> is the angle between the IL
  axis and the <Math expression={`IJK`} /> plane.
</p>

<!-- The van der Waal energy contribution cannot be neglected, and in order to maintain higher numerical stability, the following exponential-6 form of $E_{\text{vdw}}$ is developed
 -->

<p>
  The van der Waal energy contribution cannot be neglected, and in order to
  maintain higher numerical stability, the following exponential-6 form of <Math
    expression={`E_{\\text{vdw}}`}
  /> is developed.
</p>

<!-- $$E_{\text{vdw}} = \left [ D_{\text{IJ}}(\frac{6}{\zeta - 6})e^{\zeta }  \right ]e^{-\zeta (x/x_{\text{IJ} })}
 - \left [ D_{\text{IJ} } (\frac{\zeta }{\zeta - 6} )x_{\text{IJ}}^{6} \right ] / x^{6}$$
 -->

<Math
  displayMode
  expression={String.raw`
E_{\text{vdw}} = \left [ D_{\text{IJ}}(\frac{6}{\zeta - 6})e^{\zeta }  \right ]e^{-\zeta (x/x_{\text{IJ} })}
 - \left [ D_{\text{IJ} } (\frac{\zeta }{\zeta - 6} )x_{\text{IJ}}^{6} \right ] / x^{6}`}
/>

<!-- where $D_{\text{IJ}}$ is the well depth term, $x_{\text{IJ}}$ is the distance term, and the shape parameter $\zeta$. The the distance term can be expressed as
 -->

<p>
  where <Math expression={`D_{\\text{IJ}}`} /> is the well depth term, <Math
    expression={`x_{\\text{IJ}}`}
  /> is the distance term, and the shape parameter <Math
    expression={`\\zeta`}
  />. The the distance term can be expressed as:
</p>

<!-- $$x_{\text{I}} = \zeta / B_{\text{I}}$$
 -->

<Math
  displayMode
  expression={String.raw`
x_{\text{I}} = \zeta / B_{\text{I}}`}
/>

<!-- herein, the repulsion exponent $B_{\text{I}} = 2 \sqrt{2\text{IP}}_{\text{I}}$ and $\text{IP}_{\text{I}}$ is the ionization energy for each atom I. Meanwhile, for the well depth term, we have
 -->

<p>
  Herein, the repulsion exponent <Math expression={`B_{\\text{I}}`} /> = 2 <Math
    expression={`\\sqrt{2\\text{IP}}_{\\text{I}}`}
  /> and <Math expression={`\\text{IP}_{\\text{I}}`} /> is the ionization energy
  for each atom <Math expression={`I`} />. Meanwhile, for the well depth term,
  we have:
</p>

<!-- $$D_{\text{I}} = C_{6\text{II}}(\frac{\zeta - 6}{\zeta}) / x_{\text{I}}^{6}$$
 -->

<Math
  displayMode
  expression={String.raw`
D_{\text{I}} = C_{6\text{II}}(\frac{\zeta - 6}{\zeta}) / x_{\text{I}}^{6}`}
/>

<!-- where the dispersion terms $C_{6\text{II}}$ is proportional to the upper bound numerical Hartree-Fock values presented by Fraga, Karwowski, and Saxena. Moreover, for the shape parameter $\zeta$ of the second-period atoms, we have 
 -->

<p>
  where the dispersion terms <Math expression={`C_{6\\text{II}}`} /> is proportional
  to the upper bound numerical Hartree-Fock values presented by Fraga, Karwowski,
  and Saxena. Moreover, for the shape parameter <Math expression={`\\zeta`} /> of
  the second-period atoms, we have:
</p>

<Math
  displayMode
  expression={String.raw`
\zeta = 10.02 + 0.6775n`}
/>

<p>for the third-period atoms, we have:</p>

<Math
  displayMode
  expression={String.raw`
\zeta = 8.587+0.897n`}
/>

<p>and for the remaining main group elements, we have:</p>

<Math
  displayMode
  expression={String.raw`
\zeta = 8 + n`}
/>

<p>
  where <Math expression={`n`} /> is the atomic number, and the <Math
    expression={`\\zeta`}
  /> for the noble gases is assigned to 15.
</p>

<p>
  The electrostatic interactions can be calculated by the following equation:
</p>

<!-- $$E_{el} = 332.0637(Q_{i}Q_{j}/\epsilon R_{ij})$$
 -->

<Math
  displayMode
  expression={String.raw`
E_{el} = 332.0637(Q_{i}Q_{j}/\epsilon R_{ij})`}
/>

<!-- where $Q_{i}$ and $Q_{j}$ are charges in coulomb, $R_{ij}$ is the distance in angstroms, and $\epsilon$ is the dielectric constant.
 -->

<p>
  where <Math expression={`Q_{i}`} /> and <Math expression={`Q_{j}`} /> are charges
  in coulomb, <Math expression={`R_{ij}`} /> is the distance in angstroms, and <Math
    expression={`\\epsilon`}
  /> is the dielectric constant.
</p>

<!-- The procedure of the simulations was carried out in a Newton-Raphson minimization scheme with the norm gradient convergence criteria of $1 \times 10^{-10}$ kcal/mol/\si{\angstrom}, and a force constant matrix with absent negative eigenvalues was used to verify the minima of the simulations.
 -->

<p>
  The procedure of the simulations was carried out in a Newton-Raphson
  minimization scheme with the norm gradient convergence criteria of <Math
    expression={`1 \\times 10^{-10}`}
  /> kcal/mol/<Math expression={`\\text{\\AA}`} />, and a force constant matrix
  with absent negative eigenvalues was used to verify the minima of the
  simulations.
</p>

<p>
  The model accepts the spatial structure of the filtration site and some
  contextual information as inputs. We kept track of each MP particle and
  statistically analyzed the performance of the filtration site, and the
  resulting video is shown below:
</p>

<div class="two-video">
  <figure>
    <video
      src={remote("/modelling/absorb-fibre.js")}
      controls
      style="max-width: 40rem; margin: auto; "
    >
      <track kind="captions" />
    </video>

    <figcaption>
      Simulation of the absorption of the PET by the nano-fibres
    </figcaption>
  </figure>

  <figure>
    <video
      src={remote("/modelling/absorb-prot.js")}
      controls
      style="max-width: 40rem; margin: auto; "
    >
      <track kind="captions" />
    </video>

    <figcaption>
      Simulation of the absorption of the PET by BC-APT membrane
    </figcaption>
  </figure>
</div>

<p>
  The results of the simulation show the difference in the adsorptivity between
  our BC-APT membrane and the nanocellulose membrane. Apparently, the adsorption
  of our BC-APT membranes is much stronger than that of nanocellulose membranes.
  When a PET molecule comes close to our membrane, it is directly adsorbed and
  immobilized very thoroughly without any detachment. With nanocellulose
  membranes, the PET molecule is not adsorbed well and the membrane does not
  bind the PET molecule securely. As a result, our BC-APT membranes show high
  adsorptivity and efficiency.
</p>

<p>
  Similarly, this result is validated by the Force Field method, which
  accurately handles a large number of different intermolecular attractions and
  molecular collisions and adsorptions in a very short period of time, providing
  strong simulation evidence for the final results and comparisons of adsorption
  efficiencies.
</p>

<style>
  .two-video {
    display: flex;
    justify-content: space-between;
  }

  .two-video > figure {
    flex: 1;
    margin: 1rem;
  }
  .two-video video {
    width: 100%;
  }
</style>
