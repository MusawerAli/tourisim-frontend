import React, { useEffect, useState } from "react";
import closeIcon from "../../../../../assets/img/close.png";
import Switch from "react-bootstrap-switch";
import { connect } from "react-redux";
import SweetAlert from "components/Alerts";

import {
  Button,
  Row,
  Col,
  Input,
  Modal,
  ModalBody,
  FormGroup,
} from "reactstrap";

//config
import useForm from "../../../../../Utils/useForm";

//actions
import { addPlanType, updatePlanType } from "../../redux/actions";

const AddPlanTypeModal = (props) => {
  const { modal, setModal, updateData, addPlanTypeError } = props;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (updateData) {
      handleOnChange("arabicName", updateData.plan_type_name_ar);
      handleOnChange("englishName", updateData.plan_type_name_en);
      handleOnChange("planValue", updateData.plan_days);
      handleOnChange("status", updateData.status === "active" ? true : false);
    } else {
      handleOnChange("arabicName", "");
      handleOnChange("englishName", "");
      handleOnChange("planValue", 1);
      handleOnChange("status", true);
    }
  }, [updateData]);

  const stateSchema = {
    arabicName: {
      value: "",
      error: "",
    },
    englishName: {
      value: "",
      error: "",
    },
    planValue: {
      value: 1,
      error: "",
    },
    status: {
      value: true,
      error: "",
    },
  };

  const validationStateSchema = {
    arabicName: {
      required: true,
    },
    englishName: {
      required: true,
    },
    planValue: {
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

  const valueinDays = (type) => {
    if (type === "-") {
      if (state.planValue.value > 1) {
        let currentValue = state.planValue.value;
        currentValue -= 1;
        handleOnChange("planValue", currentValue);
      }
    } else {
      let currentValue = state.planValue.value;
      currentValue += 1;
      handleOnChange("planValue", currentValue);
    }
  };

  const onAddPlanType = (type) => {
    const data = {
      plan_type_name_ar: state.arabicName.value,
      plan_type_name_en: state.englishName.value,
      plan_days: state.planValue.value,
    };
    if (type) {
      data["status"] = state.status.value ? "active" : "archive";
      props.updatePlanType(updateData.id, data, setModal);
    } else {
      props.addPlanType(data, setModal, setShowMessage);
    }
  };

  return (
    <>
      {showMessage ? (
        <SweetAlert
          title="Plan Type Created Successfull"
          setShowMessage={setShowMessage}
          type="success"
        />
      ) : (
        ""
      )}
      <Modal isOpen={modal}>
        <ModalBody>
          <div className="userModalHeading pb-4 textColor">
            <h5>{`${updateData ? "Update" : "Create New"} Plan Type`}</h5>
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
          <Row className="pt-2">
            <Col md="6">
              <label md="3" className="textColor">
                Plan Arabic Name
              </label>
              <FormGroup>
                <Input
                  placeholder="Type Here"
                  type="text"
                  value={state.arabicName.value}
                  onChange={(e) => handleOnChange("arabicName", e.target.value)}
                />
              </FormGroup>
              {addPlanTypeError.plan_type_name_ar && (
                <div
                  className="text-center"
                  style={{ color: "red", float: "left" }}
                >
                  <p>{addPlanTypeError.plan_type_name_ar}</p>
                </div>
              )}
            </Col>
            <Col md="6">
              <label md="3" className="textColor">
                Plan English Name
              </label>
              <FormGroup>
                <Input
                  placeholder="Type Here"
                  type="text"
                  value={state.englishName.value}
                  onChange={(e) =>
                    handleOnChange("englishName", e.target.value)
                  }
                />
                {addPlanTypeError.plan_type_name_en && (
                  <div
                    className="text-center"
                    style={{ color: "red", float: "left" }}
                  >
                    <p>{addPlanTypeError.plan_type_name_en}</p>
                  </div>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row className="pt-3">
            <Col md="6">
              <label className="textColor">Plan Value in Days</label>
              <div className="incrementFields">
                <div className="incrementor">
                  <p
                    className="incrementButton"
                    onClick={() => valueinDays("-")}
                  >
                    -
                  </p>
                  <Input
                    className="incrementFileld"
                    type="text"
                    value={state.planValue.value}
                  />
                  <p
                    className="decrementButton"
                    onClick={() => valueinDays("+")}
                  >
                    +
                  </p>
                </div>
              </div>
            </Col>
            {updateData && (
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
            )}
          </Row>
          <Row className="pt-3">
            <Col md="12" className="justify-content-center d-flex">
              <Button
                className="buttonStyle"
                disabled={disable}
                onClick={() => onAddPlanType(updateData ? 1 : 0)}
              >
                {updateData ? "Update" : "Create"}
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  addPlanTypeError: state.configration.addPlanTypeError,
});

const mapDispatchToProps = (dispatch) => ({
  addPlanType: (data, setModal, setShowMessage) =>
    dispatch(addPlanType(data, setModal, setShowMessage)),
  updatePlanType: (id, data, setModal) =>
    dispatch(updatePlanType(id, data, setModal)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPlanTypeModal);
