import img from '../../images/prime-img.webp'
import mic from '../../images/prime-mic.webp'
import logo from '../../images/Logo.png'
import card from '../../images/prime-card2.webp'
import img2 from '../../images/prime-img2.webp'
import arrows from '../../images/arrows.webp'
import star from '../../images/prime-star.webp'
import pancake from '../../images/prime-pancake.webp'

export default function Section2Prime() {
    return (
        <section className="section2-Prime">
            <h1>The tools you need, the service you deserve</h1>
            <div style={{
                display: 'flex',
                gap: '30px',
                justifyContent: 'center',
                position: 'relative',
                bottom: '60px'
            }}>
                <div style={{
                    width: '435px',
                    height: '500px',
                    border: '1px solid #1199FA',
                    borderRadius: '24px'
                }}>
                    <img style={{
                        width: '140px',
                        height: '140px',
                        position: 'relative',
                        left: '142.5px',
                        top: '70px'
                    }} src={logo} alt="" />
                    <h2 style={{
                        fontSize: '30px',
                        position: 'relative',
                        top: '145px',
                        left: '20px'
                    }}>Best-in-class security</h2>
                    <p style={{
                        color: '#D3D3D3',
                        position: 'relative',
                        left: '20px',
                        top: '145px',
                        width: '400px'
                    }}>Institutional-grade custody for all your assets, plus account protection1 of US$1 million against unauthorised access.</p>
                    <a href="/security">
                        <button style={{
                            fontSize: '20px',
                            border: '0px',
                            backgroundColor: 'transparent',
                            color: '#1199FA',
                            position: 'relative',
                            top: '145px',
                            left: '12.5px',
                            cursor: 'pointer'
                        }}>Learn More 🡢</button>
                    </a>
                </div>
                <div style={{
                    width: '435px',
                    height: '500px',
                    border: '1px solid #1199FA',
                    borderRadius: '24px'
                }}>
                    <img style={{
                        width: '350px',
                        height: '250px',
                        position: 'relative',
                        left: '40px'
                    }} src={img} alt="" />
                    <img style={{
                        width: '80px',
                        height: '80px',
                        position: 'relative',
                        right: '175px',
                        bottom: '30px'
                    }} src={mic} alt="" />
                    <h2 style={{
                        fontSize: '30px',
                        position: 'relative',
                        top: '40px',
                        left: '20px'
                    }}>Dedicated RM team</h2>
                    <p style={{
                        color: '#D3D3D3',
                        position: 'relative',
                        left: '20px',
                        top: '35px',
                        width: '400px'
                    }}>Your relationship manager provides white-glove service for all your crypto needs, tax services, estate disbursement, and more.</p>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${card})`,
                backgroundSize: 'contain',
                backgroundPosition: '940px -70px',
                display: 'grid',
                placeItems: 'center',
                width: '900px',
                height: '350px',
                border: '1px solid #1199FA',
                borderRadius: '24px',
                position: 'relative',
                left: '310px',
                bottom: '30px'
            }}>
                <h1 style={{
                    position: 'relative',
                    top: '130px'
                }}>The Prime Card</h1>
                <p style={{
                    color: '#D3D3D3',
                    width: '550px',
                    textAlign: 'center',
                    position: 'relative',
                    bottom: '25px'
                }}>Sculpted from metal as unique as those who wield it — exclusively for Prime members who stake/lock up US$1 million of CRO.</p>
            </div>

            <div style={{
                display: 'flex',
                gap: '30px',
                justifyContent: 'center',
                position: 'relative',
            }}>
                <div style={{
                    width: '435px',
                    height: '500px',
                    border: '1px solid #1199FA',
                    borderRadius: '24px'
                }}>
                    <img style={{
                        width: '350px',
                        height: '250px',
                        position: 'relative',
                        left: '40px',
                        top: '30px'
                    }} src={img2} alt="" />
                    <h2 style={{
                        fontSize: '30px',
                        position: 'relative',
                        left: '20px',
                        top: '35px'
                    }}>High liquidity, low fees</h2>
                    <p style={{
                        color: '#D3D3D3',
                        position: 'relative',
                        left: '20px',
                        top: '35px',
                        width: '400px'
                    }}>Up to 5x leverage (depending on jurisdiction), lowest fees, and higher limits for 19 tokens. Plus, 1:1 USDC and PYUSD peg, and instant settlements.</p>
                    <a href="https://help.crypto.com/en/articles/9025995-crypto-com-prime-margin-trading">
                    <button style={{
                        fontSize: '20px',
                        border: '0px',
                        backgroundColor: 'transparent',
                        color: '#1199FA',
                        position: 'relative',
                        top: '40px',
                        left: '12.5px',
                        cursor: 'pointer'
                    }}>Learn More 🡢</button>
                    </a>
                </div>
                <div style={{
                    width: '435px',
                    height: '500px',
                    border: '1px solid #1199FA',
                    borderRadius: '24px'
                }}>
                    <img style={{
                        width: '200px',
                        height: '200px',
                        position: 'relative',
                        left: '115px',
                        top: '50px'
                    }} src={arrows} alt="" />
                    <h2 style={{
                        fontSize: '30px',
                        position: 'relative',
                        top: '85px',
                        left: '20px'
                    }}>Unlimited fiat transfers</h2>
                    <p style={{
                        color: '#D3D3D3',
                        position: 'relative',
                        left: '20px',
                        top: '85px',
                        width: '400px'
                    }}>Zero-fee deposits and withdrawals in USD, EUR, GBP, and more.</p>
                </div>
            </div>

            <div style={{
                display: 'flex',
                gap: '30px',
                justifyContent: 'center',
                position: 'relative',
                top: '30px',
                left: '310px',
                width: '900px',
                border: '1px solid #1199FA',
                borderRadius: '24px'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <div>
                        <img style={{
                            width: '100px',
                            height: '100px',
                            position: 'relative',
                            top: '10px',
                            left: '10px'
                        }} src={star} alt="" />
                    </div>
                    <div>
                        <h3>1% deposit bonus</h3>
                        <p style={{
                            color: '#D3D3D3'
                        }}>Transfer US$1 million or more (in crypto or fiat) and stake/lock up US$1 million of CRO.</p>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <div>
                        <img style={{
                            width: '100px',
                            height: '100px',
                            position: 'relative',
                            top: '15px',
                            left: '10px'
                        }} src={pancake} alt="" />
                    </div>
                    <div>
                        <h3>Prime Referral</h3>
                        <p style={{
                            color: '#D3D3D3'
                        }}>Refer a friend and get US$2,000 in CRO, plus a part of their deposit bonus.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}