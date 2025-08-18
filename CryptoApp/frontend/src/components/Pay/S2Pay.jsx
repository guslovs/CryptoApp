import ledger from '../../images/ledger.webp'
import starbucks from '../../images/starbucks.jpg'
import apple from '../../images/apple.jpg'
import QR from '../../images/dummy-qr.jpg'
import nike from '../../images/nike.jpeg'
import adidas from '../../images/adidas.jpg'
import { useState } from 'react'

export default function Section2Pay() {

    const [QRCode, setQRCode] = useState(false)

    function handleQRCode() {
        setQRCode(true)
    }

    const qrPopup =
    <div style={{
        height: '100px',
        width: '100px',
        backgroundColor: 'black',
        textAlign: 'center',
        borderRadius: '10px',
        position: 'relative',
        left: '70px'
    }}>
        <img style={{
            width: '90px',
            height: '90px',
            borderRadius: '10px',
            position: 'relative',
            top: '5px'
        }} src={QR} alt="" />
    </div>

    return (
        <section className="section2-Pay">
            <h1>Shop with popular tokens, including BTC, ETH, PYUSD, and CRO</h1>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <div style={{
                    backgroundImage: `url(${apple})`,
                    backgroundSize: 'cover',
                    width: '350px',
                    height: '250px',
                    borderRadius: '24px'
                }}>
                    <h5 style={{
                        fontSize: '16px',
                        position: 'relative',
                        left: '20px'
                    }}>Apple</h5>
                </div>
                <div style={{
                    backgroundImage: `url(${starbucks})`,
                    backgroundSize: 'cover',
                    width: '350px',
                    height: '250px',
                    borderRadius: '24px'
                }}>
                    <h5 style={{
                        fontSize: '16px',
                        position: 'relative',
                        left: '20px'
                    }}>Starbucks Coffee</h5>
                </div>
                <div style={{
                    backgroundImage: `url(${ledger})`,
                    backgroundSize: 'cover',
                    width: '350px',
                    height: '360px',
                    borderRadius: '24px',
                    backgroundColor: '#D3D3D3'
                }}>
                    <h5 style={{
                        color: 'black',
                        fontSize: '16px',
                        position: 'relative',
                        left: '20px'
                    }}>Ledger</h5>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <div style={{
                    backgroundImage: `url(${nike})`,
                    backgroundSize: 'cover',
                    width: '440px',
                    height: '360px',
                    borderRadius: '24px',
                    position: 'relative',
                    bottom: '90px'
                }}>
                    <h5 style={{
                        color: 'white',
                        fontSize: '16px',
                        position: 'relative',
                        left: '30px',
                        top: '280px'
                    }}>Nike</h5>
                </div>
                <div style={{
                    borderRadius: '24px',
                    width: '260px',
                    height: '360px',
                    backgroundColor: '#D3D3D3',
                    position: 'relative',
                    bottom: '90px'
                }}>
                    <h2 style={{
                        color: 'black',
                        width: '180px',
                        fontSize: '30px',
                        position: 'relative',
                        left: '20px'
                    }}>Up to 10% rewards with the world’s top brands.</h2>
                    {QRCode ? qrPopup : <button onClick={handleQRCode} style={{
                        position: 'relative',
                        top: '50px',
                        left: '20px',
                        height: '50px',
                        width: '150px',
                        border: '0px',
                        borderRadius: '24px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        backgroundColor: '#0B1426',
                        color: 'white'
                    }}>Shop Now <img style={{
                        width: '15px',
                        height: '15px',
                        position: 'relative',
                        left: '5px',
                        top: '2px'
                    }} src={QR} alt="" /></button>}
                </div>
                <div style={{
                    backgroundImage: `url(${adidas})`,
                    backgroundSize: 'cover',
                    width: '350px',
                    height: '250px',
                    borderRadius: '24px',
                    position: 'relative',
                    top: '20px'
                }}>
                    <h5 style={{
                        color: 'white',
                        fontSize: '16px',
                        position: 'relative',
                        left: '20px',
                        top: '170px'
                    }}>Adidas</h5>
                </div>
            </div>
        </section>
    )
}