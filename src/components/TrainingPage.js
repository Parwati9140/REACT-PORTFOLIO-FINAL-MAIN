import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-image: linear-gradient(315deg, #2d3436 0%, #d3d3d3 74%);
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 28vw;
height: 57vh;
z-index:3;
line-height: 1.2;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const TrainingPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> <b>React Development</b>
</Title>
<Description>
I have undergone 6 month training with Java Full Stack along with React from <b> Ducat India,Noida</b>
</Description>
<Description>
<strong>TRAINING</strong>
<p>
Html,Css,Js,Bootsrap,React,
Redux.
</p>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>Vs code</li>
</ul>
</Description>
            </Main>

            <Main>
<Title>
    <Develope width={40} height={40} /> <b>Java Development</b>
</Title>
<Description>
I have undergone 6 month training with Java Full Stack from <b> DucatIndia,Noida</b>
</Description>
<Description>
<strong>TRAINING</strong>
<p>
Html,Css,Js,React,Core Java,Jdbc,Hibernate,Tomcat Server ,
</p>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>Spring Tool,Vs code</li>
 
</ul>
</Description>

            </Main>

            <Main>
<Title>
    <Develope width={40} height={40} />Php Development
</Title>
<Description>
I have undergone 2 month training with Php Development(summer_training)in Diploma time from <b>SoftPro India,Lucknow</b>
</Description>
<Description>
<strong>TRAINING</strong>
<p>
Html,Css,Js,Core Php, ,
</p>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>Vs code,Wamp server,Xamp Server</li>
</ul>
</Description>

            </Main>

            <BigTitle text="TRAINING" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default TrainingPage
