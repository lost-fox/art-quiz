const getFromLS = (item) => {
  return localStorage.getItem(item) ?? "";
};

export { getFromLS };
