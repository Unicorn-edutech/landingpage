import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="What Makes Us Unique?"
    description="Tailored solutions for small Investment management & research firms \n
    Expectational value to your investment compared to one size fit all AI software \n
    Fully-managed solutions from infrastructure to technical expertise to maintenance \n
    Human-centered design \n
    Pilot, Prove & Scale approach"
  >
    <VerticalFeatureRow
      title="Uncover hidden insights"
      description="Contextual Synonyms Search 
      Not just keyword, understand the hidden narratives and subtle cues that many miss & gain a competitive edge
      "
      image="/assets/images/hiddeninsights.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Keep a track of portfolio"
      description="AI Smart Summaries
      Observe & monitor the critical information through summarized earning calls, events & news 
      "
      image="/assets/images/monitorportfolio.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Read the pulse of the leaders"
      description="Statement analyzer
      Identify positive,negative & uncertain statements from documents & speech "
      image="/assets/images/readthepulse.png"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Identify Undervalued companies"
      description="Precompiled insights
      Use analyst curated reports to quick sights on the sector specific comments, red flags & strategic focus of the firm "
      image="/assets/images/unervaluedcompanies.png"
      imageAlt="Third feature alt text"
    />
      <VerticalFeatureRow
      title="Streamline workflows"
      description="Automation of repeated tasks 
      Say goodbye to manual tasks. Whether it's effortlessly compiling Pitchbooks, converting PDFs to Excel tables, do it all with precision"      
      image="/assets/images/streamline-tasks.png"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Any tailored solutions for your specific needs"
      description="Ask us for more. We are open to create any solution that solves your problem"      
      image="/assets/images/tailoredsolutions.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
