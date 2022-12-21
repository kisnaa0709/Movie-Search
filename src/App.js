import './App.css';
import axios from "axios";

async function getMovie() {

  const name = (document.getElementById('name').value);
  document.getElementById('title').innerHTML = "";
  const options = {
    method: 'GET',
    url: 'https://mdblist.p.rapidapi.com/',
    params: {s: name },
    headers: {
      'X-RapidAPI-Key': '00c84aba3amsh0e4cb789e626209p1abfdejsnc79d512837a0',
      'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
      }
  };

  console.log(name);

  try {

    const response = await axios.request(options, 3000);
    const data= (response.data.search);
    console.log(response.data.search);

    data.forEach((data) => {

      const title = data.title;
      document.getElementById('title').innerHTML += "<li>" + title + "</li>" ;

    });

  } catch (error) {
    console.error(error);
  }
}

function App() {

  return (

    <div className="App" id='app'>
      <div>
      <label htmlFor="movieName"><h1>Search For Movie</h1></label><br/><br/>
      <input type="text" name="movieName" id='name'/><br/><br/>
      <button onClick={getMovie}>Find</button>
      <div>  
      </div>
      <ol id='title'>

      </ol>

      </div>        
    </div>

  );
}

export default App;
