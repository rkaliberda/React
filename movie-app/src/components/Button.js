import React from "react";

function Button({ title, onClick, disabled = false }) {
  const styles = {
    button: {
      width: "100%",
      height: "30px",
    },
  };

  return (
    <div>
      <button onClick={onClick} style={styles.button} disabled={disabled}>
        {title}
      </button>
    </div>
  );
}

export default Button;
