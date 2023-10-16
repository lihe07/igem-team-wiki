<script>
  import { remote } from "$lib/header";
</script>

<h2>Overview</h2>

<p>
  BAID - China is dedicated to addressing the increasingly severe issue of
  microplastic contamination in bottled water and beverages. We have developed
  an eco-friendly and efficient biobased filtration membrane using synthetic
  biology methods, which can achieve over 90% microplastic removal. This
  groundbreaking filtration device is specially designed to fit onto
  environmentally friendly and renewable materials used in bottle caps. It is
  expected to be available for mass production at a price not exceeding $0.25
  per unit, with an estimated reuse capacity of 20-30 times.
</p>

<p>
  In addition, we have introduced a calculator program to help consumers
  estimate their daily intake of microplastics. This tool aims to raise
  awareness about microplastic ingestion, encouraging individuals to reduce
  their reliance on plastic products in their daily lives.
</p>

<p>
  For the biobased filtration membrane, we employ bacterial cellulose as the
  cellulose matrix. To enhance adsorption efficiency, we first engineer oat
  proteins into the cellulose matrix using cellulose-binding modules (CBMs). We
  have created a triblock structure component called "xxxx" to strengthen the
  binding between cellulose and oat proteins. This combination forms the
  foundational membrane for filtering microplastics, along with CBM3-OP-CBM3
  composite proteins. Furthermore, we tested the addition of substances like
  APT, tannic acid, and catechins to increase microplastic adsorption sites on
  the membrane. In microplastic removal efficiency tests, we utilize a
  microscopic Raman spectrometer to characterize the composition (types) of
  microplastics in water. We have pioneered an AI-based algorithm for
  high-precision microplastic counting in drinking water.
</p>

<p>
  For the bottle cap structure, we experimented with using a common agricultural
  waste, sugarcane bagasse. We combined cellulose microfibers and lignin
  extracted from sugarcane bagasse to create an alternative material for bottle
  caps, replacing traditional plastic materials. Surface treatment with sodium
  alginate and calcium lactate made the bottle caps waterproof and resistant to
  deformation. We manufactured the mentioned bottle cap structures using 3D
  printing technology and mold methods, reducing individual bottle cap
  production costs to only 0.2% of traditional machining methods.
</p>

<p>
  We hope our product will become an effective alternative to plastic bottle
  caps in the bottled water market, potentially reducing the production and
  usage of billions of plastic bottle caps each year and lowering consumer
  microplastic ingestion by 40%-60%.
</p>

<h2>Target 1: Production of Oat Protein</h2>

<ul>
  <li>Design</li>

  <li style="list-style-type:none;">
    <p>
      Oat protein is a globulin extracted from byproducts of processing oat
      β-glucans. In recent years, oat β-glucans have gained prominence due to
      their health benefits in reducing blood cholesterol and regulating blood
      sugar levels. Consequently, they have been incorporated into 76 different
      health-related components in food and cosmetics. Oat protein is favored
      for its low cost and environmental sustainability.
    </p>

    <p>
      The decision of taking oat protein as an additive is grounded in the
      research conducted by Wang and colleagues in 2021. Their study reported
      that oat protein sponges exhibited a removal efficiency of 75% to 82% for
      PS particles (a form of microplastic). Their model indicated that the
      binding sites for these microplastics on the sponges are likely
      hydrophobic interactions between protein side chains and the phenyl rings
      on PS. Considering that they primarily produced oat protein hydrogels
      through chemical cross-linking and subsequently created oat protein
      sponges through liquid nitrogen freezing and freeze-drying, a process that
      minimally affects the protein's side chain groups, we theorize that oat
      protein possesses the necessary characteristics for adsorbing
      microplastics. Therefore, we have chosen to incorporate it into our
      biomaterials.
    </p>
    <p>LMF</p>
  </li>

  <li>Build</li>

  <li style="list-style-type:none;">
    Using the method proposed by Wu et al. in 1977, oat flour, which had been
    defatted using n-hexane and sifted to remove bran, was subjected to multiple
    centrifugation cycles and freeze-dried to obtain oat protein powder (as
    elaborated in the notebook).
  </li>

  <li>Test</li>

  <li style="list-style-type:none;">
    We conducted SDS-PAGE experiments on the extracted proteins, with results
    shown in figure. The result revealed prominent bands at 22kDa, 32kDa, and
    55kDa, which is consistent with the research conducted by Shotwell et al. in
    1900. Their research identified that oat protein 12S comprises two subunits
    of 22kDa and 32kDa, which would be separated during electrophoresis. The
    presence of a band near 55kDa suggests the existence of 7S proteins, while
    other bands correspond to other proteins. Consequently, it can be inferred
    that the extracted oat protein exhibits a purity ranging from 60% to 70%,
    which is within the normal and slightly higher range.
  </li>

  <li>Learn</li>

  <li style="list-style-type: none;">
    Through this engineering cycle, a convenient method for oat protein
    extraction has been successfully proposed and validated using readily
    available materials. Additionally, the corresponding part (Bka____) have
    been created, allowing future teams to easily choose different methods for
    oat protein extraction as per their experimental requirements. Notably, oat
    protein has remained unexplored in previous iGEM teams. Owing to its
    pertinent attributes and straightforward extraction, oat protein holds great
    potential as a research focus for future teams in the fields of nutrition,
    agriculture, and related disciplines.
  </li>
