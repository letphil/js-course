const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
// https://firebase.google.com/docs/auth/web/password-auth
const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password);

async function loginUser(email, password) {
  try {
    const user = signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error) {
    throw new Error(error.toString());
  }
}

module.exports = loginUser;
