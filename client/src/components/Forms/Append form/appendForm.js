import React, { Component } from 'react';
import superagent from 'superagent';

class AppendForm extends Component{
    constructor(props){
        super(props)
        this.state={
            residentId:"",
            status:"",
            programId:""

        }
    }

    onChange =(e)=> {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) =>{
        e.preventDefault();
        await superagent.post(`${URL}`)
        .send(this.state)
        .set('Content-Type', 'application/json')
        .set('accept', 'json')
        .end((err, res) => {
            console.log(`The error is ${err}`);
            console.log(JSON.parse(res.text))
        })
    }

    render(){
        const {residentId, status, programId} = this.state;
        return (
        <div className="border-4 rounded shadow m-10">
            <div className="mt-10 sm:mt-0 p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Latest Resident and Program Info</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={this.handleSubmit}>
            <h2 className="text-lg font-bold p-4">Append Form</h2>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Resident ID
                      </label>
                      <input
                        type="text"
                        name="residentId"
                        value= {residentId}
                        onChange={this.onChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <input
                        type="text"
                        name="status"
                        value={status}
                        onChange={this.onChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Program ID
                      </label>
                      <input
                        type="text"
                        name="programId"
                        value={programId}
                        onChange={this.onChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>)
    }
}
export default AppendForm;