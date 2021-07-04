const setToLocalStorage = ({ authToken = false, userFirstName = false }) => {
  localStorage.setItem("authToken", authToken);
  localStorage.setItem("userFirstName", userFirstName);
};

export { setToLocalStorage };
