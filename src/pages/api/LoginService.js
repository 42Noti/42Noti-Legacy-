import instance from "./api";

const loginUrl = (path) => {
  return `/auth/${path}`;
};

const login42Url = (path) => {
  return `/42oauth/${path}`;
};

const LoginService = {
  login: {
    issueAccessToken: async (body) =>
      await instance.post(loginUrl(`token/42seoul`), body),
    reissueAccessToken: async () => await instance.patch(loginUrl(`token`)),
  },
  login42: {
    issueAccessToken: async (code) =>
      await instance.post(login42Url(`token?code=${code}`)),
    reissueAccessToken: async () => await instance.patch(login42Url(`token`)),
  },
};

export default LoginService;
