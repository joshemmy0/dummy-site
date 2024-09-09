import { useState, useEffect } from "react";

const OTPCountdown = ({
  initialTimeInSeconds = 30 * 60, // Defaults to 30 minutes
  text = "until OTP expires", // Default text
  timeEndText = "OTP has expired",
  isPaused = false,
  localStorageKey = "otpExpirationTime", // Key for storing expiration in localStorage
}) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const savedExpirationTime = localStorage.getItem(localStorageKey);
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    let remainingTime;

    if (savedExpirationTime) {
      const expirationTime = parseInt(savedExpirationTime, 10);
      remainingTime = expirationTime - currentTime;
    } else {
      // Set expiration time in localStorage if not present
      remainingTime = initialTimeInSeconds;
      const expirationTime = currentTime + initialTimeInSeconds;
      localStorage.setItem(localStorageKey, expirationTime);
    }

    setTimeLeft(remainingTime > 0 ? remainingTime : 0);

    const timerId = setInterval(() => {
      if (!isPaused) {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerId); // Stop timer if time runs out
            return 0;
          }
          return prevTime - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [initialTimeInSeconds, localStorageKey, isPaused]);

  // Helper function to format time (years, days, hours, minutes, seconds)
  const formatTime = (time) => {
    const years = Math.floor(time / (365 * 24 * 60 * 60));
    const days = Math.floor((time % (365 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    let formattedTime = "";

    if (years > 0) formattedTime += `${years} years `;
    if (days > 0) formattedTime += `${days} days `;
    if (hours > 0) formattedTime += `${hours}hrs `;
    if (minutes > 0 || formattedTime) formattedTime += `${minutes}mins `;
    formattedTime += `${seconds < 10 ? `0${seconds}` : seconds}secs`;

    return formattedTime;
  };

  return (
    <div className="text-red-500 text-center mt-4">
      {timeLeft === 0 ? (
        <p className="text-lg font-medium">{timeEndText}</p>
      ) : (
        <p className="text-lg font-medium">
          {formatTime(timeLeft)} {text}
        </p>
      )}
    </div>
  );
};

export default OTPCountdown;
