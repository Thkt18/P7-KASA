import React from 'react'
import NotFound from '../NotFound/NotFound'
import { useParams } from 'react-router-dom'
import Logement from '../../data/data_logement.json'
import Collapse from '../../components/collapse/collapse'
import Carrousel from '../../components/slide/slide';
import Tags from '../../components/tag/tag';
import HostName from '../../components/hostname/hostname';
import Rating from '../../components/rating/rating';
import styled from 'styled-components'
import { media } from "../../style/breakpoint"
import theme from "../../style/theme"

function Accomodation () {

    const {id} = useParams()

    const accomodation = Logement.find((data) => data.id === id)
    if (!accomodation) return <NotFound />

    return (
        <main className="logement">
            <Carrousel slideshow={accomodation.pictures} />
            <AccomodationToP>
                <AccomodationDetailLeft>
                    <AccomodationTitle>{accomodation.title}</AccomodationTitle>
                    <AccomodationLocation>{accomodation.location}</AccomodationLocation>
                    <div className="logement_tag">
                        <Tags tags={accomodation.tags} />
                    </div>
                </AccomodationDetailLeft>
                <AccomodationDetailRight>
                    <AccomodationHostCard>
                        <Rating rating={accomodation.rating} />
                        <HostName host={accomodation.host} />
                    </AccomodationHostCard>
                </AccomodationDetailRight>
            </AccomodationToP>
            <CollapseDiv>
                <Collapse className="logement_collapse_description" props={accomodation.description} title="Description" page="Logement" />
                <Collapse className="logement_collapse_equipement" props={accomodation.equipments}  title="Équipements" page="Logement"  />
            </CollapseDiv>
        </main>
    );
}

export default Accomodation

const AccomodationHostCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    ${media.desktop} {
        flex-direction: column-reverse;
        width: 100%;
    }
`

const AccomodationDetailRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;

    ${media.desktop} {
        width: 25%;
    }
`

const AccomodationLocation = styled.h2`
    font-weight: 300;
    font-size: 14px;
    color: ${theme.primary};
    margin-top: 5px;

    ${media.desktop} {
        font-size: 18px;
    }
`

const AccomodationTitle = styled.h1`
    font-weight: 500;
    font-size: 18px;
    margin: 20px 0 2px 0;
    color: ${theme.primary};

    ${media.desktop} {
        font-size: 36px;
    }
`

const AccomodationToP = styled.section`
    display: flex;
    align-items: flex-start;
    width: 94%;
    margin: 2% 3% 2% 3%;
    justify-content: space-between;
    margin-bottom: 5px;
    flex-direction: column;

    ${media.desktop} {
        flex-direction: row;
    }
`

const AccomodationDetailLeft = styled.div`
    text-align: left;
`
const CollapseDiv = styled.div`
    ${media.desktop} {
        display: flex;
        position: relative;
        margin-top: 3%;
        margin-bottom: 3%;
    }
`
