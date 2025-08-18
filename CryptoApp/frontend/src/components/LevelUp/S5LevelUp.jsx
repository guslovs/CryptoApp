import bgImage from '../../images/crypto-bg.jpg'
import logo from '../../images/Logo.png'

export default function Section5LevelUp() {
    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            height: '700px'
        }} className="section5-LevelUp">
            <div>
                <div className='S3-img-div'>
                    <img src={logo} alt="Logo" />
                </div>
                <h1>CRYPTO</h1>
                <h3>Trade over 350 crypto</h3>
                <p>Start trading instantly with more than 20 currencies, including USD, GBP, CAD, EUR, AUD, and SGD.</p>
            </div>
        </section>
    )
}