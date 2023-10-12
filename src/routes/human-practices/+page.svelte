<script>
  import VisCard from "$lib/components/VisCard.svelte";
  import { remote } from "$lib/header";
  import Block from "./Block.svelte";
  import Circles from "./Circles.svelte";
  import People from "./People.svelte";
  import SectionHeader from "./SectionHeader.svelte";
</script>

<h1>Human Practice</h1>

<p>
  Exploration-Adjustment-Development-Fixation Model: A Chronicle of Innovative
  Project Development.
</p>

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

<SectionHeader title="Exploration" subtitle="The Origin of Our Program" />

<p>
  In our literature review, we initially explored the significant rise in
  microplastics (MPs) based on an article published by The Guardian. This
  article briefly outlines the situations in which people are known to ingest
  these minuscule particles through food, water, and even inhalation[1].
  Additionally, recognizing the essential role of water in our lives, we focused
  our attention on freshwater environments, investigating the presence of MPs in
  rivers, surface water, reservoirs, and groundwater[2]. Notably, research in
  China has already been conducted to uncover the occurrence of MPs in
  freshwater sources[3].
</p>

<p>
  As a result, our team embarked on extensive research to address the issue of
  microplastics in freshwater. Our efforts led us to identify three potential
  avenues of action, which are summarized briefly as follows:
</p>

<ol>
  <li>
    Fundamentally reducing plastic production, similar to the efforts of
    previous teams like Team Exeter and Team Kyoto from
    <a href="https://2019.igem.org" target="_blank">https://2019.igem.org</a>,
    by developing alternative bio-environmental materials.
  </li>
  <li>
    Genetically engineering existing plastic recycling processes, akin to the
    approaches taken by previous teams such as Team TU_Kaiserslautern and Team
    Virginia from
    <a href="https://2019.igem.org" target="_blank">https://2019.igem.org</a>
    , by degrading microplastics.
  </li>
  <li>Directly reducing exposure through improved water filtration systems.</li>
</ol>

<h3>Narrowing Down the Problem</h3>

<p>
  Due to practical limitations (as a high school student team, we carefully
  considered our time and technology/equipment constraints) and the well-rounded
  precedents set by other teams, we decided to focus on the third option,
  briefly summarized as follows: <b
    >improving existing water filtration systems</b
  >.
</p>

<p>
  There are many types of water, and domestic wastewater is a critical source of
  microplastic pollution. The assessment shows that “every person (in the
  studied area) emits on average 1145 microplastics (25–1000 μm) daily through
  domestic wastewater, resulting in a yearly discharge of 418,000 microplastic
  particles per person”. [5]
</p>

<p>
  What is related to domestic wastewater is water treatment plants which play a
  pivotal role in the operation of cities and companies, so we initiated the
  roadmap for discovering wastewater filtration to better understand its
  function.
</p>

<h1>路线图</h1>

<p>
  Consequently, our initial goal was set: <b
    >starting from large-scale wastewater filtration plants, we aimed to learn
    their filtration mechanisms and apply this technology to various operations
    including other types of wastewater that end up in the ocean, air, and human
    body, and therefore effectively filter out microplastics from water sources.</b
  >
</p>

<figure>
  <div style="" class="two">
    <img src={remote("/human-practices/plant-1.jpg")} alt="plant-1" />
    <img src={remote("/human-practices/plant-2.jpg")} alt="plant-2" />
  </div>

  <figcaption>Figure X: Visiting Water Plnat</figcaption>
</figure>

<p>
  After setting our goal, we visited the Jingkai Water Plant in Beijing's
  Yizhuang District, China. Thorough explanations provided by Deputy Plant
  Manager Zhang, we gained insights into the filtration mechanisms of Secondary
  Treatment and Tertiary Treatment: <b>MBR</b> (Membrane Bio-Reactor)
</p>

<People avatar={remote("/human-practices/eng-1.jpg")}>
  <b>Zhang Shaoxuan</b>, current Deputy Plant Manager at Beijing Yizhuang
  Environmental Technology Group Co., Ltd. He possesses extensive experience in
  the operation of sewage treatment plants, is well-versed in conventional urban
  sewage treatment processes like SBR, A2O, and MBR, and has been involved in
  BOT projects for urban sewage treatment plants. He currently oversees the
  daily operation and management of the sewage treatment plant.