</ul>

<h2>Target 2: Oat Protein as an Additive to the Base</h2>

<h3>Target 2.1 Maillard reaction</h3>

<ul>
  <li>Design</li>

  <li style="list-style-type:none;">
    To assess the impact of oat protein(OP) on the filtration efficiency and
    determine the optimal ratios, the following experimental groups were
    established. This section will focus on the first five groups.
  </li>
</ul>

<figure>
  <table style="margin: auto;">
    <thead>
      <tr>
        <th>Index</th>
        <th>Base</th>
        <th>Additive</th>
      </tr>
    </thead>
    <tbody>
      <tr><td> 1 </td><td> BC Only </td><td /></tr>
      <tr><td> 2 </td><td /><td> OP only </td></tr>
      <tr><td> 3 </td><td> BC </td><td> OP concentration 1 </td></tr><tr
        ><td> 4 </td><td> BC </td><td> OP concentration 2 </td></tr
      ><tr><td> 5 </td><td> BC </td><td> OP concentration 3 </td></tr><tr
        ><td> 6 </td><td> BC </td><td> CBM3-CBM3 </td></tr
      ><tr><td> 7 </td><td> BC </td><td> CBM3-OP-CBM3 </td></tr></tbody
    >
  </table>

  <figcaption>
    Table 1: Experimental groups for the Maillard reaction
  </figcaption>
</figure>

<p>
  The first and second groups serve as control groups. BC membranes were
  prepared by vacuum filtering BC suspensions in the first group. The second
  group, on the other hand, involved the production of a hydrogel using oat
  protein powder and then freeze-dried, creating a structure akin to the oat
  protein sponge mentioned prior in the work of Wang et al, 2021.
</p>

<p>
  The Maillard reaction occurs when proteins and carbohydrates are mixed at
  elevated temperatures (Kim & Lee, 2008). For instance, Lii, Chen, Lu, and
  Tomasik (2003) reported the formation of covalently bonded CMC-casein
  complexes via electrosynthesis. These complexes exhibit exceptional stability
  in response to changes in pH and ionic strength, alongside excellent
  emulsification properties and thermal stability. Hence, the approach taken
  here involves the incorporation of oat protein into BC through the Maillard
  reaction, using a simple blending process. Blending is an effective method for
  polymer modification, with strong economic incentives, as it imparts enhanced
  properties to polymers through conventional processing techniques. After
  pouring the blended solution onto stainless-steel plates coated with an
  anti-sticking agent, then drying at 50 degrees Celsius for 5 hours in a drying
  oven, the membrane can be readily separated from the stainless-steel plate.
</p>

<ul>
  <li>Build</li>
  <li style="list-style-type: none;">
    To determine the optimal dosage of oat protein, a ratio gradient was set
    while preparing the oat protein solution: 5 wt%, 10 wt%, and 15 wt%. The
    first five groups were prepared based on the experimental process detailed
    in the notebook.
  </li>

  <li>Test</li>
  <li style="list-style-type: none;">
    The experimental groups with varying concentrations of oat protein were
    tested for their microplastic filtration ability using the method described
    on our measurement page (link). A microplastic suspension for standardizing
    the filtration efficiency test was prepared by diluting PS microspheres with
    diameters of 100nm, 1μm, 5μm, and 10μm. Following measurements, it was
    determined that the optimal ratio for oat protein was 15wt%.
  </li>

  <li>Learn</li>

  <li style="list-style-type: none;">
    <p>
      [Technical Iteration]
      <br />
      Maillard Reaction Round 1
      <br />
      Problem 1: There’re visible cavities on the protein membrane surface, suspected
      to be a result of bubbles introduced during the stirring process, becoming
      apparent during pouring. This phenomenon undoubtedly compromises the filtration
      effectiveness of the membrane.
    </p>

    <p>
      Problem 2: The mechanical properties of the protein membrane are
      suboptimal. While it can withstand the pressure exerted by water flow, it
      is relatively fragile, posing challenges in industrial operational
      settings.
    </p>

    <p>
      Maillard Reaction Round 2
      <br />
      Problem 1 Resolved: Vacuum degassing was performed before pouring the solution
      onto stainless steel plates. In cases where this process proved inefficient,
      brief ultrasonication (10-20 minutes) was introduced. As a result, no longer
      were holes observed on the second batch of membranes due to bubble formation.
    </p>

    <p>
      Problem 2 Resolved: By incorporating some AR (analytical reagent) level
      glycerol into the membrane, substantial enhancements were achieved in the
      mechanical properties of the membrane, particularly in terms of increased
      tensile strength.
    </p>
  </li>
