<script>
  import { remote } from "$lib/header";
  import StickyImage from "$lib/components/StickyImage.svelte";
</script>

<h2>Introduction</h2>

<p>
  This project aims to address the issue of human ingestion of microplastics by
  designing a special bottle cap with filtration capabilities for bottled water.
</p>

<p>
  Microplastics (MPs) are plastic fragments and particles with a diameter of
  less than 5 millimeters, released during the use of plastic products (National
  Oceanic and Atmospheric Administration [NOAA], 2009). A global survey on
  drinking water quality revealed that approximately 325 microplastic particles
  ranging from 6.5 μm to 100 μm in size were found per liter in bottled water of
  various brands (Mason et al., 2018). These microplastics primarily leach into
  the water during the transportation process from the PET plastic bottles and
  HDPE bottle caps.
</p>

<figure>
  <div class="two">
    <img src={remote("/description/sem.jpg")} alt="" />
    <video
      src={remote("/description/bottle.js")}
      style="height: 30rem;"
      autoplay
      loop
      muted
    />
  </div>
  <figcaption>
    Figure 1 (left): SEM characterization of MPs (Pivokonsky et al, 2018)
    <br />
    Figure 2 (right): Microplastic contamination in bottled water
  </figcaption>
</figure>

<p>
  {`The consumption of bottled water has become common in life. As a result, we passively ingest a certain amount of microplastics, and the part that cannot be excreted by the human body accumulates over time and breaks down into smaller nanoparticles (<100 nm). This accumulation poses health risks. Increasing research has found plastic fragments in human fluids and tissues, such as blood and placenta. MPs can j-penetrate "impermeable" barriers like the intestinal mucosal barrier and the blood-brain barrier (Cox et al., 2019). Recent research conducted by multiple universities, including the Vienna Medical University, demonstrated that specific nanometer-sized green fluorescence signals appeared in mouse brain tissue just 2 hours after gastric administration, indicating that 0.293 µm PS particles can be absorbed by the gastrointestinal tract and penetrate the blood-brain barrier (Kopatz et al., 2023). This raises concerns about increased inflammation, neurological disorders, and neurodegenerative diseases.`}
</p>

<figure>
  <div class="two">
    <img
      src={remote("/description/fig3.png")}
      alt=""
      style="height: 25rem; max-width: 40rem; object-fit: contain;"
    />
    <img src={remote("/description/fig4.png")} style="height: 25rem;" alt="" />
  </div>
  <figcaption>
    Figure 3 (left): Distribution of MPs in human body tissue (Yang et al, 2023)

    <br />
    Figure 4: MPs penetration of the blood-brain barrier in mice (blue fluorescently
    labeled)
  </figcaption>
</figure>

<p>
  Therefore, our team is attempting to design a novel bio-composite material to
  mitigate the health risks associated with ingesting microplastics. The product
  we are designing is a special bottle cap with both filtration and microplastic
  adsorption capabilities. Its simple structure involves attaching
  bio-engineered membrane to a rigid support structure made of organic polymers.
</p>

<figure>
  <div class="two">
    <img
      src={remote("/description/cap.png")}
      alt=""
      style="object-fit: contain; max-height: 20rem;"
    />
    <img src={remote("/mag.svg")} alt="" style="max-height: 20rem;" />
  </div>
  <figcaption>Figure 5: Structure of “Plasticlear”</figcaption>
</figure>

<p>
  We apply both filtration and adsorption mechanisms to maximize the reduction
  of microplastic content in bottled water. Ideally, the drinking water obtained
  through this bottle cap will contain virtually no microplastics, providing a
  cleaner source of drinking water and reducing passive microplastic ingestion.
</p>

<figure>
  <img src={remote("/description/2.png")} alt="removal-mechanism" />
  <figcaption>Figure 6: Removal mechanism of MPs in Plasticlear</figcaption>
</figure>

<p>
  In the realm of biological materials, we have chosen Bacterial Cellulose (BC)
  as the substrate, produced by cultivating bacterial cellulose membranes (BCM)
  using Acetobacter xylinum. BC is a renewable material known for its
  non-toxicity and low environmental impact, making it widely applicable in
  various industrial contexts (de Oliveira Barud et al., 2016). Moreover,
  BC-based membranes exhibit high mechanical flexibility, chemical modification
  potential, and biocompatibility, making them ideal for water treatment (Wang
  et al., 2019).
</p>

