import axios from "axios";

const baseURL = "https://nc-news-app-jazz.herokuapp.com/api";

export const getArticles = async (sort_by, order) => {
  let { data } = await axios.get(`${baseURL}/articles`, {
    params: { sort_by, order }
  });
  return data.articles;
};

export const getTopics = async () => {
  let { data } = await axios.get(`${baseURL}/topics`);
  return data.topics;
};

export const getArticlesByTopic = async (topic, sort_by, order) => {
  let { data } = await axios.get(`${baseURL}/articles`, {
    params: { topic, sort_by, order }
  });
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

export const postComment = async (article_id, username, body) => {
  let { data } = await axios.post(
    `${baseURL}/articles/${article_id}/comments`,
    { username, body }
  );
  return data.comment;
};
