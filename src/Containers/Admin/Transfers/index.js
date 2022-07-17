import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import filterICon from "./Images/filter.png";
import { NavLink } from "react-router-dom";
import closeIcon from "../../../assets/img/close.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import moment from "moment";
import ReactBSAlert from "react-bootstrap-sweetalert";

//utils
import useForm from "../../../Utils/useForm";

///Components
import {
  Button,
  CardTitle,
  FormGroup,
  Input,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Modal,
  ModalBody,
} from "reactstrap";


const Transfers = (props) => {
  
  const {

  } = props;

  const showDate = () => {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  };
  const [startDate, setStartDate] = useState(showDate());
  const [modal, setModal] = useState(false);
  const [filtersub, setfilterSub] = useState(false);
  const [currentTabData, setCurrentTabData] = useState(false);


  const SearchData = () => {
  };

  const stateSchema = {

  };

  const validationStateSchema = {

  };

  const { state, handleOnChange, setState } = useForm(
    stateSchema,
    validationStateSchema
  );

  const onTabSelect = (tab) => {
    if (tab === "Active Transfers") {
      
    } else if (tab === "Pending Transfers") {
      
    } 
    else if (tab === "Completed Transfers") {
      
    } 
    else {
      
    }
  };



  return (
    <>
      <div className="mt-4 minHeight ml-5 mr-5">
        <Row>
          <Col md="12">
            <CardTitle tag="h5" className="textColor">
              <b>Transfers</b>
            </CardTitle>
          </Col>
        </Row>
        <Row className="ml-0 mr-0">
          <Col md="6" className="removePadding">
            <Button className="adminVisitButton ">Transfers</Button>
          </Col>
          <Col md="6" className="removePadding">
            <NavLink to={"transfersPlans"}>
              <Button className="adminReportButton pl-5">Plans</Button>
            </NavLink>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md="10">
            <Tabs
              defaultActiveKey="All Transfers"
              transition={false}
              id="noanim-tab-example"
              className="mx-4"
              onSelect={(e) => onTabSelect(e)}
            >
 
              <Tab
                eventKey="Pending Transfers"
                title="Pending Transfers"
              ></Tab>
                <Tab
                eventKey="Completed Transfers"
                title="Completed Transfers"
              ></Tab>
                <Tab
                eventKey="Active Transfers"
                title="Active Transfers"
              ></Tab>
              <Tab eventKey="All Transfers" title="All Transfers"></Tab>
            </Tabs>
          </Col>
          <Col md="2" className="d-flex" onClick={() => setfilterSub(true)}>
            <img src={filterICon} alt="filter" className="showPointer" />
            <u
              className="showPointer"
              
            >
              Clear Filter
            </u>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md="3">
            <FormGroup>
              <Input
                placeholder="Search"
                type="search"
                className="searchFieldStyle"
                onChange={(e) => {
                }}
              />
            </FormGroup>
          </Col>
          <Col md="7"></Col>
          <Col md="2" className="d-flex justify-content-end">
            <Button className="buttonStyle" >
              New Transfer
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="mt-3">
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Passange</th>
                      <th>Driver</th>
                      <th>Vehicle No</th>
                      <th>Starting Point</th>
                      <th>Ending Point</th>
                      <th>Departure Time</th>
                      <th>Departure Time</th>
                      <th>Departure Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                            </td>
                            <td>
                              <u></u>
                            </td>
                            <td></td>
                            <td> </td>
                            <td> </td>
                            <td className="text-center">
                              
                            </td>
                            <td className="text-center">
                             
                            </td>
                          </tr>
                      
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};



export default Transfers;
