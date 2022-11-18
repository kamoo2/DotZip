import api from "./axios.js";

async function loginAPI(user, success, fail) {
  await api
    .post("/users/login", user)
    .then(success)
    .catch(fail);
}

export { loginAPI };
