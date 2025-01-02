import axios from "axios";

export const registerUser = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `https://2660-2a0a-a547-f2a0-0-b8ae-d478-c531-347d.ngrok-free.app/api/upload-excel`,
      data,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
