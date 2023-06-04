import React, { createContext, useEffect, useState } from 'react';

export const SignUpContext = createContext();

export const SignUpProvider = ({ onGetStoredUser, children }) => {
  const [step, setStep] = useState(1);

  const [newUser, setNewUser] = useState({
    name: null,
    birthDate: null,
    gender: null,
    weight: null,
    height: null,
    email: null,
    password: null,
  });

  const [pregnancy, setPregnancy] = useState({
    weeks: null,
    riskPregnant: null,
  });

  const handleNextStep = () => setStep((prev) => prev++);

  const handlePrevStep = () => setStep((prev) => prev--);

  const updateNewUser = (props) => setPregnancy((prev) => ({ ...prev, ...props }));

  const updatePregnancy = (props) => setPregnancy((prev) => ({ ...prev, ...props }));

  return (
    <SignUpContext.Provider
      value={{
        step,
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
