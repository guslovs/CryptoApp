import Section1AboutUs from "../components/AboutUs/S1AboutUs";
import Section2AboutUs from "../components/AboutUs/S2AboutUs";
import Section3AboutUs from "../components/AboutUs/S3AboutUs";
import Section4AboutUs from "../components/AboutUs/S4AboutUs";
import Section5AboutUs from "../components/AboutUs/S5AboutUs";
import Section6AboutUs from "../components/AboutUs/S6AboutUs";
import Section4HomePage from "../components/HomePage/S4HomePage";

export default function AboutUsPage() {
    return (
        <main>
            <Section1AboutUs />
            <Section2AboutUs />
            <Section3AboutUs />
            <Section4AboutUs />
            <Section5AboutUs />
            <Section6AboutUs />
            <div style={{
                position: 'relative',
                top: '100px'
            }}>
                <Section4HomePage />
            </div>
        </main>
    )
}