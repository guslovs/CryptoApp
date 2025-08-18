import Section1Prime from "../components/Prime/S1Prime";
import Section2Prime from "../components/Prime/S2Prime";
import Section3Prime from "../components/Prime/S3Prime";
import Section4HomePage from "../components/HomePage/S4HomePage";

export default function PrimePage() {
    return (
        <main style={{
            height: '3500px'
        }}>
            <Section1Prime />
            <Section2Prime />
            <Section3Prime />
            <div style={{
                position: 'relative',
                bottom: '800px'
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}