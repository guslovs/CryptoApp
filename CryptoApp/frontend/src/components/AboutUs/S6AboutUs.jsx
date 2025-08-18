import corridor from '../../images/corridor.jpg'

export default function Section6AboutUs() {
    return (
        <section className="section6-AboutUs">
            <div style={{
                backgroundImage: `url(${corridor})`,
                backgroundSize: 'cover',
                height: '700px',
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
            }}>
                <p style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    position: 'relative',
                    top: '100px'
                }} className='blue-words'>JOIN OUR TEAM</p>
                <h1 style={{
                    fontSize: '70px',
                    textAlign: 'center',
                    width: '800px'
                }}>Your ambition to grow is what sets you apart</h1>
                <a href="/careers">
                    <button>Explore Careers 🡢</button>
                </a>
            </div>
        </section>
    )
}