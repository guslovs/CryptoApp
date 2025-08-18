import bg from '../../images/careers-bg.jpg'

export default function Section1Careers() {

    const scrollToSection = () => {
        document.getElementById('section4').scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="section1-Careers">
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                height: '700px',
                backgroundPositionY: '-200px',
                display: 'grid',
                placeItems: 'center'
            }}>
                <h1 style={{
                    color: 'black',
                    fontSize: '70px',
                    position: 'relative',
                    top: '100px',
                }}>Find Your Calling</h1>
                <button onClick={scrollToSection} style={{
                    fontSize: '30px',
                    height: '70px',
                    width: '270px',
                    fontWeight: 'bold',
                    border: '0px',
                    borderRadius: '8px',
                    color: '#0B1426',
                    position: 'relative',
                    bottom: '80px',
                    cursor: 'pointer'
                }}>Explore Roles</button>
            </div>
        </section>
    )
}