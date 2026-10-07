import '../style/HomePage.css';
import HomeInfo from '../Widgets/HomeInfo';
import AlertPanel from '../Widgets/AlertPanel'

export default function HomePage() {

    return (
        <section className='home-page'>
            <div className="hero"></div>
            <h1 className="home-font">
                ITREEA
            </h1>
            <div className='main-part'>
                <HomeInfo></HomeInfo>
                <div className='map-panel-wrapper'>
                    <div className='placeholder'></div>
                    <AlertPanel></AlertPanel>
                </div>
            </div>
        </section>

    )
}