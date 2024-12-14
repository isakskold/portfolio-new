import "./App.css";
import Wrapper from "./components/wrapper/Wrapper";
import Hr from "./components/utils/Hr";
import IntroSection from "./components/sections/introSection/IntroSection";
import ProjectSection from "./components/sections/projectSection/ProjectSection";

function App() {
  return (
    <Wrapper>
      <IntroSection />
      <Hr />
      <ProjectSection />
      <Hr />
    </Wrapper>
  );
}

export default App;
