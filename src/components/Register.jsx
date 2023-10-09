import { useState } from "react";
import Input from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { registerUserFailure, registerUserStart, registerUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    const user = {
      username: name,
      email,
      password,
    };
    dispatch(registerUserStart());
    try {
      const response = await AuthService.userRegister(user);
      console.log(response);
      console.log(user);
      dispatch(registerUserSuccess());
    } catch (error) {
      dispatch(registerUserFailure());
    }
  };

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <Input label={"UserName"} state={name} setState={setName} />

          <Input label={"Email address"} state={email} setState={setEmail} />

          <Input label={"Password"} type={"password"} state={password} setState={setPassword} />

          <button
            className="btn btn-primary w-100 py-2 mt-2"
            disabled={isLoading}
            onClick={loginHandler}
            type="submit">
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
