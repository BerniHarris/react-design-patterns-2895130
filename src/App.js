import { SplitScreen } from "./SplitScreen";

const LeftHandCompoent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}!</h1>;
};
const RightHandCompoent = ({ message }) => {
  return <p style={{ backgroundColor: "red" }}>{message}!</p>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandCompoent name="berni" />
      <RightHandCompoent message="hello" />
    </SplitScreen>
  );
}

export default App;
