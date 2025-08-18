import BTC from '../../images/bitcoin.png'
import tether from '../../images/tether.png'
import chain from '../../images/chainlink.png'
import shiba from '../../images/shiba-inu.png'
import ethena from '../../images/ethena.png'
import doge from '../../images/dogecoin.png'

export default function Section2CryptoPrices() {
    return (
        <section className="section2-Prices">
            <h1 style={{
                fontSize: '30px',
                position: 'relative',
                top: '50px',
                left: '80px'
            }}>What Others Are Searching</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'white',
                width: '1350px',
                position: 'relative',
                top: '40px',
                left: '80px'
            }}>
                <a style={{ textDecoration: 'none', color: 'black' }} href="/crypto-prices/tether">
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center'
                    }}>
                        <img style={{
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                            top: '10px'
                        }} src={tether} alt="" />
                        <h3>Tether</h3>
                        <h3 style={{
                            fontWeight: '400'
                        }}>USDT</h3>
                        <div style={{
                            width: '1px',
                            backgroundColor: 'black',
                            height: '50px',
                            position: 'relative',
                            top: '5px',
                            right: '9px'
                        }}></div>
                    </div>
                </a>

                <a style={{ textDecoration: 'none', color: 'black' }} href="/crypto-prices/bitcoin">
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center'
                    }}>
                        <img style={{
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                            top: '10px'
                        }} src={BTC} alt="" />
                        <h3>Bitcoin</h3>
                        <h3 style={{
                            fontWeight: '400'
                        }}>BTC</h3>
                        <div style={{
                            width: '1px',
                            backgroundColor: 'black',
                            height: '50px',
                            position: 'relative',
                            top: '5px',
                            right: '9px'
                        }}></div>
                    </div>
                </a>

                <a style={{ textDecoration: 'none', color: 'black' }} href="/crypto-prices/chainlink">
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center'
                    }}>
                        <img style={{
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                            top: '10px'
                        }} src={chain} alt="" />
                        <h3>Chainlink</h3>
                        <h3 style={{
                            fontWeight: '400'
                        }}>LINK</h3>
                        <div style={{
                            width: '1px',
                            backgroundColor: 'black',
                            height: '50px',
                            position: 'relative',
                            top: '5px',
                            right: '8.5px'
                        }}></div>
                    </div>
                </a>

                <a style={{ textDecoration: 'none', color: 'black' }} href="/crypto-prices/shiba-inu">
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center'
                    }}>
                        <img style={{
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                            top: '10px'
                        }} src={shiba} alt="" />
                        <h3>Shiba Inu</h3>
                        <h3 style={{
                            fontWeight: '400'
                        }}>SHIB</h3>
                        <div style={{
                            width: '1px',
                            backgroundColor: 'black',
                            height: '50px',
                            position: 'relative',
                            top: '5px',
                            right: '9px'
                        }}></div>
                    </div>
                </a>

                <a style={{ textDecoration: 'none', color: 'black' }} href="/crypto-prices/ethena">
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center'
                    }}>
                        <img style={{
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                            top: '10px'
                        }} src={ethena} alt="" />
                        <h3>Ethena</h3>
                        <h3 style={{
                            fontWeight: '400'
                        }}>ENA</h3>
                        <div style={{
                            width: '1px',
                            backgroundColor: 'black',
                            height: '50px',
                            position: 'relative',
                            top: '5px',
                            right: '8px'
                        }}></div>
                    </div>
                </a>

                <a style={{ textDecoration: 'none', color: 'black' }} href="/crypto-prices/dogecoin">
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center'
                    }}>
                        <img style={{
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                            top: '10px'
                        }} src={doge} alt="" />
                        <h3>Dogecoin</h3>
                        <h3 style={{
                            fontWeight: '400'
                        }}>DOGE</h3>
                    </div>
                </a>
            </div>
        </section >
    )
}