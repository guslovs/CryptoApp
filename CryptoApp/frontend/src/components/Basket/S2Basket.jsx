import ETH from '../../images/ethereum.png'
import bg from '../../images/bg.png'
import crypto from '../../images/Logo.png'
import pepe from '../../images/pepe.png'
import chainlink from '../../images/chainlink.png'
import shiba from '../../images/shiba-inu.png'
import BTC from '../../images/bitcoin.png'
import solana from '../../images/solana.png'
import xrp from '../../images/xrp.png'
import near from '../../images/near.png'
import internet from '../../images/internet.png'
import bitte from '../../images/bittensor.png'
import artificial from '../../images/artificial.png'
import akash from '../../images/akash.png'

export default function Section2CryptoBasket() {
    return (
        <section className="section2-Basket">
            <h1>Choose from up to 24 thematic baskets, or create your own.</h1>
            <div className="baskets-div">
                <div style={{
                    backgroundImage: `url(${bg})`,
                }}>
                    <h1 style={{
                        fontWeight: '400',
                        position: 'relative',
                        bottom: '20px',
                        right: '70px',
                    }}>Ethereum</h1>
                    <img style={{
                        position: 'relative',
                        bottom: '125px',
                        left: '250px',
                        width: '64px',
                        height: '64px'
                    }} src={ETH} alt="ETH" />
                    <section style={{ display: 'flex', position: 'relative', bottom: '140px', left: '20px' }}>
                        <img style={{ width: '32px', height: '32px' }} src={ETH} alt="" />
                        <img src={shiba} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={crypto} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={pepe} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={chainlink} alt="" />
                    </section>
                </div>
                <div style={{
                    backgroundImage: `url(${bg})`,
                }}>
                    <h1 style={{
                        fontWeight: '400',
                        position: 'relative',
                        bottom: '20px',
                        right: '30px'
                    }}>BTC-ETH Duo</h1>
                    <section style={{ display: 'flex', position: 'relative', bottom: '70px', left: '20px' }}>
                        <img style={{ width: '32px', height: '32px' }} src={BTC} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={ETH} alt="" />
                    </section>
                </div>
                <div style={{
                    backgroundImage: `url(${bg})`
                }}>
                    <h1 style={{
                        fontWeight: '400',
                        fontSize: '35px',
                        position: 'relative',
                        bottom: '20px',
                    }}>Blue Chip ETF Tokens</h1>
                    <section style={{ display: 'flex', position: 'relative', bottom: '60px', left: '20px' }}>
                        <img style={{ width: '32px', height: '32px' }} src={BTC} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={ETH} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={solana} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={xrp} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={crypto} alt="" />
                    </section>
                </div>
                <div style={{
                    backgroundImage: `url(${bg})`
                }}>
                    <h1 style={{
                        fontWeight: '400',
                        position: 'relative',
                        bottom: '20px',
                        right: '120px'
                    }}>AI</h1>
                    <section style={{ display: 'flex', position: 'relative', bottom: '70px', left: '20px' }}>
                        <img style={{ width: '32px', height: '32px' }} src={near} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={internet} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={bitte} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={artificial} alt="" />
                        <img style={{ width: '32px', height: '32px' }} src={akash} alt="" />
                    </section>
                </div>
            </div>
        </section>
    )
}