import Section1Careers from "../components/Careers/S1Careers";
import Section2Careers from "../components/Careers/S2Careers";
import Section3Careers from "../components/Careers/S3Careers";
import Section4Careers from "../components/Careers/S4Careers";
import Section4HomePage from "../components/HomePage/S4HomePage";

export default function CareersPage() {
    return (
        <main>
            <Section1Careers />
            <Section2Careers />
            <Section3Careers />
            <Section4Careers />
            <div style={{
                position: 'relative',
                top: '300px'
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}