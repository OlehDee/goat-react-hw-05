import Axios from "axios";


const axios = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    language: "en-US",
  },
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWY4MWI4ODM5NWZiNWY0MDNmMTRiZjg4ZDJmZGRjNSIsIm5iZiI6MTc0NzU1NjM2OS44NSwic3ViIjoiNjgyOTk4MTFmYzRmYzljNmZkNWI1NTg3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.hfDvd1FXIvhU3aTfTYgaU3rBYJB8_UMV5e7SjCEIZOM",
  },
});

export async function fetchTrends() {
  const url = "trending/movie/day";

  return await axios.get(url);
}

export async function fetchById(movie_id) {
  const url = `movie/${movie_id}`;

  return await axios.get(url);
}

export async function fetchByQuery(query) {
  const url = `search/movie`;
  const params = {
    query: query,
    include_adult: "false",
    language: "en-US",
    page: "1",
  };
  const response = await axios.get(url, { params });
  return response.data;
}

export async function fetchActors(id) {
  const url = `movie/${id}/credits`;
  return await axios.get(url);
}

export async function fetchReviews(id) {
  const url = `movie/${id}/reviews`;

  return await axios.get(url);
}

