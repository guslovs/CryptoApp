import { useState } from "react"
import QR from '../../images/dummy-qr.jpg'

export default function Login() {

    const displayedCode1 =
        <div className="code1-div">
            <p>Scan the QR code below in the Crypto.com App to log in right away.</p>
            <img src={QR} alt="" />
            <p>Steps:</p>
            <ol>
                <li>Open the Crypto App</li>
                <li>Tap Menu {'>'} Settings {'>'} QR Code Scanner</li>
                <li>Scan the QR code below</li>
            </ol>
        </div>

    const displayedCode2 =
        <div className="code2-div">
            <div>
                <input
                    type="text"
                    placeholder="Enter your email address" />
                <button><a style={{ textDecoration: 'none', color: 'white' }} href="/">Log In</a></button>
            </div>
            <p>By submitting your email, you confirm you've read this <a style={{ textDecoration: 'none' }} href="https://crypto.com/privacy/en"><span className="blue-words">Privacy Notice</span></a></p>
        </div>

    const [activeCode, setActiveCode] = useState(displayedCode1)

    function handleActiveCode(code) {
        setActiveCode(code)
    }


    return (
        <section className="login">
            <div style={{
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
                top: '80px',
            }}>
                <div style={{
                    height: '620px',
                    width: '560px',
                    backgroundColor: '#061121',
                    borderRadius: '16px'
                }}>
                    <h1 style={{
                        fontSize: '40px',
                        position: 'relative',
                        left: '40px',
                        top: '30px'
                    }}>Log In to Crypto</h1>
                    <p style={{
                        position: 'relative',
                        left: '40px',
                        top: '10px'
                    }}>Don't have an account? <a style={{ textDecoration: 'none' }} href="/signup"><span className="blue-words">Sign up now</span></a></p>
                    <div style={{
                        position: 'relative',
                        left: '35px',
                        top: '30px'
                    }}>
                        <button style={{
                            fontSize: '20px',
                            color: 'white',
                            backgroundColor: 'transparent',
                            border: '0px',
                            cursor: 'pointer'
                        }} onClick={() => handleActiveCode(displayedCode1)}>QR Code</button>
                        <button style={{
                            fontSize: '20px',
                            color: 'white',
                            backgroundColor: 'transparent',
                            border: '0px',
                            cursor: 'pointer',
                            position: 'relative',
                            left: '20px'
                        }} onClick={() => handleActiveCode(displayedCode2)}>Email</button>
                    </div>
                    <div style={{
                        position: 'relative',
                        top: '50px'
                    }}>
                        {activeCode}
                    </div>
                </div>
            </div>
        </section>
    )
}