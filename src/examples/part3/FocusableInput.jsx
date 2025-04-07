import React, { useEffect, useRef } from 'react';

function FocusableInput({ shouldFocus }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [shouldFocus]);

  return <input ref={inputRef} />;
}

export default FocusableInput;


import React from 'react';
import ReactDOM from 'react-dom';
import FocusableInput from './FocusableInput';

function App() {
  return (
    <div>
      <h2>Auto Focus Input</h2>
      <FocusableInput shouldFocus={true} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
