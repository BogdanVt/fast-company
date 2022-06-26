import httpService from "./http.service";
<<<<<<< HEAD
const userEndpoint = "user/";

const userService = {
  // update: async (id, content) => {
  //   const { data } = await httpService.put(qualityEndpoint + id, content);
  //   return data;
  // },
  get: async () => {
    const { data } = await httpService.get(userEndpoint);
    return data;
  },
  // fetchAll: async () => {
  //   const { data } = await httpService.get(qualityEndpoint);
  //   return data;
  // },
  create: async (payload) => {
    const { data } = await httpService.put(userEndpoint + payload._id, payload);
    return data;
  },
  // delete: async (id) => {
  //   const { data } = await httpService.delete(qualityEndpoint + id);
  //   return data;
  // },
};
=======

const userEndpoint = "user/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndpoint);
        return data;
    }
};

>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
export default userService;
