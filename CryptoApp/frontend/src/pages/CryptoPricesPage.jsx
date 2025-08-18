import Section1CryptoPrices from "../components/CryptoPrices/S1CryptoPrices";
import Section2CryptoPrices from "../components/CryptoPrices/S2CryptoPrices";
import Section3CryptoPrices from "../components/CryptoPrices/S3CryptoPrices";
import Section4CryptoPrices from "../components/CryptoPrices/S4CryptoPrices";
import Section4HomePage from "../components/HomePage/S4HomePage";

export default function CryptoPricesPage() {
    return (
        <main style={{
            height: '4180px'
        }}>
            <Section1CryptoPrices />
            <Section2CryptoPrices />
            <Section3CryptoPrices />
            <Section4CryptoPrices />
            <div style={{
                position: 'relative',
                bottom: '170px'
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}