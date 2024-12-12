import "./App.css";
import Wrapper from "./components/wrapper/Wrapper";
import IntroSection from "./components/sections/introSection/IntroSection";
import Hr from "./components/utils/Hr";

function App() {
  return (
    <Wrapper>
      <IntroSection />
      <Hr />
    </Wrapper>
  );
}

export default App;
