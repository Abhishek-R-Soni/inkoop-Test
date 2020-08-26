import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Paginator from './components/Paginator'
import axios from "axios";
import Card from './components/Card'
import './css/Card.css';

function App(props) {
  const [data, setData] = useState([])
  const [searchTag, setSearchTag] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${currentPage + 1}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        alert(err.message);
      });
  }, [currentPage]);

  const searchHandler = (e) => {
    setSearchTag(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    axios
      .get(`https://rickandmortyapi.com/api/episode/?name=${searchTag}`)
      .then(res => {
        setData(res.data.results[0]);
      })
      .catch(err => {
        alert(`no data found for ${searchTag}`);
      });
  }

  const pageClickHandler = (e) =>{
    setCurrentPage(e.selected)
  }

  return (
      <div>
        <div>
          <Header 
            searchTag={searchTag}
            searchHandler={searchHandler}
            submitHandler={submitHandler}/>        
        </div> 
        <div>
          <Card data={data}/>
        </div>
        <div>
          <Paginator pageClickHandler={pageClickHandler}/>
        </div>        

      </div>
    );
}

export default App;
