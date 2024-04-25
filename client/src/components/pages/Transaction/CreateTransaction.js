import React from 'react';

function AddTransaction({ closePanel }) {
  return (
    <div>
      <h2>Create New Transaction</h2>
      <form>
        <button type="submit">Submit</button>
        <button type="button" onClick={closePanel}>Cancel</button>
      </form>
    </div>
  );
}

export default AddTransaction;
