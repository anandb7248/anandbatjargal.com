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
    margin: 0 auto;
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
    padding: 0 25px 50px 25px;

    @media(max-width: 950px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 725px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const Clickable = styled.a`
`

const IconImage = styled.img`
    height: 100px;
    object-fit: cover;
    padding: 25px;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

    @media(max-width: 950px) {
        height: 80px;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.2) translateY(-3px);
    }
`

const Skills = () => {
    return(
        <SkillsSection >
            <Title>Skills</Title>
            <SkillsContainer>
                <Clickable href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                    <IconImage src={HTML}/>
                </Clickable>
                <Clickable href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                    <IconImage src={CSS}/>
                </Clickable>
                <Clickable href="https://nodejs.org/en/about/" target="_blank">
                    <IconImage src={Node}/>
                </Clickable>
                <Clickable href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                    <IconImage src={JS}/>
                </Clickable>
                <Clickable href="https://reactjs.org/" target="_blank">
                    <IconImage src={ReactIcon}/>
                </Clickable>

                <Clickable href="https://www.python.org/" target="_blank">
                    <IconImage src={Python}/>
                </Clickable>
                <Clickable href="https://docs.oracle.com/javase/tutorial/index.html" target="_blank">
                    <IconImage src={Java}/>
                </Clickable>
                <Clickable href="https://developer.apple.com/xcode/" target="_blank">
                    <IconImage src={XCode}/>
                </Clickable>
                <Clickable href="https://developer.apple.com/swift/" target="_blank">
                    <IconImage src={Swift}/>
                </Clickable>
                <Clickable href="https://developer.apple.com/xcode/swiftui/" target="_blank">
                    <IconImage src={SwiftUI}/>
                </Clickable>

                <Clickable href="https://firebase.google.com/" target="_blank">
                    <IconImage src={Firebase}/>
                </Clickable>
                <Clickable href="https://www.postgresql.org/" target="_blank">
                    <IconImage src={SQL}/>
                </Clickable>
                <Clickable href="https://www.scala-lang.org/" target="_blank">
                    <IconImage src={Scala}/>
                </Clickable>
                <Clickable href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">
                    <IconImage src={C}/>
                </Clickable>
                <Clickable href="https://isocpp.org/" target="_blank">
                    <IconImage src={CPlusPlus}/>
                </Clickable>

                <Clickable href="https://www.gatsbyjs.org/" target="_blank">
                    <IconImage src={Gatsby}/>
                </Clickable>
                <Clickable href="https://graphql.org/" target="_blank">
                    <IconImage src={GraphQL}/>
                </Clickable>
                <Clickable href="https://www.mongodb.com/" target="_blank">
                    <IconImage src={MongoDB}/>
                </Clickable>
                <Clickable href="https://www.postman.com/" target="_blank">
                    <IconImage src={Postman}/>
                </Clickable>
                <Clickable href="https://www.figma.com/" target="_blank">
                    <IconImage src={Figma}/>
                </Clickable>
            </SkillsContainer>
        </SkillsSection>
    );
}

export default Skills