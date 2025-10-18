import React, { useState, useEffect } from "react";
import foto from "../assets/foto.jpg";
import "../App.css";
export default function Clock() {
  const [time, setTime] = useState(3600); // ⏱️ ساعة واحدة = 3600 ثانية

  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  // 🔹 نحسب الساعات والدقائق والثواني
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  // 🔹 التقدم (progress) لكل دائرة
  const hourProgress = hours / 1; // لأن المدة ساعة واحدة
  const minuteProgress = minutes / 60;
  const secondProgress = seconds / 60;

  // 🔹 ستايل الدائرة
  const circleStyle = (progress, color) => ({
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    border: `${10 * progress + 2}px solid ${color}`, // يقل تدريجيًا
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "26px",
    fontWeight: "bold",
    color: "#330505ff",
    position: "relative",
    transition: "all 0.5s ease",
    boxShadow: `0 0 15px ${color}`,
  });

  const labelStyle = {
    position: "absolute",
    bottom: "-30px",
    fontSize: "15px",
    color: "#330505ff",
  };

  return (
    <div className="foip"

    >
      <div style={circleStyle(hourProgress, "#28dbb8ff")}>
        {String(hours).padStart(2, "0")}
        <div style={labelStyle}>Hours</div>
      </div>
      <div style={circleStyle(minuteProgress, "#00ccff")}>
        {String(minutes).padStart(2, "0")}
        <div style={labelStyle}>Minutes</div>
      </div>
      <div style={circleStyle(secondProgress, "#d4207aff")}>
        {String(seconds).padStart(2, "0")}
        <div style={labelStyle}>Seconds</div>
      </div>
    </div>
  );
}