</ul>

<h3>Target 2.2 Cellulose Binding Module (CBM)</h3>

<ul>
  <li>Design</li>

  <li style="list-style-type:none;">
    <b>Wet Lab Design</b>

    <p>
      The cellulose-binding module (CBM) is a specific region on certain
      cellulase enzymes comprised of amino acids with aromatic residues
      (tyrosine or tryptophan). These residues establish firm bonds with
      cellulose chains through van der Waals interactions (Perez & Samain,
      2010). CBMs have found extensive and enduring application in the design
      and modification of protein-polysaccharide composites (Lapidot et al.,
      2012). In our experiment, we employed CBM3 from Ruminiclostridium
      thermocellum (Protein Data Bank (PDB) accession: 1NBC). This component was
      initially proposed by LinksChina 2021. Previously, the Imperial College
      2014 team used the cellulose-binding domain (partBkAxxx) individually as
      an additive to enhance the adsorption of heavy metal pollutants by
      bacterial cellulose membranes. Moreover, research by Mohammadi et al. in
      2019 indicated that CBM3-CBM3 dimers, when binding to cellulose, exhibited
      greater mechanical strength and pressure tolerance compared to CBM3
      monomers combined with cellulose. Therefore, CBM3-CBM3 was designed and
      expressed for testing CBM3's adsorption capabilities.
    </p>

    <p>
      Furthermore, due to the special structure of CBM3 - featuring regions with
      affinity for both cellulose and proteins, it can emulate the function of
      natural cellulose cross-linkers. This ability ensures them to secure
      various proteins onto cellulose to produce cellulose-CBM and fusion
      protein composites. The "triblock protein architecture" model proposed by
      Mohammadi et al., involving CBM, functional proteins, and bacterial
      cellulose, provides a pathway for manufacturing highly adjustable
      composite materials. In our project, we adapted this binding pattern,
      substituting spider silk proteins with oat proteins. This approach retains
      the adsorption sites on oat protein side chains while introducing the CBM3
      component, thereby maximizing the efficiency of microplastic adsorption.
    </p>

    <p>【质粒构建过程，2个】</p>

    <b><i>In Silico</i> Design</b>
  </li>

  <li>Build</li>

  <li>Test</li>

  <li style="list-style-type: none;">
    The experimental group that only contains CBM3-CBM3 and BC achieved a
    removal efficiency of 79.77% for the microplastic mixture. In the group
    containing OP (CBM3-OP-CBM3), the removal efficiency increased to 91.70%.
    This result aligns with the outcomes of computer simulations, suggesting
    that specific functional groups on the target protein's side chains, as well
    as its isoelectric characteristics, may facilitate electrostatic and
    hydrophobic interactions with microplastics, enhancing the adsorption of
    composites to microplastics. The increase in adsorption efficiency proves
    the effectiveness of our system.
  </li>

  <li>Learn</li>
</ul>

<h2>Target 3: APT as an Additive to the Base</h2>

