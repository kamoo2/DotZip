import api from './axios.js';

async function signinAPI(user, success, fail) {
  await api
    .post('/users/login', user)
    .then(success)
    .catch(fail);
}

async function signupAPI(user, success, fail) {
  await api
    .post('/users', user)
    .then(success)
    .catch(fail);
}

export { signinAPI, signupAPI };
