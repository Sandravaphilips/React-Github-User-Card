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
      this.setState({
        users: dataFromApi
      })
      console.log(this.state.users)
    })
  }
  render() {
    return (
      <div>
        {this.state.users.map(user => 
          <UserComponent key={user.id} user={user} />
        )}
      </div>
    )
  }
}

export default App;


function UserComponent({user}) {
  const {avatar_url, login, followers_url, following_url, url} = user;

  return (
    <div>
      <img src={avatar_url} alt='follower-avatar' />
      <div>
        <h3>{login}</h3>
        <p>Profile: <a href={url}>Click here</a>
        </p>
        <p>Followers: <a href={followers_url}>Click here</a></p>
        <p>Following: <a href={following_url}>Click here</a></p>
      </div>
    </div>
  )
}