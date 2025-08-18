import { useState } from "react"
import { TEXT } from "../../../../backend/AboutUsText"

export default function Section5AboutUs() {

    const [text, setText] = useState(TEXT[0].text)

    function handleText(newText) {
        setText(newText)
    }

    return (
        <section className="section5-AboutUs">
            <h1 style={{
                fontSize: '70px',
                textAlign: 'center'
            }}>Our Values</h1>
            <div style={{
                display: 'flex',
                gap: '40px',
                justifyContent: 'center'
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
        </section>
    )
}