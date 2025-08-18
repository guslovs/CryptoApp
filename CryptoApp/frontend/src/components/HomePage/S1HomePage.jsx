import phoneImg from '../../images/Phone.webp'
import { AnimatePresence, motion, rgba, rgbUnit, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react';

export default function Section1HomePage() {

  const ref = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Lift the bottom up (-30deg) → return to 0deg
  const rotateX = useTransform(scrollYProgress, [0, 1], [-30, 0]);

  return (
    <section className='section1-HomePage'>
      <h1>The World's Premier Crypto Trading Platform</h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Buy Bitcoin, Ethereum, and 400+ crypto
      </motion.p>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}>
          <span>☑️ Trade with <span className="blue-words">20+ currencies</span> and Apple/Google Pay</span>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}>
          <span>☑️ Leader in <span className="blue-words">regulatory compliance</span> and <span className="blue-words">security certifications</span></span>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}>
          <span>☑️ Trusted by <span className="blue-words">over 140 million users</span> worldwide</span>
        </motion.li>
      </motion.ul>
      <motion.div style={{
        rotateX,
        transformStyle: 'preserve-3d',
        perspective: '1000',
        marginTop: '3rem',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img
          src={phoneImg}
          alt="Phone"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </motion.div>
    </section>
  )
}