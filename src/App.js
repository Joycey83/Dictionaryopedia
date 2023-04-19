import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="mt-5">Hello Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer">coded by Joyce Cheung</footer>
      </div>
    </div>
  );
}

export default App;
