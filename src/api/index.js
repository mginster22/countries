import axios from "axios";
import { BASE_URL } from "../constants";

const httpClient = axios.create({
  baseURL: BASE_URL,
});

export const getAllCountries = () => httpClient.get("/all");
