import axios from "axios";

const baseURL = "https://nc-news-app-jazz.herokuapp.com/api";

export const getArticles = async () => {
  let { data } = await axios.get(`${baseURL}/articles`);
  return data.articles;
};

export const getTopics = async () => {
  let { data } = await axios.get(`${baseURL}/topics`);
  return data.topics;
};

export const getArticlesByTopic = async topicSlug => {
  let { data } = await axios.get(`${baseURL}/articles?topic=${topicSlug}`);
  return data.articles;
};

export const getSingleArticle = async article_id => {
  let { data } = await axios.get(`${baseURL}/articles/${article_id}`);
  return data.article;
};

export const getCommentsForArticle = async article_id => {
  let { data } = await axios.get(`${baseURL}/articles/${article_id}/comments`);
  return data.comments;
};
