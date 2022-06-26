import httpService from "./http.service";
<<<<<<< HEAD
const professionEndpoint = "profession/";

const professionService = {
  get: async () => {
    const { data } = await httpService.get(professionEndpoint);
    return data;
  },
};
=======

const professionEndpoint = "profession/";

const professionService = {
    get: async () => {
        const { data } = await httpService.get(professionEndpoint);
        return data;
    }
};

>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
export default professionService;
