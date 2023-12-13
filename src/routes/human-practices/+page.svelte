<script>
  import Block from "./Block.svelte";
  import { remote } from "$lib/header";
</script>

<h2>Introduction</h2>

<p>
  The Exploration-Adjustment-Development-Fixation model, coined by our team,
  serves as a chronicle documenting the entirety of our team's research and
  development process, commonly referred to as a "project chronicle." This model
  adeptly illustrates how our team meticulously navigates the path towards our
  objectives, emphasizing the imperative of thorough groundwork in addressing
  societal issues and needs. The essence lies in enabling the team to engage in
  extensive preliminary work, ensuring that societal issues and demands
  supersede abstract technological concepts. Each phase of investment
  necessitates inspiration and feedback from society, fostering a close
  alignment between the project and the real world, ultimately benefiting
  humanity.
</p>

<Block
  icon="fluent:compass-northwest-20-filled"
  name="Exploration"
  color="linear-gradient(45deg, #0ea5e9, #6366f1)"
>
  In this phase, our team invests significant effort into problem
  identification, problem analysis, and problem confirmation. The objective is
  to authentically resolve tangible societal issues, steering clear of
  impractical or ornate problems. While exploring unfamiliar domains, we
  integrate theory and practice. Grounded in extensive literature review, we
  actively engage with the community, gaining insights into the real-world
  context of the research subject and a more concrete understanding of the
  problem itself.
</Block>

<Block
  icon="fluent:ruler-28-filled"
  name="Adjustment"
  color="linear-gradient(45deg,  #14b8a6, #10b981)"
>
  Beyond exploring the issue, selecting the right approach for problem
  resolution is paramount. Our team actively interacts with society, avoiding
  wasteful allocation of resources on an impractical "unsolvable"
  problem-solving path. Instead, we identify genuine breakthrough points by
  aligning our capabilities with real-world circumstances, ensuring more
  efficient issue resolution.
</Block>

<Block
  icon="fluent:code-circle-20-filled"
  name="Development"
  color="linear-gradient(45deg,  #374151, #64748B)"
>
  A robust project necessitates comprehensive development. Following the
  identification of problems and solutions, we undergo a process of "confirming
  societal needs, theoretically validating needs, and testing needs in reality."
  This process enables us to precisely meet the demands, allowing us to design
  products that are not only effective but also satisfying to the stakeholders.
</Block>

<Block
  icon="fluent:arrow-trending-lines-24-filled"
  name="Fixation"
  color="linear-gradient(45deg,  #ea580c, #d97706)"
>
  In the final stage, the product undergoes continuous refinement based on
  shareholder feedback. The goal is to seamlessly integrate our product into
  existing production lines, opening the door for future production. We aspire
  for our project to serve not merely as an academic or technological showcase
  but as a significant contribution to the world. Our objective is to empower
  shareholders standing alongside us, enabling them to perceive the
  possibilities. This, in turn, facilitates targeted reforms addressing existing
  issues in the field, ultimately contributing to a better world.
</Block>

<h2>Overview our Integrated Human Practice through Self-designing Model</h2>

<p>
  The research model we use is "Exploration-adjustment-development-fixation". At
  the beginning of the project, we <b>explored</b> eagerly after confirming the general
  direction of "filtering microplastics in water". In this stage, we combine theoretical
  research and field investigation to gradually understand the branches in the field
  of "filtration", so as to narrow down the problem and finally lock in the improvement
  of membrane, targeting the water source in large scale.
</p>

<p>
  However, by interviewing with professionals at the societal level, we found
  out limits of our focus, which made us to <b>adjust</b> the application scenario
  of the membrane process from the water source to the drinking water, so as to more
  directly address human microplastic exposure.
</p>

<p>
  After that, we fully <b>developed</b> the new direction by conducting social surveys
  of people’s drinking habit, literature reviews, and academic discussions with professors,
  which set the stage to present the first version of our product.
</p>

<p>
  After the first version coming up, we actively <b>fixed</b> the product for two
  round by conducting the social surveys and interviews with customer groups and
  industrial production groups respectively, integrated their suggestions, and finally
  completed the tew rounds of fixation.
</p>

<img src={remote("/human-practices/mindmap.svg")} alt="mindmap" />
