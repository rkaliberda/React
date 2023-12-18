import React from "react";

function Input({ label = "", placeholder, value, onChange, error, type = "text" }) {
  const styles = {
    container: {
      marginBottom: "15px",
    },
    input: {
      width: "100%",
      height: "30px",
    },
    labelStyle: {
      marginBottom: "5px",
    },
    error: {
      color: "red",
      margin: "0"
    }
  };

  return (
    <div style={styles.container}>
      {label && (
        <div style={styles.labelStyle}>
          <b>{label}</b>
        </div>
      )}
      <input
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        type={type}
      />
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
