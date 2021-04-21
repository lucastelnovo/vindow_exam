import axios from "axios";

export default axios.create({
  baseURL: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-key": "e28105562fmsh01edebafeeb6117p1f37e7jsn0221a314ae3d",
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  },
});
