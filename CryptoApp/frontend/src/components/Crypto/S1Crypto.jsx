import bg from '../../images/crypto-page-bg.jpg'

export default function Section1Crypto() {
    return (
        <section className="section1-Crypto">
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPositionY: '-200px',
                height: '500px'
            }}></div>
        </section>
    )
}