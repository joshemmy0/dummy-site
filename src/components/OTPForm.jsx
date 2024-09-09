import { useState, useRef } from "react";
import OTPCountdown from "./OTPCountDown";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

export default function OTPForm({ onSubmit, email }) {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [submitting, setSubmitting] = useState(false);
  const inputRefs = useRef([]);

  function processOTP(data) {
    onSubmit(data);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    // const formData = new FormData(e.currentTarget);
    // formData.set("email", email);

    // const URL = "https://dummy-backend-gyc3.onrender.com/public/verify-otp.php";
    // const fetchOptions = {
    //   method: "POST",
    //   body: formData,
    // };

    // fetch(URL, fetchOptions)
    //   .then((response) => response.json())
    //   .then((data) => processOTP(data))
    //   .catch((error) => console.error(error));

    processOTP("DATA");
  }

  const handleChange = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.value.slice(0, 1); // Limit to one digit
    setOtp(newOtp);

    // Automatically focus the next input
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    // If backspace is pressed, go to the previous input
    if (!element.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <form
      onSubmit={(e) => {
        handleFormSubmit(e);
      }}
    >
      <div className="bg-white p-4 md:p-8 rounded-[0.8em] shadow-[0_45px_60px_rgba(30,22,1,0.3)] flex items-center flex-col justify-center gap-3 md:gap-8">
        <p>
          We have sent an OTP to
          <span className="italic text-gray-700"> {email}</span>
        </p>

        <OTPCountdown initialTimeInSeconds={30 * 60} isPaused={true} />

        <div className="w-full flex justify-around gap-2">
          {otp.map((_, index) => (
            <input
              key={index}
              type="number"
              disabled={submitting}
              value={otp[index]}
              onChange={(e) => handleChange(e.target, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
              className={`${
                submitting && "opacity-50"
              } hide-number-input-spinner w-[calc(100%/6)] max-w-[50px] focus:border-[#044ecf] border-2 border-[#dad9df] outline-none text-center py-2 text-sm rounded-[0.3em] bg-white`}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className={`flex gap-3 items-center border-[#4070f4] outline-none px-8 py-4 rounded-lg hover:bg-[#4070f4]/70 mt-4 text-[18px] font-medium cursor-pointer bg-[#4070f4] text-white border-none ${
              isOtpComplete ? "" : "opacity-50 cursor-not-allowed"
            } ${submitting && "cursor-not-allowed opacity-50"}`}
            type="submit"
            disabled={!isOtpComplete}
          >
            {submitting && (
              <span className="flex items-center justify-center ">
                <Icon path={mdiLoading} size={1} spin />
              </span>
            )}
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
