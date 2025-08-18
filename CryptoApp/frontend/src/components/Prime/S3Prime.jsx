import swirls from '../../images/swirls.webp'
import phone from '../../images/prime-phone2.webp'

export default function Section3Prime() {
    return (
        <section style={{
            backgroundImage: `url(${swirls})`,
            backgroundSize: 'cover'
        }} className="section3-Prime">
            <h1>Join crypto's most exclusive circle</h1>
            <p style={{
                color: '#D3D3D3',
                fontWeight: 'bold',
                fontSize: '20px',
                width: '500px',
                textAlign: 'center',
                position: 'relative',
                left: '500px',
                bottom: '40px'
            }}>Prime membership is now open and requires a minimum deposit of US$1 million in eligible crypto and/or fiat.</p>
            <div style={{
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
                right: '15px'
            }}>
                <img style={{
                    height: '700px',
                    width: '400px'
                }} src={phone} alt="" />
            </div>
        </section>
    )
}