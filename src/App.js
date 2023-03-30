import BigCard from "./components/bigCard";
import KeyFeature from "./components/keyFeature";
import Navbar from "./components/navbar";
import SectionOne from "./components/sectionOne";

function App() {
    return (
        <div className="px-32 bg-bg-dark h-full">
            <Navbar />
            <SectionOne />
            <BigCard />
            <KeyFeature />
        </div>
    );
}

export default App;
