import React, { useState } from "react";

const LiveValidationForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let newErrors = { ...errors };
    if (name === "username" && value.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else {
      delete newErrors.username;
    }

    if (name === "password" && value.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else {
      delete newErrors.password;
    }

    setErrors(newErrors);
  };

  return (
    <div>
      <h2>Live Validation Form</h2>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LiveValidationForm;
