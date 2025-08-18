export default function Section3AboutUs() {
    return (
        <section className="section3-AboutUs">
            <div style={{
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
                bottom: '50px'
            }}>
                <p style={{
                    position: 'relative',
                    top: '30px',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    marginBottom: '0'
                }} className='blue-words'>OUR TEAM</p>
                <h1 style={{
                    fontSize: '70px',
                    marginBottom: '0'
                }}>One Vision, One Global Team</h1>
                <p style={{
                    position: 'relative',
                    top: '30px',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    width: '750px',
                    textAlign: 'center'
                }}>Building a world-changing platform is a monumental task. These are the people behind it.</p>
                <div style={{
                    display: 'flex',
                    gap: '300px',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <h1 style={{
                            fontSize: '70px'
                        }} className="blue-words">140M</h1>
                        <p style={{
                            fontSize: '20px',
                            position: 'relative',
                            bottom: '50px'
                        }}>Users</p>
                    </div>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <h1 style={{
                            fontSize: '70px'
                        }} className="blue-words">90</h1>
                        <p style={{
                            fontSize: '20px',
                            position: 'relative',
                            bottom: '50px'
                        }}>Countries</p>
                    </div>
                </div>
                <a href="/careers">
                    <button>Explore Careers 🡢</button>
                </a>
            </div>
        </section>
    )
}