</People>

<p>
  <b>Zhang Deputy Plant Manager:</b> A/O+MBR membrane is the mainstream sewage treatment
  process at present, relatively stable, and the process is relatively mature. The
  MBR membrane operating mode is generally as follows: it runs for 8-12 minutes,
  pauses for 2 minutes - one cycle, and after running for 6-8 cycles, it undergoes
  a 3-minute backwash.
</p>

<p>
  <b>Us:</b>In your opinion, do you think there are any urgent issues regarding
  the use and filtration efficiency of this membrane?
</p>

<p>
  <b>Zhang Deputy Plant Manager:</b> The daily operation of MBR will result in membrane
  fouling, which includes the accumulation of pollutants such as EPS polysaccharides
  and proteins, leading to reduced filtration efficiency and higher costs. Therefore,
  physical flushing is needed about once a week, and chemical cleaning using chemicals
  such as sodium hypochlorite and oxalic acid is performed.
</p>

<h2>Discover the Problem</h2>

<p>
  In the filtration system, the role of membranes is always pivotal. Vice
  Director Zhang provided us with an excellent subject of study, prompting us to
  delve deeply into MBR research.
</p>

<p>
  Through extensive literature research, we discovered that the utilization of
  chemical agents in MBR treatment has significant environmental repercussions,
  such as membrane fouling, accelerated protein and bacteria adsorption, and
  pollution[6]. Nevertheless, the literature also hints at the potential of
  biological cleaning methods. Inspired by this, we devised Plan A, with the
  objective of employing genetic engineering techniques to develop enzymes
  capable of degrading pollutants. This innovation aims to enable a wider
  adoption of biological reactor technology in water treatment plants, thereby
  alleviating membrane fouling issues and enhancing the filtration of water
  sources. By promoting the broader utilization of such membranes, we can
  effectively address the problem of microplastics in water across various
  large-scale water treatment plants.
</p>

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

<SectionHeader
  title="Development"
  subtitle="Identify targeted audience’s needs"
/>

<p>
  After we have clarified the problem we want to solve, we need to fully develop
  it. During this stage of development, we wanted to confirm the needs by
  investigating the local area and formed a questionnaire to survey residents’
  drinking habits.
</p>

<p>
  To comprehensively and objectively reflect the current situation of the
  problem, the proportion of males and females is close to 1:1 in this study.
  Regarding that the drinking habits of people inside a single unit of household
  are consistent, we separated our survey subjects into individual and family.
  In this way, we could avoid inaccurate data generated by some repeated
  answers.
</p>

<figure>
  <div class="two">
    <img src={remote("/human-practices/chart-1.png")} alt="chart-1" />
    <img src={remote("/human-practices/chart-2.png")} alt="chart-2" />
  </div>
  <figcaption>Figure X: 213</figcaption>
</figure>

<p>
  The result shows that bulk water and bottled water together account for the
  largest proportion of all sources of drinking water. Both people who drink
  bottled water and people who drink bulk water make up 38.1% of the whole group
  respectively. Nearly half (40%) of the participants often drink bottled water
  and 27.5% of them choose to "drink bottled water every day”. In short,
  drinking water that contains microplastics has occurred frequently in every
  household.
</p>

<figure>
  <div class="two">
    <img
      src={remote("/human-practices/chart-3.png")}
      alt="chart-3"
      style="object-fit: contain;"
    />
    <img src={remote("/human-practices/chart-4.png")} alt="chart-4" />
  </div>
  <figcaption>Figure X: 213</figcaption>
</figure>

<p>
  Problems came along with it. Most of the barreled drinking water we buy has a
  large capacity, causing the habit of storing them to form among households.
  Regardless the time accumulated on the way of delivering bottled water to each
  household, the data shows that most households store their drinking water(in
  plastic containers) for a week or longer, and some even reach a month. There
  is no need to say that, this whole, long process of storage will enable an
  increasing amount of microplastics to remain in drinking water.
</p>

<img
  src={remote("/human-practices/chart-5.png")}
  alt="chart-5"
  style="width:100%"
/>

