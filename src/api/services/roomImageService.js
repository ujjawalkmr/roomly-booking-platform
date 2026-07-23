import { api, userApi } from "../axiosInstance.js";
import RoomImageModel from "../../model/RoomImageModel";

export const getAllRoomImage = async () => {
  try {
    const response = await userApi.get("/roomImages/getAllRoomImages");
    const data = response.data["data"];
    const roomImageModel = RoomImageModel.fromJsonList(data);

    return roomImageModel;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};