<ul>
  <li>Design</li>

  <li style="list-style-type:none;">
    <p>
      Attapulgite (APT), a low-cost and abundant clay mineral, exhibits a
      porous, rod-shaped crystalline structure, a large surface area, and high
      cation adsorption capacity. It is frequently employed in anti-diarrheal
      medications (Haden et al., 1967). Research has demonstrated that BC-APT
      membranes (BAM) produced by combining APT with bacterial cellulose possess
      excellent microplastic adsorption capabilities (Zhang et al., 2023). The
      irregular, randomly distributed clusters formed by BC nanofibers
      crosslinked with APT bundles increase water flux, generating an abundant
      and uniform pore structure ideal for microplastic filtration (see figure).
      Furthermore, microplastics in water experience a repulsive effect with APT
      as they pass through the membrane due to their weak negative charge,
      preventing PS particles from entering the membrane pores. This allows the
      solvent in the filtrate to pass through, maintaining a high flux for BAM
      during water filtration.
    </p>

    <p>
      Therefore, we aimed to add APT as an additive to the base membrane for its
      superior effect. Since a relatively toxic crosslinking agent was used
      during the production process of BAM, 3-aminopropyl triethoxysilane, the
      actual application of APT as a necessary component is still under
      consideration. However, the wide-spread application of 3-aminopropyl
      triethoxysilane in tissue engineering and other areas that requires no
      toxicity and the toxicity test performed in both literature and our wet
      lab proves the little effect of APT under the BAM circumstance.
    </p>
  </li>

  <li>Build</li>

  <li style="list-style-type: none;">
    <p>
      BAM membranes were fabricated using the method described by Jiang et al.,
      2023. In essence, they were prepared through vacuum filtration of a
      mixture of BC and APT, followed by in-situ crosslinking.
    </p>

    <p>
      Firstly, a pre-treatment of APT was conducted. APT was placed in ultrapure
      water, stirred, and allowed to settle for 8 hours, resulting in the
      collection of fine particles in the intermediate layer. The obtained APT
      was then acidified in HCl, and the mixture was subjected to
      ultrasonication for 30 minutes to ensure the removal of any internal
      organic matter. Subsequently, the APT was ultrasonically washed in
      ultrapure water until the wash solution reached a neutral pH. Finally, it
      was dried and sieved.
    </p>

    <p>
      The BC-APT membrane was prepared by vacuum-assisted filtration of a BC/APT
      suspension onto a PVDF membrane. Typically, a specific quantity of APT
      powder and 3-aminopropyltriethoxysilane were added to the BC suspension,
      and the mixture was sonicated for 30 minutes. The suspension was then
      vacuum-filtered, and the resulting composite membrane was dried at ambient
      temperature with an APT weight ratio of 5% to the BC.
    </p>
  </li>

  <li>Test</li>

  <li style="list-style-type: none;">
    <b>Characterization</b>

    <p>
      Characterization of BAM was conducted using scanning electron microscopy
      (SEM). Fiber structures highly resembling those reported by Jiang et al.
      were observed, providing partial confirmation of the successful production
      of BAM.
    </p>

    <b>Toxicity Test</b>

    <p>
      Due to the addition of 3-aminopropyltriethoxysilane in the production of
      BAM, a commonly used chemical cross-linker in tissue engineering and
      materials science, it can immobilize functional molecules on various
      materials but carries some toxicity and environmental impact. In order to
      investigate the potential toxicity of MPs/NPs on water quality after
      filtration, acute toxicity tests were conducted using D. magna Straus as a
      model organism. D. magna Straus was cultured for 1 to 3 generations, and
      individuals aged between 6 hours and 24 hours were selected for the
      experiment, with 10 water fleas in each group. Filtrate from BAM
      filtration was used for the toxicity tests, and water was used as a
      control. Each group was exposed in triplicate, and the water fleas were
      maintained under starvation conditions during the experiment. Monitoring
      was carried out at 24 and 48 hours to determine the number of water fleas
      exhibiting activity inhibition (including mortality) as an indicator of
      the toxicity of the experimental solution.
    </p>

    <p>
      The data from the four experimental groups were analyzed, and the results
      are presented in the table and graph.
    </p>

    <p>(Table/Graph)</p>

    <p>
      A two-way ANOVA analysis was conducted on the data related to D. magna
      Straus activity inhibition. The analysis revealed a p-value of 0.896 for
      the interaction between D. magna Straus activity and BAM filtrate
      treatment. This p-value does not reach statistical significance at the
      alpha level of 0.05. Therefore, there is no statistically significant
      difference in the activity of D. magna Straus between the two groups,
      confirming that BAM filtrate is not toxic or exhibits minimal toxicity.
    </p>

    <b>Removal Efficiency</b>

    <p>
      The measured removal efficiency of BAM for the MP mixture was 96.17%,
      while Jiang et al. reported an efficiency of 99.81%. The discrepancy
      between these results may stem from slight human errors, or it could also
      be attributed to the use of a broader range of PS microspheres in our MP
      suspension (Jiang et al. employed 100nm, 0.5μm, and 1μm PS microspheres,
      whereas we used microspheres with diameters of 100nm, 1μm, 5μm, and 10μm).
      However, overall, the observed filtration effectiveness of BAM for
      microplastics is excellent. This suggests that APT, as the sole additive
      on the BC membrane, plays a primary role in enhancing filtration
      performance.
    </p>
  </li>

  <li>Learn</li>

  <li style="list-style-type: none;">
    <p>
      Toxicity Testing Round 1
      <br />
      Problem: D. magna Straus, when cultured under normal conditions, did not survive
      for unknown reasons.
      <br />
      Toxicity Testing Round 2
      <br />
      Problem Resolved: By introducing a culture medium for green microalgae and
      regularly changing the culture medium, there was a significant increase in
      the reproduction rate of D. magna Straus. From 3 newborn D. magna Straus individual
      per day for every 10 individual group, to up to 15 newborn D. magna Straus
      individual per day for every 10 individual group.
      <br />
      Toxicity Testing Round 3
      <br />
      Reflection: D. magna Straus, as a simple planktonic crustacean, have limited
      representativeness in toxicity tests. In the future, it will be necessary to
      conduct toxicity testing using human tissue cells or other models that better
      mimic real-life scenarios. The reason for not using these cells is the lack
      of suitable laboratory conditions and animal testing certification.
    </p>
  </li>
