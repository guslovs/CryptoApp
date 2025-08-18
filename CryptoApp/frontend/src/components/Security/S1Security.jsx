import { motion } from "framer-motion"

export default function Section1Security() {
    return (
        <section className="section1-Security">
            <div style={{
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
                top: '50px'
            }}>
                <motion.h1 style={{
                    fontSize: '50px'
                }}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    Security First, Always</motion.h1>
                <p style={{
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    width: '800px',
                    color: 'gray'
                }}>As the world’s leading cryptocurrency platform for licenses, registrations, and security certifications, our commitment to our customers is built on trust. We believe that security and data privacy are the foundations of achieving mainstream cryptocurrency adoption.</p>
            </div>

            <div style={{
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
                top: '180px'
            }}>
                <motion.h1 style={{
                    fontSize: '50px'
                }}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    Our Philosophy</motion.h1>
                <motion.h3 style={{
                    fontSize: '25px'
                }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    Security and Privacy by Design and By Default</motion.h3>
                <motion.p style={{
                    textAlign: 'center',
                    width: '600px',
                    position: 'relative',
                    bottom: '30px'
                }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    We drive a Zero Trust, Defence in Depth security strategy across our systems and platforms. Data privacy assessments are built into our processes to safeguard your personal information.</motion.p>
                <motion.h3 style={{
                    fontSize: '25px'
                }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    Empowering a Growth Mindset</motion.h3>
                <motion.p style={{
                    textAlign: 'center',
                    width: '600px',
                    position: 'relative',
                    bottom: '30px'
                }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    To continually strengthen our security posture, we invest heavily in ongoing security and privacy awareness training for all staff.</motion.p>
            </div>
        </section>
    )
}