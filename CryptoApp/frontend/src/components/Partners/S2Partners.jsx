import f1 from '../../images/f1.webp'
import ucl from '../../images/ucl.png'
import ufc from '../../images/ufc.png'
import f1Miami from '../../images/f1-miami.webp'
import logo from '../../images/Logo.png'
import afl from '../../images/afl.png'
import la from '../../images/la-kings.png'
import sixers from '../../images/76ers.png'
import conmebol from '../../images/conmebol.png'
import { motion } from 'framer-motion'

export default function Section2Partners() {
    return (
        <section className="section2-Partners">
            <motion.div style={{
                display: 'flex',
                gap: '150px',
                justifyContent: 'center',
                position: 'relative',
                top: '150px',
                left: '40px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    width: '230px'
                }}>
                    <img style={{
                        height: '35px',
                        width: '135px'
                    }} src={f1} alt="" />
                </div>
                <div style={{
                    width: '230px'
                }}>
                    <img style={{
                        width: '130px',
                        height: '130px',
                        position: 'relative',
                        bottom: '40px'
                    }} src={ucl} alt="" />
                </div>
                <div style={{
                    width: '230px'
                }}>
                    <img style={{
                        width: '130px',
                        height: '45px'
                    }} src={ufc} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                gap: '150px',
                justifyContent: 'center',
                position: 'relative',
                top: '210px',
                left: '40px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    width: '230px'
                }}>
                    <img style={{
                        width: '150px',
                        height: '80px'
                    }} src={f1Miami} alt="" />
                </div>
                <div style={{
                    width: '230px'
                }}>
                    <img style={{
                        width: '100px',
                        height: '100px',
                        position: 'relative',
                        left: '15px'
                    }} src={logo} alt="" />
                </div>
                <div style={{
                    width: '230px'
                }}>
                    <img style={{
                        width: '150px',
                        height: '85px'
                    }} src={afl} alt="" />
                </div>
            </motion.div>

            <motion.div style={{
                display: 'flex',
                gap: '150px',
                justifyContent: 'center',
                position: 'relative',
                top: '300px',
                left: '40px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    width: '230px'
                }}>
                    <img style={{
                        width: '160px',
                        height: '90px'
                    }} src={la} alt="" />
                </div>
                <div style={{
                    width: '230px'
                }}>
                    <img style={{
                        width: '150px',
                        height: '90px',
                        position: 'relative',
                        right: '15px'
                    }} src={sixers} alt="" />
                </div>
                <div style={{
                    width: '230px'
                }}>
                    <img style={{
                        width: '150px',
                        height: '95px'
                    }} src={conmebol} alt="" />
                </div>
            </motion.div>
        </section>
    )
}