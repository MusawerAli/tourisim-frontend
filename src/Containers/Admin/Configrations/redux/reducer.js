import types from "./types";

const initialState = {
  visitsPerMonth: false,
  timeSlotErrors: false,
  visitingCapacityData: false,
  allPlans: [],
  timeSlotData: false,
  addPlanTypeError: false,
  updatePlanTypeError: false,
  getDaysSlotsSuccessResponse: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.getVisitsPerMonthSuccess:
      return {
        ...state,
        visitsPerMonth: action.data,
      };

    case types.getVisitingCapacitySuccess:
      return {
        ...state,
        visitingCapacityData: action.data,
      };

    case types.getAllPlansSuccess:
      return {
        ...state,
        allPlans: action.data,
      };
    case types.getTimeSlotSuccess:
      return {
        ...state,
        timeSlotData: action.data,
      };
    case types.addDaysSlotsSuccess:
      return {
        ...state,
        getDaysSlotsSuccessResponse: {
          data: action.data,
        },
      };
    case types.visitTimeSlotErrors:
      return {
        ...state,
        timeSlotErrors: action.data,
      };
    case types.addPlanTypeError:
      return {
        ...state,
        addPlanTypeError: action.data,
      };
    case types.updatePlanTypeError:
      return {
        ...state,
        updatePlanTypeError: action.data,
      };
    case types.getDaySuccess:
      return {
        ...state,
        getDaySuccess: action.data,
      };

    default:
      return state;
  }
};
