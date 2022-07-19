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
import {
  updateVehicle,
  addVehicle,
  
} from "Containers/redux/actions";


const AddVehicleModal = (props) => {
 
  const { modal, setModal, updateData, vehicleErrorData,
    request_error_response,request_success_response 
  } = props;
  const [showMessage, setShowMessage] = useState(false);
  debugger
  console.log(showMessage)
  useEffect(() => {
    if (updateData) {
      handleOnChange("name", updateData.user.name);
      handleOnChange("sure_name", updateData.user.sure_name);
      handleOnChange("email", updateData.user.email);
      handleOnChange("mobile_number", updateData.user.mobile_number);
    } else {
      handleOnChange("name", "");
      handleOnChange("sure_name", "");
      handleOnChange("email", "");
      handleOnChange("mobile_number", "");
    }
  }, [updateData]);

  const stateSchema = {
    name: {
      value: "",
      error: "",
    },
    sure_name: {
      value: "",
      error: "",
    },
    email: {
      value: 1,
      error: "",
    },
    mobile_number: {
      value: true,
      error: "",
    },
  };

  const validationStateSchema = {
    name: {
      required: true,
    },
    sure_name: {
      required: true,
    },
    email: {
      required: true,
    },
    mobile_number: {
      required: false,
    },
  };

  const { state, handleOnChange, disable } = useForm(
    stateSchema,
    validationStateSchema
  );


  const onAddVehicle = (type) => {
    debugger;
    const data = {
      name: state.name.value,
      sure_name: state.sure_name.value,
      email: state.email.value,
      mobile_number: state.mobile_number.value,
      role_id: state.role_id??3,
    };
    if (type) {
      debugger;
      props.updateVehicle(updateData.vehicle_uuid, data, setModal);
    } else {
      props.addVehicle(data, setModal);
    }
  };

  return (
    <>
      {showMessage ? (
        <SweetAlert
          title="Vehicle Created Successfull"
          setShowMessage={setShowMessage}
          type="success"
        />
      ) : (
        ""
      )}
      <Modal isOpen={modal}>
        <ModalBody>
          <div className="userModalHeading pb-4 textColor">
            <h5>{`${updateData ? "Update" : "Create New"} Vehicle`}</h5>
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
          {request_error_response&&request_error_response?.name && (
                  <div
                    className="text-center"
                    style={{ color: "red", float: "left" }}
                  >
                    <p>{request_error_response?.name}</p>
                  </div>
                )}
            <Col md="6">
              <label md="3" className="textColor">
                Name
              </label>
              <FormGroup>
                <Input
                  placeholder="Type Here"
                  type="text"
                  value={state.name.value}
                  onChange={(e) => handleOnChange("name", e.target.value)}
                />
              </FormGroup>
              {vehicleErrorData&&vehicleErrorData.errors?.name && (
                  <div
                    className="text-center"
                    style={{ color: "red", float: "left" }}
                  >
                    <p>{vehicleErrorData.errors?.name}</p>
                  </div>
                )}
            </Col>
            <Col md="6">
              <label md="3" className="textColor">
                Sure name
              </label>
              <FormGroup>
                <Input
                  placeholder="Type Here"
                  type="text"
                  value={state.sure_name.value}
                  onChange={(e) =>
                    handleOnChange("sure_name", e.target.value)
                  }
                />
                {vehicleErrorData.plan_type_name_en && (
                  <div
                    className="text-center"
                    style={{ color: "red", float: "left" }}
                  >
                    <p>{vehicleErrorData.plan_type_name_en}</p>
                  </div>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row className="pt-2">
            <Col md="6">
              <label md="3" className="textColor">
                Email
              </label>
              <FormGroup>
                <Input
                  placeholder="Type Here"
                  type="text"
                  value={state.email.value}
                  onChange={(e) => handleOnChange("email", e.target.value)}
                />
              </FormGroup>
              {vehicleErrorData&&vehicleErrorData.errors?.email && (
                  <div
                    className="text-center"
                    style={{ color: "red", float: "left" }}
                  >
                    <p>{vehicleErrorData.errors?.email}</p>
                  </div>
                )}
            </Col>
            <Col md="6">
              <label md="3" className="textColor">
                Mobile number
              </label>
              <FormGroup>
                <Input
                  placeholder="Type Here"
                  type="text"
                  value={state.mobile_number.value}
                  onChange={(e) =>
                    handleOnChange("mobile_number", e.target.value)
                  }
                />
                {vehicleErrorData&&vehicleErrorData.errors?.mobile_number && (
                  <div
                    className="text-center"
                    style={{ color: "red", float: "left" }}
                  >
                    <p>{vehicleErrorData.errors?.mobile_number}</p>
                  </div>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row className="pt-3">
            <Col md="12" className="justify-content-center d-flex">
              <Button
                className="buttonStyle"
                disabled={disable}
                onClick={() => onAddVehicle(updateData ? 1 : 0)}
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
  vehicleErrorData: state.commonReducer.vehicleErrorData,
  request_error_response: state.commonReducer.request_error_response,
  request_success_response: state.commonReducer.request_success_response,
});

const mapDispatchToProps = (dispatch) => ({
  addVehicle: (data, setModal, setShowMessage) =>
    dispatch(addVehicle(data, setModal, setShowMessage)),
  updateVehicle: (id, data, setModal,setShowMessage) =>
    dispatch(updateVehicle(id, data, setModal,setShowMessage)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddVehicleModal);
