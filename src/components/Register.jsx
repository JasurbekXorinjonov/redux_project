import { useState } from "react";
import Input from "../ui/input";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <Input label={"UserName"} state={name} setState={setName} />

          <Input label={"Email address"} state={email} setState={setEmail} />

          <Input label={"Password"} type={"password"} state={password} setState={setPassword} />

          <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
           Register
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
