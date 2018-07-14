import React from 'react';
import CommentsListContainer from './CommentsListContainer';
import './App.css';
import DevTools from './DevTools';


const App = () => {
  return (
    <div className={'App'}>
      <h1>Thumb up/down , remove or edit comment... no add yet :D</h1>
      <CommentsListContainer />
      <DevTools />
    </div>
  );
}

export default App;