import http from "./http-configuration";

const userHttp = {
  createUser: async (user) => {
    const { data } = await http.post(`/users`, {
      user,
    });
    return data;
  },

  loginUser: async (user) => {
    const { data } = await http.put(`/users`, { user });
    return data;
  },
};

export default userHttp;
