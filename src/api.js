import axios from "axios";

const baseURL = "https://nc-news-app-jazz.herokuapp.com/api";

export const getArticles = async (sort_by, order, p) => {
  let { data } = await axios.get(`${baseURL}/articles`, {
    params: { sort_by, order, p }
  });
  return [data.articles, data.total_count];
};

export const getTopics = async () => {
  let { data } = await axios.get(`${baseURL}/topics`);
  return data.topics;
};

export const getArticlesByTopic = async (topic, sort_by, order, p) => {
  let { data } = await axios.get(`${baseURL}/articles`, {
    params: { topic, sort_by, order, p }
  });
  return [data.articles, data.total_count];
};

export const getSingleArticle = async article_id => {
  let { data } = await axios.get(`${baseURL}/articles/${article_id}`);
  return data.article;
};

export const getCommentsForArticle = async (article_id, p) => {
  let { data } = await axios.get(`${baseURL}/articles/${article_id}/comments`, {
    params: { p }
  });
  return [data.comments, data.total_count];
};

export const postComment = async (article_id, username, body) => {
  let { data } = await axios.post(
    `${baseURL}/articles/${article_id}/comments`,
    { username, body }
  );
  return data.comment;
};

export const deleteComment = comment_id => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};

export const updateArticleVotes = (article_id, num) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, { inc_votes: num });
};

export const updateCommentVotes = (comment_id, num) => {
  return axios.patch(`${baseURL}/comments/${comment_id}`, { inc_votes: num });
};

export const postArticle = async (username, topic, title, body) => {
  let { data } = await axios.post(`${baseURL}/articles`, {
    username,
    topic,
    title,
    body
  });
  return data.article;
};

export const deleteArticle = article_id => {
  return axios.delete(`${baseURL}/articles/${article_id}`);
};

export const getUser = async username => {
  let { data } = await axios.get(`${baseURL}/users/${username}`);
  return data.user;
};

export const getArticlesByUser = async (author, p) => {
  let { data } = await axios.get(`${baseURL}/articles`, {
    params: { author, p }
  });
  return [data.articles, data.total_count];
};

export const createUser = async (username, name) => {
  let { data } = await axios.post(`${baseURL}/users`, { username, name });
  return data.user;
};

export const deleteUser = username => {
  return axios.delete(`${baseURL}/users/${username}`);
};
