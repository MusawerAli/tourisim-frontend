import { 
  REQUEST_ERROR_RESPONSE, REQUEST_SUCCESS_RESPONSE,
  GET_DRIVER_SUCCESS,GET_DRIVER_ERROR,
  UPDATE_DRIVER_SUCCESS,UPDATE_DRIVER_ERROR,

  ADD_DRIVER_SUCCESS,ADD_DRIVER_ERROR,
  GET_PASSANGER_SUCCESS,GET_PASSANGER_ERROR,
  UPDATE_PASSANGER_SUCCESS,UPDATE_PASSANGER_ERROR,

  ADD_PASSANGER_SUCCESS,ADD_PASSANGER_ERROR,
  GET_VEHICLE_SUCCESS,GET_VEHICLE_ERROR,
  UPDATE_VEHICLE_SUCCESS,UPDATE_VEHICLE_ERROR,

  ADD_VEHICLE_SUCCESS,ADD_VEHICLE_ERROR,
  GET_TRANSFER_SUCCESS,GET_TRANSFER_ERROR,
  UPDATE_TRANSFER_SUCCESS,UPDATE_TRANSFER_ERROR,

  ADD_TRANSFER_SUCCESS,ADD_TRANSFER_ERROR,
//   ARCHIVE_DRIVER_SUCCESS,ARCHIVE_DRIVER_ERROR,
//   ARCHIVE_PASSANGER_SUCCESS,ARCHIVE_PASSANGER_ERROR,
//   ARCHIVE_VEHICLE_SUCCESS,ARCHIVE_VEHICLE_ERROR,
//   ARCHIVE_TRANSFER_SUCCESS,ARCHIVE_TRANSFER_ERROR,
//   FILTER_TRANSFER_SUCCESS,FILTER_TRANSFER_ERROR,
//   SHOW_DRIVER_SUCCESS,SHOW_DRIVER_ERROR,
//   SHOW_PASSANGER_SUCCESS,SHOW_PASSANGER_ERROR,
//   SHOW_VEHICLE_SUCCESS,SHOW_VEHICLE_ERROR,
//   SHOW_TRANSFER_SUCCESS,SHOW_TRANSFER_ERROR,
//   GET_DRIVER_REQUEST,
// UPDATE_DRIVER_REQUEST,
// ARCHIVE_DRIVER_REQUEST,
// ADD_DRIVER_REQUEST,
// GET_PASSANGER_REQUEST,
// UPDATE_PASSANGER_REQUEST,
// ARCHIVE_PASSANGER_REQUEST,
// ADD_PASSANGER_REQUEST,
// GET_VEHICLE_REQUEST,
// UPDATE_VEHICLE_REQUEST,
// ARCHIVE_VEHICLE_REQUEST,
// ADD_VEHICLE_REQUEST,
// GET_TRANSFER_REQUEST,
// UPDATE_TRANSFER_REQUEST,
// ARCHIVE_TRANSFER_REQUEST,
// ADD_TRANSFER_REQUEST,
// FILTER_TRANSFER_REQUEST,
// SHOW_DRIVER_REQUEST,
// SHOW_PASSANGER_REQUEST,
// SHOW_VEHICLE_REQUEST,
// SHOW_TRANSFER_REQUEST,
} from "./constants";

