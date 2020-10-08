import React, {useState} from 'react';
import axios from 'axios';
import Fops from './Fops';
import MyMap from './Map';

function App() {
  const [persons, setPerson] = useState([]);

  const [page, setPage] = useState(1);

  const [query, setQuery] = useState('');

  function search() {
    axios.get(`https://dataua.net/api/v1/search/data/?search=${query}&page=${page}`).then(res => {
      const persons = res.data.data.fops;
      setPerson(persons);
      })
  }

  function queryHandler(e) {
    console.log('handler', query, setQuery)
    setQuery(e.target.value);
  }

  function nextPage() {
    setPage(page + 1);
    search();
  }

  

  return (
    <div className="App">
      <input type='text' onChange={queryHandler}></input>
      <button onClick={search}>Search</button>
      <button onClick={nextPage}>Next Page</button>
      <ul>
        { persons.map((person, i) => <Fops person={person} key={i}/>)}
      </ul>
      <MyMap />
    </div>
  );
}

export default App;
