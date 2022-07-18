import types from "./types";

export const getVisitsPerMonth = () => ({
  type: types.getVisitsPerMonth,
});

export const getVisitsPerMonthSuccess = (data) => ({
  type: types.getVisitsPerMonthSuccess,
  data,
});

export const addPlanType = (data, setModal, setShowMessage) => ({
  type: types.addPlanType,
  data,
  setModal,
  setShowMessage,
});

export const addPlanTypeError = (data, setModal) => ({
  type: types.addPlanTypeError,
  data,
  setModal,
});

export const updatePlanType = (id, data, setModal) => ({
  type: types.updatePlanType,
  id,
  data,
  setModal,
});

export const archivePlanType = (id, data) => ({
  type: types.archivePlanType,
  id,
  data,
});

export const addVisitPerMonth = (data, setModal, setShowMessage) => ({
  type: types.addVisitPerMonth,
  data,
  setModal,
  setShowMessage,
});

export const updateVisitPerMonth = (id, data, setModal) => ({
  type: types.updateVisitPerMonth,
  id,
  data,
  setModal,
});

export const archiveVisitPerMonth = (id, data) => ({
  type: types.archiveVisitPerMonth,
  id,
  data,
});

export const addVisitTimeSlot = (data, setModal, setShowMessage) => ({
  type: types.addVisitTimeSlot,
  data,
  setModal,
  setShowMessage,
});

export const updateVisitTimeSlot = (id, data, setModal) => ({
  type: types.updateVisitTimeSlot,
  id,
  data,
  setModal,
});
export const getTimeSlotSuccess = (data) => ({
  type: types.getTimeSlotSuccess,
  data,
});
export const getTimeSlots = () => ({
  type: types.getTimeSlots,
});
export const archiveVisitTimeSlot = (id, data) => ({
  type: types.archiveVisitTimeSlot,
  id,
  data,
});

export const visitTimeSlotErrors = (data) => ({
  type: types.visitTimeSlotErrors,
  data,
});

export const addVisitingCapacity = (data) => ({
  type: types.addVisitingCapacity,
  data,
});

export const getVisitingCapacity = () => ({
  type: types.getVisitingCapacity,
});

export const getVisitingCapacitySuccess = (data) => ({
  type: types.getVisitingCapacitySuccess,
  data,
});

export const addDaysSlots = (data) => ({
  type: types.addDaysSlots,
  data,
});

export const addDaysSlotsSuccess = (data) => ({
  type: types.addDaysSlotsSuccess,
  data,
});

export const getAllPlans = () => ({
  type: types.getAllPlans,
});

export const getAllPlansSuccess = (data) => ({
  type: types.getAllPlansSuccess,
  data,
});

export const getDays = () => ({
  type: types.getDays,
});

export const getDaySuccess = (data) => ({
  type: types.getDaySuccess,
  data,
});
