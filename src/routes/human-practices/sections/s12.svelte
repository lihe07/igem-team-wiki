<script>
  import { remote } from "$lib/header";
  import Circles from "../Circles.svelte";
</script>

<h3>First Version</h3>

<p>
  The filtration system technicians from the water treatment plant provided us
  with valuable insights for our product design. After the first version came
  out, we chose to revisit Engineer Yin from the JingKai Water Treatment Plant,
  who had pointed out the limitations of our membrane pollution solution (Plan
  A). She welcomed our visit and, drawing upon her expertise in filtration
  systems, offered us several considerations. These factors, combined with her
  insights, contributed to a more comprehensive and practical design space for
  our product.
</p>

<figure>
  <!-- <img src={remote("/human-practices/chat")} -->
</figure>

<h4>Recycling</h4>

<p><b>Engineer Yin:</b> Is the membrane renewable?</p>

<p>
  After hearing this, we made a few improvements to ensure our biofilms are as
  safe and environmentally friendly as possible. First, we decided to remove
  harmful cross-linking agents used in making BAM to ensure that the biofilm
  produced fully complies with bio-environmental standards and can be composted.
  In addition, we would like to highlight our main raw materials, including
  bacterial cellulose, bagasse/coffee grounds, attapulgite (APT), lignin, and
  tea polyphenols. These raw materials are natural materials and fully meet the
  requirements of biological and environmental protection.
</p>

<Circles />

<p>
  <b>Engineer Yin:</b> How to make sure the water permeability of the composite cellulose
  membrane？
</p>

<p>
  Based on the common sense of life and the results of real-life experiments, we
  can draw the following conclusion: The special structure type of bottle cap
  will cause people to slightly squeeze the bottle body when drinking water,
  thereby increasing the rate of water passing through the membrane. Therefore,
  even if there is a slight resistance due to the membrane pore size, it will
  not lead to a big change in the use experience.
</p>

<figure>
  <img
    src={remote("/human-practices/drink.png")}
    alt="drink"
    style="padding: 2rem; width: 80%;"
  />
</figure>

<p><b>Engineer Yin:</b> Can intercepted microplastics be reused?</p>

<p>
  Further research is needed. Methods to separate microplastics from membranes
  are still being explored. At the same time, the recycling of separated
  microplastic particles needs further exploration.
</p>
