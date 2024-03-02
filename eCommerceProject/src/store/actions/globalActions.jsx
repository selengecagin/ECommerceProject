export const GlobalActions = {
  setRole: "SET_ROLE",
  setCategory: "SET_CATEGORY",
  setTheme: "SET_THEME",
  setLanguage: "SET_LANGUAGE",
};

export const roleActionCreator = (newRole) => ({
  type: GlobalActions.setRole,
  payload: newRole,
});

export const categoryActionCreator = (newCategory) => ({
  type: GlobalActions.setCategory,
  payload: newCategory,
});

export const themeActionCreator = (newTheme) => ({
  type: GlobalActions.setTheme,
  payload: newTheme,
});

export const languageActionCreator = (newLanguage) => ({
  type: GlobalActions.setLanguage,
  payload: newLanguage,
});


