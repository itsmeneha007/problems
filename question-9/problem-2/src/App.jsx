import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee, changeSortOrder } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const coffeeList = useSelector((state) => state.coffee.data);
  const loading = useSelector((state) => state.coffee.loading);
  const error = useSelector((state) => state.coffee.error);
  const sortOrder = useSelector((state) => state.coffee.sort);

  useEffect(() => {
    dispatch(fetchCoffee(sortOrder));
  }, [dispatch, sortOrder]);

  const handleSortChange = (event) => {
    const newOrder = event.target.value;
    dispatch(changeSortOrder(newOrder));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Coffee List</h1>

      
      <div style={{ display: 'flex' }}>
        <aside style={{ marginRight: '20px' }}>
          <h3>Sort By</h3>
          <select onChange={handleSortChange} value={sortOrder}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </aside>

        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {coffeeList.map((coffee) => (
            <div key={coffee.id} style={{ border: '1px solid black', padding: '10px' }}>
              <h4>{coffee.title}</h4>
              <p>{coffee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;