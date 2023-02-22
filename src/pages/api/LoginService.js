import instance from "./api";

const loginUrl = (path) => {
  return `/auth/${path}`;
};

const login42Url = (path) => {
  return `/42oauth/${path}`;
};

const LoginService = {
  login: {
    issueAccessToken: async (body) => {
      const response = await instance.post(loginUrl(`token/42seoul`), body);
      return response;
    },
    reissueAccessToken: async () => {
      const response = await instance.patch(loginUrl(`token`));
      return response;
    },
  },
  login42: {
    issueAccessToken: async (code) => {
      const response = await instance.post(login42Url(`token?code=${code}`));
      return response;
    },
    reissueAccessToken: async () => {
      const response = await instance.patch(login42Url(`token`));
      return response;
    },
  },
};

export default LoginService;
