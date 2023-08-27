import axios from 'axios';

const link = "https://localhost:7041/asp-net/Data/";
//const images = 'https://localhost:7041/asp-net/Images/';

export async function FetchUserData(username, password) {
  try {
    var url = link + 'Validate?obj=' + username;
    const response = await axios.get(url);
    //alert(typeof(username)+' '+typeof(response.data.userName))
    if (response.status === 200) {
      if (username.trim() === response.data.userName && username !== "") {
        //alert('in name validation')
        if (password === response.data.password) {
          //alert('in pass validation')
          sessionStorage.setItem('id',response.data.id);
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
      //alert('200')
      return true;
    }
    if (response.status === 204) {
      //alert('204')
      return false;
    }
  }
  catch (e) {
    console.error(e);
    return false;
  }

}

export async function LoadImages() {
  const data = await axios.get('your-api-endpoint', {
    responseType: 'arraybuffer', // Important: Set the response type to 'arraybuffer'
  })
    .then(response => {
      // Process the response
      const blob = new Blob([response.data], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(blob);

      // Create a link element to allow downloading or viewing the file
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'filename.extension'); // Set the desired file name
      document.body.appendChild(link);
      link.click();

      // Clean up after the link is clicked
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error fetching file:', error);
    });
    return data;

}

