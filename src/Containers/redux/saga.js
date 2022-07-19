import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { REQUEST_ERROR_RESPONSE, REQUEST_SUCCESS_RESPONSE,
    GET_DRIVER_REQUEST,GET_DRIVER_SUCCESS,UPDATE_DRIVER_REQUEST,ADD_DRIVER_REQUEST,ADD_DRIVER_ERROR,ARCHIVE_DRIVER_REQUEST,
    GET_VEHICLE_REQUEST,GET_VEHICLE_SUCCESS,UPDATE_VEHICLE_REQUEST,ADD_VEHICLE_REQUEST,ADD_VEHICLE_ERROR,ARCHIVE_VEHICLE_REQUEST
  } from "./constants";
// apis
import {
  getDriver,updateDriver,addDriver,archiveDriver,
  getVehicle,updateVehicle,addVehicle,archiveVehicle
} from "../../services/apis";

const getToken = state => state.login.accessToken;

// driver


function* getUpdateDriverApi({id,body,setModal,setShowMessage}){
  const token = yield select(getToken);
  debugger
  setModal(false);
  try {
    const response = yield call(updateDriver,id,body,token);
    const {data} = response;

    if(data.status_code===200){
      setModal(false);
      setShowMessage('Data added successfully')
      debugger
      yield put({
        type: GET_DRIVER_SUCCESS,
        data:data.data
      });
      
    }
  } catch (e) {
    debugger
  }
}

function* getDriverApi({data,setModal}) {
  console.log(data,setModal)
  const token = yield select(getToken);
 
    try {
      const response = yield call(getDriver,token);
      const {data}  = response;
      debugger;
      if(data.status_code===200){
        debugger
        yield put({
          type: GET_DRIVER_SUCCESS,
          data:data.data
        });
      }
    } catch (e) {
      debugger
    }
  }
function* getArchiveDriverApi({id,body}) {
  const token = yield select(getToken);
 debugger
    try {
      const response = yield call(archiveDriver,id,body,token);
      debugger
      const {data}  = response;
      debugger;
      if(data.status_code===200){
        debugger
        yield put({
          type: GET_DRIVER_SUCCESS,
          data:data.data
        });
      }
    } catch (e) {
      debugger
    }
  }
  
function* addDriverApi({body,setModal,setShowMessage}) {
  console.log(body,setModal)
  const token = yield select(getToken);
 
    try {
      const response = yield call(addDriver,body,token);
      const {data}  = response;
      debugger;
      if(data.status_code===200){
        
        yield put({
          type: GET_DRIVER_SUCCESS,
          data:data.data
        });
        setModal(false);
        setShowMessage('Data added successfully')
      }
    } catch (e) {
      debugger
      const {response}  = e;
      debugger;
    if(response.status===422){
        yield put({
          type: ADD_DRIVER_ERROR,
          data:response.data
        }); 
    }
    if(response.status===500){
      yield put({
        type: REQUEST_ERROR_RESPONSE,
        data:{'name':'Something went wrong please try again later'}
      }); 
  }
    }
  }




  //vehicle


  function* getUpdateVehicleApi({id,body,setModal,setShowMessage}){
    const token = yield select(getToken);
    debugger
    setModal(false);
    try {
      const response = yield call(updateVehicle,id,body,token);
      const {data} = response;
      debugger
      if(data.status_code===200){
        setModal(false);
        // setShowMessage('Data added successfully')
        debugger
        yield put({
          type: GET_VEHICLE_SUCCESS,
          data:data.data
        });
        
      }
    } catch (e) {
      debugger
    }
  }
  
  function* getVehicleApi({data,setModal}) {
    console.log(data,setModal)
    const token = yield select(getToken);
   
      try {
        const response = yield call(getVehicle,token);
        const {data}  = response;
        debugger;
        if(data.status_code===200){
          debugger
          yield put({
            type: GET_VEHICLE_SUCCESS,
            data:data.data
          });
        }
      } catch (e) {
        debugger
      }
    }
  function* getArchiveVehicleApi({id,body}) {
    const token = yield select(getToken);
   debugger
      try {
        const response = yield call(archiveVehicle,id,body,token);
        debugger
        const {data}  = response;
        debugger;
        if(data.status_code===200){
          debugger
          yield put({
            type: GET_VEHICLE_SUCCESS,
            data:data.data
          });
        }
      } catch (e) {
        debugger
      }
    }
    
  function* addVehicleApi({body,setModal,setShowMessage}) {
    console.log(body,setModal)
    const token = yield select(getToken);
   
      try {
        const response = yield call(addVehicle,body,token);
        const {data}  = response;
        debugger;
        if(data.status_code===200){
          
          yield put({
            type: GET_VEHICLE_SUCCESS,
            data:data.data
          });
          setModal(false);
          setShowMessage('Data added successfully')
        }
      } catch (e) {
        debugger
        const {response}  = e;
        debugger;
      if(response.status===422){
          yield put({
            type: ADD_VEHICLE_ERROR,
            data:response.data
          }); 
      }
      if(response.status===500){
        yield put({
          type: REQUEST_ERROR_RESPONSE,
          data:{'name':'Something went wrong please try again later'}
        }); 
    }
      }
    }

export default all([
    takeLatest(GET_DRIVER_REQUEST, getDriverApi),
    takeLatest(ADD_DRIVER_REQUEST, addDriverApi),
    takeLatest(UPDATE_DRIVER_REQUEST, getUpdateDriverApi),
    takeLatest(ARCHIVE_DRIVER_REQUEST, getArchiveDriverApi),

    takeLatest(GET_VEHICLE_REQUEST, getVehicleApi),
    takeLatest(ADD_VEHICLE_REQUEST, addVehicleApi),
    takeLatest(UPDATE_VEHICLE_REQUEST, getUpdateVehicleApi),
    takeLatest(ARCHIVE_VEHICLE_REQUEST, getArchiveVehicleApi),
  ]);
