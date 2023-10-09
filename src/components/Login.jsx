import { useState } from "react";
import Input from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(loginUserStart());
  };

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please login</h1>

          <Input label={"Email address"} state={email} setState={setEmail} />

          <Input label={"Password"} type={"password"} state={password} setState={setPassword} />

          <button
            className="btn btn-primary w-100 py-2 mt-2"
            disabled={isLoading}
            onClick={loginHandler}
            type="submit">
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
