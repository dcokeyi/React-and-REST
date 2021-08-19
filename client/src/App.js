import React, { Component } from 'react'
import Card from './components/Card/card';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      // residents: [],
      // programs: [],
    }
  }
  

    // componentDidMount(){
    //   fetch('http://localhost:5000/token', {
    //     method: 'post',
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(info)
    //   })
    //   .then(res => res.json())
    //   .then(res => this.setState({token: res.data.token}))
    //   .catch(err => console(err))
    //   }

    // async componentDidMount(){
    //  try{
    //    let response = await axios.get('http://localhost:5000/residents')
    //    let user = response.data
    //    this.setState({names: user})
    //  } catch (err) {
    //    console.log(err)
    //  }
    // }

    // async componentDidMount(){
    //   try{
    //     let response = await axios.get('http://localhost:5000/programs')
    //     let user = response.data
    //     this.setState({programs: user})
    //   } catch (err) {
    //     console.log(err)
    //   }
    //  }
  render(){
    

    // const list = this.state.programs.map(n=>{
    //   return <table>
    //     <tr>
    //     <th>{n.name}</th>
    //   </tr>
    //   </table>
    // })
    return(
      <div>
        <Card/>
      </div>
    )}
  }

export default App;