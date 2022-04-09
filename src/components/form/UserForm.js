import React, { useState } from 'react';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import Confirm from './Confirm';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
  });

  const [alert, setAlert] = useState('');

  const [step, setStep] = useState(1);

  // HANDLERS
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const setAlertFn = (msg) => {
    setAlert(msg);
    setTimeout(() => setAlert(''), 3000);
  };

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  if (step === 1) {
    return (
      <FormOne
        nextStep={nextStep}
        onChange={onChange}
        formData={formData}
        alert={alert}
        setAlertFn={setAlertFn}
      />
    );
  } else if (step === 2) {
    return (
      <FormTwo
        prevStep={prevStep}
        nextStep={nextStep}
        onChange={onChange}
        formData={formData}
        alert={alert}
        setAlertFn={setAlertFn}
      />
    );
  } else if (step === 3) {
    return (
      <FormThree
        prevStep={prevStep}
        nextStep={nextStep}
        onChange={onChange}
        formData={formData}
        alert={alert}
        setAlertFn={setAlertFn}
      />
    );
  } else {
    return (
      <Confirm prevStep={prevStep} nextStep={nextStep} formData={formData} />
    );
  }
};

export default UserForm;
