import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.div`
    font-family: 'Oswald', sans-serif;
    margin: 0;
    padding: 10px;
`

const FooterText = styled.p`
    color: white;
    margin: 0 auto;
    text-align: center;
`

const Footer = () => {
    return(
        <FooterSection>
            <FooterText>Version 1.0 - Built by Anand Batjargal - 2020</FooterText>
        </FooterSection>
    );
}

export default Footer