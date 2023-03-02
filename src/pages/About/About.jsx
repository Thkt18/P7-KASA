import Banner from '../../components/banner/banner'
import BannerImg from '../../assets/banner_a_propos.png';
import Collapse from '../../components/collapse/collapse';
import aboutData from '../../data/data_a_propos'
// import styled from 'styled-components';

function About() {
    return (
        <div className='home'>
            <Banner img={BannerImg} />
            <div>
                <Collapse title="Fiabilité" props={aboutData.fiabilité}  page='About' />
                <Collapse title="Respect" props={aboutData.respect}  page="About" />
                <Collapse title="Service" props={aboutData.service}  page="About" />
                <Collapse title="Sécurité" props={aboutData.sécurité}  page="About" />
            </div>
        </div>
    )
}

export default About 

