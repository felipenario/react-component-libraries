import { CustomButton } from "./components/CustomButton";

function App() {
  return (
    <>
      <CustomButton
        className="p-4"
        shape="xs"
        style={{
          backgroundColor: "var(--sys-color-primary)",
        }}
      >
        Teste
      </CustomButton>
    </>
  );
}

export default App;
