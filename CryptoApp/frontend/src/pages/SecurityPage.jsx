import Section4HomePage from "../components/HomePage/S4HomePage";
import Section1Security from "../components/Security/S1Security";
import Section2Security from "../components/Security/S2Security";
import Section3Security from "../components/Security/S3Security";
import Section4Security from "../components/Security/S4Security";

export default function SecurityPage() {
    return (
        <main style={{
            height: '5900px'
        }}>
            <Section1Security />
            <Section2Security />
            <Section3Security />
            <Section4Security />
            <div style={{
                position: 'relative',
                bottom: '36px'
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}