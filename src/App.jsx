import "./App.css";
import styled from "styled-components";
import { BunnyCard } from "./components/bunnyCard";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f0c0d;
`;

function App() {
  return (
    <AppContainer>
      <BunnyCard />
    </AppContainer>
  );
}

export default App;
