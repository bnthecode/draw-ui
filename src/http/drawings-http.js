import http from "./http-configuration";

const drawingHttp = {
  createDrawing: async (drawing) => {
    const { data } = await http.post(`/drawings`, {
      drawing,
    });
    return data;
  },

  editDrawing: async (id, drawing) => {
    const { data } = await http.put(`/drawings/${id}`, { drawing });
    return data;
  },

  getDrawing: async (id) => {
    const { data } = await http.get(`/drawings/${id}`);
    return data;
  },

  getDrawings: async () => {
    const { data } = await http.get(`/drawings`);
    return data;
  },

  getUserDrawings: async () => {
    const { data } = await http.get(`/drawings/me`);
    return data;
  },

  deleteDrawing: async (id) => {
    const { data } = await http.delete(`/drawings/${id}`);
    return data;
  },
};

export default drawingHttp;
