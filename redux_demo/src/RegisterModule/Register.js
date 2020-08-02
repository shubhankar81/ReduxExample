import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

import { connect } from 'react-redux';
import { setUser } from '../redux_file/action_dispatch';
const Register = (props) => {

  // const [formData, setFormData] = user;
  const onChange = e =>   { 
    props.setUser(e.target.value, e.target.name)
  }
  //setFormData({ ...formData, [e.target.name] : e.target.value })

  const onSubmitForm = e => {
    e.preventDefault()
    e.target.className += " was-validated";
    console.log("State data", props.user)
  }

  return (
    <MDBContainer>
       <form
          className="needs-validation"
          onSubmit={onSubmitForm}
          noValidate
        >
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
                name="user_name"
                type="text"
                onChange={e => onChange(e)}
                validate
                error="wrong"
                success="right"
                required
              />
               <div className="invalid-feedback">
                Please provide a valid username.
              </div>
              <div className="valid-feedback">Looks good!</div>
              <MDBInput
                label="Mob. No."
                group
                name="mob_no"
                onChange={e => onChange(e)}
                type="number"
                length={10}
                validate
                containerClass="mb-0"
                required
              />
               <div className="invalid-feedback">
                Please provide a valid Mobile No.
              </div>
              <div className="valid-feedback">Looks good!</div>
              <MDBInput
                label="Email"
                name="email"
                onChange={e => onChange(e)}
                group
                type="email"
                validate
                containerClass="mb-0"
                required
              />
               <div className="invalid-feedback">
                Please provide a valid Email.
              </div>
              <div className="valid-feedback">Looks good!</div>
              <MDBInput
                label="Password"
                group
                name="password"
                onChange={e => onChange(e)}
                type="password"
                validate
                containerClass="mb-0"
                required
              />
               <div className="invalid-feedback">
                Please provide a valid Password.
              </div>
              <div className="valid-feedback">Looks good!</div>
              
              <MDBInput
                label="Confirm Password"
                group
                name="confrm_password"
                onChange={e => onChange(e)}
                type="password"
                validate
                containerClass="mb-0"
                required
              />
               <div className="invalid-feedback">
                Please provide a same Password.
              </div>
              <div className="valid-feedback">Looks good!</div>
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
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
      </form>
    </MDBContainer>
  );
};
const mapStateToProps = state => ({
  user : state.register_reducer
})

export default connect(mapStateToProps, {setUser})(Register);