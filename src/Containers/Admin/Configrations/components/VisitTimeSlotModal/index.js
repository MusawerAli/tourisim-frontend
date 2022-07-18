import React, { useEffect, useState } from "react";
import closeIcon from "../../../../../assets/img/close.png";
import Switch from "react-bootstrap-switch";
import TimePicker from "react-time-picker";
import SweetAlert from "components/Alerts";
import { connect } from "react-redux";
import moment from "moment";

import { Button, Row, Col, Modal, ModalBody, FormGroup } from "reactstrap";

//config
import useForm from "../../../../../Utils/useForm";

//actions
import { addVisitTimeSlot, updateVisitTimeSlot } from "../../redux/actions";

const VisitTimeSlotModal = (props) => {
  const { modal, setModal, updateData, timeSlotErrors } = props;
  const [showMessage, setShowMessage] = useState(false);

  let time = moment().format("hh:mm:ss");

  useEffect(() => {
    if (updateData) {
      handleOnChange("startTime", updateData.start_time);
      handleOnChange("endTime", updateData.end_time);
      handleOnChange("status", updateData.status === "active" ? true : false);
    } else {
      handleOnChange("startTime", time);
      handleOnChange("endTime", time);
      handleOnChange("status", true);
    }
  }, [updateData]);

  const stateSchema = {
    startTime: {
      value: time,
      error: "",
    },
    endTime: {
      value: time,
      error: "",
    },
    status: {
      value: true,
      error: "",
    },
  };

  const validationStateSchema = {
    startTime: {
      required: true,
    },
    endTime: {
      required: true,
    },
    status: {
      required: false,
    },
  };

  const { state, handleOnChange, disable } = useForm(
    stateSchema,
    validationStateSchema
  );

  const onAddVisitTimeSlot = (type) => {
    const data = {
      start_time: moment(state.startTime.value, "hh:mm A").format("HH:mm:ss"),
      end_time: moment(state.endTime.value, "hh:mm A").format("HH:mm:ss"),
    };
    if (type) {
      data["status"] = state.status.value ? "active" : "archive";
      props.updateVisitTimeSlot(updateData.id, data, setModal);
    } else {
      props.addVisitTimeSlot(data, setModal, setShowMessage);
    }
  };

  return (
    <>
      {showMessage ? (
        <SweetAlert
          title="Visit Time Slot Created Successfull"
          setShowMessage={setShowMessage}
          type="success"
        />
      ) : (
        ""
      )}
      <Modal isOpen={modal}>
        <ModalBody>
          <div className="userModalHeading pb-4 textColor">
            <h5>{`${updateData ? "Update" : "Create New"}`}Visit Time Slot</h5>
            <div className="pl-5">
              <img
                src={closeIcon}
                className="closepointer"
                height="30px"
                width="30px"
                onClick={() => setModal(false)}
                alt="close"
              />
            </div>
          </div>
          {timeSlotErrors && (
            <label
              className="mb-3 d-flex justify-content-center"
              style={{ color: "red" }}
            >
              {timeSlotErrors}
            </label>
          )}

          <label md="3" className="textColor">
            Time Range
          </label>
          <Row className="pt-2">
            <Col md="12" className="d-flex justify-content-between">
              <div>
                <FormGroup>
                  <TimePicker
                    onChange={(time) => handleOnChange("startTime", time)}
                    value={state.startTime.value}
                  />
                </FormGroup>
              </div>
              <div className="d-flex mt-1">____</div>
              <div>
                <FormGroup>
                  <TimePicker
                    onChange={(time) => handleOnChange("endTime", time)}
                    value={state.endTime.value}
                  />
                </FormGroup>
              </div>
            </Col>
          </Row>
          {updateData && (
            <Row className="pt-3">
              <Col md="6">
                <label className="textColor d-flex flex-direction-column">
                  Status
                </label>
                <Switch
                  offColor="primary"
                  onColor="primary"
                  value={state.status.value}
                  onChange={(el, val) => handleOnChange("status", val)}
                />
              </Col>
            </Row>
          )}

          <Row className="pt-3">
            <Col md="12" className="justify-content-center d-flex">
              <Button
                className="buttonStyle"
                disabled={disable}
                onClick={() => onAddVisitTimeSlot(updateData ? 1 : 0)}
              >
                {`${updateData ? "Update" : "Create"}`}
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  timeSlotErrors: state.configration.timeSlotErrors,
});

const mapDispatchToProps = (dispatch) => ({
  addVisitTimeSlot: (data, setModal, setShowMessage) =>
    dispatch(addVisitTimeSlot(data, setModal, setShowMessage)),
  updateVisitTimeSlot: (id, data, setModal) =>
    dispatch(updateVisitTimeSlot(id, data, setModal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisitTimeSlotModal);
