import img1 from '../../images/careers-img3.webp'
import img2 from '../../images/careers-img4.webp'
import img3 from '../../images/careers-img5.webp'

export default function Section3Careers() {
    return (
        <section className="section3-Careers">
            <div style={{
                display: 'flex',
                gap: '40px'
            }}>
                <div style={{
                    position: 'relative',
                    left: '150px',
                    top: '50px'
                }}>
                    <h1 style={{
                        fontSize: '60px',
                        width: '600px'
                    }}>What It's Like Working With Us</h1>
                    <h3 style={{
                        fontSize: '30px',
                        width: '500px',
                        position: 'relative',
                        top: '50px'
                    }}> At Crypto, you are empowered to think and do things that have never been done before.</h3>
                    <p style={{
                        fontSize: '20px',
                        width: '500px',
                        color: 'gray',
                        position: 'relative',
                        top: '50px'
                    }}>You will be working with talented, interesting, ambitious, and humble people who are passionate about developing brand-new products from the ground up.</p>
                    <p style={{
                        fontSize: '20px',
                        width: '500px',
                        color: 'gray',
                        position: 'relative',
                        top: '50px'
                    }}>We value teamwork and an open and dynamic culture. Our team is encouraged to work closely with one another and alongside the executive team to realise our vision of Cryptocurrency in Every Wallet™.</p>
                </div>

                <div>
                    <img style={{
                        height: '480px',
                        width: '680px',
                        position: 'relative',
                        left: '80px',
                        top: '100px'
                    }} src={img1} alt="" />
                    <img style={{
                        height: '440px',
                        width: '550px',
                        position: 'relative',
                        left: '250px',
                        bottom: '50px'
                    }} src={img2} alt="" />
                    <img style={{
                        height: '405px',
                        width: '300px',
                        position: 'relative',
                        bottom: '300px',
                        right: '50px'
                    }} src={img3} alt="" />
                </div>
            </div>
        </section>
    )
}