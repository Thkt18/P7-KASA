import Banner from '../../components/banner/banner'
import BannerImg from '../../assets/banner_a_propos.png';
import Collapse from '../../components/collapse/collapse';
import aboutData from '../../data/data_a_propos'

function About() {
    return (
        <div className='home'>
            <Banner img={BannerImg} />
            <div className='about'>
                <Collapse title="Fiabilité" props={aboutData.fiabilité} />
                <Collapse title="Respect" props={aboutData.respect} />
                <Collapse title="Service" props={aboutData.service} />
                <Collapse title="Sécurité" props={aboutData.sécurité} />
            </div>
        </div>
    )
}

export default About 
