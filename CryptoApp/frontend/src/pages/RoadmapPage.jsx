import Section4HomePage from "../components/HomePage/S4HomePage";
import Section1Roadmap from "../components/Roadmap/S1Roadmap";
import Section7Roadmap from "../components/Roadmap/S7Roadmap";

export default function RoadmapPage() {
    return (
        <main>
            <Section1Roadmap />
            <Section7Roadmap />
            <div>
                <Section4HomePage />
            </div>
        </main>
    )
}