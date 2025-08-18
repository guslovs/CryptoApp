import logo from '../../images/Logo.png'

export default function Section1AboutUs() {
    return (
        <section className="section1-AboutUs">
            <div style={{
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
                top: '50px'
            }}>
                <p style={{
                    position: 'relative',
                    top: '30px',
                    fontWeight: 'bold',
                    fontSize: '30px'
                }} className='blue-words'>OUR VISION</p>
                <h1 style={{
                    fontSize: '70px'
                }}>Cryptocurrency in Every Wallet ™</h1>
                <img style={{
                    height: '400px',
                    width: '400px',
                    position: 'relative',
                    top: '30px'
                }} src={logo} alt="" />
            </div>

            <div style={{
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
                top: '125px'
            }}>
                <p style={{
                    position: 'relative',
                    top: '30px',
                    fontWeight: 'bold',
                    fontSize: '30px'
                }} className='blue-words'>OUR MISSION</p>
                <h1 style={{
                    fontSize: '70px',
                    width: '800px',
                    textAlign: 'center'
                }}>Accelerate the world’s transition to cryptocurrency</h1>
                <a href="/roadmap">
                    <button>View our roadmap 🡢</button>
                </a>
            </div>
        </section>
    )
}