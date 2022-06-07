import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Notfound } from "./components/NotFound/NotFound";
import PostInfo from "./components/PostInfo/PostInfo";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <div>
    <Header />

    <Routes>
      <Route path='/' element={<PostList />} />
      <Route path="/post/" element={<PostInfo />}>
        <Route path=":postID" element={<PostInfo />} />
      </Route>
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
    </div>
  );
}

export default App;
