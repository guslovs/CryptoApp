import midnightBG from '../../images/midnight-bg.avif'
import rubyBG from '../../images/ruby-bg.jpg'
import jadeIndigoBG from '../../images/jade-indigo-bg.jpg'
import icyRose from '../../images/icy-rose-bg.jpg'
import obsidian from '../../images/obsidian-bg.jpg'
import primeBG from '../../images/prime-bg.jpg'
import Section4HomePage from '../HomePage/S4HomePage'
import { useState } from 'react'
import QR from '../../images/dummy-qr.jpg'

export default function Section6LevelUp() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <h1 style={{
            textAlign: 'center',
            fontSize: '50px',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
            color: 'white',
            position: 'relative',
            top: '20px'
        }}>Choose your level of benefits</h1>
        <section className="section6-LevelUp">
            <div style={{
                backgroundImage: `url(${midnightBG})`
            }} className="midnight-div">
                <h3 style={{
                    textAlign: 'center',
                    position: 'relative',
                    top: '10px'
                }}>MIDNIGHT</h3>
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    left: '10px'
                }}>1.0%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '87.5px'
                }}>STOCKS</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '105px'
                }}>deposit bonus</span>
                <hr style={{
                    position: 'relative',
                    bottom: '90px',
                    color: "gray"
                }} />
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    bottom: '110px',
                    left: '10px'
                }}>1.5%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '197.5px'
                }}>BANKING</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '215px'
                }}>cash rewards</span>
                <hr style={{
                    position: 'relative',
                    bottom: '195px',
                    color: "gray"
                }} />
                <p style={{
                    position: 'relative',
                    bottom: '180px',
                    left: '90px',
                    fontWeight: 'bold'
                }}> --- </p>
                <button onClick={() => setIsOpen(true)} style={{
                    position: 'relative',
                    bottom: '170px',
                    left: '67.5px',
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    height: '30px',
                    cursor: 'pointer'
                }}>Level Up</button>
                <span style={{
                    position: 'relative',
                    bottom: '137.5px',
                    left: '14px'
                }}>Free</span>
            </div>
            <div style={{
                backgroundImage: `url(${rubyBG})`
            }} className='ruby-div'>
                <h3 style={{
                    textAlign: 'center',
                    position: 'relative',
                    top: '10px'
                }}>RUBY</h3>
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    left: '10px'
                }}>1.25%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '85px'
                }}>STOCKS</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '105px'
                }}>deposit bonus</span>
                <hr style={{
                    position: 'relative',
                    bottom: '90px',
                    color: "gray"
                }} />
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    bottom: '110px',
                    left: '10px'
                }}>3.5%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '195px'
                }}>BANKING</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '215px'
                }}>cash rewards</span>
                <hr style={{
                    position: 'relative',
                    bottom: '195px',
                    color: "gray"
                }} />
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    bottom: '220px',
                    left: '10px'
                }}>2.5%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '305px'
                }}>CARDS</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '327.5px'
                }}>spending rewards</span>
                <button onClick={() => setIsOpen(true)} style={{
                    position: 'relative',
                    bottom: '287.5px',
                    right: '20px',
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    height: '30px',
                    cursor: 'pointer'
                }}>Level Up</button>
                <span style={{
                    position: 'relative',
                    bottom: '285px',
                    left: '68px',
                }}>US$500</span>
                <p style={{
                    fontSize: '10px',
                    position: 'relative',
                    bottom: '290px',
                    left: '57.5px',
                    color: '#D3D3D3'
                }}>12-month deposit</p>
            </div>
            <div style={{
                backgroundImage: `url(${jadeIndigoBG})`
            }} className='ruby-div'>
                <h3 style={{
                    textAlign: 'center',
                    position: 'relative',
                    top: '10px'
                }}>JADE/INDIGO</h3>
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    left: '10px'
                }}>2.5%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '85px'
                }}>STOCKS</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '105px'
                }}>deposit bonus</span>
                <hr style={{
                    position: 'relative',
                    bottom: '90px',
                    color: "gray"
                }} />
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    bottom: '110px',
                    left: '10px'
                }}>5.0%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '195px'
                }}>BANKING</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '215px'
                }}>cash rewards</span>
                <hr style={{
                    position: 'relative',
                    bottom: '195px',
                    color: "gray"
                }} />
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    bottom: '220px',
                    left: '10px'
                }}>3.5%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '305px'
                }}>CARDS</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '327.5px'
                }}>spending rewards</span>
                <button onClick={() => setIsOpen(true)} style={{
                    position: 'relative',
                    bottom: '287.5px',
                    right: '20px',
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    height: '30px',
                    cursor: 'pointer'
                }}>Level Up</button>
                <span style={{
                    position: 'relative',
                    bottom: '285px',
                    left: '62.5px'
                }}>US$5,000</span>
                <p style={{
                    textAlign: 'center',
                    fontSize: '10px',
                    position: 'relative',
                    bottom: '290px',
                    color: '#D3D3D3'
                }}>4% est. yearly rewards</p>
            </div>
            <div style={{
                backgroundImage: `url(${icyRose})`
            }} className='ruby-div'>
                <h3 style={{
                    textAlign: 'center',
                    position: 'relative',
                    top: '10px'
                }}>ICY ROSE</h3>
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    left: '10px'
                }}>2.5%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '85px'
                }}>STOCKS</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '105px'
                }}>deposit bonus</span>
                <hr style={{
                    position: 'relative',
                    bottom: '90px',
                    color: "gray"
                }} />
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    bottom: '110px',
                    left: '10px'
                }}>6.0%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '195px'
                }}>BANKING</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '215px'
                }}>cash rewards</span>
                <hr style={{
                    position: 'relative',
                    bottom: '195px',
                    color: "gray"
                }} />
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    bottom: '220px',
                    left: '10px'
                }}>5.0%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '305px'
                }}>CARDS</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '327.5px'
                }}>spending rewards</span>
                <button onClick={() => setIsOpen(true)} style={{
                    position: 'relative',
                    bottom: '287.5px',
                    right: '20px',
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    height: '30px',
                    cursor: 'pointer'
                }}>Level Up</button>
                <span style={{
                    position: 'relative',
                    bottom: '285px',
                    left: '58px'
                }}>US$50,000</span>
                <p style={{
                    textAlign: 'center',
                    fontSize: '10px',
                    position: 'relative',
                    bottom: '290px',
                    color: '#D3D3D3'
                }}>8.5% est. yearly rewards</p>
            </div>
            <div style={{
                backgroundImage: `url(${obsidian})`
            }} className='ruby-div'>
                <h3 style={{
                    textAlign: 'center',
                    position: 'relative',
                    top: '10px'
                }}>OBSIDIAN</h3>
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    left: '10px'
                }}>3.0%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '85px'
                }}>STOCKS</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '105px'
                }}>deposit bonus</span>
                <hr style={{
                    position: 'relative',
                    bottom: '90px',
                    color: "gray"
                }} />
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    bottom: '110px',
                    left: '10px'
                }}>7.0%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '195px'
                }}>BANKING</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '215px'
                }}>cash rewards</span>
                <hr style={{
                    position: 'relative',
                    bottom: '195px',
                    color: "gray"
                }} />
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    bottom: '220px',
                    left: '10px'
                }}>6.5%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '305px'
                }}>CARDS</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '327.5px'
                }}>spending rewards</span>
                <button onClick={() => setIsOpen(true)} style={{
                    position: 'relative',
                    bottom: '287.5px',
                    right: '20px',
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    height: '30px',
                    cursor: 'pointer'
                }}>Level Up</button>
                <span style={{
                    position: 'relative',
                    bottom: '285px',
                    left: '52.5px'
                }}>US$500,000</span>
                <p style={{
                    textAlign: 'center',
                    fontSize: '10px',
                    position: 'relative',
                    bottom: '290px',
                    color: '#D3D3D3'
                }}>9.5% est. yearly rewards</p>
            </div>
            <div style={{
                backgroundImage: `url(${primeBG})`
            }} className='ruby-div'>
                <h3 style={{
                    textAlign: 'center',
                    position: 'relative',
                    top: '10px'
                }}>PRIME</h3>
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    left: '10px'
                }}>3.0%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '85px'
                }}>STOCKS</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '105px'
                }}>deposit bonus</span>
                <hr style={{
                    position: 'relative',
                    bottom: '90px',
                    color: "gray"
                }} />
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    bottom: '110px',
                    left: '10px'
                }}>7.5%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '195px'
                }}>BANKING</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '215px'
                }}>cash rewards</span>
                <hr style={{
                    position: 'relative',
                    bottom: '195px',
                    color: "gray"
                }} />
                <h4 style={{
                    fontSize: '35px',
                    position: 'relative',
                    bottom: '220px',
                    left: '10px'
                }}>8.0%</h4>
                <p style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '305px'
                }}>CARDS</p>
                <span style={{
                    fontSize: '10px',
                    position: 'relative',
                    left: '115px',
                    bottom: '327.5px'
                }}>spending rewards</span>
                <button onClick={() => setIsOpen(true)} style={{
                    position: 'relative',
                    bottom: '287.5px',
                    right: '20px',
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    height: '30px',
                    cursor: 'pointer'
                }}>Level Up</button>
                <span style={{
                    position: 'relative',
                    bottom: '285px',
                    left: '48px'
                }}>US$1,000,000</span>
                <p style={{
                    textAlign: 'center',
                    fontSize: '10px',
                    position: 'relative',
                    bottom: '290px',
                    color: '#D3D3D3'
                }}>9.5% est. yearly rewards</p>
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
                        <div>
                            <p style={{
                                fontSize: '20px'
                            }}>Scan QR</p>
                        </div>
                    </div>
                </div>
            )}
        </section>


        <div className='benefits-btn'>
            <a href="/compare-benefits"><button>Compare All Benefits</button></a>
        </div>
        <div style={{
            position: 'relative',
            top: '250px'
        }}>
            <Section4HomePage />
        </div>
        </>
    )
}