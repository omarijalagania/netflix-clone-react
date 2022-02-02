import "./App.css";
import Row from "./components/Row";
import requests from "./helpers/urls";
function App() {
  return (
    <>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </>
  );
}

export default App;
