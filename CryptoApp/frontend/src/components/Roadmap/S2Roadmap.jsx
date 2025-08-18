import checkmark from '../../images/checkmark.jpg'
import satellite from '../../images/satellite.png'
import { motion } from 'framer-motion'

export default function Section2Roadmap() {
    return (
        <section className="section2-Roadmap">
            <motion.div style={{
                display: 'flex',
                gap: '100px',
                justifyContent: 'center',
                position: 'relative',
                top: '100px',
                fontWeight: '400'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    display: 'flex'
                }}>
                    <h1 style={{
                        fontSize: '40px'
                    }}>Q4</h1>
                    <p style={{
                        position: 'relative',
                        top: '45px',
                        left: '10px'
                    }}>2024</p>
                </div>
                <div style={{
                    display: 'flex'
                }}>
                    <h1 style={{
                        fontSize: '40px'
                    }}>Q1</h1>
                    <p style={{
                        position: 'relative',
                        top: '45px',
                        left: '10px'
                    }}>2025</p>
                </div>
                <div>
                    <h1 style={{
                        fontSize: '40px'
                    }}>Q2</h1>
                </div>
                <div>
                    <h1 style={{
                        fontSize: '40px'
                    }}>Q3</h1>
                </div>
                <div>
                    <h1 style={{
                        fontSize: '40px'
                    }}>Q4</h1>
                </div>
            </motion.div>
            <hr style={{
                position: 'relative',
                top: '60px',
                width: '80%'
            }} />

            <motion.div style={{
                height: '50px',
                position: 'relative',
                top: '70px',
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                left: '115px'
            }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div style={{
                    display: 'flex',
                    background: `linear-gradient(to right, darkblue, #0B1426)`,
                    width: '520px',
                    borderTopLeftRadius: '12px',
                    borderBottomLeftRadius: '32px'
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
                        left: '20px'
                    }}>Level Up Launch</p>
                </div>
                <div style={{
                    display: 'flex',
                    background: `linear-gradient(to right, #71797E, black)`,
                    width: '445px',
                    borderTopLeftRadius: '12px',
                    borderBottomLeftRadius: '28px'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '30px'
                    }}>
                        <p style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            position: 'relative',
                            left: '20px'
                        }}>Cortex AI</p>
                        <img style={{
                            position: 'relative',
                            top: '12.5px',
                            height: '25px',
                            width: '25px'
                        }} src={satellite} alt="" />
                    </div>
                </div>
            </motion.div>
            <hr style={{
                position: 'relative',
                top: '80px',
                width: '80%'
            }} />
        </section>
    )
}