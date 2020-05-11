import React from 'react'
import styled from 'styled-components'

import HTML from '../images/skills/html.png'
import CSS from '../images/skills/css.png'
import JS from '../images/skills/js.png'
import ReactIcon from '../images/skills/react.png'
import Node from '../images/skills/node.png'

import Python from '../images/skills/python.png'
import Java from '../images/skills/java.png'
import Swift from '../images/skills/swift.png'
import SwiftUI from '../images/skills/swiftui.png'
import XCode from '../images/skills/xcode.png'

import Firebase from '../images/skills/firebase.png'
import SQL from '../images/skills/sql.png'
import C from '../images/skills/c.png'
import CPlusPlus from '../images/skills/c++.png'
import Scala from '../images/skills/scala.png'

import Gatsby from '../images/skills/gatsby.png'
import GraphQL from '../images/skills/graphql.png'
import Postman from '../images/skills/postman.png'
import Figma from '../images/skills/figma.png'
import MongoDB from '../images/skills/mongodb.png'

const SkillsSection = styled.div`
    background-color: rgba(36, 55, 101, 0.7);
    font-family: 'Oswald', sans-serif;
    margin: 0;
`

const Title = styled.h1`
    color: white;
    text-align: center;
    text-decoration: underline;
    margin: 0 0 25px;
    padding: 25px;
`

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
    row-gap: 50px;
    padding: 0 25px 50px 0;

    @media(max-width: 817px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media(max-width: 700px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 350px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const IconImage = styled.img`
    height: 100px;
    object-fit: cover;
`

const Skills = () => {
    return(
        <SkillsSection >
            <Title>Skills</Title>
            <SkillsContainer>
                <IconImage src={HTML}/>
                <IconImage src={CSS}/>
                <IconImage src={JS}/>
                <IconImage src={ReactIcon}/>
                <IconImage src={Node}/>

                <IconImage src={Python}/>
                <IconImage src={Java}/>
                <IconImage src={Swift}/>
                <IconImage src={SwiftUI}/>
                <IconImage src={XCode}/>

                <IconImage src={Firebase}/>
                <IconImage src={SQL}/>
                <IconImage src={C}/>
                <IconImage src={CPlusPlus}/>
                <IconImage src={Scala}/>

                <IconImage src={Gatsby}/>
                <IconImage src={GraphQL}/>
                <IconImage src={Postman}/>
                <IconImage src={Figma}/>
                <IconImage src={MongoDB}/>


            </SkillsContainer>
        </SkillsSection>
    );
}

export default Skills