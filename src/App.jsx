import "./App.css";
import AboutMe from "./shared/components/AboutMe";
import Header from "./shared/components/Header";
import TechnicalSkills from "./shared/components/TechnicalSkills";
import MyWorks from "./shared/components/MyWorks";

function App() {
    return (
        <>
            <Header />
            <AboutMe />
            <TechnicalSkills />
            <MyWorks />
        </>
    );
}

export default App;
