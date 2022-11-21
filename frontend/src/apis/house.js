import api from "./axios.js";

async function getSido(success, fail) {
  await api
    .get("/regions/sido")
    .then(success)
    .catch(fail);
}

async function getGuGun(sidoName, success, fail) {
  await api
    .get(`/regions/gugun/${sidoName}`)
    .then(success)
    .catch(fail);
}

async function getDong(gugunName, success, fail) {
  await api
    .get(`/regions/dong/${gugunName}`)
    .then(success)
    .catch(fail);
}

async function getHouseByDong(param, success, fail) {
  // console.log(param);
  await api
    .post("/houses/dong", param)
    .then(success)
    .catch(fail);
}

async function getHouseByName(param, success, fail) {
  // console.log(param);
  await api
    .get("/houses/apts", param)
    .then(success)
    .catch(fail);
}
export {getSido, getGuGun, getDong, getHouseByDong, getHouseByName};
