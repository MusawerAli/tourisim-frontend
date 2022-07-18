import React, { useEffect, useState } from "react";
import closeIcon from "../../../../../assets/img/close.png";
import Switch from "react-bootstrap-switch";
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

//actions
import { addVisitPerMonth, updateVisitPerMonth } from "../../redux/actions";

//config
import useForm from "../../../../../Utils/useForm";
import { connect } from "react-redux";

const VisitPerMonth = (props) => {
  const { modal, setModal, updateData } = props;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (updateData) {
      handleOnChange("arabicName", updateData.visit_name_ar);
      handleOnChange("englishName", updateData.visit_name_en);
      handleOnChange("visitValue", updateData.visits_num);
      handleOnChange("status", updateData.status === "active" ? true : false);
    } else {
      handleOnChange("arabicName", "");
      handleOnChange("englishName", "");
      handleOnChange("visitValue", 1);
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
    visitValue: {
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
    visitValue: {
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
      if (state.visitValue.value > 1) {
        let currentValue = state.visitValue.value;
        currentValue -= 1;
        handleOnChange("visitValue", currentValue);
      }
    } else {
      let currentValue = state.visitValue.value;
      currentValue += 1;
      handleOnChange("visitValue", currentValue);
    }
  };

  const onAddVisitPerMonth = (type) => {
    const data = {
      visit_name_ar: state.arabicName.value,
      visit_name_en: state.englishName.value,
      visits_num: state.visitValue.value,
    };
    if (type) {
      data["status"] = state.status.value ? "active" : "archive";
      props.updateVisitPerMonth(updateData.id, data, setModal);
    } else {
      props.addVisitPerMonth(data, setModal, setShowMessage);
    }
  };

  return (
    <>
      {showMessage ? (
        <SweetAlert
          title="Visits Per Months Created Successfull"
          setShowMessage={setShowMessage}
          type="success"
        />
      ) : (
        ""
      )}
      <Modal isOpen={modal}>
        <ModalBody>
          <div className="userModalHeading pb-4 textColor">
            <h5>{`${updateData ? "Update" : "Create New"} Visit Per Month`}</h5>
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
                Visit Arabic Name
              </label>
              <FormGroup>
                <Input
                  placeholder="Type Here"
                  type="text"
                  value={state.arabicName.value}
                  onChange={(e) => handleOnChange("arabicName", e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <label md="3" className="textColor">
                Visit English Name
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
              </FormGroup>
            </Col>
          </Row>
          <Row className="pt-3">
            <Col md="6">
              <label className="textColor">Visit Value in Days</label>
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
                    value={state.visitValue.value}
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
                diabled={disable}
                onClick={() => onAddVisitPerMonth(updateData ? 1 : 0)}
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

const mapDispatchToProps = (dispatch) => ({
  addVisitPerMonth: (data, setModal, setShowMessage) =>
    dispatch(addVisitPerMonth(data, setModal, setShowMessage)),
  updateVisitPerMonth: (id, data, setModal) =>
    dispatch(updateVisitPerMonth(id, data, setModal)),
});
export default connect(null, mapDispatchToProps)(VisitPerMonth);
