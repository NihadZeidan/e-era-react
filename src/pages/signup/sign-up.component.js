import { useState } from "react";
import InputForm from "../../components/input-form/input-form.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { createUserProfileDocument } from "../../firebase/firebase.utils";

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassowrd: "",
    birthDate: "",
    displayName: "",
  });

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

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        userInfo.email,
        userInfo.password
      );

      await createUserProfileDocument(user, {
        birthDate: userInfo.birthDate,
        displayName: userInfo.displayName,
      });

      setUserInfo({
        email: "",
        password: "",
        confirmPassowrd: "",
        birthDate: "",
        displayName: "",
      });
    } catch (error) {
      console.log(error);
    }
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
