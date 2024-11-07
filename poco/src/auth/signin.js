import React, { useState, useEffect } from "react";
import { Container, Row, Col, CardBody, Form, FormGroup, Input, Label, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import man from "../assets/images/dashboard/user.png";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name") || "Elana Saint");
  const [isuser, setisuser] = useState(localStorage.getItem("isUser") || true);

  useEffect(() => {
    localStorage.setItem("profileURL", value);
    localStorage.setItem("Name", name);
    localStorage.setItem("isUser", isuser);
    if (value !== null) localStorage.setItem("profileURL", value);
    else localStorage.setItem("profileURL", man);
    // eslint-disable-next-line
  }, [value, name, isuser]);

  const loginAuth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (email !== "" && password !== "") {
      localStorage.setItem("login", true);
      history(`${process.env.PUBLIC_URL}/dashboard/default`);
    }
  };
  const googleAuth = async () => {
    history(`${process.env.PUBLIC_URL}/dashboard/default`);
  };

  const facebookAuth = async () => {
    history(`${process.env.PUBLIC_URL}/dashboard/default`);
  };
  const twitterAuth = async () => {
    history(`${process.env.PUBLIC_URL}/dashboard/default`);
  };

  const githubAuth = async () => {
    history(`${process.env.PUBLIC_URL}/dashboard/default`);
  };
  const toggleform = () => {
    document.querySelector(".cont").classList.toggle("s--signup");
  };

  return (
    <div className="page-wrapper">
      <Container fluid={true} className="p-0">
        {/*  <!-- login page start--> */}
        <div className="authentication-main m-0 only-login">
          <Row>
            <Col md="12">
              <div className="auth-innerright">
                <div className="authentication-box">
                  <CardBody className="d-flex h-100">
                    <div className="cont text-center b-light">
                      <div>
                        <Form className="theme-form">
                          <h4>LOGIN</h4>
                          <h6>Enter your Username and Password</h6>
                          <FormGroup>
                            <Label className="col-form-label pt-0">Your Name</Label>
                            <Input className="form-control" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                          </FormGroup>
                          <FormGroup>
                            <Label className="col-form-label">Password</Label>
                            <Input className="form-control" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                          </FormGroup>
                          <div className="checkbox p-0">
                            <Input id="checkbox1" type="checkbox" />
                            <Label for="checkbox1">Remember me</Label>
                          </div>
                          <FormGroup className="d-flex flex-wrap mt-3 mb-0">
                            {loading ? (
                              <Button color="primary d-block w-100" disabled={loading}>
                                LOADING...
                              </Button>
                            ) : (
                              <Button color="primary d-block w-100" onClick={(event) => loginAuth(event)}>
                                LOGIN
                              </Button>
                            )}
                          </FormGroup>
                          <div className="login-divider"></div>
                          <div className="social mt-3">
                            <Row className="btn-showcase dflex">
                              <Col md="3" sm="6">
                                <Button color="social-btn btn-fb" onClick={facebookAuth}>
                                  Facebook
                                </Button>
                              </Col>
                              <Col md="3" sm="6">
                                <Button color="social-btn btn-twitter" onClick={twitterAuth}>
                                  Twitter
                                </Button>
                              </Col>
                              <Col md="3" sm="6">
                                <Button color="social-btn btn-google" onClick={googleAuth}>
                                  Google +{" "}
                                </Button>
                              </Col>
                              <Col md="3" sm="6">
                                <Button
                                  color="social-btn btn-github w-100"
                                  onClick={githubAuth}
                                  style={{
                                    backgroundColor: "#8d6e63",
                                    color: "#fff",
                                  }}>
                                  Github
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Form>
                      </div>
                      <div className="sub-cont">
                        <div className="img">
                          <div className="img__text m--up">
                            <h2>New User?</h2>
                            <p>Sign up and discover great amount of new opportunities!</p>
                          </div>
                          <div className="img__text m--in">
                            <h2>One of us?</h2>
                            <p>If you already has an account, just sign in. We've missed you!</p>
                          </div>
                          <div className="img__btn" onClick={toggleform}>
                            <span className="m--up">Sign up</span>
                            <span className="m--in">Sign in</span>
                          </div>
                        </div>
                        <div>
                          <Form className="theme-form">
                            <h4 className="text-center">NEW USER</h4>
                            <h6 className="text-center">Enter your Username and Password For Signup</h6>
                            <Row className="dflex">
                              <Col md="12">
                                <FormGroup>
                                  <Input className="btn-pill" type="text" placeholder="First Name" />
                                </FormGroup>
                              </Col>
                              <Col md="12">
                                <FormGroup>
                                  <Input className="btn-pill" type="text" placeholder="Last Name" />
                                </FormGroup>
                              </Col>
                            </Row>
                            <FormGroup>
                              <Input className="btn-pill" type="text" placeholder="User Name" />
                            </FormGroup>
                            <FormGroup>
                              <Input className="btn-pill" type="password" placeholder="Password" />
                            </FormGroup>
                            <Row className="dflex">
                              <Col sm="4">
                                <Button color="primary" type="submit">
                                  Sign Up
                                </Button>
                              </Col>
                              <Col sm="8">
                                <div className="text-start mt-2 m-l-20">
                                  Are you already user?  
                                  <Link to={`${process.env.PUBLIC_URL}/pages/login`} className="btn-link text-capitalize">
                                    Login
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                            <div className="form-divider"></div>
                            <div className="social mt-3">
                              <div className="dflex btn-showcase">
                                <Col sm="4">
                                  <Button color="social-btn btn-fb">Facebook</Button>
                                </Col>
                                <Col sm="4">
                                  <Button color="social-btn btn-twitter">Twitter</Button>
                                </Col>
                                <Col sm="4">
                                  <Button color="social-btn btn-google">Google +</Button>
                                </Col>
                              </div>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <ToastContainer />
        {/* <!-- login page end--> */}
      </Container>
    </div>
  );
};

export default Signin;
