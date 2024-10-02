import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchResults } from './redux/actions';
import { login, logout } from './redux/authActions';

const App = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { results, loading, error, isAuthenticated, favorites } = useSelector(state => state);

  const handleSearch = () => {
    dispatch(fetchResults(query));
  };

  const handleLogin = () => {
    dispatch(login({ username: 'user', password: 'password' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Search..."
          />
          <button onClick={handleSearch}>Search</button>

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {results.map((result, index) => (
            <div key={index}>
              <h3>{result.title}</h3>
              <p>{result.snippet}</p>
              <a href={result.link}>Read more</a>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;