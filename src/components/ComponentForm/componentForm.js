import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateData } from "../../redux/actions/externalFormData";
import { updateAuth } from "../../redux/actions/formData";
import { updateAnimation } from "../../redux/actions/animation";
import TextInput from "../TextInput/textInput";
import { Formik, Form } from "formik";
import { ComponentFormWrapper } from "./style";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import StepButton from "../Stepper/stepButton";
import Button from "../Button/button";
import * as Yup from "yup";
import FormikEffect from "../../hooks/formikEffect";
import { fetchDataAxios } from "../../hooks/fetchRequest";

const urlLoginRoot = process.env.REACT_APP_LOGIN_API_URL;
const endpoint = process.env.REACT_APP_LOGIN_ENDPOINT;
const apiKey = process.env.REACT_APP_LOGIN_APIKEY;
const urlToRequest = urlLoginRoot + endpoint;

const ComponentForm = (props) => {
  const [nombreCampo, setNombreCampo] = useState(props.name);
  const [valueSaved, setValueSaved] = useState("");
  const [validButton, setValidButton] = useState(true);
  const [open, setOpen] = useState(false);
  const [messageSnack, setMessageSnack] = useState("");

  useEffect(() => {
    if (
      (typeof props.externalFormData !== "undefined" &&
        props.externalFormData[nombreCampo] &&
        props.type === "input") ||
      props.type === "password"
    ) {
      const newValue = props.externalFormData[nombreCampo];
      setValueSaved(newValue);
    }
    if (
      props.type === "inputNumber" ||
      props.type === "input" ||
      props.type === "password"
    ) {
      setValidButton(false);
    }
  }, []);

  const saveData = (data, button) => {
    if (data) {
      props.updateData(data);
    }
    if (button === "next" && validButton) {
      props.updateAnimation({ type: "next" });
    } else if (button === "before") {
      props.updateAnimation({ type: "before" });
    }
    if (props.location.pathname.includes("codigo-autenticacion")) {
      getAuth(data);
    }
  };

  const getAuth = async (data) => {
    try {
      const dataToSend = props.externalFormData;
      dataToSend["auth"] = data.auth;
      const response = fetchDataAxios(urlToRequest, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: dataToSend,
      });
      const responseData = await response;
      const dataAuth = JSON.parse(responseData.body);
      if (dataAuth.auth) {
        props.updateAuth({ authenticated: true });
        props.history.push({
          pathname: "/dashboard",
          state: {
            dataActivity: dataAuth.data,
          },
        });
      } else {
        setMessageSnack(dataAuth.mensaje);
        setOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const NumberSchema = Yup.object().shape({
    [nombreCampo]: Yup.string()
      .nullable()
      .min(1, "Por favor ingrese un numero valido maximo 6 caracteres")
      .max(6, "Por favor ingrese un numero valido maximo 6 caracteres"),
  });
  const NumberSchemaRequired = Yup.object().shape({
    [nombreCampo]: Yup.string()
      .min(6, "Por favor ingrese un numero valido minimo 1 caracteres")
      .max(6, "Por favor ingrese un numero valido maximo 6 caracteres")
      .required(`El ${nombreCampo} es requerido, por favor ingresalo`)
      .nullable(),
  });
  const stringSchema = Yup.object().shape({
    [nombreCampo]: Yup.string()
      .min(1, `Por favor validar que ${nombreCampo} tenga minimo 1 caracteres`)
      .max(35, `Por favor validar ${nombreCampo} `)
      .required(`El ${nombreCampo} es requerido, por favor ingresalo`)
      .nullable(),
  });
  const validateChange = (validateForm) => {
    validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        setValidButton(false);
      }
    });
    setValidButton(true);
  };

  return (
    <Fragment>
      <ComponentFormWrapper>
        <div className="content">
          {props.type && (
            <Fragment>
              <div className="title">{props.title}</div>
              <Formik
                enableReinitialize
                validationSchema={
                  props.type === "inputNumber"
                    ? NumberSchemaRequired
                    : stringSchema
                }
                initialValues={{
                  [nombreCampo]: valueSaved ? valueSaved : props.placeholder,
                }}
                onSubmit={(values) => saveData(values)}
              >
                {(propsForm) => (
                  <>
                    <FormikEffect
                      onChange={() => validateChange(propsForm.validateForm)}
                    />
                    <Form id="formFilter">
                      <div className="div-container">
                        <TextInput
                          name={nombreCampo}
                          errors={propsForm.errors}
                          touched={propsForm.touched}
                          id={nombreCampo}
                          type={
                            props.type === "inputNumber"
                              ? "number"
                              : props.type === "password"
                              ? "password"
                              : "text"
                          }
                          className="input-filter"
                          values={propsForm.values}
                        />
                      </div>
                      <div className="buttons">
                        <StepButton go="back">
                          <Button
                            id="before"
                            onClick={() => saveData(propsForm.values, "before")}
                            typeClass="secondary"
                            type="submit"
                            label="Regresar"
                          ></Button>
                        </StepButton>
                        <StepButton
                          go="next"
                          disabled={validButton ? false : true}
                        >
                          <Button
                            id="next"
                            onClick={() => saveData(propsForm.values, "next")}
                            typeClass={validButton ? "primary" : "disabled"}
                            type="submit"
                            label="Continuar"
                          ></Button>
                        </StepButton>
                      </div>
                    </Form>
                  </>
                )}
              </Formik>
            </Fragment>
          )}
        </div>
      </ComponentFormWrapper>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{messageSnack}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentStep: state.steps.currentStep,
  maxSteps: state.steps.maxSteps,
  externalFormData: state.externalFormData,
  animation: state.animation.animation,
});
const mapDispatchToProps = (dispatch) => ({
  updateData: (data) => dispatch(updateData(data)),
  updateAuth: (data) => dispatch(updateAuth(data)),
  updateAnimation: (data) => dispatch(updateAnimation(data)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ComponentForm)
);
