import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import TransfersLogo from "../../assets/img/react-logo.png";

//actions
import { login } from "./redux/actions";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
} from "reactstrap";

function Login(props) {
  const { login, errors } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    login(data);
  };
  return (
    <div className="login-page">
      <Container>
        <div className="justify-content-center d-flex pb-5 mt-0">
          <img src={'TransfersLogo'} alt="transfer" />
        </div>
        <Row>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Form onSubmit="onLogin">
              <Card className="card-login">
                <CardHeader>
                  <CardHeader>
                    <h3 className="header text-center">Login</h3>
                  </CardHeader>
                </CardHeader>
                {errors && (
                  <Label className="text-center" style={{ color: "red" }}>
                    {errors}
                  </Label>
                )}

                <CardBody>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Enter Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="off"
                    />
                  </InputGroup>
                  <br />
                </CardBody>
                <CardFooter>
                  <div className="justify-content-center d-flex">
                    <Button
                      className="btn-round mb-3 buttonStyle"
                      onClick={onLogin}
                    >
                      Log in
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
      <div
        className="full-page-background"
        style={{
          backgroundImage: `url(${require("assets/img/fabio-mangione.jpg")})`,
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  debugger;
  return ({
    errors: state.login.errors,
  })
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
