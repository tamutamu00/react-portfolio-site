import "./App.css";

function App() {
  const NameText = (props) => {
    return (
      <div>
        <p>hi , {props.name}</p>
        <p>hi , {props.children}</p>
      </div>
    );
  };

  return (
    <>
      <NameText name="たろう" />
      <NameText name="あやこ" />
    </>
  );
}

export default App;
