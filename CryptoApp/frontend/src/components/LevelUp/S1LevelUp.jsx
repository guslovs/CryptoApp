import image from '../../images/Logo.png'
import QR from '../../images/dummy-qr.jpg'
import darkBlue from '../../images/7929.jpg'
import { useState } from 'react'

export default function Section1LevelUp() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section style={{
            backgroundImage: `url(${darkBlue})`,
            backgroundSize: 'cover',
            height: '700px'
        }} className="section1-LevelUp">
            <div className='levelup-div'>
                <div>
                    <img className='logo-img' src={image} alt="Logo" />
                </div>
                <h1>LEVEL UP</h1>
                <p>Level up your crypto, stocks, access to banking and cards, to manage and grow your wealth while enjoying next-level rewards.</p>
                <div className='btn-div'>
                    <button onClick={() => setIsOpen(true)} className='left-btn'>Get Started <img style={{
                        width: '15px',
                        height: '15px',
                        position: 'relative',
                        left: '5px',
                        top: '2px'
                    }} src={QR} alt='QR' /></button>
                    <button className='right-btn'><a style={{ textDecoration: 'none', color: 'white' }} href="/compare-benefits">Choose Your Level</a></button>
                </div>

                <div className='percentages-div'>
                    <div className='stocks-div'>
                        <h3>STOCKS</h3>
                        <span style={{
                            position: 'relative',
                            bottom: '15px'
                        }}>Up to 3.0%</span>
                        <span>deposit bonus</span>
                    </div>
                    <div className='vertical-line'></div>
                    <div className='banking-div'>
                        <h3>BANKING</h3>
                        <span style={{
                            position: 'relative',
                            bottom: '15px'
                        }}>Up to 7.5%</span>
                        <span>cash rewards</span>
                    </div>
                    <div className='vertical-line'></div>
                    <div className='cards-div'>
                        <h3 style={{
                            position: 'relative',
                            right: '5px'
                        }}>CARDS</h3>
                        <span style={{
                            position: 'relative',
                            bottom: '15px'
                        }}>Up to 8.0%</span>
                        <span>spending rewards</span>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000,
                }}>
                    <div style={{
                        background: "white",
                        padding: "2rem",
                        borderRadius: "12px",
                        width: "200px",
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
                                    left: '100px',
                                    bottom: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                ✖
                            </button>
                        </div>
                        <img style={{
                            width: '110px',
                            height: '110px'
                        }} src={QR} alt="" />
                        <div style={{
                            position: 'relative',
                            top: '100px',
                            right: '115px'
                        }}>
                            <p>Scan QR</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}