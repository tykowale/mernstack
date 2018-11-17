import axios from "axios";

import { CLEAR_CURRENT_PROFILE, GET_PROFILE, PROFILE_LOADING } from "./types";

export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios.get("/api/profile")
    .then((res) => dispatch(getProfile(res.data)))
    .catch(() => dispatch(getProfile({})));
};

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

export const getProfile = (responseData) => {
  return {
    type: GET_PROFILE,
    payload: responseData
  };
};

