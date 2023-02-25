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

function Accomodation () {

    const {id} = useParams(window.location.href)

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
            <CollapseAccomodation>
                <Collapse className="logement_collapse_description" props={accomodation.description} title="Description" />
                <Collapse className="logement_collapse_equipement" props={accomodation.equipments} title="Équipements" />
            </CollapseAccomodation>
        </main>
    );
}

export default Accomodation

const AccomodationHostCard = styled.div`
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 345px) and (max-width: 767px) {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
    }
`

const AccomodationDetailRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 25%;

    @media (min-width: 345px) and (max-width: 767px) {
        width: 100%;
    }
`

const AccomodationLocation = styled.h2`
    font-weight: 300;
    font-size: 18px;
    color: #f96060;
    margin-top: 5px;

    @media (min-width: 345px) and (max-width: 767px) {
        font-size: 14px;
    }
`

const AccomodationTitle = styled.h1`
    font-weight: 500;
    font-size: 36px;
    margin: 20px 0 2px 0;
    color: #f96060;

    @media (min-width: 345px) and (max-width: 767px) {
        font-size: 18px;
    }
`

const AccomodationToP = styled.section`
    display: flex;
    align-items: flex-start;
    width: 94%;
    margin: 2% 3% 2% 3%;
    justify-content: space-between;
    margin-bottom: 5px;
    font-family: 'Montserrat', sans-serif;

    @media (min-width: 345px) and (max-width: 767px) {
        flex-direction: column;
    }
`

const AccomodationDetailLeft = styled.div`
    text-align: left;
`

const CollapseAccomodation = styled.section`
    display: flex;
    width: 94%;
    margin: 2% 3% 2% 3%;
    justify-content: space-between;
    align-items: flex-start;

    @media (min-width: 345px) and (max-width: 767px) {
        flex-direction: column;
    }
`
