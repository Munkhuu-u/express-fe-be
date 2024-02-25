import "./styles.css";
import React from "react";

export default function App() {
  const [showPlaceholder, setShowPlaceholder] = React.useState(true);
  const [value, setValue] = React.useState("");
  const show = () => setShowPlaceholder(true);
  const hide = () => setShowPlaceholder(false);
  const update = (e) => setValue(e.currentTarget.value);
  return (
    <div style={{ position: "relative" }}>
      {showPlaceholder && (
        <div
          style={{
            position: "absolute",
            left: 50,
            top: 0,
            pointerEvents: "none",
          }}
        >
          <span>custom {"  "}</span>
          <span style={{ color: "red" }}>element {"  "}</span>
          <span style={{ color: "blue" }}>here {"  "}</span>
        </div>
      )}
      <input onFocus={hide} onBlur={show} onChange={update} />
    </div>
  );
}
