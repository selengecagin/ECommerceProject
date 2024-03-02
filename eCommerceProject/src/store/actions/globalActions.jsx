export const GlobalActions = {
  setRole: "SET_ROLE",
  setCategory: "SET_CATEGORY",
  setTheme: "SET_THEME",
  setLanguage: "SET_LANGUAGE",
};

export const setRoleActionCreator = (newRole) => ({
  type: GlobalActions.setRole,
  payload: newRole,
});

export const setCategoryActionCreator = (newCategory) => ({
  type: GlobalActions.setCategory,
  payload: newCategory,
});

export const setThemeActionCreator = (newTheme) => ({
  type: GlobalActions.setTheme,
  payload: newTheme,
});

export const setLanguageActionCreator = (newLanguage) => ({
  type: GlobalActions.setLanguage,
  payload: newLanguage,
});


