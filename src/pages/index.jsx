/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';

// import Components
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import { SVGPageOne, SVGPageTwo, SVGPageThree, SVGPageFour } from '../components/SVGManager';
import Projects from '../components/Projects';
import ProjectContent from '../components/ProjectContent';
import { rotate, UpDown, UpDownWide, waveAnimation, blurNormal, blurBig, boxShadowAnim } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import avatar from '../images/avatar.jpg';
import '../styles/global';
import config from '../../config/website';
import MediaQuery from 'react-responsive';

// import Fonts
import '../../node_modules/@ibm/plex/scss/ibm-plex.scss';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddleBlur = styled.div`
  ${tw('absolute')};
  transform: rotate(3deg);
  animation: ${boxShadowAnim} 2s ease-in-out infinite alternate;
  background: linear-gradient(to right, #262626 0%, #202020 100%);
  width: 100%;
  height:90%;
  will-change: box-shadow;
`;
const DividerMiddleMain = styled.div`
  height:90%;
  opacity: 0.9;
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-5/6 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  font-family:'IBM Plex Mono';
  ${tw('text-5xl lg:text-6xl text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  font-family:'IBM Plex Mono';
  ${tw('text-4xl lg:text-4xl text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  font-family:'IBM Plex Mono';
  ${tw('text-2xl lg:text-4xl text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-full')};
`;

const AboutSub = styled.span`
  font-family:'IBM Plex Mono';
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  font-family:'IBM Plex Mono';
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl pt-6 md:pt-12 text-justify')};
`;

const offset = 100;

const ContactText = styled.p`
font-family:'IBM Plex Mono';
  ${tw('text-grey-light text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #ff0057;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
font-family:'IBM Plex Mono';
  ${tw('text-center text-grey absolute pin-b p-6 text-md lg:text-lg')};
  a {
    color: #ff0057;
    text-decoration: none;
  }
`;

// const Index = () => (
class Index extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    isArticleVisible: false,
    timeout: false,
    articleTimeout: false,
    article: '',
    loading: 'is-loading',
    isSmallMobile: false
  }
  this.parallax;
  this.spaceKeyWasPressed;
  this.handleOpenArticle = this.handleOpenArticle.bind(this)
  this.handleCloseArticle = this.handleCloseArticle.bind(this)
  this.updateDimensions = this.updateDimensions.bind(this);
  this.keyDownFunction = this.keyDownFunction.bind(this);
  this.keyUpFunction = this.keyUpFunction.bind(this);
}

keyDownFunction(event){
    if(!this.spaceKeyWasPressed && event.keyCode === 32) {
      this.spaceKeyWasPressed = true;
      if(this.parallax.current < (this.parallax.space - offset))
      {
        this.parallax.scrollTo(1);
      }
      else if(this.parallax.current < ((this.parallax.space * 2) - offset))
      {
       this.parallax.scrollTo(2);
      }
      else if(this.parallax.current < ((this.parallax.space * 3) - offset))
      {
        this.parallax.scrollTo(3);
      }
      else{
        this.parallax.scrollTo(4);
      }
    }
}

keyUpFunction(event){
  if(this.spaceKeyWasPressed && event.keyCode === 32) {
    this.spaceKeyWasPressed = false;
  }
}

componentDidMount () {
  this.timeoutId = setTimeout(() => {
      this.setState({loading: ''});
  }, 100);
  this.updateDimensions();
  window.addEventListener("resize", this.updateDimensions);
  document.addEventListener("keydown", this.keyDownFunction, false);
  document.addEventListener("keyup", this.keyUpFunction, false);
}

componentWillUnmount () {
  if (this.timeoutId) {
      clearTimeout(this.timeoutId);
  }
  window.removeEventListener("resize", this.updateDimensions);
  document.removeEventListener("keydown", this.keyDownFunction, false);
  document.removeEventListener("keyup", this.keyUpFunction, false);
}

updateDimensions() {
  if(window.innerWidth <= 450){
    this.setState({
      isSmallMobile: true
    })
  }
  else{
    this.setState({
      isSmallMobile: false
    })
  }
}


handleOpenArticle(article) {
  if(this.state.isArticleVisible){
    return;
  }

  this.setState({
    isArticleVisible: true,
    article
  })

  setTimeout(() => {
    this.setState({
      timeout: !this.state.timeout
    })
  }, 325)

  setTimeout(() => {
    this.setState({
      articleTimeout: true
    })
  }, 350)
}

handleCloseArticle() {
  if(!this.state.articleTimeout){
    return;
  }

  this.setState({
    articleTimeout: false
  })

  setTimeout(() => {
    this.setState({
      timeout: !this.state.timeout
    })
  }, 325)

  setTimeout(() => {
  this.setState({
      isArticleVisible: false,
      article: ''
    })
  }, 350)

}
  render() {
    return (
  <React.Fragment>
    <SEO />
    <Parallax pages={this.state.isSmallMobile ? 5.5 : 4} ref={ref => this.parallax = ref}>
      <Divider speed={0.2} offset={0}>
        <SVGPageOne />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hello, <br /> I'm Alex.
          </BigTitle>
          <Subtitle>I'm creating beautiful web, VR and app experiences. Go on and have a look at my projects</Subtitle>
        </Hero>
      </Content>
        <Divider speed={-0.2} offset={1.1} >
          <DividerMiddleBlur />
        </Divider>
      <Content speed={0.4} offset={this.state.isSmallMobile ? 1.7 : 1}>
        <Inner>
          <Title>PROJECTS</Title>
           <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
              <div id="wrapper">
                  <Projects onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                  <ProjectContent
                    isArticleVisible={this.state.isArticleVisible}
                    timeout={this.state.timeout}
                    articleTimeout={this.state.articleTimeout}
                    article={this.state.article}
                    onCloseArticle={this.handleCloseArticle}
                  />
              </div>
          </div>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1}>
        <SVGPageTwo />
      </Divider>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={2} />
      <Divider speed={0.1} offset={2}>
        <SVGPageThree />
      </Divider>
      <Content speed={0.4} offset={this.state.isSmallMobile ? 3.5 : 2}>
        <Inner>
          <Title>ABOUT</Title>
          <AboutHero>
            <Avatar type="image/jpg" src={avatar} alt="Alexander Stricker" />
            <AboutSub>
              In every work i made i am experiences the need to insert a little special. You can call it an Easteregg.
              It can range from a Ligthsaber sound until a complete minigame.
              You can try one for yourself here...
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            Only your mind is the border of your own limitation. All things you confront creates your own personality. Some of them improves decrease or creates a new one.
            it can depend on Mangas, movie shows, freindships or your socity. I do like a lot Mangas and Animes.
          </AboutDesc>
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={this.state.isSmallMobile ? 4.5 : 3}>
        <WaveWrapper>
          <InnerWave>
            <svg viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={this.state.isSmallMobile ? 4.5 : 3}>
        <Inner>
          <Title>GET IN TOUCH</Title>
          <ContactText>
            Say <a href="mailto:s_alexander@hotmail.de">Hi</a> or find me on other platforms:{' '}
            <a href={config.siteFacebook}>Facebook</a> &{' '}
            <a href={config.siteInstagram}>Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 by Alexander Stricker.{' '}
          <a href={config.github}>Github Repository</a>.
        </Footer>
      </Content>
      <Divider speed={0.1} offset={3}>
        <SVGPageFour />
      </Divider>
    </Parallax>
    <noscript>Your browser does not support JavaScript!</noscript>
  </React.Fragment>
);
}
}

export default Index;
