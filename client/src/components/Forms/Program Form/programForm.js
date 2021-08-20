import React, { Component } from 'react'
import superagent from 'superagent'

const URL = 'http://localhost:5000/programs';

class ProgramForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            location:"",
            allDay:"",
            start:"",
            end:"",
            isRepeated:"",
            hobbies:[],
            levelOfCare:'',
            facilitators:"",
            dimension:"",
            tags:""
        }
    };
    

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
        const {name, location, allDay, start, end, isRepeated, hobbies, levelOfCare, facilitators, dimension,tags} = this.state;

        return (
            <div className="m-10 border-4 rounded">
               <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Request Status</h3>
              <p className="mt-1 text-sm text-gray-600">Status of your request</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={this.handleSubmit}>
            <h2 className="text-lg font-bold p-4">Program Form</h2>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={this.onChange}
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        All Day
                      </label>
                      <input
                        type="text"
                        name="allDay"
                        value={allDay}
                        onChange={this.onChange}
                        placeholder="TRUE/FALSE"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Start
                      </label>
                      <input
                        type='date'
                        name="start"
                        value={start}
                        onChange={this.onChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        End
                      </label>
                      <input
                        type="date"
                        name="end"
                        value={end}
                        onChange={this.onChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Is Repeated
                      </label>
                      <input
                        type="text"
                        name="isRepeated"
                        value={isRepeated}
                        onChange={this.onChange}
                        placeholder="TRUE/FALSE"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        Hobbies
                      </label>
                      <input
                        type="text"
                        name="hobbies"
                        onChange={this.onChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Level Of care
                      </label>
                      <input
                        type="text"
                        name="levelOfCare"
                        value={levelOfCare}
                        onChange={this.onChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Tags
                      </label>
                      <input
                        type="text"
                        name="tags"
                        value={tags}
                        onChange={this.onChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Facilitators
                      </label>
                      <input
                        type="text"
                        name="facilitators"
                        value={facilitators}
                        onChange={this.onChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Dimension
                      </label>
                      <input
                        type="text"
                        name="dimension"
                        value={dimension}
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
                    Save
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

export default ProgramForm;