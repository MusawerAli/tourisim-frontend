import {
    request
} from 'Utils/xhr';
import {
    HTTP_DRIVER,
    HTTP_PASSANGER,
    HTTP_VEHICLE,
    HTTP_TRANSFER,
    HTTP_LOGIN
} from './endpoints';

const authToken = token => {
    console.log('authToken', token);
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: `application/json`
        }
    };
};



//Auth

export async function login(body) {
    debugger
    return await request.post(HTTP_LOGIN, body);
  }


//driver

export async function addDriver(body, token) {
    return await request.post(HTTP_DRIVER, body, authToken(token));
}
export async function updateDriver(id, body, token) {
    return await request.put(`${HTTP_DRIVER}/${id}/`, body, authToken(token));
}
export async function getDriver(token) {
    return await request.get(HTTP_DRIVER, authToken(token));
}
export async function showDriver(id, token) {
    return await request.get(`${HTTP_DRIVER}/${id}/`, authToken(token));
}
export async function archiveDriver(id, token) {
    return await request.delete(`${HTTP_DRIVER}/${id}/`, authToken(token));
}




//Passanger

export async function addPassanger(body, token) {
    return await request.post(HTTP_PASSANGER, body, authToken(token));
}
export async function updatePassanger(id, body, token) {
    return await request.put(`${HTTP_PASSANGER}/${id}/`, body, authToken(token));
}
export async function getPassanger(token) {
    return await request.get(HTTP_PASSANGER, authToken(token));
}
export async function showPassanger(id, token) {
    return await request.get(`${HTTP_PASSANGER}/${id}/`, authToken(token));
}
export async function archivePassanger(id, token) {
    return await request.delete(`${HTTP_PASSANGER}/${id}/`, authToken(token));
}

//Vehicle

export async function addVehicle(body, token) {
    return await request.post(HTTP_VEHICLE, body, authToken(token));
}
export async function updateVehicle(id, body, token) {
    return await request.put(`${HTTP_VEHICLE}/${id}/`, body, authToken(token));
}
export async function getVehicle(token) {
    return await request.get(HTTP_VEHICLE, authToken(token));
}
export async function showVehicle(id, token) {
    return await request.get(`${HTTP_VEHICLE}/${id}/`, authToken(token));
}
export async function archiveVehicle(id, token) {
    return await request.delete(`${HTTP_VEHICLE}/${id}/`, authToken(token));
}


//Transfer

export async function addTransfer(body, token) {
    return await request.post(HTTP_TRANSFER, body, authToken(token));
}
export async function updateTransfer(id, body, token) {
    return await request.put(`${HTTP_TRANSFER}/${id}/`, body, authToken(token));
}
export async function getTransfer(token) {
    return await request.get(HTTP_TRANSFER, authToken(token));
}
export async function showTransfer(id, token) {
    return await request.get(`${HTTP_TRANSFER}/${id}/`, authToken(token));
}
export async function archiveTransfer(id, token) {
    return await request.delete(`${HTTP_TRANSFER}/${id}/`, authToken(token));
}