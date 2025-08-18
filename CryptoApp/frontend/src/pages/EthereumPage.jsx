import Section1Ethereum from "../components/Ethereum/S1Ethereum";
import Section2Ethereum from "../components/Ethereum/S2Ethereum";
import Section3Ethereum from "../components/Ethereum/S3Ethereum";
import Section4Ethereum from "../components/Ethereum/S4Ethereum";
import Section4HomePage from "../components/HomePage/S4HomePage";

export default function EthereumPage() {
    return (
        <main style={{
            height: '4950px'
        }}>
            <Section1Ethereum />
            <Section2Ethereum />
            <Section3Ethereum />
            <Section4Ethereum />
            <div style={{
                position: 'relative',
                bottom: '105px'
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}