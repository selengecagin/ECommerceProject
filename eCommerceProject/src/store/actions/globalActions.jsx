export const GlobalActions = {
  CHANGE_ROLE: "CHANGE_ROLE",
  CHANGE_CATEGORY: "CHANGE_CATEGORY",
  APPLY_THEME: "APPLY_THEME",
  SWITCH_LANGUAGE: "SWITCH_LANGUAGE",
};

export const changeRoleActionCreator = (newRole) => ({
  type: GlobalActions.CHANGE_ROLE,
  payload: newRole,
});

export const changeCategoryActionCreator = (newCategory) => ({
  type: GlobalActions.CHANGE_CATEGORY,
  payload: newCategory,
});

export const applyThemeActionCreator = (newTheme) => ({
  type: GlobalActions.APPLY_THEME,
  payload: newTheme,
});

export const switchLanguageActionCreator = (newLanguage) => ({
  type: GlobalActions.SWITCH_LANGUAGE,
  payload: newLanguage,
});
