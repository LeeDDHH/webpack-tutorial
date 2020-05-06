import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const message = 'カモの自己紹介ページ';

const AppContainer = styled.div`
  background-color: gold;
  color: #696969;
  padding: 1em;
  border-radius: 1em;
`;

const App = (props) => {
  return (
    <AppContainer>
      {message}
    </AppContainer>
  );
};

const reactRoot = document.getElementById("react-root");

if (reactRoot) {
  ReactDOM.render(<App />, reactRoot);
} else {
  console.log('no react root here');
}
