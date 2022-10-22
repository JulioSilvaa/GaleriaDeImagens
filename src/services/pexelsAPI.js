import api from "./api";

const pexelsApi = api(`${process.env.REACT_APP_PEXELS_BASE_URL}`);

export default pexelsApi;
