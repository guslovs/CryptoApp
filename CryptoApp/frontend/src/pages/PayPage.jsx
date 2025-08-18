import Section1Pay from "../components/Pay/S1Pay";
import Section2Pay from "../components/Pay/S2Pay";
import Section3Pay from "../components/Pay/S3Pay";
import Section4Pay from "../components/Pay/S4Pay";
import Section5Pay from "../components/Pay/S5Pay";
import Section6Pay from "../components/Pay/S6Pay";
import Section4HomePage from "../components/HomePage/S4HomePage";

export default function PayPage() {
    return (
        <main style={{
            height: '5500px'
        }}>
            <Section1Pay />
            <Section2Pay />
            <Section3Pay />
            <Section4Pay />
            <Section5Pay />
            <Section6Pay />
            <div style={{
                position: 'relative',
                bottom: '225px'
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}