import axios from "axios";

const API = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const response = await axios.get(API);

    return response;
  } catch (error) {}
};
