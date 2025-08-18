import kris from '../../images/kris.webp'
import rafael from '../../images/rafael.webp'
import bobby from '../../images/bobby.webp'
import eric from '../../images/eric.webp'
import antoine from '../../images/antoine.webp'
import dimitri from '../../images/dimitri.webp'
import rob from '../../images/rob.webp'

export default function Section4AboutUs() {
    return (
        <section className="section4-AboutUs">
            <h1 style={{
                fontSize: '70px',
                textAlign: 'center'
            }}>Meet Our Executive Team</h1>
            <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center'
            }}>
                <div style={{
                    textAlign: 'center'
                }}>
                    <img style={{
                        width: '250px',
                        height: '250px'
                    }} src={kris} alt="" />
                    <h3>Kris Marszalek</h3>
                    <p>Co-Founder & CEO</p>
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <img style={{
                        width: '250px',
                        height: '250px'
                    }} src={rafael} alt="" />
                    <h3>Rafael Melo</h3>
                    <p>Co-Founder & CFO</p>
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <img style={{
                        width: '250px',
                        height: '250px'
                    }} src={bobby} alt="" />
                    <h3>Bobby Bao</h3>
                    <p>Co-Founder, Head of Crypto Capital</p>
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <img style={{
                        width: '250px',
                        height: '250px'
                    }} src={eric} alt="" />
                    <h3>Eric Anziani</h3>
                    <p>President & COO</p>
                </div>
            </div>

            <h1 style={{
                fontSize: '70px',
                textAlign: 'center'
            }}>Meet Our Advisory Board</h1>
            <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center'
            }}>
                <div style={{
                    textAlign: 'center'
                }}>
                    <img style={{
                        width: '250px',
                        height: '250px'
                    }} src={antoine} alt="" />
                    <h3>Antoine Blondeau</h3>
                    <p>Chairman of the Advisory Board</p>
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <img style={{
                        width: '250px',
                        height: '250px'
                    }} src={dimitri} alt="" />
                    <h3>Dimitri Tsamados</h3>
                    <p>Talent</p>
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <img style={{
                        width: '250px',
                        height: '250px'
                    }} src={rob} alt="" />
                    <h3>Rob Bier</h3>
                    <p>Organisation Design & Scaling</p>
                </div>
            </div>
        </section>
    )
}