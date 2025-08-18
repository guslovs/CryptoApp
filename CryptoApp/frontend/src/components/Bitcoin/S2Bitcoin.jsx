import BTC from '../../images/bitcoin.png'
import btcImg from '../../images/btc-buy-img.webp'
import btcImg2 from '../../images/btc-buy-img2.webp'
import btcImg3 from '../../images/btc-buy-img3.webp'

export default function Section2Bitcoin() {
    return (
        <section className="section2-Bitcoin">
            <div style={{
                width: '1000px',
                textAlign: 'center',
                backgroundColor: 'white',
                margin: '0 auto',
                position: 'relative',
                bottom: '90px',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '20px'
                }}>
                    <h1 style={{
                        fontSize: '60px',
                        position: 'relative',
                        left: '50px'
                    }}>Bitcoin</h1>
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        border: '1px solid black',
                        height: '50px',
                        width: '120px',
                        borderRadius: '30px',
                        position: 'relative',
                        left: '50px',
                        top: '60px'
                    }}>
                        <img style={{
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                            top: '5px',
                            left: '7px'
                        }} src={BTC} alt="" />
                        <p style={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            position: 'relative',
                            bottom: '15px',
                            left: '5px'
                        }}>BTC</p>
                    </div>
                </div>

                <p style={{
                    color: '#323C52',
                    textAlign: 'left',
                    fontSize: '22.5px',
                    width: '925px',
                    position: 'relative',
                    left: '50px',
                    bottom: '30px',
                    marginBottom: '40px'
                }}>In the ever-evolving landscape of cryptocurrency, one name stands out as the pioneer that sparked a revolution: Bitcoin. Since its inception in 2008 by an individual or group using the pseudonym Satoshi Nakamoto, Bitcoin — often referred to as ‘digital gold’ — has captivated the financial world and grown to become the world's foremost digital currency, celebrated for its autonomy, security, and potential as a store of value.</p>
                <p style={{
                    color: '#323C52',
                    textAlign: 'left',
                    fontSize: '22.5px',
                    width: '925px',
                    position: 'relative',
                    left: '50px',
                    bottom: '30px',
                    marginBottom: '40px'
                }}>Launched in 2009, Bitcoin operates independently of any central authority, such as a government or bank, and is used to buy goods and services online or exchanged for other cryptocurrencies. It is based on a technology called blockchain, a decentralised ledger that records all transactions made within the network, and does not have physical properties, existing solely in digital form. Each Bitcoin transaction is recorded on the blockchain, making it transparent and auditable.</p>
                <p style={{
                    color: '#323C52',
                    textAlign: 'left',
                    fontSize: '22.5px',
                    width: '925px',
                    position: 'relative',
                    left: '50px',
                    bottom: '30px',
                    marginBottom: '20px'
                }}>There are several benefits Bitcoin offers, including fast and low-cost transactions, especially for international transfers. As a large part of the global population remains unbanked — with no access to financial services or ability to qualify for bank accounts — Bitcoin is capable of providing financial inclusivity, as anyone with an internet connection can, in principle, access and use Bitcoin, regardless of their location.</p>
                <hr style={{
                    width: '90%'
                }} />

                <h3 style={{
                    marginTop: '50px',
                    fontSize: '28px',
                    textAlign: 'left',
                    position: 'relative',
                    left: '50px',
                    bottom: '15px'
                }}>Buy Bitcoin in <span className='blue-words'>3 Steps</span></h3>
                <div style={{
                    display: 'flex',
                    gap: '30px',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        width: '280px'
                    }}>
                        <img style={{
                            height: '230px',
                            width: '280px',
                            borderRadius: '24px'
                        }} src={btcImg} alt="" />
                        <h3 style={{
                            textAlign: 'left',
                            fontSize: '22px'
                        }}><span className='blue-words'>1.</span>  Download our app</h3>
                        <p style={{
                            color: '#323C52',
                            textAlign: 'left'
                        }}>Our app is available on the App Store as well as Play Store.</p>
                    </div>
                    <div style={{
                        width: '280px'
                    }}>
                        <img style={{
                            height: '230px',
                            width: '280px',
                            borderRadius: '24px'
                        }} src={btcImg2} alt="" />
                        <h3 style={{
                            textAlign: 'left',
                            fontSize: '22px'
                        }}><span className='blue-words'>2.</span>  Fund your wallet</h3>
                        <p style={{
                            color: '#323C52',
                            textAlign: 'left'
                        }}>Once verified, you can deposit USD via bank transfer or credit card to your FIAT wallet.</p>
                    </div>
                    <div style={{
                        width: '280px'
                    }}>
                        <img style={{
                            height: '230px',
                            width: '280px',
                            borderRadius: '24px'
                        }} src={btcImg3} alt="" />
                        <h3 style={{
                            textAlign: 'left',
                            fontSize: '22px'
                        }}><span className='blue-words'>3.</span>  Buy Bitcoin</h3>
                        <p style={{
                            color: '#323C52',
                            textAlign: 'left'
                        }}>Verified and funded, you are now all set for your first Bitcoin purchase!</p>
                    </div>
                </div>
                <a href="/signup">
                    <button style={{
                        marginTop: '20px',
                        marginBottom: '20px',
                        width: '90%',
                        height: '50px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        borderRadius: '24px',
                        cursor: 'pointer'
                    }}>Buy BTC on the App</button>
                </a>
            </div>
        </section>
    )
}