const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
// https://firebase.google.com/docs/auth/web/password-auth
const auth = getAuth();

async function createUser(email, password) {
  try {
    const create = await createUserWithEmailAndPassword(auth, email, password);
    return create;
  } catch (error) {
    throw new Error(error.toString());
  }
}

module.exports = createUser;
