function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

module.exports = signUpUser;
