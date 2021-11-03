import { useState } from "react";
import InputForm from "../../components/input-form/input-form.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./sign-up.styles.scss";

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    birthDate: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ email: "", password: "", birthDate: "", userName: "" });
  };

  return (
    <div className="sign-up">
      <h2>Do Not Have An Account !</h2>
      <span>Register Now </span>

      <form onSubmit={handleSubmit}>
        <InputForm
          type="text"
          name="userName"
          handleChange={handleChange}
          value={userInfo.userName}
          label="User Name"
          required
        />
        <InputForm
          type="email"
          name="email"
          handleChange={handleChange}
          value={userInfo.email}
          label="Email"
          required
        />

        <InputForm
          type="password"
          name="password"
          handleChange={handleChange}
          value={userInfo.password}
          label="Password"
          required
        />

        <InputForm
          type="date"
          name="birthDate"
          handleChange={handleChange}
          value={userInfo.birthDate}
          required
        />

        <CustomButton type="submit"> Register </CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
