import axios from 'axios';

const link = "https://localhost:7041/asp-net/Data/";

export async function FetchUserData(username, password) {
  try {
    var data = link + 'Validate?obj=' + username;
    const response = await axios.get(data);
    alert(typeof(username)+' '+typeof(response.data.userName))
    if (username == response.data.userName) {
      if (password == response.data.password)
        return true;
      else
        return false;
    }
    else
      return false;

  } catch (error) {
    console.error('Error fetching user data:', error);
    return false;
  }
}
