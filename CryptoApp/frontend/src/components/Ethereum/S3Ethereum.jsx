import ETH from '../../images/ethereum.png'

export default function Section3Ethereum() {
    return (
        <section className="section3-Ethereum">
            <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    backgroundColor: 'white',
                    height: '80px',
                    width: '200px',
                    position: 'relative',
                    top: '80px',
                    borderRadius: '46px'
                }}>
                    <img style={{
                        width: '50px',
                        height: '50px',
                        position: 'relative',
                        top: '15px',
                        left: '20px'
                    }} src={ETH} alt="" />
                    <h1 style={{
                        fontSize: '45px',
                        position: 'relative',
                        bottom: '25px',
                        left: '25px'
                    }}>ETH</h1>
                </div>
                <div style={{
                    position: 'relative',
                    top: '50px'
                }}>
                    <h1 style={{
                        color: 'white',
                        fontSize: '45px'
                    }}>=</h1>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    backgroundColor: 'white',
                    height: '80px',
                    width: '400px',
                    position: 'relative',
                    top: '80px',
                    borderRadius: '46px'
                }}>
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: '45px',
                        position: 'relative',
                        bottom: '30px',
                        left: '30px'
                    }}>$3,577.59 <p style={{
                        color: '#D3D3D3',
                        position: 'relative',
                        left: '240px',
                        bottom: '100px'
                    }}>USD</p></p>
                </div>
            </div>
        </section>
    )
}