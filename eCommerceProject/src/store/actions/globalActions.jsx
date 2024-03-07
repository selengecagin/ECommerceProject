import api from "../../api";

export const GlobalActions = {
  SET_ROLE: "SET_ROLE",
  SET_CATEGORIES: "SET_CATEGORY",
  SET_THEME: "SET_THEME",
  SET_LANGUAGE: "SET_LANGUAGE",
};

//action creators
export const setRole = (newRole) => ({
  type: GlobalActions.SET_ROLE,
  payload: newRole,
});

export const setCategories = (newCategory) => ({
  type: GlobalActions.SET_CATEGORIES,
  payload: newCategory,
});

export const setTheme = (newTheme) => ({
  type: GlobalActions.SET_THEME,
  payload: newTheme,
});

export const setLang = (newLanguage) => ({
  type: GlobalActions.SET_LANGUAGE,
  payload: newLanguage,
});

// actions
export const fetchRoles = () => (dispatch) => {
  api
    .get("/roles")
    .then((res) => {
      dispatch(setRole(res.data));
    })
    .catch((err) => console.log(err));
};

export const fetchCategories = () => (dispatch) => {
  api
    .get("/categories")
    .then((res) => {
      dispatch(setCategories(res.data));
      console.log("Fetch Categories Response: ", res.data);
    })
    .catch((err) => console.log("Fetch Categories Error: ", err));
};