<StickyImage
  contain
  images={[
    remote("/description/1.png"),
    remote("/description/apt.jpg"),
    remote("/description/bam.jpg"),
    remote("/description/oat.jpg"),
    remote("/description/tannic.jpg"),
    remote("/description/final.png"),
  ]}
  descriptions={[
    `<p>
However, BC has limited adsorption active sites, resulting in lower overall adsorption capacity for microplastics (Zhang et al., 2023). 
</p>
<p>
Therefore, we plan to modify BCM in two steps: first, by incorporating attapulgite (APT) to create BC-APT membranes (BAM), and second, by using a Cellulose Binding Module (CBM) to enhance the pore effects and other interactions, such as hydrophobic and electrostatic interactions, between BAM and microplastics.
</p>`,
    `
<p>
Attapulgite (APT) is a low-cost and abundant clay mineral known for its porous, rod-shaped crystal structure, high specific surface area, and strong cation adsorption capacity. It is often used in anti-diarrheal medications (Haden et al., 1967). Studies have demonstrated that APT combined with BC can produce BAM with excellent microplastic adsorption capabilities (Zhang et al., 2023). 
</p>
<p>
The irregular and randomly distributed clusters formed by BC nanofibers and APT bundles in BAM increase water flux, creating abundant and uniform pore structures that are highly favorable for microplastic filtration (Figure 1). Furthermore, microplastics in water are repelled from the membrane due to their weak negative charge, preventing PS particles from entering the membrane pores while allowing solvent to pass through, maintaining high flux through BAM. 
</p>
<p>
Results show that BAM achieves a removal efficiency of 99.81% for microplastics with a diameter of 1 micrometer. However, further research is needed to assess BAM's effectiveness in removing microplastics with diameters ranging from 100 nanometers to 30 micrometers, which are prevalent in drinking water.
</p>
`,
    `
<p>
In order to maximize the microplastic removal efficiency of our filtration membrane, we have chosen to use a Cellulose Binding Module (CBM). Inspired by the "triple-helix" binding mode proposed in previous research, we plan to cross-link BCM with oat proteins using CBM. 
</p>
<p>
Cellulose Binding Modules are specific regions on cellulase enzymes composed of amino acids with aromatic residues (tryptophan or tyrosine), which bind strongly to cellulose chains through van der Waals interactions (Perez & Samain, 2010). CBM has been extensively used in creating protein-polysaccharide composite materials and modifications (Lapidot et al., 2012).
</p>
<p>
It functions by mimicking the role of natural cellulose cross-linkers, anchoring different proteins onto cellulose and producing cellulose-CBM and fused protein composite materials. Mohammadi et al. (2019) proposed a "triple-helix" combination of CBM, functional proteins, and bacterial cellulose, offering a pathway to manufacture highly tunable composite materials. By combining spider silk protein and cellulose, they obtained a novel material with high strength and toughness. Therefore, our project references this binding model but replaces the functional protein with oat proteins to achieve the desired properties.
</p>`,
    `
<p>
Oat proteins are globular proteins extracted from by-products of oat β-glucan processing. Due to the recent health benefits of oat β-glucan, such as cholesterol reduction and blood sugar regulation, oat proteins are added as 76 health ingredients in food and cosmetics, making them cost-effective and environmentally friendly. In a 2021 study by Wang et al., oat protein sponges were chemically cross-linked and tested for their removal efficiency of PS particles (a type of microplastic), achieving removal efficiencies ranging from 75% to 82% (Wang et al., 2021). Their model suggests that microplastic binding sites on these oat protein sponges are likely hydrophobic groups on protein side chains, capable of hydrophobic interactions with the phenyl rings on PS particles. Considering their minimal impact on protein side chains during the production of oat protein hydrogels, which is mainly achieved through chemical cross-linking and liquid nitrogen freezing followed by lyophilization, we believe that oat proteins possess the desired characteristics for microplastic adsorption and have chosen to incorporate them into our biological material.
</p>
`,
    `
<p>
  In addition to the standard components of our filter membrane, we also
  experimented with a variety of eco-friendly additives to enhance its
  performance and sustainability. Our goal was to improve the removal capacity
  of the membrane while maintaining its cost-effectiveness. We tried
  incorporating different natural materials, such as cellulose, coffee grounds,
  and bagasse, into the membrane matrix. These additives were chosen for their
  known ability to enhance filtration properties and their environmentally
  friendly nature.
</p>
`,
    `

<p>
After modifying the bacterial cellulose membrane in the aforementioned two steps, we have obtained the biological filtration membrane portion of our designed bottle cap. Regarding the rigid support portion, given the uniqueness of our project design, we have opted to obtain samples of the support structure through 3D printing. By using all-cellulose ink, we are able to create lightweight, super-strong, highly elastic, and highly resilient all-cellulose support structures (Jiang et al., 2021).
</p>

<p>
In conclusion, by combining the biological material and the rigid support portion, we can successfully produce the envisioned microplastic filtration bottle cap.
</p>`,
  ]}
