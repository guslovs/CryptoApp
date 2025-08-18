import logo from '../../images/Logo.png'
import phone from '../../images/prime-phone.webp'

export default function Section1Prime() {
    return (
        <section className="section1-Prime">
            <div style={{
                position: 'relative',
                left: '200px',
                top: '60px'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '10px'
                }}>
                    <img style={{
                        width: '80px',
                        height: '80px'
                    }} src={logo} alt="" />
                    <h3 style={{
                        fontSize: '40px',
                        position: 'relative',
                        bottom: '25px'
                    }}>PRIME</h3>
                </div>
                <h1 style={{
                    fontSize: '70px',
                    width: '400px',
                    position: 'relative',
                    bottom: '70px'
                }}>Build Generational Wealth</h1>
                <p style={{
                    fontSize: '20px',
                    width: '320px',
                    fontWeight: 'bold',
                    color: '#D3D3D3',
                    position: 'relative',
                    bottom: '70px'
                }}>Enjoy industry-leading security, low fees, uncapped fiat limits, and other exclusive privileges when you deposit a minimum of US$1 million.</p>
                <p style={{
                    fontSize: '14px',
                    width: '400px',
                    color: 'gray',
                    position: 'relative',
                    bottom: '70px'
                }}>Prime is currently available in selected regions and will be coming soon to yours.</p>
            </div>
            <div>
                <img style={{
                    height: '1200px',
                    width: '600px',
                    position: 'relative',
                    left: '920px',
                    bottom: '625px'
                }} src={phone} alt="" />
            </div>
        </section>
    )
}