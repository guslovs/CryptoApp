import bg from '../../images/roadmap-bg.jpg'
import Section2Roadmap from './S2Roadmap'
import Section3Roadmap from './S3Roadmap'
import Section4Roadmap from './S4Roadmap'
import Section5Roadmap from './S5Roadmap'
import Section6Roadmap from './S6Roadmap'

export default function Section1Roadmap() {
    return (
        <section style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPositionX: '-800px'
        }} className="section1-Roadmap">
            <div style={{
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
                top: '50px'
            }}>
                <h1 style={{
                    fontSize: '70px'
                }}>The Roadmap</h1>
                <p style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: '600px',
                    position: 'relative',
                    bottom: '50px'
                }}>See how we're rolling out our expanded offering for managing crypto, stocks1, access to banking2, and cards.</p>
            </div>

            <div>
                <Section2Roadmap />
            </div>

            <div>
                <Section3Roadmap />
            </div>

            <div>
                <Section4Roadmap />
            </div>

            <div>
                <Section5Roadmap />
            </div>

            <div>
                <Section6Roadmap />
            </div>
        </section>
    )
}