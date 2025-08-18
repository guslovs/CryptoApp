import Section4HomePage from "../components/HomePage/S4HomePage";
import Section1Partners from "../components/Partners/S1Partners";
import Section2Partners from "../components/Partners/S2Partners";
import Section3Partners from "../components/Partners/S3Partners";
import Section4Partners from "../components/Partners/S4Partners";
import Section5Partners from "../components/Partners/S5Partners";
import Section6Partners from "../components/Partners/S6Partners";
import Section7Partners from "../components/Partners/S7Partners";
import Section8Partners from "../components/Partners/S8Partners";

export default function PartnersPage() {
    return (
        <main>
            <Section1Partners />
            <Section2Partners />
            <Section3Partners />
            <Section4Partners />
            <Section5Partners />
            <Section6Partners />
            <Section7Partners />
            <Section8Partners />
            <div style={{
                position: 'relative',
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}