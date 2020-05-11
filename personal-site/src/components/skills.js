import React from 'react'
import styled from 'styled-components'

const SkillsSection = styled.div`
    background: #243765;
    opacity: 0.9;
`

const Title = styled.h1`
    color: white;
    text-align: center;
    text-decoration: underline;
`

const Skills = () => {
    return(
        <SkillsSection >
            <Title>Skills</Title>
            {/* <SkillsContainer>

            </SkillsContainer> */}
        </SkillsSection>
    );
}

export default Skills