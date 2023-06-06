import React, { createContext, useEffect, useState } from 'react';

export const SignUpContext = createContext();

export const SignUpProvider = ({ onGetStoredUser, children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [newUser, setNewUser] = useState({
    name: 'David',
    email: 'davidameida@gmail.com',
    birthDate: '05/08/2003',
    gender: '',
    weight: '',
    height: '',
    password: '',
  });

  const [pregnancy, setPregnancy] = useState({
    weeks: null,
    riskPregnant: null,
  });

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);

  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

  const updateNewUser = (props) => setNewUser((prev) => ({ ...prev, ...props }));

  const updatePregnancy = (props) => setPregnancy((prev) => ({ ...prev, ...props }));

  return (
    <SignUpContext.Provider
      value={{
        currentStep,
        newUser,
        pregnancy,
        handleNextStep,
        handlePrevStep,
        updateNewUser,
        updatePregnancy,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
