import bgImage from '../../images/cards-bg3.jpg'
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom'

export default function Section4LevelUp() {

    const scrollToSection = () => {
        document.getElementById('section-cards').scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            height: '700px'
        }} className="section4-LevelUp">
            <div className='S4-div'>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <h1>CARDS</h1>
                <h3>The only card you need</h3>
                <p>The world's most popular card, giving up to 8% spending rewards, plus airport lounge access, merchant rebates, and more.</p>
            </div>
        </section>
    )
}