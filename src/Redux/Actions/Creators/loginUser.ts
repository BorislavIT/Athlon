const loginUser = (email: string, password: string) => {

  return {
    type: "REQUEST_LOGIN",
    payload: { email, password },
  };
};

export default loginUser;
