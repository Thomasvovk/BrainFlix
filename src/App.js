import "./App.scss";
import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Videos from "./components/Videos/Videos";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Comments />
      <Videos />
    </>
  );
}

export default App;
