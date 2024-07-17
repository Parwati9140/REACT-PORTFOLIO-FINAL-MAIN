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
width: 34vw;
height: 68vh;
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

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Develope width={40} height={40} /> Frontend Developmemt
</Title>
<Description>
I value demand of company and my skill and I am creating dynamic webpages, thus i enjoy bringing new ideas to life.
</Description>
<Description>
<strong>Skills</strong>
<p>
Html,Css,Js,React,Redux,Sass, Bootstrap,Tailwind,etc.
</p>
</Description>
<Description>
<strong>Sql\DBMS</strong>
<ul>
    <li>Basic Queries</li>
</ul>
<strong>Tools</strong>
<p>
VScode, Git|Github etc.
</p>
</Description>

            </Main>
            <Main>
<Title>
    <Design width={40} height={40} /> Backend Development
</Title>
<Description>
 I have also basic knowledge in Backend Development like Nodejs, Git, Mysql, Java ,Php
</Description>
<Description>
<strong>Skills</strong>
<ul>
<li>
           Node
    </li>
    <li>
        Java 
    </li>
    <li>
           Php
    </li>

</ul>
<strong>Sql\DBMS</strong>
<ul>
    <li>Basic Queries</li>
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
       Git|Github
    </li>
    
</ul>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
