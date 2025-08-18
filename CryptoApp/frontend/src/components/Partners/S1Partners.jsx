import video from '../../images/about-us-video.mp4';
import { motion } from 'framer-motion';

export default function Section1Partners() {
    return (
        <section className="section1-Partners">
            <div>
                <video style={{
                }} autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div style={{
                    display: 'grid',
                    placeItems: 'center',
                    position: 'relative',
                    bottom: '850px'
                }}>
                    <motion.p style={{
                        fontSize: '30px',
                        fontWeight: 'bold'
                    }} className='blue-words'
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        OUR PARTNERS</motion.p>
                    <motion.h1 style={{
                        fontSize: '70px',
                        textAlign: 'center'
                    }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        Reaching the next billion users with the world's best partners</motion.h1>
                </div>
            </div>
        </section>
    )
}