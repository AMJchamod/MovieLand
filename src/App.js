import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const APIURL = ' http://www.omdbapi.com/?i=tt3896198&apikey=fb876f8e';


const App = ()=>{


      const searchMovies = async(title)=>{
      const response = await fetch (`${APIURL} &S=${title}`);
      const data = await response.json();
      console.log(data);

    }
    useEffect(()=>{
        searchMovies('spiderman');
    },[]);
    
  return (
    <h1>app</h1>

  );
  
}




export default App;
