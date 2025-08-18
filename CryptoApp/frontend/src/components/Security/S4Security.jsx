import cert1 from '../../images/cert1.webp'
import cert2 from '../../images/cert2.webp'
import cert3 from '../../images/cert3.webp'
import cert4 from '../../images/cert4.webp'
import cert5 from '../../images/cert5.webp'
import one from '../../images/hacker-one.webp'
import external from '../../images/external-link.png'
import { motion } from 'framer-motion'

export default function Section4Security() {
    return (
        <section className="section4-Security">
            <div style={{
                position: 'relative',
                left: '200px',
                top: '200px'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                        position: 'relative',
                        bottom: '75px'
                    }} className='blue-words'>Crypto App</p>
                    <h1 style={{
                        fontSize: '50px',
                        position: 'relative',
                        bottom: '80px',
                        width: '800px'
                    }}>Setting the highest standard for transparency and accountability</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h3 style={{
                        fontSize: '30px'
                    }}>Certifications and Assessments</h3>
                    <p style={{
                        fontSize: '20px',
                        width: '800px',
                        color: 'gray'
                    }}>Crypto is built on a solid foundation of security, privacy and compliance and is the first cryptocurrency company in the world to have ISO 22301:2019, ISO/IEC 27701:2019, ISO/IEC 27001:2022 and PCI DSS v4.0 Level 1 Service Provider compliance, and independently assessed at Tier 4, the highest level for both NIST Cybersecurity and Privacy Frameworks, as well as Service Organization Control (SOC) 2 Type II compliance. Crypto.com has also engaged globally recognised security consulting and auditing firms like Kudelski Security to stress test and audit our core Blockchain systems.</p>
                    <div style={{
                        display: 'flex',
                        gap: '40px'
                    }}>
                        <img style={{
                            width: '70px',
                            height: '80px'
                        }} src={cert1} alt="" />
                        <img style={{
                            width: '150px',
                            height: '80px'
                        }} src={cert2} alt="" />
                        <img style={{
                            width: '75px',
                            height: '80px'
                        }} src={cert3} alt="" />
                        <img style={{
                            width: '75px',
                            height: '80px'
                        }} src={cert4} alt="" />
                        <img style={{
                            width: '150px',
                            height: '80px'
                        }} src={cert5} alt="" />
                    </div>
                </motion.div>

                <motion.div style={{
                    display: 'flex',
                    gap: '250px',
                    position: 'relative',
                    top: '100px'
                }}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div>
                        <h3 style={{
                            fontSize: '30px'
                        }}>Hacker One Bug Bounty</h3>
                        <p style={{
                            fontSize: '20px',
                            width: '800px',
                            color: 'gray'
                        }}>Crypto.com recognises the importance of security researchers in helping to keep our community safe. We encourage responsible disclosure of security vulnerabilities via our external bug bounty program on the leading platform, Hacker One.</p>

                        <a href="https://hackerone.com/crypto?type=team">
                            <button style={{
                                position: 'relative',
                                top: '50px',
                                fontSize: '20px',
                                height: '45px',
                                width: '320px',
                                border: '2px #1199FA solid',
                                borderRadius: '24px',
                                backgroundColor: 'white',
                                cursor: 'pointer'
                            }}>Visit Our Hacker One Page <img style={{
                                position: 'relative',
                                top: '3px'
                            }} src={external} alt="" /></button>
                        </a>
                    </div>
                    <div>
                        <img src={one} alt="" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}