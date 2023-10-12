<h1>Engineering</h1>

<h2>Overview</h2>

<p>
  The issue of microplastic pollution in human life is growing increasingly
  severe. One of the primary sources of this pollution is plastic packaging for
  bottled water or beverages. BAID - China aims to create a biodegradable
  filtration membrane capable of efficiently removing microplastics. This
  innovative membrane is designed to be applied at a specially designed bottle
  cap, resulting in the production of a miniature microplastic filtration device
  known as "Plasticlear."
</p>

<p>
  In the development of the biodegradable filtration membrane, we employ
  bacterial cellulose as the cellulose matrix. To enhance adsorption
  performance, we conducted tests to assess the impact of various additives on
  the filtration efficiency of the biodegradable membrane. Initially, we
  introduced genetically engineered oat proteins into the cellulose matrix. To
  strengthen the binding between the two components, we employed synthetic
  biology methods to design, build, and ultimately synthesize a specific
  component. Subsequently, we designed and selected the addition of tannic acid
  and tea polyphenol to increase the microplastic adsorption sites on the
  cellulose base membrane. Characterization testing for each experimental group
  was conducted using Raman spectroscopy and deep learning-based AI counting
  techniques.
</p>

<p>
  For the supporting structure (a bottle cap made by cellulose composites), we
  experimented with the utilization of a common agricultural waste product -
  sugarcane bagasse. A mixture of extracted cellulose microfibers and lignin was
  used to create a cellulose structure that could serve as an eco-friendly
  alternative to plastic bottle caps. This structure was further surface-treated
  with citric acid and sodium alginate to make it waterproof and resistant to
  deformation. The production of the support structure involved the use of
  specially customized molds. Due to the high cost of stainless-steel molds, we
  opted for 3D printing using nylon material.
</p>

<p>
  We anticipate that our product will become an effective alternative to plastic
  bottle caps in the future bottled water market. Not only will it substantially
  reduce plastic production, but it will also be ecologically sustainable.
</p>

<h3>Target 1: Production of Oat Protein</h3>

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

<h3>Target 2: Oat Protein as an Additive to the Base</h3>

<h4>Target 2.1 Maillard reaction</h4>

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

<h4>Target 2.2 Cellulose Binding Module (CBM)</h4>

<ul>
  <li>Design</li>

  <li style="list-style-type:none;">
    - Wet Lab Design

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
  </li>

  <li>
    - <i>In Silico</i> Design
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

<h3>Target 2: APT as an Additive to the Base</h3>

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

    <p />
  </li>
</ul>
