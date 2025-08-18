import bg from '../../images/security-bg.webp'
import trans from '../../images/transactions.png'
import withdrawals from '../../images/money.png'
import number from '../../images/1.png'
import { motion } from 'framer-motion'

export default function Section2Security() {
    return (
        <section style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            height: '1500px'
        }} className="section2-Security">
            <motion.div style={{
                position: 'relative',
                left: '100px',
                top: '100px'
            }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <p style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    position: 'relative',
                    top: '30px'
                }} className='blue-words' >Deposit and Transaction deposits</p>
                <h1 style={{
                    fontSize: '50px',
                    width: '800px'
                }}>Keeping your funds safe and accessible at your convenience</h1>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                gap: '200px',
                position: 'relative',
                top: '200px'
            }}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    position: 'relative',
                    left: '100px'
                }}>
                    <h1 style={{
                        fontSize: '30px'
                    }}>Users’ fiat currencies are held in regulated custodian bank accounts.</h1>
                    <p style={{
                        fontSize: '18px',
                        width: '1000px',
                        color: 'gray'
                    }}>If you are a U.S. resident, your USD balances are sent to and held by Community Federal Savings Bank or the other FDIC member and insured depository institution as listed here (“network banks”). The list of network banks is subject to change from time to time. Your USD balances and other deposits you may hold at Community Federal Savings Bank or any of the network banks are insured up to $250,000 in the aggregate, but only in the event the respective FDIC member fails. Actual insured amounts may be lower or adversely affected based on any balances you separately hold at a network bank. FDIC insurance does not protect your funds in the event of Crypto.com’s failure or from the risk of theft or fraud.</p>
                </div>
                <div style={{
                    height: '160px',
                    width: '150px',
                    border: '2px white solid',
                    position: 'relative',
                    top: '50px',
                    borderRadius: '24px',
                    backgroundColor: 'white'
                }}>
                    <img style={{
                        position: 'relative',
                        left: '37.5px',
                        top: '35px'
                    }} src={trans} alt="" />
                    <h3 style={{
                        color: 'black',
                        textAlign: 'center',
                        position: 'relative',
                        top: '40px'
                    }}>Transactions</h3>
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                gap: '200px',
                position: 'relative',
                top: '350px'
            }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    position: 'relative',
                    left: '100px'
                }}>
                    <h1 style={{
                        fontSize: '30px'
                    }}>Crypto.com adheres to the principle of least privilege.</h1>
                    <p style={{
                        fontSize: '18px',
                        width: '1000px',
                        color: 'gray'
                    }}>We have strict controls on access rights to funds in both cold and hot wallets.</p>
                </div>
                <div style={{
                    height: '160px',
                    width: '150px',
                    border: '2px white solid',
                    position: 'relative',
                    borderRadius: '24px',
                    backgroundColor: 'white'
                }}>
                    <img style={{
                        position: 'relative',
                        left: '47.5px',
                        top: '35px'
                    }} src={withdrawals} alt="" />
                    <h3 style={{
                        color: 'black',
                        textAlign: 'center',
                        position: 'relative',
                        top: '40px'
                    }}>Withdrawals</h3>
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                gap: '200px',
                position: 'relative',
                top: '500px'
            }}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    position: 'relative',
                    left: '100px'
                }}>
                    <h1 style={{
                        fontSize: '30px'
                    }}>Your virtual assets are stored 100% safely and perfectly.</h1>
                    <p style={{
                        fontSize: '18px',
                        width: '1000px',
                        color: 'gray'
                    }}>We hold all customer assets deposited on our platform in institutional-grade reserve accounts on a 1:1 basis, meaning funds are responsibly backed by Crypto.com and accessible at customers’ convenience. Our users can verify our reserves and their funds through our Proof of Reserves verification page, conducted by an independent third-party.</p>
                    <button style={{
                        position: 'relative',
                        top: '60px',
                        fontSize: '20px',
                        color: 'white',
                        backgroundColor: 'transparent',
                        border: '0px',
                        cursor: 'pointer'
                    }}>Learn how to verify your funds 🡢</button>
                </div>
                <div style={{
                    height: '160px',
                    width: '150px',
                    top: '30px',
                    border: '2px white solid',
                    position: 'relative',
                    borderRadius: '24px',
                    backgroundColor: 'white'
                }}>
                    <img style={{
                        position: 'relative',
                        left: '47.5px',
                        top: '35px'
                    }} src={number} alt="" />
                    <h3 style={{
                        color: 'black',
                        textAlign: 'center',
                        position: 'relative',
                        top: '40px'
                    }}>1:1 Reserve</h3>
                </div>
            </motion.div>
        </section>
    )
}