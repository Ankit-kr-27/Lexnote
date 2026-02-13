import axios from "axios"
import {setUserData} from "../redux/userSlice"
import {serverUrl} from "../App"

export const getCurrentUser = async (dispatch) => {
    try {
        const result = await axios.get(serverUrl+ "/api/user/currentuser", {withCredentials: true})
        dispatch(setUserData(result.data))
    } catch (error) {
        console.log(error)
    }
}

export const generateNotes = async (payload) => {
  try {
    const result = await axios.post(
      serverUrl + "/api/notes/generate-notes",
      payload,
      { withCredentials: true }
    );
    return result; // ✅ return full axios response
  } catch (error) {
    console.error(error);
    throw error; // ✅ IMPORTANT
  }
};

