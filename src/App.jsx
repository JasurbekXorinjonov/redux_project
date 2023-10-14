import { Route, Routes } from "react-router-dom";
import { ArticleDetail, CreateArticle, Home, Login, Register } from "./components";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthService from "./service/auth";
import { signUserSuccess } from "./slice/auth";
import { getItem } from "./helpers/Local-store";
import ArticleService from "./service/Article";
import { getArticleSucces, getArticlesStart } from "./slice/Article";

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const response = await ArticleService.getArticles();
      dispatch(getArticleSucces(response.articles));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
    getArticles();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
          <Route path="/create-article" element={<CreateArticle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
