import { useState, useEffect } from "react";
import solanaLogo from '../../images/solana.png'
import lidoLogo from '../../images/lido.png'
import chainLogo from '../../images/chainlink.png'
import cardanoLogo from '../../images/cardano.png'

export default function Section3CryptoPrices() {

    const [prices, setPrices] = useState([])

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-API-KEY': 't2JsejzHiFv1WvzJn5Ltl1aiGhRY7T9CXHa8IUzb7y8='
            }
        };

        fetch('https://openapiv1.coinstats.app/coins', options)
            .then(res => res.json())
            .then(data => {
                setPrices(data.result)
            })
    }, [])

    const solana = prices[5]
    const lido = prices[7]
    const cardano = prices[10]
    const chainlink = prices[11]

    return (
        <section className="section3-Prices">
            <h1 style={{
                fontSize: '30px',
                position: 'relative',
                top: '50px',
                left: '80px',
                height: '100px'
            }}>Top Movers</h1>
            <div style={{
                display: 'flex',
                gap: '80px',
                justifyContent: 'center',
                backgroundColor: 'white',
                position: 'relative',
                width: '1350px',
                left: '80px',
                bottom: '20px'
            }}>
                <a style={{ textDecoration: 'none', color: 'black' }} href="/crypto-prices/solana">
                    <div style={{
                        width: '250px',
                        height: '200px',
                        position: 'relative',
                        right: '20px'
                    }}>
                        <img style={{
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                            top: '20px'
                        }} src={solanaLogo} alt="" />
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            position: 'relative',
                            top: '20px'
                        }}>
                            <h3 style={{
                                fontSize: '25px'
                            }}>{solana?.name}</h3>
                            <h3 style={{
                                fontSize: '25px',
                                fontWeight: '400'
                            }}>{solana?.symbol}</h3>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '90px'
                        }}>
                            <p style={{
                                fontSize: '25px'
                            }}>${solana?.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            <p style={{
                                fontSize: '25px',
                                fontWeight: 'bold'
                            }} className={`ul-change ${solana?.priceChange1d >= 0 ? 'green' : 'red'}`}
                            >{solana?.priceChange1d}%</p>
                        </div>
                    </div>
                </a>

                <a style={{ textDecoration: 'none', color: 'black' }} href="/crypto-prices/staked-ether">
                    <div style={{
                        width: '250px',
                        height: '200px',
                        position: 'relative',
                        right: '20px'
                    }}>
                        <img style={{
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                            top: '20px'
                        }} src={lidoLogo} alt="" />
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            position: 'relative',
                            top: '20px'
                        }}>
                            <h3 style={{
                                fontSize: '25px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: '250px'
                            }}>{lido?.name}</h3>
                            <h3 style={{
                                fontSize: '25px',
                                fontWeight: '400'
                            }}>{lido?.symbol}</h3>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '90px'
                        }}>
                            <p style={{
                                fontSize: '25px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: '250px'
                            }}>${lido?.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            <p style={{
                                fontSize: '25px',
                                fontWeight: 'bold'
                            }} className={`ul-change ${lido?.priceChange1d >= 0 ? 'green' : 'red'}`}
                            >{lido?.priceChange1d}%</p>
                        </div>
                    </div>
                </a>

                <a style={{ textDecoration: 'none', color: 'black' }} href="/crypto-prices/cardano">
                    <div style={{
                        width: '250px',
                        height: '200px',
                        position: 'relative',
                        right: '20px'
                    }}>
                        <img style={{
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                            top: '20px'
                        }} src={cardanoLogo} alt="" />
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            position: 'relative',
                            top: '20px'
                        }}>
                            <h3 style={{
                                fontSize: '25px'
                            }}>{cardano?.name}</h3>
                            <h3 style={{
                                fontSize: '25px',
                                fontWeight: '400'
                            }}>{cardano?.symbol}</h3>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '90px'
                        }}>
                            <p style={{
                                fontSize: '25px'
                            }}>${cardano?.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            <p style={{
                                fontSize: '25px',
                                fontWeight: 'bold'
                            }} className={`ul-change ${cardano?.priceChange1d >= 0 ? 'green' : 'red'}`}
                            >{cardano?.priceChange1d}%</p>
                        </div>
                    </div>
                </a>

                <a style={{ textDecoration: 'none', color: 'black' }} href="/crypto-prices/chainlink">
                <div style={{
                    width: '250px',
                    height: '200px',
                    position: 'relative',
                    right: '20px'
                }}>
                    <img style={{
                        width: '40px',
                        height: '40px',
                        position: 'relative',
                        top: '20px'
                    }} src={chainLogo} alt="" />
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        position: 'relative',
                        top: '20px'
                    }}>
                        <h3 style={{
                            fontSize: '25px'
                        }}>{chainlink?.name}</h3>
                        <h3 style={{
                            fontSize: '25px',
                            fontWeight: '400'
                        }}>{chainlink?.symbol}</h3>
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '90px'
                    }}>
                        <p style={{
                            fontSize: '25px'
                        }}>${chainlink?.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        <p style={{
                            fontSize: '25px',
                            fontWeight: 'bold'
                        }} className={`ul-change ${chainlink?.priceChange1d >= 0 ? 'green' : 'red'}`}
                        >{chainlink?.priceChange1d}%</p>
                    </div>
                </div>
                </a>
            </div>
        </section>
    )
}