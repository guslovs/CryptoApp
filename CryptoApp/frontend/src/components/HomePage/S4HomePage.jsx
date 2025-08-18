import image from '../../images/Logo.png'
import QR from '../../images/dummy-qr.jpg'
import { Link } from 'react-router-dom'

export default function Section4HomePage() {
    return (
        <section className='section4-HomePage'>
            <div>
                <a href="/"><img src={image} alt="Logo" /></a>
            </div>
            <hr className='upper-hr' />
            <ul>
                <li>
                    <h1>Features</h1>
                    <p><a href='/levelup'>Level Up</a></p>
                    <p><a href="/crypto-basket">Crypto Basket</a></p>
                    <p><a href="/pay">Pay</a></p>
                    <p><a href="/prime">Prime</a></p>
                </li>
                <li>
                    <h1>Learn</h1>
                    <p><a href="/bitcoin">Bitcoin</a></p>
                    <p><a href="/what-is-ethereum">What is Ethereum?</a></p>
                    <p><a href="/what-is-crypto">What is Crypto?</a></p>
                </li>
                <li>
                    <h1>Prices</h1>
                    <p><a href="/crypto-prices">Crypto Prices</a></p>
                    <p><a href="/crypto-prices/bitcoin">Bitcoin Price</a></p>
                    <p><a href="/crypto-prices/ethereum">Ethereum Price</a></p>
                    <p><a href="/converter">BTC/USD Converter</a></p>
                </li>
                <li>
                    <h1>Company</h1>
                    <p><a href="/about-us">About Us</a></p>
                    <p><a href="/roadmap">Roadmap</a></p>
                    <p><a href="/partners">Partners</a></p>
                    <p><a href="/security">Security</a></p>
                    <p><a href="/careers">Careers</a></p>
                </li>
                <li>
                    <h3>Get started with crypto</h3>
                    <img  style={{
                        width: '100px',
                        height: '100px',
                        position: 'relative',
                        left: '52.5px',
                        top: '-5px',
                        borderRadius: '10px'
                    }} src={QR} alt="QR Code" />
                    <p style={{
                        position: 'relative',
                        left: '35px',
                        bottom: '10px'
                    }}>Scan to download</p>
                </li>
            </ul>
            <hr className='middle-hr' />
            <div className='text-div'>
                <p className='upper-p'>The purpose of this website is solely to display information regarding the products and services available on the CryptoApp. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the CryptoApp.</p>
                <p className='lower-p'>Please note that the availability of the products and services on the CryptoApp is subject to jurisdictional limitations. Crypto may not offer certain products, features and/or services on the CryptoApp in certain jurisdictions due to potential or actual regulatory restrictions.</p>
            </div>
            <hr className='lower-hr' />
            <p className='end-p'>Copyright © 2018 - 2025 Crypto. All rights reserved.</p>
        </section>
    )
}