import bgImage from '../../images/benefits-bg4.jpg'
import QR from '../../images/dummy-qr.jpg'
import { useState } from 'react';

export default function Section1BenefitsPage() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            height: '1000px'
        }} className="section1-Benefits">
            <h1>Compare the benefits</h1>
            <div>
                <p>Cards</p>
                <p>Crypto</p>
                <p>Stocks <span>coming soon</span></p>
                <p>Banking <span>coming soon</span></p>
                <p>Services</p>
            </div>
            <hr />
            <table style={{
                width: '90%',
                margin: 'auto',
                textAlign: 'center',
                marginTop: '30px',
            }} className="levels-table" >
                <tbody>
                    <th>Levels</th>
                    <td>
                        <h3>MIDNIGHT</h3>
                        <button onClick={() => setIsOpen(true)} style={{
                            backgroundColor: 'white',
                            fontWeight: 'bold',
                            borderRadius: '12px',
                            height: '30px',
                            width: '80px',
                            cursor: 'pointer'
                        }}>Level Up</button>
                        <p style={{
                            color: 'gray',
                            fontWeight: '400'
                        }}>No staking required</p>
                    </td>
                    <div className="vertical-line-levels"></div>
                    <td>
                        <h3>RUBY</h3>
                        <button onClick={() => setIsOpen(true)} style={{
                            backgroundColor: 'white',
                            fontWeight: 'bold',
                            borderRadius: '12px',
                            height: '30px',
                            width: '80px',
                            cursor: 'pointer'
                        }}>Level Up</button>
                        <p>US $500</p>
                        <p style={{
                            color: 'gray',
                            fontWeight: '400'
                        }}>12-month deposit</p>
                    </td>
                    <div className="vertical-line-levels"></div>
                    <td>
                        <h3>JADE/INDIGO</h3>
                        <button onClick={() => setIsOpen(true)} style={{
                            backgroundColor: 'white',
                            fontWeight: 'bold',
                            borderRadius: '12px',
                            height: '30px',
                            width: '80px',
                            cursor: 'pointer'
                        }}>Level Up</button>
                        <p>US $5,000</p>
                        <p style={{
                            color: 'gray',
                            fontWeight: '400'
                        }}>4% est. yearly rewards</p>
                    </td>
                    <div className="vertical-line-levels"></div>
                    <td>
                        <h3>ICY ROSE</h3>
                        <button onClick={() => setIsOpen(true)} style={{
                            backgroundColor: 'white',
                            fontWeight: 'bold',
                            borderRadius: '12px',
                            height: '30px',
                            width: '80px',
                            cursor: 'pointer'
                        }}>Level Up</button>
                        <p>US $50,000</p>
                        <p style={{
                            color: 'gray',
                            fontWeight: '400'
                        }}>8.5% est. yearly rewards</p>
                    </td>
                    <div className="vertical-line-levels"></div>
                    <td>
                        <h3>OBSIDIAN</h3>
                        <button onClick={() => setIsOpen(true)} style={{
                            backgroundColor: 'white',
                            fontWeight: 'bold',
                            borderRadius: '12px',
                            height: '30px',
                            width: '80px',
                            cursor: 'pointer'
                        }}>Level Up</button>
                        <p>US $500,000</p>
                        <p style={{
                            color: 'gray',
                            fontWeight: '400'
                        }}>9.5% est. yearly rewards</p>
                    </td>
                    <div className="vertical-line-levels"></div>
                    <td>
                        <h3>PRIME</h3>
                        <button onClick={() => setIsOpen(true)} style={{
                            backgroundColor: 'white',
                            fontWeight: 'bold',
                            borderRadius: '12px',
                            height: '30px',
                            width: '80px',
                            cursor: 'pointer'
                        }}>Level Up</button>
                        <p>US $1,000,000</p>
                        <p style={{
                            color: 'gray',
                            fontWeight: '400'
                        }}>10.5% est. yearly rewards</p>
                    </td>
                </tbody>
            </table>

            {isOpen && (
                <div style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                }}>
                    <div style={{
                        background: "white",
                        padding: "2rem",
                        borderRadius: "12px",
                        width: "200px",
                        height: '200px',
                        textAlign: "center",
                        position: "relative",
                        boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
                        color: 'black'
                    }}>
                        <div>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    backgroundColor: 'transparent',
                                    border: '0px',
                                    position: 'relative',
                                    bottom: '100px',
                                    left: '220px',
                                    cursor: 'pointer'
                                }}
                            >
                                ✖
                            </button>
                        </div>
                        <img style={{
                            width: '110px',
                            height: '110px',
                            position: 'relative',
                            top: '30px',
                            left: '40px'
                        }} src={QR} alt="" />
                        <div>
                            <p style={{
                                fontSize: '20px',
                                position: 'relative',
                                top: '140px',
                                right: '85px',
                                width: '100px'
                            }}>Scan QR</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}