
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Main from '../components/Main/Main';
import Community from '../components/Community/Community';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import MetanaLogo from '../components/logo/logo';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Main />
        
        <BgAnimation />
      </Section>
    </Layout>
  );
};

export default Home;
