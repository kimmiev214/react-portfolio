import {Link} from 'react-router-dom'
import LogoTitle from '../../assets/images/logok.png'
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br /> I'm
                <img src = {LogoTitle} alt="developer" />
                <br /> full stack engineer.
                </h1>
                <h3> <a href="https://www.freepik.com/free-psd/glitch-text-effect_21937948.htm#page=2&query=k&position=45&from_view=search">Image by Vectonauta</a> on Freepik </h3>
                <h2><Link to="/contact" className="flat-button">CONTACT ME</Link></h2>
            </div>
        </div>
    )
}

export default Home