<p>
  To dive into the topic of microplastics, the data shows that people have
  already formed a preliminary understanding of microplastics 66.3% of
  participants have heard of this issue before. Among them, 47.5% of
  participants believe that plastic bottles have a high likelihood of containing
  microplastics, 56.5% of them mistakenly believe that microplastics come from
  food and water sources, and 28.2% of them focus on the bottle itself.
</p>

<figure>
  <div class="two">
    <img
      src={remote("/human-practices/chart-6.png")}
      alt="chart-6"
      style="object-fit: contain;"
    />
    <img
      src={remote("/human-practices/chart-7.png")}
      alt="chart-7"
      style="object-fit: contain;"
    />
    <img src={remote("/human-practices/chart-8.png")} alt="chart-8" />
  </div>
  <figcaption>Figure X: 213</figcaption>
</figure>

<p>
  The result of this survey clearly showed the necessity of our project. Our
  team believed that this study is reliable and effective enough to reflect that
  the <b
    >residues of microplastic in drinking water have begun to receive more and
    more attention and that under the threat of microplastics, daily drinking
    water is no longer reassuring.</b
  >
</p>

<h3>Theoretical verification</h3>

<p>
  After confirming the drinking habits of the public and the large demand for
  bottled water, we wanted to further confirm the phenomenon of microplastics in
  bottled water through theory.
</p>

<p>我们查文献证实---发现瓶装水确有微塑料——这里缺。</p>

<h3>Testing in real life</h3>

<p>
  More than just a theoretical confirmation, we need to test the existence of
  microplastics in reality.
</p>

<p>预实验-送检测试（verification） 这里缺。</p>

<h3>Design and produce</h3>

<p>
  After confirming that the problem indeed existed in bottled water, our wet lab
  began to design the filtering process used at the bottle mouth. (Our design
  theory was proven to be feasible after being confirmed by Professor A. The
  specific process can be viewed here lab链接】)
</p>

<SectionHeader title="Fixation" subtitle="" />

<p>
  Upon the theoretical design completion of our initial bottle cap version, we
  commenced soliciting feedback from various stakeholders in society. Our
  shareholders include: filtering engineer, a consumer representative, and a
  representative from the Bottled Water
  Company.(这三类人在拍版的时候最好有三个大块，每块中有介绍)
</p>

<ol>
  <li>
    The filtering engineer provided a feasibility analysis of our product's
    design, focusing on its technical aspects.
  </li>

  <li>
    The consumer representative offered suggestions regarding the user
    experience.
  </li>

  <li>
    Bottled Water Company representative elucidated potential challenges that
    might arise during actual production.
  </li>
</ol>

<p>
  By amalgamating the insights from these three categories of shareholders, we
  were able to comprehensively refine our product. This iterative process
  allowed us to explore new possibilities in the realm of mineral water
  filtration.
</p>

<h3>First Version</h3>

<p>
  The filtration system technicians from the water treatment plant provided us
  with valuable insights for our product design. After the first version came
  out, we chose to revisit Engineer Yin from the JingKai Water Treatment Plant,
  who had pointed out the limitations of our membrane pollution solution (Plan
  A). She welcomed our visit and, drawing upon her expertise in filtration
  systems, offered us several considerations. These factors, combined with her
  insights, contributed to a more comprehensive and practical design space for
  our product.：图：微信聊天记录，我给你
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
  <figcaption>Figure X: lorem</figcaption>
</figure>

<p><b>Engineer Yin:</b> Can intercepted microplastics be reused?</p>

<p>
  Further research is needed. Methods to separate microplastics from membranes
  are still being explored. At the same time, the recycling of separated
  microplastic particles needs further exploration.
</p>

<h3>Second Version</h3>

<img
  src={remote("/human-practices/chn-sugg.jpg")}
  alt="chn-sugg"
  style="margin-left: 5%; width: 90%;"
/>

<h4>Strength</h4>

<p>
  <b>Consumers:</b> When hit by sharp objects, the filter membrane may be damaged.
</p>

<p>On this issue, we have further optimized the project.</p>

<ol>
  <li>
    Stainless steel is added on both sides of the membrane as a support. Set the
    membrane behind the bottle mouth to absorb shock
  </li>

  <li>
    The material used to make the bottle cap is elastic. Through continuous
    testing and improving the mixed ratio, the bottle cap can act as a shock
    absorber.
  </li>

  <li>
    Due to time limits, we will improve the manufacturing process of the
    membrane to make it more durable in the future.
  </li>
