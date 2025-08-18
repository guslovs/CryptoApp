import QR from '../../images/dummy-qr.jpg'
import img from '../../images/pay-img3.webp'
import { useState } from 'react'

export default function Section6Pay() {

    const [QRCode, setQRCode] = useState(false)

    function handleQRCode() {
        setQRCode(true)
    }

    const qrPopup =
    <div style={{
        height: '120px',
        width: '120px',
        backgroundColor: '#1199FA',
        textAlign: 'center',
        borderRadius: '10px',
        position: 'relative',
        bottom: '70px'
    }}>
        <img style={{
            width: '100px',
            height: '100px',
            borderRadius: '10px',
            position: 'relative',
            top: '10px'
        }} src={QR} alt="" />
    </div>

    return (
        <section className="section6-Pay">
            <div style={{ display: 'grid', placeItems: 'center' }}>
                <h1>Get started with Crypto Pay</h1>
                <p style={{
                    fontSize: '25px',
                    fontWeight: 'bold',
                    color: 'gray',
                    textAlign: 'center',
                    width: '500px',
                    position: 'relative',
                    bottom: '100px'
                }}>Discover all the ways that you can spend crypto on the Crypto.com App and get rewarded.</p>
                {QRCode ? qrPopup : <button onClick={handleQRCode} style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    height: '50px',
                    width: '180px',
                    border: '0px',
                    backgroundColor: '#1199FA',
                    borderRadius: '24px',
                    position: 'relative',
                    bottom: '90px',
                    cursor: 'pointer'
                }}>Get Started <img style={{
                    width: '22.5px',
                    height: '22.5px',
                    position: 'relative',
                    top: '2px',
                    left: '2px'
                }} src={QR} alt="" /></button>}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                left: '210px',
                width: '1080px',
                height: '315px'
            }}>
                <div style={{
                    backgroundColor: '#E9EAEC',
                    borderTopLeftRadius: '24px',
                    borderBottomLeftRadius: '24px'
                }}>
                    <h2 style={{
                        width: '300px',
                        fontSize: '30px',
                        position: 'relative',
                        left: '10px'
                    }}><span className='blue-words'>Start accepting crypto payment</span> from 400m+ users around the world.</h2>
                    <a href="/signup">
                        <button style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            height: '45px',
                            width: '230px',
                            borderRadius: '24px',
                            cursor: 'pointer',
                            color: 'white',
                            position: 'relative',
                            left: '10px',
                            top: '50px',
                            backgroundColor: '#061121'
                        }}>Pay Merchant Sign Up</button>
                    </a>
                </div>
                <div>
                    <img style={{
                        width: '715px',
                        height: '315px',
                        borderTopRightRadius: '24px',
                        borderBottomRightRadius: '24px'
                    }} src={img} alt="" />
                </div>
            </div>
        </section>
    )
}