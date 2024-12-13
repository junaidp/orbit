import axios from "axios";

export const registerUser = async (data, thunkAPI) => {
  try {
    let props = await axios.post(`${baseUrl}/api/upload-excel`, data);
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
