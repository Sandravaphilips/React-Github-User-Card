import React from 'react';

import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      users: [
        { imageUrl: '',
          username: '',
          followersCount: 0,
          followingCount: 0,
          githubAddress: ''
        }
      ]
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/Sandravaphilips/followers')
    .then(response => {
      const dataFromApi = response.data;
      this.setState(currentState => {
        return {
          users: {...currentState, dataFromApi}
        }
      })
    })
  }
  render() {
    return (
      
    )
  }
}

export default App;
