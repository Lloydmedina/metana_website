import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillSliders, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="#">
            email@email.com
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
        <SocialIcons href="https://www.facebook.com/metanagaming/">
            <AiFillFacebook size="3rem" aria-label=''/>
            fb.com/metanagaming
          </SocialIcons>
        </LinkColumn>

        <LinkColumn>
        <SocialIcons href="https://twitter.com/MetanaGaming/">
            <AiFillTwitterCircle size="3rem" />
            twitter.com/MetanaGaming
          </SocialIcons>
        </LinkColumn>

        <LinkColumn>
        <SocialIcons href="https://www.instagram.com/metanagaming/">
            <AiFillInstagram size="3rem" />
            instagram.com/metanagaming
          </SocialIcons>
        </LinkColumn>

        <LinkColumn>
        <SocialIcons href="https://google.com">
            <AiFillSliders size="3rem" />
          </SocialIcons>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Slogan here</Slogan>
        </CompanyContainer>
     

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
