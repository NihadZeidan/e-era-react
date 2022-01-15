import { useState } from "react";
import InputForm from "../../components/input-form/input-form.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { useDispatch } from "react-redux";
import "./sign-in.styles.scss";


function SignIn() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = userInfo;
    dispatch(emailSignInStart({ email, password }));
  };

  return (
    <div className="sign-in">
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
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
