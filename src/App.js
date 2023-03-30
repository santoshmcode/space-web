import BigCard from "./components/bigCard";
import Colletion from "./components/collection";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Join from "./components/joinUsCard";
import KeyFeature from "./components/keyFeature";
import Meka from "./components/meka";
import Navbar from "./components/navbar";
import SectionOne from "./components/sectionOne";

function App() {
    return (
        <div className="px-32 bg-bg-dark h-full">
            <Navbar />
            <SectionOne />
            <BigCard />
            <Meka />
            <KeyFeature />
            <Colletion />
            <FAQ />
            <Join />
            <Footer />
        </div>
    );
}

export default App;
