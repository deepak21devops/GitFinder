import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import React,{Component} from 'react';
import axios from 'axios'
import Search from './components/users/Search';


class App extends Component{

  state = {
    loading : false,
    users : []
  }

  // async componentDidMount(){

  //   this.setState({loading:true})
  //     const res = await axios.get(`https://api.github.com/users?client_id=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //     &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //     this.setState({loading:false, users:res.data})
  // }

  userSelect =  async text=>{
     this.setState({loading:true})
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      this.setState({loading:false, users:res.data.items})
  }


   
  render(){
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
        <Search userSelect={this.userSelect}/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
