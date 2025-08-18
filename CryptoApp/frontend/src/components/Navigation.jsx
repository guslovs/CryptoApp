import { Link, NavLink } from 'react-router-dom'
import image from '../images/Logo.png'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Navigation() {

    const [isHovered, setIsHovered] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)
    const [isHovered3, setIsHovered3] = useState(false)

    return (
        <header className="header-Navigation">
            <nav>
                <div>
                    <Link to='/'>
                        <img src={image} alt="Logo" className='img-Navigation' />
                    </Link>
                </div>
                <ul className='ul-Navigation'>
                    <li>
                        <Link
                            to="/levelup"
                            style={{
                                color: '#1199FA',
                                textDecoration: 'none',
                                position: 'relative',
                                right: '30px'
                            }}
                        >
                            Level Up
                        </Link>
                    </li>
                    <li
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{ position: 'relative' }}
                    >
                        <div>
                            <button
                                style={{
                                    color: '#C0C0C0',
                                    backgroundColor: 'transparent',
                                    border: '0px',
                                    borderRadius: '0px',
                                    fontSize: '20px',
                                    height: '33px',
                                    position: 'relative',
                                    right: '30px'
                                }}
                            >
                                Crypto
                            </button>

                            {isHovered && (
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '80px',
                                        justifyContent: 'center',
                                        position: "absolute",
                                        top: '45px',
                                        right: '-380px',
                                        height: '50px',
                                        width: '1300px',
                                        backgroundColor: "#061121",
                                        color: "white",
                                        padding: "10px",
                                        zIndex: '9999'
                                    }}
                                >
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/crypto-prices"><h1>Crypto Prices</h1></a>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/crypto-prices/bitcoin"><h1>BTC Price</h1></a>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/crypto-prices/ethereum"><h1>ETH Price</h1></a>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/converter"><h1>BTC/USD Converter</h1></a>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/what-is-crypto"><h1>What is Crypto?</h1></a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                        style={{ position: 'relative' }}
                    >
                        <div>
                            <button
                                style={{
                                    color: '#C0C0C0',
                                    backgroundColor: 'transparent',
                                    border: '0px',
                                    borderRadius: '0px',
                                    fontSize: '20px',
                                    height: '33px',
                                    position: 'relative',
                                    right: '30px'
                                }}
                            >
                                Features
                            </button>

                            {isHovered2 && (
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '80px',
                                        justifyContent: 'center',
                                        position: "absolute",
                                        top: '45px',
                                        right: '-380px',
                                        height: '50px',
                                        width: '1300px',
                                        backgroundColor: "#061121",
                                        color: "white",
                                        padding: "10px",
                                        zIndex: '9999'
                                    }}
                                >
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/levelup"><h1>Level Up</h1></a>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/crypto-basket"><h1>Crypto Basket</h1></a>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/pay"><h1>Pay</h1></a>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/prime"><h1>Prime</h1></a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                    <li
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                        style={{ position: 'relative', left: '20px' }}
                    >
                        <div>
                            <button
                                style={{
                                    color: '#C0C0C0',
                                    backgroundColor: 'transparent',
                                    border: '0px',
                                    borderRadius: '0px',
                                    fontSize: '20px',
                                    height: '33px',
                                    position: 'relative',
                                    right: '35px'
                                }}
                            >
                                Company
                            </button>

                            {isHovered3 && (
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '80px',
                                        justifyContent: 'center',
                                        position: "absolute",
                                        top: '45px',
                                        right: '-380px',
                                        height: '50px',
                                        width: '1300px',
                                        backgroundColor: "#061121",
                                        color: "white",
                                        padding: "10px",
                                        zIndex: '9999'
                                    }}
                                >
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/about-us"><h1 style={{ position: 'relative', right: '150px' }}>About Us</h1></a>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/roadmap"><h1 style={{ position: 'relative', right: '120px' }}>Roadmap</h1></a>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/partners"><h1 style={{ position: 'relative', right: '90px' }}>Partners</h1></a>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/security"><h1 style={{ position: 'relative', right: '50px' }}>Security</h1></a>
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        position: 'relative',
                                        bottom: '5px'
                                    }}>
                                        <a style={{ textDecoration: 'none', color: 'white' }} href="/careers"><h1 style={{ position: 'relative', right: '30px' }}>Careers</h1></a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                    <li style={{
                        position: 'relative',
                        left: '10px'
                    }}>
                        <Link
                            to="/signup"
                            style={{ color: '#C0C0C0', textDecoration: 'none' }}
                        >
                            <motion.button
                                style={{ backgroundColor: '#0096FF', color: 'white' }}
                                whileHover={{ backgroundColor: '#5D3FD3' }}
                            >
                                Sign Up
                            </motion.button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            style={{ color: '#1199FA', textDecoration: 'none', fontSize: '16px' }}
                        >
                            Log In
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
