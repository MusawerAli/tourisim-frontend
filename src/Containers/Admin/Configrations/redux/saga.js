import { all, call, put, takeLatest } from "redux-saga/effects";
// import { push } from "connected-react-router";

// // constants
import { appConfig } from "Config/app";

// // utils
import XHR from "Utils/xhr";

// redux
import types from "./types";
// import {
//   getVisitsPerMonthSuccess,
//   visitTimeSlotErrors,
//   getVisitingCapacitySuccess,
//   getAllPlansSuccess,
//   getAllPlans,
//   getVisitsPerMonth,
//   addPlanTypeError,
//   getDaySuccess,
//   addDaysSlotsSuccess,
//   getTimeSlotSuccess,
// } from "./actions";
// import { requestSuccessResponse } from "../../../redux/actions";

// import { getTimeSlots } from "../../../Admin/Configrations/redux/actions";

// function getVisitsPerMonthAPI() {
//   const URL = `${appConfig.apiUrl}/api/visits-per-month`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "GET",
//   };

//   return XHR(URL, options);
// }

// function* getVisitsPerMonthData() {
//   try {
//     const response = yield call(getVisitsPerMonthAPI);
//     yield put(getVisitsPerMonthSuccess(response.data.data));
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function addVisitsPerMonthAPI(data) {
//   const URL = `${appConfig.apiUrl}/api/visits-per-month`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "POST",
//     data,
//   };

//   return XHR(URL, options);
// }

// function* addVisitsPerMonth({ data, setModal, setShowMessage }) {
//   try {
//     yield call(addVisitsPerMonthAPI, data);
//     setShowMessage(true);
//     setModal(false);
//     yield put(getVisitsPerMonth());
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function updateVisitsPerMonthAPI(id, data) {
//   const URL = `${appConfig.apiUrl}/api/visits-per-month/${id}`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "PUT",
//     data,
//   };

//   return XHR(URL, options);
// }

// function* updateVisitsPerMonth({ id, data, setModal }) {
//   try {
//     yield call(updateVisitsPerMonthAPI, id, data);
//     yield put(getVisitsPerMonth());
//     setModal(false);
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function archiveVisitsPerMonthAPI(id, data) {
//   const URL = `${appConfig.apiUrl}/api/visits-per-month/${id}/status`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "PUT",
//     data,
//   };

//   return XHR(URL, options);
// }

// function* archiveVisitsPerMonth({ id, data }) {
//   try {
//     const responseArchive = yield call(archiveVisitsPerMonthAPI, id, data);
//     if (responseArchive.status == 200) {
//       const response = yield call(getVisitsPerMonthAPI);
//       yield put(getVisitsPerMonthSuccess(response.data.data));
//       yield put(
//         requestSuccessResponse({
//           data: response.data.data,
//           msg: "Updated Successfully.",
//         })
//       );
//     }
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function addPlanTypeAPI(data) {
//   const URL = `${appConfig.apiUrl}/api/plan-types`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "POST",
//     data,
//   };

//   return XHR(URL, options);
// }

// function* addPlanType({ data, setModal, setShowMessage }) {
//   try {
//     yield call(addPlanTypeAPI, data);
//     setShowMessage(true);
//     setModal(false);
//     yield put(getAllPlans());
//   } catch (e) {
//     const { response } = e;
//     yield put(addPlanTypeError(response.data.errors));
//   }
// }

// function updatePlanTypeAPI(id, data) {
//   const URL = `${appConfig.apiUrl}/api/plan-types/${id}`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "PUT",
//     data,
//   };

//   return XHR(URL, options);
// }

// function* updatePlanType({ id, data, setModal }) {
//   try {
//     yield call(updatePlanTypeAPI, id, data);
//     setModal(false);
//     yield put(getAllPlans());
//     yield put(
//       requestSuccessResponse({
//         data: "",
//         msg: "Updated Successfully.",
//       })
//     );
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function archivePlanTypeAPI(id, data) {
//   const URL = `${appConfig.apiUrl}/api/plan-types/${id}/status`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "PUT",
//     data,
//   };

//   return XHR(URL, options);
// }

// function* archivePlanType({ id, data }) {
//   try {
//     yield call(archivePlanTypeAPI, id, data);
//     const response = yield call(getAllPlansAPI);
//     yield put(getAllPlansSuccess(response.data.data));
//     yield put(
//       requestSuccessResponse({
//         data: response.data.data,
//         msg: "Updated Successfully.",
//       })
//     );
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function addVisitTimeSlotAPI(data) {
//   const URL = `${appConfig.apiUrl}/api/visits-time-slot`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "POST",
//     data,
//   };

//   return XHR(URL, options);
// }

// function* addVisitTimeSlot({ data, setModal, setShowMessage }) {
//   try {
//     yield call(addVisitTimeSlotAPI, data);
//     setShowMessage(true);
//     setModal(false);
//     yield put(visitTimeSlotErrors(false));
//     yield put(getTimeSlots());
//   } catch (e) {
//     const { response } = e;
//     const { start_time, end_time } = response.data.errors;
//     yield put(visitTimeSlotErrors(start_time ? start_time[0] : end_time[0]));
//   }
// }

// function updateVisitTimeSlotAPI(id, data) {
//   const URL = `${appConfig.apiUrl}/api/visits-time-slot/${id}`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "PUT",
//     data,
//   };

//   return XHR(URL, options);
// }

// function* updateVisitTimeSlot({ id, data, setModal }) {
//   try {
//     yield call(updateVisitTimeSlotAPI, id, data);
//     setModal(false);
//     yield put(getTimeSlots());
//   } catch (e) {
//     const { response } = e;
//     const { start_time, end_time } = response.data.errors;
//     yield put(visitTimeSlotErrors(start_time ? start_time[0] : end_time[0]));
//   }
// }

// function archiveVisitTimeSlotAPI(id, data) {
//   const URL = `${appConfig.apiUrl}/api/visits-time-slot/${id}/status`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "PUT",
//     data,
//   };

//   return XHR(URL, options);
// }

// function* archiveVisitTimeSlot({ id, data }) {
//   try {
//     const archieveResponse = yield call(archiveVisitTimeSlotAPI, id, data);
//     if (archieveResponse.status == 200) {
//       const response = yield call(getTimeSlotAPI);
//       yield put(getTimeSlotSuccess(response.data.data));
//       yield put(
//         requestSuccessResponse({
//           data: response.data.data,
//           msg: "Updated Successfully.",
//         })
//       );
//     }
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function addVisitingCapacityAPI(data) {
//   const URL = `${appConfig.apiUrl}/api/days-time-slot`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "POST",
//     data,
//   };

//   return XHR(URL, options);
// }

// function* addVisitingCapacity({ data }) {
//   try {
//     yield call(addVisitingCapacityAPI, data);
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function getVisitingCapacityAPI() {
//   const URL = `${appConfig.apiUrl}/api/days-time-slot`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "GET",
//   };

//   return XHR(URL, options);
// }

// function* getVisitingCapacity() {
//   try {
//     const response = yield call(getVisitingCapacityAPI);
//     yield put(getVisitingCapacitySuccess(response.data.data));
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function addDaysSlotsAPI(data) {
//   const URL = `${appConfig.apiUrl}/api/days-slot`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "POST",
//     data,
//   };

//   return XHR(URL, options);
// }

// function* addDaysSlots({ data }) {
//   try {
//     const response = yield call(addDaysSlotsAPI, data);
//     if (response.status === 200) {
//       yield put(
//         addDaysSlotsSuccess({
//           data: response.data.data,
//           msg: "Updated Successfully.",
//         })
//       );
//     }
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function getAllPlansAPI() {
//   const URL = `${appConfig.apiUrl}/api/plan-types`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "GET",
//   };

//   return XHR(URL, options);
// }

// function* getAllPlansData() {
//   try {
//     const response = yield call(getAllPlansAPI);
//     yield put(getAllPlansSuccess(response.data.data));
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function getSelectedDays() {
//   const URL = `${appConfig.apiUrl}/api/days-slot`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "GET",
//   };

//   return XHR(URL, options);
// }

// function* getSelectedDaysData() {
//   try {
//     const response = yield call(getSelectedDays);
//     yield put(getDaySuccess(response.data.data));
//   } catch (e) {
//     // const { response } = e;
//   }
// }

// function getTimeSlotAPI() {
//   const URL = `${appConfig.apiUrl}/api/visits-time-slot`;
//   const token = localStorage.getItem("token");
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     method: "GET",
//   };

//   return XHR(URL, options);
// }

// function* getTimeSlotData() {
//   try {
//     const response = yield call(getTimeSlotAPI);
//     yield put(getTimeSlotSuccess(response.data.data));
//   } catch (e) {
//     // const {response} = e
//   }
// }

export default all([
  // takeLatest(types.getTimeSlots, getTimeSlotData),
  // takeLatest(types.getVisitsPerMonth, getVisitsPerMonthData),
  // takeLatest(types.addPlanType, addPlanType),
  // takeLatest(types.updatePlanType, updatePlanType),
  // takeLatest(types.archivePlanType, archivePlanType),
  // takeLatest(types.addVisitPerMonth, addVisitsPerMonth),
  // takeLatest(types.updateVisitPerMonth, updateVisitsPerMonth),
  // takeLatest(types.archiveVisitPerMonth, archiveVisitsPerMonth),
  // takeLatest(types.addVisitTimeSlot, addVisitTimeSlot),
  // takeLatest(types.updateVisitTimeSlot, updateVisitTimeSlot),
  // takeLatest(types.archiveVisitTimeSlot, archiveVisitTimeSlot),
  // takeLatest(types.addVisitingCapacity, addVisitingCapacity),
  // takeLatest(types.getVisitingCapacity, getVisitingCapacity),
  // takeLatest(types.addDaysSlots, addDaysSlots),
  // takeLatest(types.getAllPlans, getAllPlansData),
  // takeLatest(types.getDays, getSelectedDaysData),
]);
