import checkmark from '../../images/checkmark.jpg'
import eu from '../../images/eu.svg'
import globe from '../../images/globe.svg'
import usa from '../../images/usa.svg'
import australia from '../../images/australia.svg'
import canada from '../../images/canada.svg'
import { motion } from 'framer-motion'

export default function Section4Roadmap() {
    return (
        <section className="section4-Roadmap">
            <div style={{
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                gap: '280px',
                position: 'relative',
                top: '240px',
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
                    }}>STOCKS</h1>
                </motion.div>
                <motion.div style={{
                    display: 'flex',
                    background: `linear-gradient(to right, darkblue, #71797E, black)`,
                    width: '795px',
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
                        }}>Stock & ETF Trading</p>
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
                        }} src={australia} alt="" />
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            right: '35px',
                            height: '25px',
                            width: '25px'
                        }} src={canada} alt="" />
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            right: '50px',
                            height: '25px',
                            width: '25px'
                        }} src={eu} alt="" />
                    </div>
                </motion.div>
            </div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, darkblue, #71797E, black)`,
                width: '795px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '250px',
                left: '575px'
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
                    }}>Sports Contract Trading</p>
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
                    }} src={globe} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, #71797E, black)`,
                width: '605px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '260px',
                left: '765px'
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
                    }}>Stock Options</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        height: '25px',
                        width: '25px'
                    }} src={usa} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, #71797E, black)`,
                width: '460px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '270px',
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
                    }}>FX, Commodities and Index Derivatives</p>
                    <img style={{
                        position: 'relative',
                        top: '22.5px',
                        right: '75px',
                        height: '25px',
                        width: '25px'
                    }} src={usa} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '22.5px',
                        right: '90px',
                        height: '25px',
                        width: '25px'
                    }} src={eu} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '22.5px',
                        right: '105px',
                        height: '25px',
                        width: '25px'
                    }} src={australia} alt="" />
                </div>
            </motion.div>
            <hr style={{
                position: 'relative',
                top: '280px',
                width: '80%'
            }} />
        </section>
    )
}