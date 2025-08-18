import Section1Bitcoin from "../components/Bitcoin/S1Bitcoin";
import Section2Bitcoin from "../components/Bitcoin/S2Bitcoin";
import Section3Bitcoin from "../components/Bitcoin/S3Bitcoin";
import Section4Bitcoin from "../components/Bitcoin/S4Bitcoin";
import Section5Bitcoin from "../components/Bitcoin/S5Bitcoin";
import Section6Bitcoin from "../components/Bitcoin/S6Bitcoin";
import Section7Bitcoin from "../components/Bitcoin/S7Bitcoin";
import Section4HomePage from "../components/HomePage/S4HomePage";

export default function BitcoinPage() {
    return (
        <main style={{
            height: '4950px'
        }}>
            <Section1Bitcoin />
            <Section2Bitcoin />
            <Section3Bitcoin />
            <Section4Bitcoin />
            <Section5Bitcoin />
            <Section6Bitcoin />
            <Section7Bitcoin />
            <div style={{
                position: 'relative',
                bottom: '260px'
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}