import "./App.css";
import AboutMe from "./shared/components/AboutMe";
import Header from "./shared/components/Header";
import TechnicalSkills from "./shared/components/TechnicalSkills";
import MyWorks from "./shared/components/MyWorks";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <MainLayout>
            <Header />
            <AboutMe />
            <TechnicalSkills />
            <MyWorks />
        </MainLayout>
    );
}

export default App;
