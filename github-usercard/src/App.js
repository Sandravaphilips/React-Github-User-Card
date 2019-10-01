import React from 'react';

import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      users: [
        { avatar_url: '',
          login: '',
          followers_url: '',
          following_url: '',
          url: '',
          id: 0
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


function UserComponent(props) {
  const {avatar_url, login, followers_url, following_url, url} = props;

  return (
    <div>
      <img src={avatar_url} alt='follower-image' />
      <div>
        <h3>{login}</h3>
        <p>Profile:  
          <a href={url}>Click here</a>
        </p>
        <p>Followers: <a href={followers_url}>Click here</a></p>
        <p>Following: <a href={following_url}>Click here</a></p>
      </div>
    </div>
  )
}