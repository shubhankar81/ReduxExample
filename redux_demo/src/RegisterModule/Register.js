import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

const Register = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="7" className="mar_t_8">
          <MDBCard className="label_card">
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h2>Engage With Website!</h2>
                <hr />
                <h4>This is the best time to think about your future. Don't overcomitted and wait patiently.</h4>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="5" className="mar_t_8">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Register</strong>
                </h3>
              </div>
              <MDBInput
                label="User Name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Mob. No."
                group
                type="number"
                length={10}
                validate
                containerClass="mb-0"
              />
              <MDBInput
                label="Email"
                group
                type="email"
                validate
                containerClass="mb-0"
              />
              <MDBInput
                label="Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <MDBInput
                label="Confirm Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Register
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Already a member?
                <a href="/login" className="blue-text ml-1">

                  Log In
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;