</ul>

<h2>Target 4: Production of the Support structure</h2>

<h3>
  4.1 Composition of the Support Structure-- Cellulose-Lignin Reinforced
  Composites
</h3>

<ol>
  <li>Design</li>

  <li style="list-style-type:none">
    <p>
      Inspired by the principle of cellulose and lignin reinforcement found in
      natural wood, we developed all-natural, biodegradable, strong, and
      water-stable cellulose-lignin reinforced composites by integrating lignin
      into micro-nanocellulose fibers as a replacement for plastic. Following
      the method described in [Reference], the cellulose-lignin composite
      consists of approximately 74 wt% cellulose fibers (a blend of cellulose
      microfibers and nanofibrillated cellulose (NFC) for cost-efficiency and
      mechanical performance balance) and approximately 26 wt% uniformly mixed
      lignin powder, forming a wet film. The lignin content closely resembles
      that of natural wood. The untreated fragments of natural wood still
      maintain the intrinsic bonding between lignin and cellulose, which is
      somewhat unfavorable for achieving high mechanical performance and water
      resistance. Therefore, the use of commercially available cellulose
      microfibers, nanofibers, and lignin components allows us to chemically
      process and rebuild the cellulose-lignin reinforced composite structure,
      thus achieving high mechanical performance and water stability in the
      resulting support structure.
    </p>

    <p>PIC</p>
    <p>
      To demonstrate the superior mechanical strength and water stability of
      cellulose-lignin reinforced composite materials, we further fabricated
      drinking straws from this wet film, followed by baking in an oven at
      150°C. Due to the abundant hydroxyl groups in cellulose molecular chains
      and lignin, hydrogen bonds are readily formed between cellulose fibers and
      lignin during the drying process. Consequently, the newly formed hydrogen
      bonds between cellulose fibers and lignin effectively adhere to the edges
      of the film without the need for additional additives. Baking at
      temperatures higher than the glass transition temperature of lignin allows
      molten lignin to penetrate the pores of cellulose fibers, forming a
      permeable and dense structure.
    </p>

    <p>
      Cellulose-lignin reinforced composite straws exhibit excellent properties,
      including:
    </p>

    <ol>
      <li>
        Outstanding mechanical performance due to crosslinking between cellulose
        and lignin.
      </li>
      <li>
        High water stability resulting from the hydrophobic nature of lignin.
      </li>
      <li>Cost-effectiveness.</li>
      <li>
        Biodegradability, offering potential as an environmentally friendly
        alternative to petroleum-derived plastic straws.
      </li>
    </ol>

    <p>
      Cellulose fibers have a high degree of hydrophilicity due to the presence
      of numerous active hydroxyl groups on their surfaces. As a result, water
      molecules penetrate the dense hydrogen bond network, causing it to expand
      and subsequently reducing mechanical strength, resulting in insufficient
      wet strength. To improve the user experience, we chose to introduce a thin
      layer of sodium alginate to the surface of the support structure, which
      was then converted into calcium alginate. As an edible natural
      polysaccharide polymer, sodium alginate can infiltrate the pores of the 3D
      nanoscale cellulose network. Both cellulose and alginates are
      polysaccharides with many hydroxyl groups on their surfaces, which implies
      that a considerable number of hydrogen bonds can be formed at the
      interface, resulting in a strong connection. The addition of alginates,
      along with the penetration of lignin, constitutes two steps that increase
      the adhesion at the support structure joints, thus avoiding the use of
      chemical adhesives commonly found in other biomaterials like paper straws.
    </p>

    <p>
      Compared to paper and plastic, cellulose-lignin reinforced composite
      materials can simultaneously achieve high water stability and
      biodegradability.
    </p>
  </li>

  <li>Build</li>

  <li style="list-style-type:none">
    <p>
      According to the designed methods and plans, two components were produced:
    </p>

    <!--  1. Composite material thin rectangular prisms used for performance testing.
