import axios from 'axios';

const link = "https://localhost:7041/asp-net/Data/";

export async function FetchUserData(username, password) {
  try {
    var data = link + 'Validate?obj=' + username;
    const response = await axios.get(data);
    //alert(typeof(username)+' '+typeof(response.data.userName))
    if (response.status === 200) {
      if (username.trim() === response.data.userName && username !== "") {
        alert('in name validation')
        if (password === response.data.password) {
          alert('in pass validation')
          return true;
        }
        else
          return false;
      }
      else
        return false;
    } else return false

  } catch (error) {
    console.error('Error fetching user data:', error.data);
    return false;
  }
}

export async function RegisterData(data) {
  var url = link + 'Register';
  try {
    const response = await axios.post(url, data);
    if (response.status === 200) {
      return true;
    }
    if (response.status === 204) {
      return false;
    }
  }
  catch (e) {
    console.error(e);
  }

}
