import React, { useState } from "react";
import AuthEmailForm from "../components/AuthEmailForm";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";
const AuthPage = () => {
  const [step, setStep] = useState("email"); // email | login | register
  const [email, setEmail] = useState("");

  const handleEmailCheck = async (submittedEmail) => {
    setEmail(submittedEmail);
    // Firebase: fetch sign-in methods
    const methods = await fetchSignInMethodsForEmail(auth, submittedEmail);

    setStep(methods.length > 0 ? "login" : "register");
  };

  return (
    <div className="section">
      {step === "email" && <AuthEmailForm onSubmit={handleEmailCheck} />}
      {step === "login" && <LoginForm email={email} />}
      {step === "register" && <RegisterForm email={email} />}
    </div>
  );
};

export default AuthPage;
