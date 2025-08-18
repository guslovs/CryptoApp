import bgImage from '../../images/stocks-bg2.jpg'
import logo from '../../images/Logo.png'

export default function Section2LevelUp() {
    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            height: '700px',
            backgroundSize: 'cover',
        }} className='section2-LevelUp' >
            <div>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <h1>STOCKS</h1>
                <h5>COMING SOON</h5>
                <h3>Wall Street without the walls</h3>
                <p>Enjoy zero commission when buying stocks, and easily manage all your investments in one place.</p>
            </div>
        </section>
    )
}