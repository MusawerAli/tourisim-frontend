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
      handleOnChange("name", updateData.name);
      handleOnChange("model", updateData.model);
      handleOnChange("brand", updateData.brand);
      handleOnChange("vehicle_no", updateData.vehicle_no);
      handleOnChange("color", updateData.color);
    } else {
      handleOnChange("name", "");
      handleOnChange("model", "");
      handleOnChange("brand", "");
      handleOnChange("vehicle_no", "");
      handleOnChange("color", "");
    }
  }, [updateData]);

  const stateSchema = {
    name: {
      value: "",
      error: "",
    },
    model: {
      value: "",
      error: "",
    },
    brand: {
      value: 1,
      error: "",
    },
    vehicle_no: {
      value: true,
      error: "",
    },
    color: {
      value: true,
      error: "",
    },
  };

  const validationStateSchema = {
    name: {
      required: true,
    },
    model: {
      required: true,
    },
    brand: {
      required: true,
    },
    vehicle_no: {
      required: false,
    },
    color: {
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
      model: state.model.value,
      brand: state.brand.value,
      vehicle_no: state.vehicle_no.value,
      color: state.color.value,
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
                Brand
              </label>
              <FormGroup>
                <Input
                  placeholder="Type Here"
                  type="text"
                  value={state.brand.value}
                  onChange={(e) =>
                    handleOnChange("brand", e.target.value)
                  }
                />
                {vehicleErrorData.brand && (
                  <div
                    className="text-center"
                    style={{ color: "red", float: "left" }}
                  >
                    <p>{vehicleErrorData.brand}</p>
                  </div>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row className="pt-2">
            <Col md="6">
              <label md="3" className="textColor">
                Model
              </label>
              <FormGroup>
                <Input
                  placeholder="Type Here"
                  type="text"
                  value={state.model.value}
                  onChange={(e) => handleOnChange("model", e.target.value)}
                />
              </FormGroup>
              {vehicleErrorData&&vehicleErrorData.errors?.model && (
                  <div
                    className="text-center"
                    style={{ color: "red", float: "left" }}
                  >
                    <p>{vehicleErrorData.errors?.model}</p>
                  </div>
                )}
            </Col>
            <Col md="6">
              <label md="3" className="textColor">
              Vehicle NO
              </label>
              <FormGroup>
                <Input
                  placeholder="Type Here"
                  type="text"
                  value={state.vehicle_no.value}
                  onChange={(e) =>
                    handleOnChange("vehicle_no", e.target.value)
                  }
                />
                {vehicleErrorData&&vehicleErrorData.errors?.vehicle_no && (
                  <div
                    className="text-center"
                    style={{ color: "red", float: "left" }}
                  >
                    <p>{vehicleErrorData.errors?.vehicle_no}</p>
                  </div>
                )}
              </FormGroup>
            </Col>
            
          </Row>

          <Row className="pt-2">
            <Col md="6">
              <label md="3" className="textColor">
              color
              </label>
              <FormGroup>
                <Input
                  placeholder="Type Here"
                  type="text"
                  value={state.color.value}
                  onChange={(e) => handleOnChange("color", e.target.value)}
                />
              </FormGroup>
              {vehicleErrorData&&vehicleErrorData.errors?.color && (
                  <div
                    className="text-center"
                    style={{ color: "red", float: "left" }}
                  >
                    <p>{vehicleErrorData.errors?.color}</p>
                  </div>
                )}
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
