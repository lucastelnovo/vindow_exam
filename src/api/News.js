import API from "./api";

export async function getNews(query, pageNumber, pageSize) {
  const url = `/search/NewsSearchAPI?q=${query}&withThumbnails=true&page=${pageNumber}&pageSize=${pageSize}`;
  const response = await API.get(url);
  return response.data;
}
