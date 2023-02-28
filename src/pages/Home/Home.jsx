import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'
import BannerImg from '../../assets/banner.png';



export default function Home() {
    return (
        <div className='home'>
            <Banner img={BannerImg} title="Chez vous, partout et ailleurs."/>
            <Card />
        </div>
    )
}