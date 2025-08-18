import bg from '../../images/ethereum-bg.png'

export default function Section1Ethereum() {
    return (
        <section className="section1-Ethereum">
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPositionY: '-100px',
                height: '500px'
            }}></div>
        </section>
    )
}