import axios from "axios";

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);

  return response.data.items;
};

// get a single user
export const getUser = async (login) => {
  const response = await github.get(`users/${login}`);
  const response2 = await github.get(`users/${login}/repos`);

  if (response.status == 404) {
    window.location = "/notfound";
  } else {
    const data = response.data;
    const data2 = response2.data;

    return [data, data2];
  }
};
