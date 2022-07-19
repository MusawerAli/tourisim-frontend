import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import AddPlanTypeModal from "./components/AddPlanTypeModal";
// import VisitPerMonth from "./components/VisitPerMonthModal";
// import VisitTimeSlotModal from "./components/VisitTimeSlotModal";

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
  // getVisitsPerMonth,
  // archiveVisitPerMonth,
  // archivePlanType,
  // archiveVisitTimeSlot,
  // addVisitingCapacity,
  // getVisitingCapacity,
  // addDaysSlots,
  // getAllPlans,
  // getDays,
  // addDaysSlotsSuccess,
} from "./redux/actions";
import { requestSuccessResponse } from "../../redux/actions";
import { getTimeSlots } from "../Configrations/redux/actions";
import SweetAlert from "components/Alerts";

function Configrations(props) {
  const {
    driverSuccessData,
    getDriver
  } = props;
  
  useEffect(() => {
    getDriver()
  }, []);
  console.log('driverSuccessData',driverSuccessData)
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
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
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
      </Row>
      <Row>
        <Col md="12">
          <CardTitle tag="h5" className="textColor">
            Plans
          </CardTitle>
        </Col>
      </Row>
      <Row>
        <Col md="6" className="d-flex align-items-center">
          <CardTitle tag="h5" className="textColor">
            Plan Types
          </CardTitle>
        </Col>
        <Col md="6" className="d-flex justify-content-end">
          <Button
            className="buttonStyle"
            
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
                    <th>Plan ID</th>
                    <th>Plan Name</th>
                    <th>Creation Date</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                  asdfasd
                  
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md="12">
          <CardTitle tag="h5" className="textColor">
            Visits
          </CardTitle>
        </Col>
      </Row>
      <Row>
        <Col md="6" className="d-flex align-items-center">
          <CardTitle tag="h5" className="textColor">
            Visits Per Month
          </CardTitle>
        </Col>
        <Col md="6" className="d-flex justify-content-end">
          <Button
            className="buttonStyle">
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
                    <th>Visit ID</th>
                    <th>Visit Name</th>
                    <th>Creation Date</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md="6" className="d-flex align-items-center">
          <CardTitle tag="h5" className="textColor">
            Visits Time Slot
          </CardTitle>
        </Col>
        <Col md="6" className="d-flex justify-content-end">
          <Button
            className="buttonStyle"
          >
            Create New
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <Table responsive style={{ cursor: "pointer" }}>
                <thead>
                  <tr>
                    <th>Slot ID</th>
                    <th>Slot Time</th>
                    <th>Creation Date</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md="12">
          <CardTitle tag="h5" className="textColor">
            Time Slot in Days
          </CardTitle>
        </Col>
      </Row>

      <Row className="pt-3">
        <Col md="10">
          <CardTitle tag="h5" className="textColor mb-0 font-weight-bold">
            Visiting Capacity Per Time Slot
          </CardTitle>
        </Col>
      </Row>
      <Row className="pt-3">
        <Col md="6">
          asdfasd
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <Button
          className="btn-round selected"
          size="lg"
          style={{ width: 190 }}
          block
          
        >
          Save
        </Button>
      </Row>
      {/* {clickType === "planType" ? (
        <AddPlanTypeModal
          modal={modal}
          setModal={setModal}
          updateData={updateData}
        />
      ) : clickType === "visitPerMonth" ? (
        <VisitPerMonth
          modal={modal}
          setModal={setModal}
          updateData={updateData}
        />
      ) : (
        clickType === "visitsTimeSlot" && (
          <VisitTimeSlotModal
            modal={modal}
            setModal={setModal}
            updateData={updateData}
          />
        )
      )} */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  driverSuccessData:state.commonReducer.driverSuccessData
});

const mapDispatchToProps = (dispatch) => ({
  getDriver:() => dispatch(getDriver())
});

export default connect(mapStateToProps, mapDispatchToProps)(Configrations);
