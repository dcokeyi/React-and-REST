import React, { Component } from 'react'
import AppendForm from './Append form/appendForm'
import ProgramForm from './Program Form/programForm'
import ResidentForm from './Resident Form/residentForm'

class FormList extends Component{
    constructor(props){
        super(props)
        this.state={
            residentId:[],
            residentStatus:[],
            programId:[]
        }

    }

    render(){
        return(
            <div>
                <ResidentForm/>
                <ProgramForm/>
                <AppendForm/>
            </div>)
    }
}

export default FormList;