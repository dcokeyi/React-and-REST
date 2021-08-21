import React, { Component } from 'react'
import axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      residents: [],
      programs: [],
      residentNames: [],
      actives: []
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
          innerIds.push([a.residentId, a.status])
        });

        ids.push(innerIds);
        innerIds = []

      });

      let names = []
      let innerNames = []


      ids.forEach(inId => {
        inId.forEach(id => {
          for (let index = 0; index < this.state.residents.length; index++) {
            if (id[0] === this.state.residents[index].id) {
              innerNames.push("Name: "+ this.state.residents[index].name + " | Status: " + id[1]);
  
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
    const {  residentNames,  programs } = this.state

    
    const tables = []
    let rows = []
    
    for (let index = 0; index < residentNames.length; index++) {
    

      for (let j = 0; j < residentNames[index].length; j++) {
        
        rows.push(
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <p>{residentNames[index][j]}</p>
          </td>
        </tr>
        )
      }

      tables.push(
        <thead className="bg-gray-50">
        <tr className="border-2">
          <th 
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider bg-gray-50">
            {programs[index].name}
          </th>
        </tr>
        <tbody>
                {rows}
        </tbody>


      </thead>
      )

      rows =[]

     
      
      
    }



    return (
      <div className="flex flex-col m-10 p-10">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                {tables}
              </table>

            </div>
          </div>
        </div>
      </div>
    )


  }

}

export default Card;