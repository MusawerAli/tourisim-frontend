import { 
  REQUEST_ERROR_RESPONSE, REQUEST_SUCCESS_RESPONSE,
  GET_DRIVER_REQUEST,GET_DRIVER_SUCCESS,GET_DRIVER_ERROR,
  UPDATE_DRIVER_REQUEST,UPDATE_DRIVER_SUCCESS,UPDATE_DRIVER_ERROR,
  ARCHIVE_DRIVER_REQUEST,ARCHIVE_DRIVER_SUCCESS,ARCHIVE_DRIVER_ERROR,
  ADD_DRIVER_REQUEST,ADD_DRIVER_SUCCESS,ADD_DRIVER_ERROR,
  GET_PASSANGER_REQUEST,GET_PASSANGER_SUCCESS,GET_PASSANGER_ERROR,
  UPDATE_PASSANGER_REQUEST,UPDATE_PASSANGER_SUCCESS,UPDATE_PASSANGER_ERROR,
  ARCHIVE_PASSANGER_REQUEST,ARCHIVE_PASSANGER_SUCCESS,ARCHIVE_PASSANGER_ERROR,
  ADD_PASSANGER_REQUEST,ADD_PASSANGER_SUCCESS,ADD_PASSANGER_ERROR,
  GET_VEHICLE_REQUEST,GET_VEHICLE_SUCCESS,GET_VEHICLE_ERROR,
  UPDATE_VEHICLE_REQUEST,UPDATE_VEHICLE_SUCCESS,UPDATE_VEHICLE_ERROR,
  ARCHIVE_VEHICLE_REQUEST,ARCHIVE_VEHICLE_SUCCESS,ARCHIVE_VEHICLE_ERROR,
  ADD_VEHICLE_REQUEST,ADD_VEHICLE_SUCCESS,ADD_VEHICLE_ERROR,
  GET_TRANSFER_REQUEST,GET_TRANSFER_SUCCESS,GET_TRANSFER_ERROR,
  UPDATE_TRANSFER_REQUEST,UPDATE_TRANSFER_SUCCESS,UPDATE_TRANSFER_ERROR,
  ARCHIVE_TRANSFER_REQUEST,ARCHIVE_TRANSFER_SUCCESS,ARCHIVE_TRANSFER_ERROR,
  ADD_TRANSFER_REQUEST,ADD_TRANSFER_SUCCESS,ADD_TRANSFER_ERROR,
  FILTER_TRANSFER_REQUEST,FILTER_TRANSFER_SUCCESS,FILTER_TRANSFER_ERROR,
  SHOW_DRIVER_REQUEST,SHOW_DRIVER_SUCCESS,SHOW_DRIVER_ERROR,
  SHOW_PASSANGER_REQUEST,SHOW_PASSANGER_SUCCESS,SHOW_PASSANGER_ERROR,
  SHOW_VEHICLE_REQUEST,SHOW_VEHICLE_SUCCESS,SHOW_VEHICLE_ERROR,
  SHOW_TRANSFER_REQUEST,SHOW_TRANSFER_SUCCESS,SHOW_TRANSFER_ERROR,
} from "./constants";

export const requestErrorResponse = (data) => ({
  type: REQUEST_ERROR_RESPONSE,
  data,
});
export const requestSuccessResponse = (data) => ({
  type: REQUEST_SUCCESS_RESPONSE,
  data,
});


//PASSANGER

export const getDriver = () => ({
  type: GET_DRIVER_REQUEST
});
export const getDriverSuccess = (data) => ({
  type: GET_DRIVER_SUCCESS,
  data
});
export const getDriverError = (error) => ({
  type: GET_DRIVER_ERROR,
  error
});

export const addDriver = () => ({
  type: ADD_DRIVER_REQUEST
});
export const addDriverSuccess = (data) => ({
  type: ADD_DRIVER_SUCCESS,
  data
});
export const addDriverError = (error) => ({
  type: ADD_DRIVER_ERROR,
  error
});

export const showDriver = () => ({
  type: SHOW_DRIVER_REQUEST
});
export const showDriverSuccess = (data) => ({
  type: SHOW_DRIVER_SUCCESS,
  data
});
export const showDriverError = (error) => ({
  type: SHOW_DRIVER_ERROR,
  error
});
export const updateDriver = () => ({
  type: UPDATE_DRIVER_REQUEST
});
export const updateDriverSuccess = (data) => ({
  type: UPDATE_DRIVER_SUCCESS,
  data
});
export const updateDriverError = (error) => ({
  type: UPDATE_DRIVER_ERROR,
  error
});
export const archiveDriver = () => ({
  type: ARCHIVE_DRIVER_REQUEST
});
export const archiveDriverSuccess = (data) => ({
  type: ARCHIVE_DRIVER_SUCCESS,
  data
});
export const archiveDriverError = (error) => ({
  type: ARCHIVE_DRIVER_ERROR,
  error
});


//Passanger

