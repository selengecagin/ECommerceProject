import api from "../../api";

export const GlobalActions = {
  setRole: "setRole",
  setCategories: "SET_CATEGORY",
  setTheme: "SET_THEME",
  setLanguage: "SET_LANGUAGE",
};

//action creators
export const setRole = (newRole) => ({
  type: GlobalActions.setRole,
  payload: newRole,
});

export const setCategories = (newCategory) => ({
  type: GlobalActions.setCategories,
  payload: newCategory,
});

export const setTheme = (newTheme) => ({
  type: GlobalActions.setTheme,
  payload: newTheme,
});

export const setLang = (newLanguage) => ({
  type: GlobalActions.setLanguage,
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


