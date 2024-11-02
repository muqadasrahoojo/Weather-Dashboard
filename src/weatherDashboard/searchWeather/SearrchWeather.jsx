// import React, { useState } from 'react';

// function CitySearch({ onSearch }) {
//   const [input, setInput] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim() !== '') {
//       onSearch(input.trim());
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter city name"
//         style={{}}
//         className='py-2 px-3 rounded-2'
//       />
//       <button type="submit" className='py-2 px-3 rounded-2 ms-2'>Search</button>
//     </form>
//   );
// }

// export default CitySearch;

import React, { useState } from 'react';

function CitySearch({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        className="form-control w-50 me-2 py-2 px-3 rounded"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          border: 'none',
          color: '#333',
          fontSize: '1rem',
          fontWeight: 'bold',
          border: '4px solid #03A9F4'
        }}
      />
      <button
        type="submit"
        className="btn py-2 px-4 rounded"
        style={{
          fontSize: '1rem',
          fontWeight: 'bold',
          backgroundColor: '#03A9F4',
          border: '4px solid #fff',
          color: '#fff'
        }}
      >
     Search
      </button>
    </form>
  );
}

export default CitySearch;
