import australia from '../../images/australia.svg'
import checkmark from '../../images/checkmark.jpg'
import eu from '../../images/eu.svg'
import globe from '../../images/globe.svg'
import uk from '../../images/uk.svg'
import usa from '../../images/usa.svg'
import korea from '../../images/korea.svg'
import { motion } from 'framer-motion'

export default function Section6Roadmap() {
    return (
        <section className="section6-Roadmap">
            <div style={{
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                gap: '110px',
                position: 'relative',
                top: '350px',
            }}>
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
                    }}>CARDS</h1>
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
                        }}>Debit Card Expansion to Latin America, Middle East & Africa</p>
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            height: '25px',
                            width: '25px'
                        }} src={globe} alt="" />
                    </div>
                </motion.div>
            </div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, darkblue, #71797E, black)`,
                width: '607.5px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '360px',
                left: '760px'
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
                    <img style={{
                        height: '50px',
                        width: '50px',
                        borderBottomLeftRadius: '28px',
                        borderTopLeftRadius: '12px'
                    }} src={checkmark} alt="" />
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                    }}>Credit Cards</p>
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '20px',
                        height: '25px',
                        width: '25px'
                    }} src={usa} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '35px',
                        height: '25px',
                        width: '25px'
                    }} src={korea} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, #71797E, black)`,
                width: '460px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '370px',
                left: '907.5px'
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
                    }}>Prime Card</p>
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
                width: '290px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '380px',
                left: '1077.5px',
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
                    }}>10% Travel Rebate</p>
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
                top: '390px',
                width: '80%'
            }} />
        </section>
    )
}