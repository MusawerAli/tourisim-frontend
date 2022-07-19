import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import AddDriverModal from "./components/AddDriverModal";
import AddPassangerModal from "./components/AddPassangerModal";
import AddVehicleModal from "./components/AddVehicleModal";

import {
  Button,
  CardTitle,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Input,
} from "reactstrap";

//actions
import {
  getDriver,
  archiveDriver,
  getVehicle,
  archiveVehicle
} from "Containers/redux/actions";

import SweetAlert from "components/Alerts";

function Configrations(props) {


const [modal, setModal] = useState(false);
const [clickType, setClickType] = useState(false);
const [updateData, setUpdateData] = useState(false);
const [showMessage, setShowMessage] = useState(false);


  const {
    driverSuccessData,
    vehicleSuccessData,
    getDriver,
    
    getVehicle
  } = props;
  
  useEffect(() => {
    getDriver()
    getVehicle()
  }, []);

  return (
    <div className="ml-5 mr-5">
      {/* {showMessage}
      {showMessage && (
        <SweetAlert
          title={showMessage}
          setShowMessage={setShowMessage}
          type="success"
        />
      )} */}
      <Row className="mt-4">
        <Col md="12">
          <CardTitle tag="h5" className="textColor">
            Configrations
          </CardTitle>
        </Col>
      </Row>
      {/* <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col md="6" className="removePadding">
          <Button className="adminVisitButton ">Plans & Visits</Button>
        </Col>
        <Col md="6" className="removePadding">
          <NavLink to={"auditor"}>
            <Button className="adminReportButton pl-5">
              Subscriptions & Auditors
            </Button>
          </NavLink>
        </Col>
      </Row> */}
      <Row>
        <Col md="12">
          {/* <CardTitle tag="h5" className="textColor">
            Drivers
          </CardTitle> */}
        </Col>
      </Row>
      <Row>
        <Col md="6" className="d-flex align-items-center">
          <CardTitle tag="h5" className="textColor">
            Drivers Detail
          </CardTitle>
        </Col>
        <Col md="6" className="d-flex justify-content-end">
          <Button 
          className="buttonStyle"
          onClick={() => [
            setModal(true),
            setUpdateData(false),
            setClickType("driverModal"),
          ]}
          >
            Create New
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Sure Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                {driverSuccessData.length>0 &&
                    driverSuccessData.map((element) => (
                      <tr>
                        <td>{element.user.name}</td>
                        <td>{element.user.sure_name}</td>
                        <td>{element.user.email}</td>
                        <td>{element.user.city}</td>
                        <td>{element.user.mobile_number}</td>
                        <td>{element.user.active==true?'Active':'Inactive'}</td>
                        <td>
                          <Row className="spaceEvenly">
                            <u
                              onClick={() => [
                                setModal(true),
                                setUpdateData(element),
                                setClickType("driverModal"),
                              ]}
                            >
                              Edit
                            </u>
                            <u
                              onClick={() =>
                                props.archiveDriver(element.user.user_uuid, {
                                  status:
                                    element.user.active == true
                                      ? false
                                      : true,
                                })
                              }
                            >
                              
                              {element.user.active
                                ? "Archive"
                                : "Active"}
                            </u>
                          </Row>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md="12">
          {/* <CardTitle tag="h5" className="textColor">
            Visits
          </CardTitle> */}
        </Col>
      </Row>
      <Row>
        <Col md="6" className="d-flex align-items-center">
          <CardTitle tag="h5" className="textColor">
            Vehicle Info
          </CardTitle>
        </Col>
        <Col md="6" className="d-flex justify-content-end">
          <Button
            className="buttonStyle"
            onClick={() => [
              setModal(true),
              setUpdateData(false),
              setClickType("vehicleModal"),
            ]}
            >
            Create New
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Brand</th>
                    <th>vehicle No</th>
                    <th>Color</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                {vehicleSuccessData.length>0 &&
                    vehicleSuccessData.map((element) => (
                      <tr>
                        <td>{element?.name}</td>
                        <td>{element?.model}</td>
                        <td>{element?.brand}</td>
                        <td>{element?.vehicle_no}</td>
                        <td>{element?.color}</td>
                        <td>{element?.active==true?'Active':'Inactive'}</td>
                        <td>
                          <Row className="spaceEvenly">
                            <u
                              onClick={() => [
                                setModal(true),
                                setUpdateData(element),
                                setClickType("vehicleModal"),
                              ]}
                            >
                              Edit
                            </u>
                            <u
                              onClick={() =>
                                props.archiveVehicle(element?.vehicle_uuid, {
                                  status:
                                    element?.active == true
                                      ? false
                                      : true,
                                })
                              }
                            >
                              
                              {element?.active
                                ? "Archive"
                                : "Active"}
                            </u>
                          </Row>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {clickType === "driverModal" ? (
        <AddDriverModal
          modal={modal}
          setModal={setModal}
          updateData={updateData}
        />
      ) : (
        clickType === "vehicleModal" && (
          <AddVehicleModal
            modal={modal}
            setModal={setModal}
            updateData={updateData}
          />
        )
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  driverSuccessData:state.commonReducer.driverSuccessData,
  vehicleSuccessData:state.commonReducer.vehicleSuccessData
});

const mapDispatchToProps = (dispatch) => ({
  getDriver:() => dispatch(getDriver()),
  getVehicle:()=> dispatch(getVehicle()),

  archiveDriver: (id, data) =>
  dispatch(archiveDriver(id, data)),
  archiveVehicle: (id, data) =>
  dispatch(archiveVehicle(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Configrations);
