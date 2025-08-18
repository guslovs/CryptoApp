import QR from '../../images/dummy-qr.jpg'
import bg from '../../images/pay-bg.avif'
import logo from '../../images/Logo.png'
import { useState } from 'react'

export default function Section1Pay() {

    const [QRCode, setQRCode] = useState(false)

    function handleQRCode() {
        setQRCode(true)
    }

    const qrPopup =
        <img style={{
            width: '90px',
            height: '90px',
            borderRadius: '10px',
            position: 'relative',
            bottom: '100px'
        }} src={QR} alt="" />

    return (
        <section style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            height: '700px'
        }} className="section1-Pay">
            <div style={{
                position: 'relative',
                left: '175px',
                top: '175px'
            }}>
                <img style={{
                    width: '80px',
                    height: '80px'
                }} src={logo} alt="" />
                <h3 style={{
                    fontSize: '40px',
                    position: 'relative',
                    left: '100px',
                    bottom: '107.5px'
                }}>PAY</h3>
                <h1 style={{
                    fontSize: '50px',
                    width: '500px',
                    position: 'relative',
                    bottom: '100px'
                }}>Spend your crypto anywhere</h1>
                {QRCode ? qrPopup : <button onClick={handleQRCode} style={{
                    position: 'relative',
                    bottom: '100px',
                    height: '50px',
                    width: '150px',
                    borderRadius: '24px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}>Get Started <img style={{
                    width: '15px',
                    height: '15px',
                    position: 'relative',
                    left: '5px',
                    top: '2px'
                }} src={QR} alt='QR' /></button>}
            </div>
        </section>
    )
}