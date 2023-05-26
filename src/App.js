import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Upload from "./components/Upload/Upload";
import HomePage from "./Pages/HomePage/HomePage";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const apiUrl = "https://project-2-api.herokuapp.com/videos";
  const apiKey = "5003e7fd-6220-4f00-bb9e-52f793c038d9";

  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}?api_key=${apiKey}`).then((response) => {
      setVideoList(response.data);
    });
  }, []);

  const defaultVideo = videoList.length > 0 ? videoList[0].id : null;

  const updatedVideoList = videoList.filter((video) => {
    return defaultVideo !== video.id;
  });

  if (defaultVideo === false) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage videoList={videoList} />} />
        <Route path="/:id" element={<HomePage videoList={videoList} />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
