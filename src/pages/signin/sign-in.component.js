import { useState } from "react";
import InputForm from "../../components/input-form/input-form.component";

function SignIn() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ email: "", password: "" });
  };

  return (
    <div className="sig-in">
      <h2>Already Have an account !</h2>
      <span>Sign In With your email and password</span>

      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default SignIn;
