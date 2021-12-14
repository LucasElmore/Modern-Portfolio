import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <Section>
      <SectionTitle id="contact">
        Contact
      </SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle> 
          <LinkItem href="tel:334-441-9520">(334) 441-9520</LinkItem>       
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle> 
          <LinkItem href="mailto:lucas@lucaselmore.com">Lucas@LucasElmore.com</LinkItem>       
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        {/* <SocialContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer> */}
      </SocialIconsContainer>
    </Section>
  );
};

export default Footer;
