import Section1CryptoPrices from "../CryptoPrices/S1CryptoPrices";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import forward from '../../images/forward-arrow.png'
import astronaut from '../../images/astronaut.png'
import rocket from '../../images/rocket.png'
import qr from '../../images/dummy-qr.jpg'
import appstore from '../../images/appstore.webp'
import playstore from '../../images/google-play.webp'

export default function CryptoPriceDetails() {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-API-KEY': 't2JsejzHiFv1WvzJn5Ltl1aiGhRY7T9CXHa8IUzb7y8='
            }
        };

        fetch(`https://openapiv1.coinstats.app/coins/${id}`, options)
            .then(res => res.json())
            .then(data => setCoin(data));
    }, [id]);

    if (!coin) return <p>Loading...</p>;

    return (
        <section className="pricesDetail">
            <div>
                <Section1CryptoPrices />
            </div>

            <div style={{
                display: 'flex',
                gap: '10px',
                position: 'relative',
                left: '70px'
            }}>
                <div style={{
                    position: 'relative',
                    top: '50px'
                }}>
                    <Link to="/crypto-prices"><button style={{
                        fontSize: '20px',
                        border: '0px',
                        backgroundColor: 'transparent',
                        cursor: 'pointer'
                    }}>All Prices</button></Link>
                </div>
                <div>
                    <img style={{
                        width: '20px',
                        height: '20px',
                        position: 'relative',
                        top: '52.5px'
                    }} src={forward} alt="" />
                </div>
                <div>
                    <h3 style={{
                        position: 'relative',
                        top: '32px',
                        fontWeight: '400'
                    }}>{coin.name} Price</h3>
                </div>
            </div>

            <div style={{
                display: 'flex',
                gap: '40px',
                justifyContent: 'center'
            }}>
                <div style={{
                    position: 'relative',
                    top: '50px',
                    left: '10px',
                    backgroundColor: 'white',
                    width: '685px',
                    height: '375px',
                    borderRadius: '12px'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '60px'
                    }}>
                        <div>
                            <h1 style={{
                                position: 'relative',
                                left: '40px',
                                fontSize: '40px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: '250px'
                            }}>{coin.name}</h1>
                        </div>
                        <div>
                            <h1 style={{
                                position: 'relative',
                                top: '18px',
                                fontSize: '30px',
                                fontWeight: '400',
                                color: 'gray'
                            }}>{coin.symbol}</h1>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '60px'
                    }}>
                        <div>
                            <p style={{
                                position: 'relative',
                                left: '40px',
                                fontSize: '40px',
                                fontWeight: 'bold',
                                bottom: '50px'
                            }}>${coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '10px'
                        }}>
                            <div>
                                <p style={{
                                    fontSize: '20px',
                                    position: 'relative',
                                    bottom: '18px'
                                }} className={`change ${coin.priceChange1h >= 0 ? 'up' : 'down'}`}>{coin.priceChange1h}%</p>
                            </div>
                            <div>
                                <p style={{
                                    fontSize: '20px',
                                    position: 'relative',
                                    bottom: '18px',
                                    fontWeight: 'bold'
                                }}>(1H)</p>
                            </div>
                        </div>
                    </div>

                    <p style={{
                        position: 'relative',
                        left: '40px',
                        fontSize: '30px',
                        bottom: '70px'
                    }}>Market Cap: <span style={{ fontWeight: 'bold' }}>${coin.marketCap.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} B</span></p>

                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        position: 'relative',
                        left: '40px',
                        bottom: '50px'
                    }}>
                        <div>
                            <p style={{
                                fontSize: '25px',
                                position: 'relative',
                                bottom: '18px'
                            }} className={`change ${coin.priceChange1d >= 0 ? 'up' : 'down'}`}>{coin.priceChange1d}%</p>
                        </div>
                        <div>
                            <p style={{
                                fontSize: '25px',
                                position: 'relative',
                                bottom: '18px',
                                fontWeight: 'bold'
                            }}>(24H)</p>
                        </div>
                    </div>
                </div>

                <div style={{
                    width: '685px',
                    height: '375px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    position: 'relative',
                    top: '50px'
                }}>
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: '25px'
                    }}>{coin.symbol} Price Statistics</h1>
                    <div style={{
                        display: 'flex',
                        gap: '7.5px',
                        position: 'relative',
                        bottom: '10px'
                    }}>
                        <div>
                            <p style={{
                                fontSize: '22.5px',
                                position: 'relative',
                                left: '40px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: '250px'
                            }}>{coin.name}</p>
                        </div>
                        <div>
                            <p style={{
                                fontSize: '22.5px',
                                position: 'relative',
                                left: '40px'
                            }}>Price: <span style={{ fontWeight: 'bold' }}>${coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD</span></p>
                        </div>
                    </div>
                    <div style={{
                        position: 'relative',
                        bottom: '35px'
                    }}>
                        <p style={{
                            fontSize: '22.5px',
                            position: 'relative',
                            left: '40px'
                        }}>Price BTC: <span style={{ fontWeight: 'bold' }}>{coin.priceBtc}</span></p>
                    </div>
                    <div style={{
                        position: 'relative',
                        bottom: '35px'
                    }}>
                        <p style={{
                            fontSize: '22.5px',
                            position: 'relative',
                            left: '40px'
                        }}>Volume: <span style={{ fontWeight: 'bold' }}>${coin.volume.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} B</span></p>
                    </div>
                    <div style={{
                        position: 'relative',
                        bottom: '35px'
                    }}>
                        <p style={{
                            fontSize: '22.5px',
                            position: 'relative',
                            left: '40px'
                        }}>Price Change (1H): <span className={`change ${coin.priceChange1h >= 0 ? 'up' : 'down'}`}>{coin.priceChange1h}%</span></p>
                    </div>
                    <div style={{
                        position: 'relative',
                        bottom: '35px'
                    }}>
                        <p style={{
                            fontSize: '22.5px',
                            position: 'relative',
                            left: '40px'
                        }}>Price Change (24H): <span className={`change ${coin.priceChange1d >= 0 ? 'up' : 'down'}`}>{coin.priceChange1d}%</span></p>
                    </div>
                    <div style={{
                        position: 'relative',
                        bottom: '35px'
                    }}>
                        <p style={{
                            fontSize: '22.5px',
                            position: 'relative',
                            left: '40px'
                        }}>Price Change (1W): <span className={`change ${coin.priceChange1w >= 0 ? 'up' : 'down'}`}>{coin.priceChange1w}%</span></p>
                    </div>
                </div>
            </div>

            <div style={{
                display: 'flex',
                gap: '30px',
                justifyContent: 'center',
                position: 'relative',
                left: '5px'
            }}>
                <div style={{
                    position: 'relative',
                    top: '70px',
                    height: '200px',
                    backgroundColor: 'white',
                    width: '685px',
                    borderRadius: '12px'
                }}>
                    <h1 style={{
                        fontSize: '30px',
                        position: 'relative',
                        left: '35px'
                    }}>Social Tracker</h1>
                    <hr style={{
                        width: '90%',
                        position: 'relative',
                        bottom: '10px'
                    }} />
                    <p style={{
                        position: 'relative',
                        left: '35px',
                        bottom: '20px',
                        fontSize: '20px'
                    }}>Also check out {coin.symbol} on:</p>
                    <div style={{
                        display: 'flex',
                        gap: '100px',
                        justifyContent: 'center',
                        position: 'relative',
                        bottom: '12.5px'
                    }}>
                        <div>
                            <Link style={{
                                fontSize: '25px',
                                textDecoration: 'none',
                                color: 'orange',
                                fontWeight: 'bold'
                            }} to={coin.redditUrl}>Reddit</Link>
                        </div>
                        <div>
                            <Link style={{
                                fontSize: '25px',
                                textDecoration: 'none',
                                color: '#7DF9FF',
                                fontWeight: 'bold'
                            }} to={coin.twitterUrl}>Twitter</Link>
                        </div>
                        <div>
                            <Link style={{
                                fontSize: '25px',
                                textDecoration: 'none',
                                color: 'gray',
                                fontWeight: 'bold'
                            }} to={coin.websiteUrl}>Website</Link>
                        </div>
                    </div>
                </div>

                <div style={{
                    width: '685px',
                    height: '575px',
                    backgroundColor: 'white',
                    position: 'relative',
                    top: '70px',
                    borderRadius: '12px'
                }}>
                    <h1 style={{
                        position: 'relative',
                        left: '40px'
                    }}>Where can you buy {coin.symbol}?</h1>
                    <div style={{
                        width: '600px',
                        height: '300px',
                        border: '1px gray solid',
                        position: 'relative',
                        left: '40px',
                        borderRadius: '8px'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '30px'
                        }}>
                            <div>
                                <img style={{
                                    width: '80px',
                                    height: '80px',
                                    position: 'relative',
                                    top: '20px',
                                    left: '20px'
                                }} src={astronaut} alt="" />
                            </div>
                            <div style={{
                                position: 'relative',
                                left: '20px'
                            }}>
                                <h1>Buy on Crypto App</h1>
                                <p style={{
                                    width: '350px'
                                }}>Sign up for an account in minutes to buy crypto using credit card or bank transfer.</p>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '150px'
                        }}>
                            <div>
                                <img style={{
                                    width: '150px',
                                    height: '150px',
                                    position: 'relative',
                                    top: '10px',
                                    left: '120px'
                                }} src={qr} alt="" />
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                position: 'relative',
                                top: '35px'
                            }}>
                                <a href="/">
                                    <button style={{
                                        border: '0px',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer'
                                    }}><img style={{
                                        height: '35px'
                                    }} src={appstore} alt="" /></button>
                                </a>

                                <a href="/">
                                    <button style={{
                                        border: '0px',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer'
                                    }}><img style={{
                                        height: '35px'
                                    }} src={playstore} alt="" /></button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        width: '600px',
                        height: '130px',
                        border: '1px gray solid',
                        position: 'relative',
                        left: '40px',
                        top: '20px',
                        borderRadius: '8px'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '30px'
                        }}>
                            <div>
                                <img style={{
                                    width: '80px',
                                    height: '80px',
                                    position: 'relative',
                                    top: '20px',
                                    left: '20px'
                                }} src={rocket} alt="" />
                            </div>
                            <div style={{
                                position: 'relative',
                                left: '20px'
                            }}>
                                <h1>Trade on Crypto Exchange</h1>
                                <p style={{
                                    width: '350px'
                                }}>Deposit crypto to our exchange and trade with deep liquidity and low fees.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button style={{
                fontSize: '50px',
                width: '600px',
                position: 'relative',
                left: '100px',
                bottom: '180px',
                border: '0px',
                backgroundColor: 'transparent',
                fontWeight: 'bold',
                cursor: 'pointer'
            }} className="blue-words"><a style={{ textDecoration: 'none', color: '#1199FA' }} href="/converter">You can also visit our BTC to USD converter 🡢</a></button>
        </section>
    );
}