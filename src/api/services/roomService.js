import api from "../axiosInstance";
import RoomModel from "../../model/RoomMolel";

export const getAllRoom = async () => {
  try {
      const response = await api.get("/room/getRooms");
      const data = response.data["data"][0];
    const rooms = RoomModel.fromJson(data);

      console.log("Fetched room data:", rooms);

      return rooms;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};
