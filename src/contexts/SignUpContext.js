import React, { createContext, useEffect, useState } from 'react';

export const SignUpContext = createContext();

export const SignUpProvider = ({ onGetStoredUser, children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPregnant, setIsPregnant] = useState(false);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    birthDate: '',
    gender: '',
    weight: '',
    height: '',
    password: '',
  });

  const [pregnancy, setPregnancy] = useState({
    weeks: '',
    riskPregnancy: false,
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
        isPregnant,
        handleNextStep,
        handlePrevStep,
        updateNewUser,
        updatePregnancy,
        setIsPregnant,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
