import bg from '../../images/bitcoin-bg.jpg'

export default function Section1Bitcoin() {
    return (
        <section className="section1-Bitcoin">
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                height: '500px'
            }}></div>
        </section>
    )
}