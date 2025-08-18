import CryptoConverter from "../components/Converter/Converter";
import Section4HomePage from "../components/HomePage/S4HomePage";

export default function ConverterPage() {
    return (
        <main>
            <CryptoConverter />
            <div style={{
                position: 'relative',
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}