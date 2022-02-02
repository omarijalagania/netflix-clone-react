import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Row from "./components/Row";
import requests from "./helpers/urls";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
