import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";
import OTPForm from "./OTPForm";
import LoggedIn from "./LoggedIn";
import { useState } from "react";

export default function OTPPage({ email = "alfredfaith35@gmail.com" }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function handleValidForm(data) {
    console.log(data);
    setIsUserLoggedIn(true);
  }

  const maskEmail = (email) => {
    const [localPart, domainPart] = email.split("@");
    if (localPart.length <= 6) {
      return email; // If email is too short, don't mask
    }

    const maskedPart = `${localPart.slice(0, 3)}*******${localPart.slice(-2)}`;
    return `${maskedPart}@${domainPart}`;
  };

  if (isUserLoggedIn) {
    return <LoggedIn />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <main className="bg-[#1c86ff] max-w-[800px]  w-[80%] rounded-[12px] p-4 md:p-12 gap-4 flex flex-col items-center justify-center">
        <h1 className=" text-xl md:text-2xl flex text-white justify-around items-center w-full">
          <span>
            <Icon path={mdiLock} size={2} />
          </span>
          Enter the OTP
          <span>
            <Icon path={mdiLock} size={2} />
          </span>
        </h1>

        <OTPForm onSubmit={handleValidForm} email={maskEmail(email)} />
      </main>
    </div>
  );
}
