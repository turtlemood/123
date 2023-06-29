import React, { useState } from 'react';
import './main.scss';

import Card from './components/Card';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const hendleSearch = async (e) => {
    e.preventDefault();

    if (search === '') return;

    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    const data = await res.json();

    setResults(data.query.search);
    setSearchInfo(data.query.searchinfo);
  };

  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="circle"></div>
        <div className="flex">
          <input
            className="search"
            type="search"
            placeholder="enter smth..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={hendleSearch} className="btn">
            ✈
          </button>
        </div>
        {searchInfo.totalhits ? (
          <p className="res">Search results: {searchInfo.totalhits}</p>
        ) : (
          ''
        )}
        {results.map((result, index) => {
          const link = `https://en.wikipedia.org/?curid=${result.pageid}`;
          return (
            <Card
              key={index}
              title={result.title}
              desc={result.snippet}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