</ol>

<img src={remote("/human-practices/mag.svg")} alt="mag" />

<p>
  Overall, these improvements make the product more reliable, better able to
  meet user needs and prolong the service life of the product. Increasing the
  strength and elasticity of the membrane will make it less likely to break
  easily.
</p>

<h4>Production/sustainable development</h4>

<p>
  <b>Consumers: </b>The filter bottle has a single form and may be difficult to
  adapt to various bottles on the market.
</p>

<p>
  While ensuring the application of biofiltration membrane technology, we
  conducted detailed research. According to our research, most bottled water
  caps on the market now adopt a threaded form, which is very common. Therefore,
  we can solve the problem of bottle size through simple size adjustments. This
  adjustment can be achieved very easily without any negative impact on the
  performance of the bottle. Through this improvement, we can ensure the
  application results of biofiltration membrane technology and make it more
  suitable for bottled water products on the market.
</p>

<h3>Third Version</h3>

<figure>
  <img src={remote("/human-practices/int-1.jpg")} style="max-width: 70%; " />
  <img src={remote("/human-practices/int-2.jpg")} style="max-width: 70%;" />
  <figcaption>Figure X: 123</figcaption>
</figure>

<p>
  Finally, to ensure the future successful implementation of our project, we
  wrote emails to major mineral water companies, elaborating on the operational
  principles of our product. We emphasized its integration within the existing
  production chains of mineral water and sought societal-level suggestions.
  (Email records and chat transcripts are available.) Ultimately, we received a
  response from the Wahaha Mineral Water Company in China. We successfully
  conducted a video conference with their representatives, including:
</p>

<ol>
  <li>
    Guo Taisong: Master, Zhejiang University; Hangzhou Wahaha Group Co. LTD;
    Leader of mold and packaging R&D team
  </li>

  <li>
    Yu Fang: Xi 'an University of Architecture and Technology, Master; Hangzhou
    Wahaha Group Co. LTD; Product design engineer;
  </li>

  <li>
    Xu Wen: Jiangnan University, Master; Hangzhou Wahaha Group Co. LTD;
    Packaging technology engineer;
  </li>
</ol>

<p>
  Their suggestions mainly include the following aspects, and we have made
  improvements and replies one by one: （这个文段要改, 高韩负责）
</p>

<h4>Durability</h4>

<p>
  <b>The Company:</b> Sterilization measures using ozone, sodium hypochlorite and
  other disinfectants may damage the structure
</p>

<p>
  <b>Us:</b> Theoretically, since surface treatment is used, sterilization measures
  will not affect the internal structure. However, we do not rule out the possibility
  that it may cause damage, and we will test and improve the samples after they are
  completed.
</p>

<p>
  <b>The Company:</b> In real life, the pressure of squeezing the bottle may cause
  the pore size of the membrane to increase.
</p>

<p>
  <b>Us:</b> No, because the support structure itself is fixed to a separate steel
  support structure, squeezing will not deform the membrane and will not change the
  aperture of the membrane.
</p>

<p>
  <b>The Company:</b> When sealing, the cap leaves an excess when it comes into contact
  with the mouth of the bottle, and this excess causes the membrane to wear out.
</p>

<p>
  <b>Us:</b> Similarly, because the membrane is fixed in a steel support structure,
  most of the time it does not rub directly against the cap structure, so the impact
  of wear is small.
</p>

<p>
  <b>The Company:</b> Cellulose contains hydrophilic groups, will it swell when exposed
  to water for a long time?
</p>

<p>
  <b>Us:</b> The process we use is from the straw production process, this process
  will make a surface treatment to the cellulose, separating the hydrophilic groups
  of cellulose and the outside, thus the support result will not absorb water.
</p>

<h4>Production</h4>

<p>
  <b>The company: </b>In the production line, the mechanical analysis of in the
  robotic arm screwing the bottle cap, as well as the strength analysis of
  cellulose.
</p>

<p>
  <b>Us: </b>For the convenience of the robotic arm and the user, we designed
  the periphery of the bottle cap with bumps, making it easier for humans and
  instruments to grip.
</p>

<h2>References</h2>

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
