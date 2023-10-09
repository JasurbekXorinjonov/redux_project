import axios from "./api";

const AuthService = {
  async userRegister(user) {
    const respons = await axios.post("/users", { user });
    return respons.data;
  },
  async userLogin() {},
  async getUser() {},
};

export default AuthService;
