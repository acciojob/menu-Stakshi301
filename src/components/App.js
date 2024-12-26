<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import PageHead from "./components/Page_heading/PageHead"
import Menu from "./components/Menu/Menu";
import "./index.css";
function App() {
  return (
    <>
      <PageHead></PageHead>
      <Menu></Menu>
    </>
  );
}

export default App;