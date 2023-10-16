<script>
  import { remote } from "$lib/header";

  import People from "../People.svelte";
  import SectionHeader from "../SectionHeader.svelte";
</script>

<SectionHeader title="Adjustment" subtitle="Shifting the Problem" />

<p>
  However, after we presented our well-designed Plan A to the water treatment
  plant and received feedback from Yin Wenyue, the filtration system engineer,
  we learned that akin to other traditional methods involving "enzyme
  degradation of pollutants," Plan A encountered intricate challenges. These
  challenges encompassed enzyme deactivation, cost implications, degradation
  rates, secondary pollution concerns, and practical difficulties when
  implemented on an industrial scale. Despite being theoretically viable and
  having undergone limited research trials, the industrial application of Plan A
  continues to pose significant challenges.
</p>

<People avatar={remote("/human-practices/eng-2.png")}>
  <b>Yin Wenyue</b>, a filtering technician responsible for sludge
  transportation and the use of additives.
</People>

<p>
  Engineer Yin's feedback was sobering. The treatment technology for freshwater
  is already highly mature, and our team lacks the capability to address its
  persistent membrane fouling issues. However, we are still determined to tackle
  the microplastic problem. We realized that the role of filtration systems
  extends beyond filtering water resources at the source; it can also be applied
  at the terminal where interaction with humans occurs.
</p>

<p>
  Therefore, our wet lab immediately initiated research into the terminal
  aspects of the water resource cycle, specifically the ingestion of
  microplastics by humans. A global survey on drinking water quality revealed
  that approximately 325 microplastic particles, ranging in size from 6.5
  micrometers to 100 micrometers, were found per liter in various brands of
  bottled water (Mason et al., 2018). These microplastics predominantly leached
  into the water during the transportation process from the PET plastic bottles
  and HDPE bottle caps of the bottled water. <b
    >[For more details, please refer to the wet lab introduction page].</b
  >
</p>

<p>
  Consequently, we made the decision to shift our overarching objective from
  <b>"addressing all microplastic exposures in freshwater"</b> to
  <b>"addressing microplastic exposure from drinking water,"</b> with a primary
  focus on ensuring the provision of clean drinking water. Drawing upon our
  previous experiences working with the JingKai water treatment plant, we
  introduced Plan B, which, we opted to design a bottle cap equipped with
  filtration capabilities.
  <b
    >This cap would serve as the final line of defense, preventing human
    consumption of microplastics.</b
  >
  Unlike the filtering system we knew from JingKai water plant, we hope this bottle
  cap can be environmentally friendly, and also specialize in addressing microplastic
  ingestion from everyday plastic-packaged drinking water. Moreover, we wish this
  little cup can be applied to other containers and drinking devices (such as coffee
  or beverage cups), showing more flexibility than the filtering system in the water
  treatment plant.
</p>
