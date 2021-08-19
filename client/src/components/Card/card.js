import React, { Component } from 'react'
import axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      residents: [],
      programs: [],
      residentNames: []
    }
  }


  async componentDidMount() {
    try {
      let response = await axios.get('http://localhost:5000/residents')
      let user = response.data
      this.setState({ residents: user })
    } catch (err) {
      console.log(err)
    }
    try {
      let response = await axios.get('http://localhost:5000/programs')
      let user = response.data


      let ids = []
      let innerIds = []

      user.forEach(e => {

        e.attendance.forEach(a => {
          innerIds.push(a.residentId)
        });

        ids.push(innerIds);
        innerIds = []

      });

      let names = []
      let innerNames = []

      ids.forEach(inId => {
        inId.forEach(id => {
          for (let index = 0; index < this.state.residents.length; index++) {
            if (id === this.state.residents[index].id) {
              innerNames.push(this.state.residents[index].name);
              break;
            }
          }
        });
        names.push(innerNames);
        innerNames = []
      });

      this.setState({ programs: user })
      this.setState({ residentNames: names })


    } catch (err) {
      console.log(err)
    }
  }





  render() {
    
    return (
      <div>
        {this.state.programs.map(n => (
          <table key={n.name}>
            <thead>
              <tr>
                <th>
                  {n.name}
                </th>
              </tr>
            </thead>
            {n.attendance.map((item, i) => (

              <tbody key={i}>
                <tr>
                  <td>
                    <p>Name:{item.residentId}</p>
                    <p>Status:{item.status}</p>
                  </td>
                </tr>
              </tbody>
            ))}

          </table>
        ))}


      </div>
    )


  }

}

export default Card;