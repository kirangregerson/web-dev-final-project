import axios from "axios";
import { items } from "./recentlyviewed";

//TODO: replace with backend call to get recently viewed items
export const getRecentlyViewed = () => {
  return items;
};
