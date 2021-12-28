import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './MainStyles';

const Main = (props) => (
  <>
    <Section row nopadding id='Home'>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Metana Gamming
        </SectionTitle>
        <SectionText>
        The Community Driven organization
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Main;