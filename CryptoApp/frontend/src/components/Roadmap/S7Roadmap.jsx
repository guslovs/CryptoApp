import qr from '../../images/dummy-qr.jpg'
import { useState } from 'react'

export default function Section7Roadmap() {

    const [QRCode, setQRCode] = useState(false)

    function handleQRCode() {
        setQRCode(true)
    }

    const qrPopup =
        <div style={{
            height: '120px',
            width: '120px',
            backgroundColor: 'black',
            textAlign: 'center',
            borderRadius: '10px',
            position: 'relative',
            bottom: '15px'
        }}>
            <img style={{
                width: '100px',
                height: '100px',
                borderRadius: '10px',
                position: 'relative',
                top: '10px'
            }} src={qr} alt="" />
        </div>

    return (
        <section className="section7-Roadmap">
            <div style={{
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
                top: '20px'
            }}>
                <h3 style={{
                    fontSize: '30px',
                    position: 'relative',
                    top: '30px'
                }}>LEVEL UP</h3>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '60px',
                    width: '800px'
                }}>One rewarding experience for everything</h1>
                <p style={{
                    textAlign: 'center',
                    fontSize: '20px',
                    width: '700px',
                    position: 'relative',
                    bottom: '25px',
                    color: '#D3D3D3'
                }}>Learn more about how you can level up your crypto, stocks, access to banking and cards, while earning rewards along the way.</p>
                <div style={{
                    display: 'flex',
                    gap: '40px'
                }}>
                    {QRCode ? qrPopup : <button onClick={handleQRCode} style={{
                        fontSize: '20px',
                        height: '45px',
                        width: '170px',
                        borderRadius: '24px',
                        border: '0px',
                        color: '#0B1426',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>Get Started <img style={{
                        width: '20px',
                        height: '20px',
                        position: 'relative',
                        top: '2.5px',
                        left: '5px'
                    }} src={qr} alt="" /></button>}
                    <a href="/levelup"><button style={{
                        fontSize: '20px',
                        height: '45px',
                        width: '190px',
                        backgroundColor: 'transparent',
                        color: 'white',
                        border: '0px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>Level Up Now 🡢</button></a>
                </div>
            </div>
        </section>
    )
}