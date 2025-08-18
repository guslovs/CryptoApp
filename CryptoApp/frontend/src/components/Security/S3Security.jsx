import img from '../../images/security-img.webp'
import img2 from '../../images/security-img2.webp'
import img3 from '../../images/security-img3.webp'
import img4 from '../../images/security-img4.webp'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Section3Security() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"],
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 200])
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])

    const x2 = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -80])

    const x3 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -80])

    const x4 = useTransform(scrollYProgress, [0, 1], [0, -200])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <section className="section3-Security">
            <div style={{
                display: 'flex'

            }}>
                <motion.div style={{
                    display: 'grid',
                    placeItems: 'center',
                    position: 'relative',
                    left: '1120px',
                    top: '200px',
                    x: x1,
                    y: y1
                }}>
                    <img style={{
                        width: '240px',
                        height: '405px'
                    }} src={img4} alt="" />
                </motion.div>

                <motion.div style={{
                    display: 'grid',
                    placeItems: 'center',
                    position: 'relative',
                    left: '830px',
                    top: '160px',
                    x: x2,
                    y: y2
                }}>
                    <img style={{
                        width: '240px',
                        height: '405px'
                    }} src={img3} alt="" />
                </motion.div>

                <motion.div style={{
                    display: 'grid',
                    placeItems: 'center',
                    position: 'relative',
                    left: '540px',
                    top: '130px',
                    x: x3,
                    y: y3
                }}>
                    <img style={{
                        width: '240px',
                        height: '405px'
                    }} src={img2} alt="" />
                </motion.div>

                <motion.div style={{
                    display: 'grid',
                    placeItems: 'center',
                    position: 'relative',
                    left: '250px',
                    top: '100px',
                    x: x4,
                    y: y4
                }}>
                    <img style={{
                        width: '240px',
                        height: '405px'
                    }} src={img} alt="" />
                </motion.div>
            </div>

            <div style={{
                position: 'relative',
                top: '200px',
                left: '200px'
            }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                        position: 'relative',
                        bottom: '35px'
                    }} className='blue-words'
                    >
                        Crypto App</p>
                    <h1 style={{
                        fontSize: '50px',
                        width: '700px',
                        position: 'relative',
                        bottom: '60px'
                    }}
                    >
                        Best-in-class security features</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h3 style={{
                        fontSize: '30px'
                    }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        We follow a Secure Software Development Lifecycle.</h3>
                    <p style={{
                        fontSize: '20px',
                        width: '700px',
                        color: 'gray'
                    }}>Security is baked into our coding lifecycle. Our software is peer-reviewed and uses a combination of static and dynamic source code analysis tools.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h3 style={{
                        fontSize: '30px'
                    }}>We use the latest security features.</h3>
                    <p style={{
                        fontSize: '20px',
                        width: '700px',
                        color: 'gray'
                    }}>Your account is protected by the latest security advancements, including Passkeys, HSMs and FIDO2, as well as MFA methods like password, biometric, and authenticator codes.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h3 style={{
                        fontSize: '30px'
                    }}>We ensure withdrawal protection.</h3>
                    <p style={{
                        fontSize: '20px',
                        color: 'gray'
                    }}>Whitelisting external addresses through email verification is mandatory.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h3 style={{
                        fontSize: '30px'
                    }}>We provide 24/7 live customer support.</h3>
                    <p style={{
                        fontSize: '20px',
                        color: 'gray'
                    }}>It’s our priority to help you make the most of your Crypto.com experience.</p>
                </motion.div>
            </div>
        </section>
    )
}