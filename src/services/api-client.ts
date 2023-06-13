import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "f6376e4cfebe45c6b0d08459fc077602",
  },
});
