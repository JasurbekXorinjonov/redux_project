import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/Article";
import { useDispatch } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/Article";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response.article));
    } catch (error) {
      dispatch(getArticleDetailFailure());
    }
  };

  useEffect(() => {
    getArticleDetail();
  }, [slug]);

  return <div>slug: {slug}</div>;
}

export default ArticleDetail;
