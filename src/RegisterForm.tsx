import React, { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import { registerInputs } from "./constants";
import { useNavigate } from "react-router-dom";
const RegisterForm = ({
  setIsAuth,
}: {
  setIsAuth: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState<{
    password: boolean;
    confirm_password: boolean;
  }>({
    password: false,
    confirm_password: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setUserData({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      });
      setIsAuth(true);
      navigate("/");
    } else {
      return;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = { ...formErrors };
    const { username, email, password, confirm_password } = userData;
    if (!username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid Email";
      valid = false;
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }
    if (!confirm_password.trim()) {
      newErrors.confirm_password = "confirm password is required";
      valid = false;
    } else if (confirm_password !== password) {
      newErrors.confirm_password = "Passwords must match";
      valid = false;
    }
    setFormErrors(newErrors);
    return valid;
  };

  const handleShowPassword = (name: "password" | "confirm_password") => {
    setShowPassword((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="form">
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {registerInputs.map(({ id, label, name, type }) => (
          <div className="input-wrapper" key={id}>
            <span>{formErrors[name]}</span>
            <input
              className={`${formErrors[name] ? "input-error" : ""}`}
              type={
                type.includes("password") &&
                showPassword[name as "password" | "confirm_password"]
                  ? "text"
                  : type
              }
              name={name}
              id={id}
              placeholder={label}
              onChange={handleChange}
              value={userData[name]}
            />
            {name.includes("password") && (
              <input
                type="checkbox"
                name="checkbox"
                checked={showPassword[name as "password" | "confirm_password"]}
                onChange={() =>
                  handleShowPassword(name as "password" | "confirm_password")
                }
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
