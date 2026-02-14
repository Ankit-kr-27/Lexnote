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
    return result; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

export const downloadPdf = async (result) => {
  const response = await axios.post(
    serverUrl + "/api/pdf/generate-pdf",
    result,
    {
      responseType: "blob",
      withCredentials: true
    }
  );

  const blob = new Blob([response.data], {
    type: "application/pdf"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Lexnote.pdf";
  link.click();
  URL.revokeObjectURL(url);
};