2. Real bottle cap structures prepared using molds and baking. -->

    <ol>
      <li>
        Composite material thin rectangular prisms used for performance testing.
      </li>
      <li>Real bottle cap structures prepared using molds and baking.</li>
    </ol>

    <p>[PIC]</p>
  </li>

  <li>Test</li>

  <li style="list-style-type:none">
    <p>
      Due to a lack of the required equipment for mechanical performance
      testing, we were unable to conduct three-point bending tests or other
      mechanical tests on the support structures. However, literature mentions
      that the tensile strength of cellulose-lignin reinforced composite
      material (75.2 MPa) is 1.88 times higher than that of plastic straw
      materials (40.0 MPa), replacing the original plastic components with the
      support structures. Therefore, it is reasonable to assume that the
      increased waterproofing, due to the surface treatment, should result in
      superior performance compared to the literature.
    </p>
  </li>

  <li>Learn</li>

  <li style="list-style-type:none">
    Surface Treatment Round 1 Issue: During the first immersion test (without
    surface treatment, only baking), we observed noticeable darkening and slight
    expansion in the portions of contact with water. After an internal team
    discussion, it was unanimously agreed that this may reduce the user's
    experience and trust in the product. Surface Treatment Round 2 Issue
    Resolved: By conducting further literature research, we discovered a surface
    treatment technique originally used for producing BC-based straws. We
    applied this technique to our composite materials and achieved positive
    results. Surface Treatment Round 3 Reflection: Due to equipment and time
    constraints, detailed performance testing has not been conducted yet. This
    aspect will need to be addressed in the future.
  </li>
</ol>

<h3>The production of the Mold</h3>

<ul>
  <li>Design</li>

  <li style="list-style-type:none">
    The original plan was to use stainless steel molds for the most precise
    control of microplastic contamination. However, due to cost constraints
    (creating a stainless steel mold from scratch costs nearly 10,000 RMB or
    approximately 1,370 dollars), we decided to use 3D printed heat-resistant
    flexible nylon molds to produce the support structures. As shown in Figure
    _, the envisioned support structures were modeled using Blender and
    SolidWorks, and the initial drawings were used for test printing.
  </li>

  <li>Construction and Testing</li>

  <li style="list-style-type:none">
    <p>
      Initially, common 3D printing material PLA (in pink) was used to print
      plastic support structures to test the size compatibility between
      different components. After three rounds of test printing and adjustments,
      the dimensions at the bottle neck thread were modified to ensure a perfect
      fit with the threads commonly found on bottled water in the Chinese
      market, and to prevent water leakage when inverted, ensuring a good seal.
    </p>

    <p>
      Once the final dimensions for the support structures were confirmed,
      SolidWorks was used for the mold design. Elastic molds made of nylon were
      then printed to facilitate demolding of threaded structures.
    </p>
  </li>

  <li>Learning</li>

  <li style="list-style-type:none">
    <b>Mold Design Reflection:</b>

    <p>
      Given the constraints of time, cost, and technical capabilities, the mold
      design currently in use is relatively simple and rough. To explore the
      industrial application of Plasticlear, it will be essential to investigate
      methods for demolding molds with internal threads using stainless steel
      molds, which are rigid and lack elasticity.
    </p>
  </li>
</ul>

<h2>Summary</h2>

<p>
  Through the engineering cycles described above, we successfully produced all
  the components of Plasticlear, assembled them, and ultimately, the
  experimental results confirmed the feasibility of our theoretical design and
  the outstanding filtration performance of Plasticlear.
</p>

<p>
  It is evident that as a high school student team, there are still many areas
  in the industrial application phase that require improvement. However, for
  each part involved, we conducted a complete engineering cycle to test the
  component's usability and continuously enhance its overall performance.
</p>
