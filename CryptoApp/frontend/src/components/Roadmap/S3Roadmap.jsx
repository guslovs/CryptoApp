import checkmark from '../../images/checkmark.jpg'
import usa from '../../images/usa.svg'
import eu from '../../images/eu.svg'
import globe from '../../images/globe.svg'
import sudan from '../../images/sudan.svg'
import korea from '../../images/korea.svg'
import hongKong from '../../images/hong-kong.svg'
import canada from '../../images/canada.svg'
import singapore from '../../images/singapore.svg'
import { motion } from 'framer-motion'

export default function Section3Roadmap() {
    return (
        <section className="section3-Roadmap">
            <div style={{
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                gap: '80px',
                position: 'relative',
                top: '90px',
            }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h1 style={{
                        fontSize: '35px',
                        position: 'relative',
                        bottom: '30px'
                    }}>CRYPTO</h1>
                </motion.div>

                <motion.div style={{
                    display: 'flex',
                    background: `linear-gradient(to right, darkblue, #0B1426)`,
                    width: '985px',
                    borderTopLeftRadius: '12px',
                    borderBottomLeftRadius: '32px'
                }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img style={{
                        height: '50px',
                        width: '50px',
                        borderBottomLeftRadius: '28px',
                        borderTopLeftRadius: '12px'
                    }} src={checkmark} alt="" />
                    <div style={{
                        display: 'flex',
                        gap: '30px'
                    }}>
                        <p style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            position: 'relative',
                            left: '20px'
                        }}>Web App</p>
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            height: '25px',
                            width: '25px'
                        }} src={usa} alt="" />
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            right: '17.5px',
                            height: '25px',
                            width: '25px'
                        }} src={eu} alt="" />
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            right: '35px',
                            height: '25px',
                            width: '25px'
                        }} src={globe} alt="" />
                    </div>
                </motion.div>
            </div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, darkblue, #0B1426)`,
                width: '985px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '100px',
                left: '380px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img style={{
                    height: '50px',
                    width: '50px',
                    borderBottomLeftRadius: '28px',
                    borderTopLeftRadius: '12px'
                }} src={checkmark} alt="" />
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Crypto Basket</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={globe} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, darkblue, #0B1426)`,
                width: '985px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '110px',
                left: '380px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img style={{
                    height: '50px',
                    width: '50px',
                    borderBottomLeftRadius: '28px',
                    borderTopLeftRadius: '12px'
                }} src={checkmark} alt="" />
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Cronos AI Dev Tools</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={globe} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, darkblue, #71797E, black)`,
                width: '785px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '120px',
                left: '580px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img style={{
                    height: '50px',
                    width: '50px',
                    borderBottomLeftRadius: '28px',
                    borderTopLeftRadius: '12px'
                }} src={checkmark} alt="" />
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Exchange Expansion</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={usa} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '15px',
                        height: '25px',
                        width: '25px'
                    }} src={globe} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, darkblue, #71797E, black)`,
                width: '785px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '130px',
                left: '580px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img style={{
                    height: '50px',
                    width: '50px',
                    borderBottomLeftRadius: '28px',
                    borderTopLeftRadius: '12px'
                }} src={checkmark} alt="" />
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Fiat On/Off Ramp Expansion</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={sudan} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '17.5px',
                        height: '25px',
                        width: '25px'
                    }} src={korea} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '35px',
                        height: '25px',
                        width: '25px'
                    }} src={hongKong} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '50px',
                        height: '25px',
                        width: '25px'
                    }} src={globe} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, darkblue, #0B1426)`,
                width: '785px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '140px',
                left: '580px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img style={{
                    height: '50px',
                    width: '50px',
                    borderBottomLeftRadius: '28px',
                    borderTopLeftRadius: '12px'
                }} src={checkmark} alt="" />
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Rewards on Bitcoin</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={globe} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, darkblue, #0B1426)`,
                width: '600px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '150px',
                left: '765px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img style={{
                    height: '50px',
                    width: '50px',
                    borderBottomLeftRadius: '28px',
                    borderTopLeftRadius: '12px'
                }} src={checkmark} alt="" />
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Crypto Rewards Maximizer</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={globe} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, darkblue, #0B1426)`,
                width: '600px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '160px',
                left: '765px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img style={{
                    height: '50px',
                    width: '50px',
                    borderBottomLeftRadius: '28px',
                    borderTopLeftRadius: '12px'
                }} src={checkmark} alt="" />
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Institutional Custody</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={usa} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '15px',
                        height: '25px',
                        width: '25px'
                    }} src={canada} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '27.5px',
                        height: '25px',
                        width: '25px'
                    }} src={singapore} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '37.5px',
                        height: '25px',
                        width: '25px'
                    }} src={globe} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, #71797E, black)`,
                width: '450px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '170px',
                left: '910px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Crypto Stablecoin</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={globe} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, #71797E, black)`,
                width: '450px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '180px',
                left: '910px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>AI-Powered Trade Tooling</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={globe} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, #71797E, black)`,
                width: '450px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '190px',
                left: '910px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Cronos One</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={globe} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, #71797E, black)`,
                width: '280px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '200px',
                left: '1080px',
                height: '50px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Margined Deratives</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={usa} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '15px',
                        height: '25px',
                        width: '25px'
                    }} src={eu} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, darkblue, #0B1426)`,
                width: '280px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '210px',
                left: '1080px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img style={{
                    height: '50px',
                    width: '50px',
                    borderBottomLeftRadius: '28px',
                    borderTopLeftRadius: '12px'
                }} src={checkmark} alt="" />
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Cronos ETF Submission</p>
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, #71797E, black)`,
                width: '280px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '220px',
                left: '1080px',
                height: '50px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    display: 'flex',
                    gap: '30px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Singularity API</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={globe} alt="" />
                </div>
            </motion.div>
            <hr style={{
                position: 'relative',
                top: '230px',
                width: '80%'
            }} />
        </section>
    )
}