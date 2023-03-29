import BigCard from "./components/bigCard";
import Navbar from "./components/navbar";
import SectionOne from "./components/sectionOne";

function App() {
    return (
        <div className="px-32 bg-bg-dark h-full">
            <Navbar />
            <SectionOne />
            <BigCard />
        </div>
    );
}

export default App;
