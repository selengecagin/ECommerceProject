export const GlobalActions = {
  CHANGE_ROLE: "CHANGE_ROLE",
  CHANGE_CATEGORY: "CHANGE_CATEGORY",
  APPLY_THEME: "APPLY_THEME",
  SWITCH_LANGUAGE: "SWITCH_LANGUAGE",
};

export const roleActionCreator = (newRole) => ({
  type: GlobalActions.CHANGE_ROLE,
  payload: newRole,
});

export const categoryActionCreator = (newCategory) => ({
  type: GlobalActions.CHANGE_CATEGORY,
  payload: newCategory,
});

export const themeActionCreator = (newTheme) => ({
  type: GlobalActions.APPLY_THEME,
  payload: newTheme,
});

export const languageActionCreator = (newLanguage) => ({
  type: GlobalActions.SWITCH_LANGUAGE,
  payload: newLanguage,
});
