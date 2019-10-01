import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';

const AppStyle = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  div{
    width: 100%;
  }
`

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
    const followersApiResponse = axios.get('https://api.github.com/users/Sandravaphilips/followers');
    const userApiResponse = axios.get('https://api.github.com/users/Sandravaphilips')
    Promise.all([userApiResponse, followersApiResponse])
    .then(([userResponse, followersResponse]) => {
      // const dataFromApi = response.data;
      this.setState({
        users: [userResponse.data, followersResponse.data].flat()
        
      })
      // console.log(this.state.users)
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <AppStyle>
        <header>
          <h1>Github UserCard</h1>
        </header>
        <div>
          {this.state.users.map(user => 
            <UserComponent key={user.id} user={user} />
          )}
        </div>
        
      </AppStyle>
    )
  }
}

export default App;

const UserStyle = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #FFF;
  margin-bottom: 30px;

  img{
    width: 150px;
    height: 150px;
    border-radius: 3px;
    margin-right: 20px;
  }
`
function UserComponent({user}) {
  const {avatar_url, login, followers_url, following_url, url} = user;

  return (
    <UserStyle>
      <img src={avatar_url} alt='follower-avatar' />
      <div>
        <h3>{login}</h3>
        <p>Profile: <a href={url}>Click here</a>
        </p>
        <p>Followers: <a href={followers_url}>Click here</a></p>
        <p>Following: <a href={following_url}>Click here</a></p>
      </div>
    </UserStyle>
  )
}