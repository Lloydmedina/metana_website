import Link from 'next/link';
import React from 'react';
import { AiFillAlert, AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMeh, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCodeBadge, DiCss3Full, DiCssdeck } from 'react-icons/di';
import Image from 'next/image'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1 style={{width: '80%', height: '80%', position: 'relative'}}>
      <Image 
       alt='Metana'
       
       layout='fill'
       objectFit='contain'
      src='/images/METANA_COIN_LOOP.gif'/>     
    </Div1>
    <Div2>
    <li>
        <Link href="/">
          <NavLink>Metana</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Home">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="Community">
          <NavLink>Community</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
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
      </Div3>
    </Container>
);

export default Header;
