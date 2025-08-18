import video from '../../images/about-us-video.mp4';
import { motion } from 'framer-motion';

export default function Section2AboutUs() {
    return (
        <section className="section2-AboutUs">
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
                    <p style={{
                        fontSize: '30px',
                        fontWeight: 'bold'
                    }} className='blue-words'>OUR PARTNERS</p>
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
                    <a href="/partners">
                        <button>Learn More 🡢</button>
                    </a>
                </div>
            </div>
        </section>
    );
}