export const getPassanger = () => ({
  type: GET_PASSANGER_REQUEST
});
export const getPassangerSuccess = (data) => ({
  type: GET_PASSANGER_SUCCESS,
  data
});
export const getPassangerError = (error) => ({
  type: GET_PASSANGER_ERROR,
  error
});

export const addPassanger = () => ({
  type: ADD_PASSANGER_REQUEST
});
export const addPassangerSuccess = (data) => ({
  type: ADD_PASSANGER_SUCCESS,
  data
});
export const addPassangerError = (error) => ({
  type: ADD_PASSANGER_ERROR,
  error
});

export const showPassanger = () => ({
  type: SHOW_PASSANGER_REQUEST
});
export const showPassangerSuccess = (data) => ({
  type: SHOW_PASSANGER_SUCCESS,
  data
});
export const showPassangerError = (error) => ({
  type: SHOW_PASSANGER_ERROR,
  error
});
export const updatePassanger = () => ({
  type: UPDATE_PASSANGER_REQUEST
});
export const updatePassangerSuccess = (data) => ({
  type: UPDATE_PASSANGER_SUCCESS,
  data
});
export const updatePassangerError = (error) => ({
  type: UPDATE_PASSANGER_ERROR,
  error
});
export const archivePassanger = () => ({
  type: ARCHIVE_PASSANGER_REQUEST
});
export const archivePassangerSuccess = (data) => ({
  type: ARCHIVE_PASSANGER_SUCCESS,
  data
});
export const archivePassangerError = (error) => ({
  type: ARCHIVE_PASSANGER_ERROR,
  error
});


//Transfer

export const getTransfer = () => ({
  type: GET_TRANSFER_REQUEST
});
export const getTransferSuccess = (data) => ({
  type: GET_TRANSFER_SUCCESS,
  data
});
export const getTransferError = (error) => ({
  type: GET_TRANSFER_ERROR,
  error
});

export const addTransfer = () => ({
  type: ADD_TRANSFER_REQUEST
});
export const addTransferSuccess = (data) => ({
  type: ADD_TRANSFER_SUCCESS,
  data
});
export const addTransferError = (error) => ({
  type: ADD_TRANSFER_ERROR,
  error
});

export const showTransfer = () => ({
  type: SHOW_TRANSFER_REQUEST
});
export const showTransferSuccess = (data) => ({
  type: SHOW_TRANSFER_SUCCESS,
  data
});
export const showTransferError = (error) => ({
  type: SHOW_TRANSFER_ERROR,
  error
});
export const updateTransfer = () => ({
  type: UPDATE_TRANSFER_REQUEST
});
export const updateTransferSuccess = (data) => ({
  type: UPDATE_TRANSFER_SUCCESS,
  data
});
export const updateTransferError = (error) => ({
  type: UPDATE_TRANSFER_ERROR,
  error
});
export const archiveTransfer = () => ({
  type: ARCHIVE_TRANSFER_REQUEST
});
export const archiveTransferSuccess = (data) => ({
  type: ARCHIVE_TRANSFER_SUCCESS,
  data
});
export const archiveTransferError = (error) => ({
  type: ARCHIVE_TRANSFER_ERROR,
  error
});

export const filterTransfer = () => ({
  type: FILTER_TRANSFER_REQUEST
});
export const filterTransferSuccess = (data) => ({
  type: FILTER_TRANSFER_SUCCESS,
  data
});
export const filterTransferError = (error) => ({
  type: FILTER_TRANSFER_ERROR,
  error
});



//Vehicle

export const getVehicle = () => ({
  type: GET_VEHICLE_REQUEST
});
export const getVehicleSuccess = (data) => ({
  type: GET_VEHICLE_SUCCESS,
  data
});
export const getVehicleError = (error) => ({
  type: GET_VEHICLE_ERROR,
  error
});

export const addVehicle = () => ({
  type: ADD_VEHICLE_REQUEST
});
export const addVehicleSuccess = (data) => ({
  type: ADD_VEHICLE_SUCCESS,
  data
});
export const addVehicleError = (error) => ({
  type: ADD_VEHICLE_ERROR,
  error
});

export const showVehicle = () => ({
  type: SHOW_VEHICLE_REQUEST
});
export const showVehicleSuccess = (data) => ({
  type: SHOW_VEHICLE_SUCCESS,
  data
});
export const showVehicleError = (error) => ({
  type: SHOW_VEHICLE_ERROR,
  error
});
export const updateVehicle = () => ({
  type: UPDATE_VEHICLE_REQUEST
});
export const updateVehicleSuccess = (data) => ({
  type: UPDATE_VEHICLE_SUCCESS,
  data
});
export const updateVehicleError = (error) => ({
  type: UPDATE_VEHICLE_ERROR,
  error
});
export const archiveVehicle = () => ({
  type: ARCHIVE_VEHICLE_REQUEST
});
export const archiveVehicleSuccess = (data) => ({
  type: ARCHIVE_VEHICLE_SUCCESS,
  data
});
export const archiveVehicleError = (error) => ({
  type: ARCHIVE_VEHICLE_ERROR,
  error
});