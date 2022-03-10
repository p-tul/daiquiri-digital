import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import GalleryImage from '../components/GalleryImage'

const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
    /* gap: 3rem; */
    align-items: stretch;

`

const Gallery = ({children}) => {
    return (
        <Grid>
            <StaticQuery
                query={graphql`
                    query {
                        quaintrelle: imageSharp(fluid: {originalName: {eq: "quaintrelle.png"}}) {
                            id
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        quaintrelleBG: imageSharp(fluid: {originalName: {eq: "quaintrelle-bg.jpg"}}) {
                            id
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        spiritsLedger: imageSharp(fluid: {originalName: {eq: "spirits-ledger.png"}}) {
                            id
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        pickledMonkey: imageSharp(fluid: {originalName: {eq: "pmbc.png"}}) {
                            id
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        gurdys: imageSharp(fluid: {originalName: {eq: "gurdys.png"}}) {
                            id
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        kurrajong: imageSharp(fluid: {originalName: {eq: "kurrajong.png"}}) {
                            id
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        harts: imageSharp(fluid: {originalName: {eq: "harts-pub.png"}}) {
                            id
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        cin: imageSharp(fluid: {originalName: {eq: "cin-davies.png"}}) {
                            id
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        bridgeLn: imageSharp(fluid: {originalName: {eq: "bridge-lane.png"}}) {
                            id
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                `}
                render={data => {
                    return (
                        <>
                            <GalleryImage fluid={data.quaintrelle.fluid} background={data.quaintrelleBG.fluid} title='Quaintrelle' link='https://quaintrellecandles.com.au/' />
                            <GalleryImage fluid={data.spiritsLedger.fluid} title='Quaintrelle' link='https://quaintrellecandles.com.au/' />
                            <GalleryImage fluid={data.harts.fluid} title='Quaintrelle' link='https://quaintrellecandles.com.au/' />
                            <GalleryImage fluid={data.cin.fluid} title='Quaintrelle' link='https://quaintrellecandles.com.au/' />
                            <GalleryImage fluid={data.kurrajong.fluid} title='Quaintrelle' link='https://quaintrellecandles.com.au/' />
                            <GalleryImage fluid={data.pickledMonkey.fluid} title='Quaintrelle' link='https://quaintrellecandles.com.au/' />
                            <GalleryImage fluid={data.gurdys.fluid} title='Quaintrelle' link='https://quaintrellecandles.com.au/' />
                            <GalleryImage fluid={data.bridgeLn.fluid} title='Quaintrelle' link='https://quaintrellecandles.com.au/' />
                        </>
                    )
                }}
            />
        </Grid>
    )
}

export default Gallery
