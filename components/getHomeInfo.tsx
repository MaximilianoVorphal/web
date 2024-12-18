import { query } from "./strapi";

export function getHomeInfo() {
  return query("home")
    .then(res => {
      console.log(res)
      return res.data
    });
}