import React, { Component } from 'react'
import superagent from 'superagent'

const URL = 'http://localhost:5000/residents';

class ResidentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            birthDate:"",
            moveInDate:"",
            ambulation:"",
            levelOfCare:"",
            firstName:"",
            lastName:"",
            preferredName:"",
            status:"",
            room:""
        }
    };
    

    onChange =(e)=> {
        this.setState({[e.target.name]: e.target.value})
    }

    
    handleSubmit = (e) =>{
        e.preventDefault();
        superagent.post(`${URL}`)
        .send(this.state)
        .set('Content-Type', 'application/json')
        .set('accept', 'json')
        .end((err, res) => {
            console.log(`The error is ${err}`);
            console.log(JSON.parse(res.text))
        })
    }

    render(){
        const {name, birthDate, moveInDate, firstName, lastName, preferredName, room} = this.state;
        return (
                <div className=" font-sans text-lg justify-center border-4 border-solid shadow-md rounded m-10">
                <div className="p-10 m-6">
                
                <form onSubmit={this.handleSubmit}>
                    <h3 className="text-center text-2xl p-4">RESIDENTS FORM</h3>
                    <div className="grid grid-cols-2 space-y-4">
                    <div className="grid grid-cols-3">
                        <label>Full Name </label>
                            <input className="border-2 pl-4" 
                            type="text" name="name" value={name} onChange={this.onChange} />
                    </div>
                    <div className="grid grid-cols-3">
                        <label>First Name </label>
                        <input className="border-2 pl-4"
                        type="text" name="firstName" value={firstName} onChange={this.onChange}/>
                    </div>
                    <div className="grid grid-cols-3">
                        <label>Last Name </label>
                            <input className="border-2 pl-4" 
                            type="text" name="lastName" value={lastName} onChange={this.onChange}/>
                    </div>
                    <div className="grid grid-cols-3">
                        <label>Preffered Name </label>
                            <input className="border-2 pl-4"
                            type="text" name="preferredName" value={preferredName} onChange={this.onChange}/>
                    </div>
                    <div className="grid grid-cols-3">
                    <label>Date Of Birth </label>
                        <input className="border-2 pl-4"
                        type="date" name="birthDate" value={birthDate} onChange={this.onChange}/>
                    </div>
                    <div className="grid grid-cols-3">
                        <label className="grid grid-cols-3">Move in Date </label>
                            <input className="border-2 pl-4"
                            type="date" name="moveInDate" value={moveInDate} onChange={this.onChange}/>
                    </div>
                    <div className="grid grid-cols-3">
                        <label>Room</label>
                            <input className="border-2 pl-4"
                            type="text" name="room" value={room} onChange={this.onChange}/>
                    </div>
                    </div>
                    <div className="m-4 space-y-4">
                    <div className=" p-4 border-t-2 border-b-2">
                        <label className="flex justify-center pb-2 text-lg font-semibold ">Status </label>
                            <div className="grid grid-cols-3 gap-4">
                            <div className="space-x-2">
                                <label>HERE</label>
                                <input type="radio" name="status" value="HERE" onChange={this.onChange}/>
                            </div>
                            <div className="space-x-2">
                                <label>LOA</label>
                                <input type="radio" name="status" value="LOA" onChange={this.onChange}/>
                            </div>
                            <div className="space-x-2">
                                <label>ISOLATION</label>
                                <input type="radio" name="status" value="ISOLATION" onChange={this.onChange}/>
                            </div>
                            </div>
                    </div>
                    <div className="  border-b-2 p-4">
                        <label className="flex justify-center pb-2 text-lg font-semibold"> Level Of Care </label>
                            <div className="grid grid-cols-4 space">
                            <div className="space-x-2">
                                <label>Independent</label>
                                <input type="radio" name="levelOfCare" value="INDEPENDENT" onChange={this.onChange}/>
                            </div>
                            <div className="space-x-2">
                                <label>Assisted</label>
                                <input type="radio" name="levelOfCare" value="ASSISTED" onChange={this.onChange}/>
                            </div>
                            <div className="space-x-2">
                                <label>Memory</label>
                                <input type="radio" name="levelOfCare" value="MEMORY" onChange={this.onChange}/>
                            </div>
                            <div className="space-x-2">
                                <label>Longterm</label>
                                <input type="radio" name="levelOfCare" value="LONGTERM" onChange={this.onChange}/>
                            </div>
                            </div>
                    </div>
                    <div className=" border-b-2 pb-4">
                        <label className="flex justify-center pb-2 text-lg font-semibold">Ambulation </label>
                            <div className="grid grid-cols-4">
                            <div className="space-x-2">
                                <label>No Limitations</label>
                                <input type="radio" name="ambulation" value="NOLIMITATIONS" onChange={this.onChange}/>
                            </div>
                            <div className="space-x-2">
                                <label>Cane</label>
                                <input type="radio" name="ambulation" value="CANE" onChange={this.onChange}/>
                            </div>
                            <div className="space-x-2">
                                <label>Walker</label>
                                <input type="radio" name="ambulation" value="WALKER" onChange={this.onChange}/>
                            </div>
                            <div className="space-x-2">
                                <label>Wheelchair</label>
                                <input type="radio" name="ambulation" value="WHEELCHAIR" onChange={this.onChange}/>
                            </div>
                            </div>
                    </div>
                    </div>
                    <button className= " inline-flex object-right-bottom py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="submit">Submit</button>
                </form>
            </div>
            </div>
            )
    }
}

export default ResidentForm;