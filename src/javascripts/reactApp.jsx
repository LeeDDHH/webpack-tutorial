import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  return (
    <div>
      reactapp
    </div>
  );
};

const reactRoot = document.getElementById("react-root");

if (reactRoot) {
  ReactDOM.render(<App />, reactRoot);
} else {
  console.log('no react root here');
}
