import bgImage from '../../images/crypto-basket.webp'

export default function Section1CryptoBasket() {
    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            height: '800px',
            position: 'relative',
            bottom: '50px'
        }} className='section1-Basket'>
            <div>
                <h1>Crypto Basket</h1>
                <p>The fastest way to diversify your portfolio with multiple thematic tokens.</p>
                <a href="/signup"><button>Buy a Basket Now</button></a>
            </div>
        </section>
    )
}