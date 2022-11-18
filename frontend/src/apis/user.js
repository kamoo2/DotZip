import api from "./axios.js";

async function loginAPI(user, success, fail) {
  await api
    .post("/login", user)
    .then(success)
    .catch(fail);
}

export { loginAPI };
