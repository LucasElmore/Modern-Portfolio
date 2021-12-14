import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Developer. Engineer. <br />
        Scientist. Creative. <br />
        Innovator.
      </SectionTitle>
      <SectionText>
        Welcome, I am Lucas Elmore and here you can view my skills, experience, and projects that I have worked on throughout my journey in web development.
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;  