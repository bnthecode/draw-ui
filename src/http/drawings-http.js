import http from "./http-configuration";

const drawingHttp = {
  createDrawing: async (drawing) => {
    const { data } = await http.post(`/drawings`, {
      drawing,
    });
    return data;
  },

  getDrawings: async () => {
    const { data } = await http.get(`/drawings`);
    return data;
  },
};

export default drawingHttp;
