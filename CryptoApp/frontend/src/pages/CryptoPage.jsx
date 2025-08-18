import Section1Crypto from "../components/Crypto/S1Crypto";
import Section2Crypto from "../components/Crypto/S2Crypto";
import Section4HomePage from "../components/HomePage/S4HomePage";

export default function CryptoPage() {
    return (
        <main style={{
            height: '5000px'
        }}>
            <Section1Crypto />
            <Section2Crypto />
            <div style={{
                position: 'relative',
                bottom: '50px'
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}