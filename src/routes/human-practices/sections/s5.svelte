<script>
  import { remote } from "$lib/header";
  import People from "../People.svelte";
</script>

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