const initialState = {
  request_success_response: null,
  request_error_response: null,
  requesting: false,
  driverSuccessData:[],
  driverErrorData:false,
  passangerSuccessData:false,
  passangerErrorData:false,
  vehicleSuccessData:[],
  vehicleErrorData:false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ERROR_RESPONSE:
      return { ...state, request_error_response: action.data };

    case REQUEST_SUCCESS_RESPONSE:
      return { 
        ...state, 
        request_success_response: action.data 
      };
    
      // driver

      case ADD_DRIVER_SUCCESS:
        return { 
          ...state, 
          driverSuccessData: action.data 
        };

      case ADD_DRIVER_ERROR:
        return { 
          ...state, 
          driverErrorData: action.data 
        };

        

      case GET_DRIVER_SUCCESS:
        return { 
          ...state, 
          driverSuccessData: action.data 
        };

      case GET_DRIVER_ERROR:
        return { 
          ...state, 
          driverErrorData: action.data 
        };
          
      case UPDATE_DRIVER_SUCCESS:
        return { 
          ...state, 
          driverSuccessData: action.data 
        };

      case UPDATE_DRIVER_ERROR:
        return { 
          ...state, 
          driverErrorData: action.data 
        };

      case UPDATE_DRIVER_SUCCESS:
        return { 
          ...state, 
          driverSuccessData: action.data 
        };

      case UPDATE_DRIVER_ERROR:
        return { 
          ...state, 
          driverErrorData: action.data 
        };




      // passanger\

      case ADD_PASSANGER_SUCCESS:
        return { 
          ...state, 
          passangerSuccessData: action.data 
        };

      case ADD_PASSANGER_ERROR:
        return { 
          ...state, 
          driverErrorData: action.data 
        };

      case GET_PASSANGER_SUCCESS:
        return { 
          ...state, 
          passangerErrorData: action.data 
        };

      case GET_PASSANGER_ERROR:
        return { 
          ...state, 
          passangerErrorData: action.data 
        };
          
      case UPDATE_PASSANGER_SUCCESS:
        return { 
          ...state, 
          passangerSuccessData: action.data 
        };

      case UPDATE_PASSANGER_ERROR:
        return { 
          ...state, 
          passangerErrorData: action.data 
        };

      case UPDATE_PASSANGER_SUCCESS:
        return { 
          ...state, 
          passangerSuccessData: action.data 
        };

      case UPDATE_PASSANGER_ERROR:
        return { 
          ...state, 
          passangerErrorData: action.data 
        };




    // vehicle 


    case ADD_VEHICLE_SUCCESS:
      return { 
        ...state, 
        vehicleSuccessData: action.data 
      };

    case ADD_VEHICLE_ERROR:
      return { 
        ...state, 
        vehicleErrorData: action.data 
      };
      case GET_VEHICLE_SUCCESS:
        return { 
          ...state, 
          vehicleSuccessData: action.data 
        };

      case GET_VEHICLE_ERROR:
        return { 
          ...state, 
          vehicleErrorData: action.data 
        };
          
      case UPDATE_VEHICLE_SUCCESS:
        return { 
          ...state, 
          vehicleSuccessData: action.data 
        };

      case UPDATE_VEHICLE_ERROR:
        return { 
          ...state, 
          vehicleErrorData: action.data 
        };

      case UPDATE_VEHICLE_SUCCESS:
        return { 
          ...state, 
          vehicleSuccessData: action.data 
        };

      case UPDATE_VEHICLE_ERROR:
        return { 
          ...state, 
          vehicleErrorData: action.data 
        };

    // transfer 

    case ADD_TRANSFER_SUCCESS:
      return { 
        ...state, 
        transferSuccessData: action.data 
      };

    case ADD_TRANSFER_ERROR:
      return { 
        ...state, 
        transferErrorData: action.data 
      };
      case GET_TRANSFER_SUCCESS:
        return { 
          ...state, 
          transferSuccessData: action.data 
        };

      case GET_TRANSFER_ERROR:
        return { 
          ...state, 
          transferErrorData: action.data 
        };
          
      case UPDATE_TRANSFER_SUCCESS:
        return { 
          ...state, 
          transferSuccessData: action.data 
        };

      case UPDATE_TRANSFER_ERROR:
        return { 
          ...state, 
          transferErrorData: action.data 
        };

      case UPDATE_TRANSFER_SUCCESS:
        return { 
          ...state, 
          transferSuccessData: action.data 
        };

      case UPDATE_TRANSFER_ERROR:
        return { 
          ...state, 
          transferErrorData: action.data 
        };
    default:
      return state;
  }
};
