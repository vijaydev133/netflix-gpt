export const checkValidDataSignIn = (email, password) => {
  const emailCheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const passwordCheck =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //   console.log(email, password);
  //   console.log(emailCheck, passwordCheck);
  if (!emailCheck) {
    return "Email is not Valid";
  }
  if (!passwordCheck) {
    return "Password is not Valid";
  }

  return null;
};

export const checkValidDataSignUp = (email, password, fullName) => {
  const emailCheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const passwordCheck =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //   console.log(email, password);
  //   console.log(emailCheck, passwordCheck);
  if (!fullName) {
    return "Enter Your Fullname";
  }
  if (!emailCheck) {
    return "Email is not Valid";
  }
  if (!passwordCheck) {
    return "Password is not Valid";
  }

  return null;
};
