<script>
  import { remote } from "$lib/header";
</script>

<h2>Overview</h2>

<img src={remote("/measurements/overview.jpg")} alt="" />

<h2>Application of Computer Vision</h2>

<p>
  To further improve the efficiency of detecting microplastic particles, we used
  computer vision and artificial intelligence to detect microplastic particles
  in images.
</p>
<img src={remote("/measurements/gray.jpg")} alt="" />

<p>
  Computer vision methods were first used to generate the corresponding labeling
  information. For image noise, we used mean shift filtering with Gaussian blur
  mitigation. The noise removed image is grayscaled and adaptively binarized.
  The results are shown below.
</p>

<p>
  The final binarized image undergoes contours detection and size filtering to
  get the annotation.
</p>

<img src={remote("/measurements/contours.jpg")} alt="" />

<h2>Pre-Experiment - Microplastic Validation in Bottled Water</h2>

<p>
  Numerous studies have reported the presence of microplastics in bottled water.
  According to reports by Mason et al. and others, PET (polyethylene
  terephthalate) is the most abundant type of microplastic particles in bottled
  water, constituting % of all detected microplastics, followed by %, as
  confirmed by many other articles. However, due to regional variations, it is
  essential to verify whether these conclusions about the types of microplastics
  align with our local circumstances before proceeding with relevant
  engineering.
</p>

<p>
  Therefore, we chose to conduct microplastic testing on commonly available
  bottled water locally and compared it with commonly researched bottled water
  types. We utilized the micro-Raman spectroscopy method as employed by
  Schymanski et al. in their study (Schymanski et al. 2017).
</p>

<p>
  We used the same gold foil PVDF membrane for vacuum filtration on various
  water samples, with a filtration volume of 100 ml and an effective filtration
  area of 3.1 square centimeters. The selected water samples included locally
  prevalent bottled water brands and some brands commonly found in research.
  These brands consisted of Aquafina 500 ml bottled water, Nongfu Spring 250 ml
  bottled water, Yi Bao, Baishi Shan, Nestle Pure Life, Kang Shifu iced tea, and
  Coca-Cola.
</p>

<figure>
  <img src={remote("/measurements/cola.jpg")} style="max-width: 40rem;" />
</figure>

<p>
  After concentrating microplastics from the water samples onto the filter
  membrane through vacuum filtration, we marked the membrane's surface.
  Subsequently, we sent it for inspection and qualitative analysis using Raman
  spectroscopy. Upon completing the analysis, we compared the data to the Raman
  spectra in the openanalysis, an open-source microplastics database platform
  (Cowger et al. 2021). The comparison was performed using Baseline correction,
  as well as Smoothing/Derivative with the specified Preprocessing settings.
</p>

<p>
  The results of this data comparison aligned with previous literature findings.
  We confirmed that PET (polyethylene terephthalate) was the predominant
  microplastic particle detected, constituting 70% of our total samples. Based
  on peak comparisons, we also identified the presence of PC (polycarbonate)
  besides PET.
</p>

<figure>
  <img
    src="https://lms.d.zhan.com/zhanlms/addon_homework/2023/10/8300519652cde4a66366/image2.png"
    style="max-width: 90%;"
  />

  <figcaption>
    The white portion in the spectrum represents the sample's spectroscopic
    detection result, and the red line corresponds to the spectrum of PET
    particles detected using Raman spectroscopy.
  </figcaption>
</figure>

<p>
  After synthesizing the BAM membrane, we needed to conduct BAM membrane
  effectiveness testing on water samples containing microplastics. The
  preparation of the microplastics water sample was performed using the
  following steps:
</p>

<p>Materials used:</p>
<ul>
  <li>PS microplastics 0.1mm microspheres (purchased from Yuan Biotech.)</li>
</ul>

<p>
  1.1g of plastic microspheres was extracted using an iron spatula. The plastic
  microspheres were ground for 1 minute using a 6cm ceramic mortar and pestle.
  The submerged plastic powder was stirred with 1000ml of ultrapure water using
  a glass rod for one minute.
</p>

<p>
  Both the pre-test and post-test samples were enriched and sent for inspection
  using the same procedures as the water sample analysis described earlier. The
  results of the Raman spectroscopy testing on the pre-filtered samples were
  similar to the previously presented results, with peak heights resembling the
  PS spectra in the database. This confirmed that the water samples prepared
  were essentially free from external microplastic contamination. The results of
  microplastic content detection showed a 97% reduction in microplastic content.
</p>
