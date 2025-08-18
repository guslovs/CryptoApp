import image from '../../images/Logo.png'
import { motion } from "framer-motion";

export default function Section3HomePage() {
    return (
        <section className='section3-HomePage'>
            <motion.h4
                className='blue-words'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                OUR VISION</motion.h4>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                Cryptocurrency in Every Wallet&trade;</motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img src={image} alt="Logo" className='img-Navigation' />
            </motion.div>

            <motion.ul
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <li>
                    Founded in <p className='adjustment'>2016</p>
                </li>
                <li>
                    Users <p className='adjustment'>140M</p>
                </li>
            </motion.ul>
            <div className='button-div'>
                <a href="/about-us">
                    <button>About Us 🡢</button>
                </a>
            </div>
        </section>
    )
}