/>

<h2>References</h2>

<p>
  Arthur, C., Baker, J. E., &amp; Bamford, H. A. (2009). Proceedings of the
  International Research Workshop on the Occurrence, Effects, and Fate of
  Microplastic Marine Debris, September 9-11, 2008, University of Washington
  Tacoma, Tacoma, WA, USA.
</p>
<p>
  Cox, K. D., Covernton, G. A., Davies, H. L., Dower, J. F., Juanes, F., &amp;
  Dudas, S. E. (2019). Human Consumption of Microplastics. Environmental Science
  &amp; Technology, 53(12), 7068-7074. <a
    href="https://doi.org/10.1021/acs.est.9b01517"
    target="_blank"
    class="url">https://doi.org/10.1021/acs.est.9b01517</a
  >
</p>
<p>
  de Oliveira Barud, H. G., da Silva, R. R., da Silva Barud, H., Tercjak, A.,
  Gutierrez, J., Lustri, W. R., de Oliveira Junior, O. B., &amp; Ribeiro, S. J.
  (2016). A multipurpose natural and renewable polymer in medical applications:
  Bacterial cellulose. Carbohydrate Polymers, 153, 406-420.
</p>
<p>
  Haden, W. L., &amp; Schwint, I. A. (1967). Attapulgite: its properties and
  applications. Industrial &amp; Engineering Chemistry, 59(9), 58-69.
</p>
<p>
  Jiang, J., Oguzlu, H., &amp; Jiang, F. (2021). 3D printing of lightweight,
  super-strong yet flexible all-cellulose structure. Chemical Engineering
  Journal, 405, 126668. <a
    href="https://doi.org/https:/doi.org/10.1016/j.cej.2020.126668"
    >https://doi.org/https://doi.org/10.1016/j.cej.2020.126668</a
  >
</p>
<p>
  Jiang, Z., Wang, X., Zhao, H., Yang, Z., Zhou, J., Sun, X., Yang, H., Wang,
  C., &amp; Huan, S. (2023). Micro/nano-plastic removal from wastewater using
  cellulose membrane: Performance and life cycle assessment. Separation and
  Purification Technology, 317, 123925. <a
    href="https://doi.org/https:/doi.org/10.1016/j.seppur.2023.123925"
    >https://doi.org/https://doi.org/10.1016/j.seppur.2023.123925</a
  >
</p>
<p>
  Yang, H., Liu, Z., Yin, C., Han, Z., Guan, Q., Zhao, Y., Ling, Z., Liu, H.,
  Yang, K., Sun, W., &amp; Yu, S. (2021). Edible, Ultrastrong, and
  Microplastic‐Free Bacterial Cellulose‐Based Straws by Biosynthesis. Advanced
  Functional Materials, 32(15), 2111713. <a
    href="https://doi.org/10.1002/adfm.202111713"
    target="_blank"
    class="url">https://doi.org/10.1002/adfm.202111713</a
  >
</p>
<p>
  Kopatz, V., Wen, K., Kovács, T., Keimowitz, A. S., Pichler, V., Widder, J.,
  Vethaak, A. D., Hollóczki, O., &amp; Kenner, L. (2023). Micro-and Nanoplastics
  Breach the Blood–Brain Barrier (BBB): Biomolecular Corona’s Role Revealed.
  Nanomaterials, 13(8), 1404.
</p>
<p>
  Lapidot, S., Meirovitch, S., Sharon, S., Heyman, A., Kaplan, D. L., &amp;
  Shoseyov, O. (2012). Clues for biomimetics from natural composite materials.
  Nanomedicine, 7(9), 1409-1423.
</p>

<style>
  .two {
    display: flex;
    gap: 2rem;
  }

  .two img {
    flex: 1;
    width: 45%;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    .two {
      flex-direction: column;
      align-items: center;
    }

    .two img {
      width: 95%;
    }
  }
</style>
