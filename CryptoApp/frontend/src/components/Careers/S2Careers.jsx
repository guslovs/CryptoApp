import { useState } from "react";
import { TEXT } from "../../../../backend/AboutUsText";
import img1 from '../../images/careers-img.jpg'
import img2 from '../../images/careers-img2.jpg'

export default function Section2Careers() {

    const [text, setText] = useState(TEXT[0].text)

    function handleText(newText) {
        setText(newText)
    }

    return (
        <section className="section2-Careers">
            <div style={{
                position: 'relative',
                left: '200px',
                top: '50px'
            }}>
                <h1 style={{
                    fontSize: '70px'
                }}>Our Vision</h1>
                <p style={{
                    fontSize: '40px',
                    fontWeight: 'bold',
                    width: '700px'
                }}>Cryptocurrency in Every Wallet™. At Crypto, we are on a mission to accelerate the world's transition to cryptocurrency.</p>
            </div>

            <div style={{
                display: 'flex',
                gap: '40px',
                justifyContent: 'center',
                position: 'relative',
                top: '100px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <button onClick={() => handleText(TEXT[0].text)}>Think Clearly</button>
                    <button onClick={() => handleText(TEXT[1].text)}>Be Resourceful</button>
                    <button onClick={() => handleText(TEXT[2].text)}>Stay Determined</button>
                    <button onClick={() => handleText(TEXT[3].text)}>Dream Big</button>
                    <button onClick={() => handleText(TEXT[4].text)}>Take Ownership and Be Decisive</button>
                    <button onClick={() => handleText(TEXT[5].text)}>Remain Humble</button>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <p style={{
                        width: '600px',
                        fontSize: '30px',
                        fontWeight: 'bold'
                    }}>{text}</p>
                </div>
            </div>

            <div style={{
                display: 'flex',
                position: 'relative',
                top: '155px'
            }}>
                <div style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: 'cover',
                    width: '50%',
                    height: '500px'
                }}></div>
                <div style={{
                    backgroundImage: `url(${img2})`,
                    backgroundSize: 'cover',
                    width: '50%',
                    height: '500px'
                }}></div>
            </div>
        </section>
    )
}