import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillAlert } from 'react-icons/ai';

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

      </LinkList>
      
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Slogan here</Slogan>
        </CompanyContainer>
        <SocialContainer>
      <SocialIcons href="https://www.facebook.com/metanagaming/">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/MetanaGaming/">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/metanagaming/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillAlert size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
