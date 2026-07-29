import PropertyModel from "../../model/PropertyModel";
import {api} from "../axiosInstance.js";

export const getAllProperties = async () => {
  try {
      const response = await api.get("/properties/getProperty/properties");
      const data = response.data["data"][0];
      const property = PropertyModel.fromJson(data);


    return property;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};
