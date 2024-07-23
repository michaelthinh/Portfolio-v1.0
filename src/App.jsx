import "./App.css";
import MainLayout from "./layouts/MainLayout";
import AboutMe from "./shared/components/AboutMe";
import Header from "./shared/components/Header";
import TechnicalSkills from "./shared/components/TechnicalSkills";
import MyWorks from "./shared/components/MyWorks";
import ContactMe from "./shared/components/ContactMe";

function App() {
    return (
        <MainLayout>
            <Header />
            <AboutMe />
            <TechnicalSkills />
            <MyWorks />
            <ContactMe />
        </MainLayout>
    );
}

export default App;
