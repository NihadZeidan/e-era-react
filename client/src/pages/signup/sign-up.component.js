import { useState } from "react";
import InputForm from "../../components/input-form/input-form.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { userSignUpStart } from "../../redux/user/user.actions";
import "./sign-up.styles.scss";

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassowrd: "",
    displayName: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInfo.password !== userInfo.confirmPassowrd) {
      alert("Passwords are not the same !");
      return;
    }

    const { email, password, displayName } = userInfo;
    dispatch(userSignUpStart({ email, password, displayName }));
  };

  return (
    <div className="sign-up">
      <h2>Do Not Have An Account !</h2>
      <span>Register Now </span>

      <form onSubmit={handleSubmit}>
        <InputForm
          type="text"
          name="displayName"
          handleChange={handleChange}
          value={userInfo.displayName}
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
          type="password"
          name="confirmPassowrd"
          handleChange={handleChange}
          value={userInfo.confirmPassowrd}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit"> Register </CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
