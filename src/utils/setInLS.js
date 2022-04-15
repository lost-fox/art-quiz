const setInLS = (item, value) => {
   localStorage.setItem(item, value) ?? "";
};

export { setInLS };
