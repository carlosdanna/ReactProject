import React from 'react';
import PeopleForm from './components/PeopleForm';
import List from './components/List';

class App extends React.Component{
  render()
  {
    return (
      <div className="container">
        <PeopleForm />
        <List />
      </div>
    )
  }
}

export default App;
