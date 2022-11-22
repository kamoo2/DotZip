import api from './axios.js';

async function addBookMarkHouse({ userSeq, houseNo }, success, fail) {
  await api
    .post('/interest/house/add', null, {
      params: {
        userSeq,
        houseNo,
      },
    })
    .then(success)
    .catch(fail);
}

async function deleteBookMarkHouse({ userSeq, houseNo }, success, fail) {
  await api
    .post('/interest/house/delete', null, {
      params: {
        userSeq,
        houseNo,
      },
    })
    .then(success)
    .catch(fail);
}

async function getBookMarkHouseList(success, fail) {
  await api
    .get('/interest/house')
    .then(success)
    .catch(fail);
}

export { addBookMarkHouse, deleteBookMarkHouse, getBookMarkHouseList };
