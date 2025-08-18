import australia from '../../images/australia.svg'
import checkmark from '../../images/checkmark.jpg'
import eu from '../../images/eu.svg'
import usa from '../../images/usa.svg'
import uk from '../../images/uk.svg'
import globe from '../../images/globe.svg'
import { motion } from 'framer-motion'

export default function Section5Roadmap() {
    return (
        <section className="section5-Roadmap">
            <div style={{
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                gap: '280px',
                position: 'relative',
                left: '10px',
                top: '290px',
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
                    }}>BANKING</h1>
                </motion.div>
                <motion.div style={{
                    display: 'flex',
                    background: `linear-gradient(to right, darkblue, #71797E, black)`,
                    width: '790px',
                    borderTopLeftRadius: '12px',
                    borderBottomLeftRadius: '32px',
                    position: 'relative',
                    right: '20px'
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
                        }}>Personal Multi-Currency Accounts</p>
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            height: '25px',
                            width: '25px'
                        }} src={eu} alt="" />
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            right: '17.5px',
                            height: '25px',
                            width: '25px'
                        }} src={uk} alt="" />
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            right: '35px',
                            height: '25px',
                            width: '25px'
                        }} src={australia} alt="" />
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            right: '50px',
                            height: '25px',
                            width: '25px'
                        }} src={usa} alt="" />
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            right: '65px',
                            height: '25px',
                            width: '25px'
                        }} src={globe} alt="" />
                    </div>
                </motion.div>
            </div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, #71797E, black)`,
                width: '607.5px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '300px',
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
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        position: 'relative',
                        left: '20px'
                    }}>Yield on Cash</p>
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
                    }} src={uk} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '30px',
                        height: '25px',
                        width: '25px'
                    }} src={eu} alt="" />
                    <img style={{
                        position: 'relative',
                        top: '12.5px',
                        right: '45px',
                        height: '25px',
                        width: '25px'
                    }} src={australia} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                background: `linear-gradient(to right, #71797E, black)`,
                width: '460px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '32px',
                position: 'relative',
                top: '310px',
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
                    }}>1 Second, 1 Cent Global Transfers</p>
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
                top: '320px',
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
                    }}>International Bank Accounts</p>
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
                top: '330px',
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
                    }}>Bussiness Accounts</p>
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
                top: '340px',
                width: '80%'
            }} />
        </section>
    )
}