import { api } from "../axiosInstance.js";
import RoomModel from "../../model/RoomMolel";

export const getAllRoom = async () => {
  try {
    const response = await api.get("/room/getRooms");
    const data = response.data["data"];
    const rooms = RoomModel.fromJsonList(data);

    return rooms;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};
