import QR from '../../images/dummy-qr.jpg'
import phone from '../../images/bitcoin-phone.webp'
import { useState } from 'react'

export default function Section6Bitcoin() {

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
            bottom: '15px'
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
        <section className="section6-Bitcoin">
            <div style={{
                height: '400px',
                display: 'flex',
                gap: '150px',
                justifyContent: 'center'
            }}>
                <div style={{
                    position: 'relative',
                    top: '50px'
                }}>
                    <h3 style={{
                        fontSize: '40px',
                        width: '500px'
                    }}>The World’s Leading Cryptocurrency Platform</h3>
                    <p style={{
                        fontSize: '20px',
                        color: '#D3D3D3',
                        position: 'relative',
                        bottom: '10px'
                    }}>Buy Bitcoin, Ethereum, and all your favourite crypto</p>
                    {QRCode ? qrPopup : <button onClick={handleQRCode} style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        height: '40px',
                        width: '250px',
                        border: '0px',
                        borderRadius: '24px',
                        color: 'white',
                        backgroundColor: '#1199FA',
                        cursor: 'pointer'
                    }}>Download the App <img style={{
                        width: '22.5px',
                        height: '22.5px',
                        position: 'relative',
                        top: '2px',
                        left: '2px'
                    }} src={QR} alt="" /></button>}
                </div>
                <img style={{
                    height: '340px',
                    width: '280px',
                    position: 'relative',
                    top: '60px'
                }} src={phone} alt="" />
            </div>
        </section>
    )
}