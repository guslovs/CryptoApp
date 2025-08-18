import img1 from '../../images/pay-img1.webp'
import img2 from '../../images/pay-img2.webp'
import imgBG1 from '../../images/pay-img1-bg.jpg'
import imgBG2 from '../../images/pay-img2-bg.jpg'

export default function Section5Pay() {
    return (
        <section className="section5-Pay">
            <h1>Crypto beyond shopping</h1>
            <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                position: 'relative',
                top: '40px'
            }}>
                <div style={{
                    backgroundImage: `url(${imgBG1})`,
                    backgroundSize: 'cover',
                    width: '530px',
                    height: '515px',
                    backgroundColor: '#D3D3D3',
                    borderRadius: '24px'
                }}>
                    <h2 style={{
                        color: 'white',
                        fontSize: '30px',
                        width: '400px',
                        position: 'relative',
                        top: '10px',
                        left: '50px'
                    }}>Top up your prepaid phone and get up to 5% back.</h2>
                    <img style={{
                        width: '500px',
                        height: '515px',
                        position: 'relative',
                        bottom: '122.5px'
                    }} src={img1} alt="" />
                </div>
                <div style={{
                    backgroundImage: `url(${imgBG2})`,
                    backgroundSize: 'cover',
                    width: '530px',
                    height: '515px',
                    backgroundColor: '#D3D3D3',
                    borderRadius: '24px'
                }}>
                    <h2 style={{
                        color: 'white',
                        fontSize: '30px',
                        width: '400px',
                        position: 'relative',
                        top: '10px',
                        left: '50px'
                    }}>Send and receive crypto easily and for free.</h2>
                    <img style={{
                        width: '500px',
                        height: '515px',
                        position: 'relative',
                        bottom: '122.5px'
                    }} src={img2} alt="" />
                </div>
            </div>
        </section>
    )
}