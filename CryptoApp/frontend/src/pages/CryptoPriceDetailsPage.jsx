import CryptoPriceDetails from "../components/CryptoPriceDetails/CryptoPriceDetails";
import Section4HomePage from "../components/HomePage/S4HomePage";

export default function CryptoPriceDetailsPage() {
    return (
        <main>
            <CryptoPriceDetails />
            <div style={{
                position: 'relative',
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}