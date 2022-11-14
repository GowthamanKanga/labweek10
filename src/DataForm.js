import React, { Component } from "react";

const INITIAL_VALUE = {
    email: "",
    fullname: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: ""
}


export default class DataForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {...INITIAL_VALUE}
        this.province = ["Choose...", "Alberta", "British Columbia", "Manitoba", 
                        "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", 
                        "Ontario","Prince Edward Island", "Quebec","Saskatchewan"]
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log("Submitted")
        console.log(this.state)
    }


    onValueChanged = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value})
    }

    render= () => {
        return(
            <>
                <form>
                    <label>
                        Email
                    </label> <br/>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Enter Email"
                        value={this.state.email} 
                        onChange={event => this.onValueChanged(event)}/> <br/>
                    

                    <label>
                        Full Name
                    </label> <br/>
                    <input 
                        type="text" 
                        name="fullname" 
                        placeholder="Enter Full Name"
                        value={this.state.fullname} 
                        onChange={event => this.onValueChanged(event)} /> <br/>
                    

                    <label>
                        Address 1
                    </label> <br/>
                    <input 
                        type="text" 
                        name="address1" 
                        placeholder="1234 Main St"
                        value={this.state.address1} 
                        onChange={event => this.onValueChanged(event)} /> <br/>
                    

                    <label>
                        Address 2
                    </label> <br/>
                    <input 
                        type="text" 
                        name="address2" 
                        placeholder="Apartment,Studio, or Floor"
                        value={this.state.address2} 
                        onChange={event => this.onValueChanged(event)} /> <br/>

                    <label>
                        City
                    </label> <br/>
                    <input 
                        type="text" 
                        name="city" 
                        placeholder="Enter City Name"
                        value={this.state.city} 
                        onChange={event => this.onValueChanged(event)} /> <br/>
                    

                    <label>
                        Province
                    </label> <br/>
                    <select onChange={this.onValueChanged} name="province"> 
                        {
                            this.province.map(province => (
                                <option key={province} value={province}>{province}</option>
                            ))
                        }
                    </select> <br/>
                    
                    <label>
                        Postal Code
                    </label> <br/>

                    <input 
                        type="text" 
                        name="postalCode" 
                        placeholder="Enter Postal Code"
                        value={this.state.postalCode} 
                        onChange={event => this.onValueChanged(event)} /> <br/>

                        
                        <label>
                            <input type="checkbox" onChange={event => this.onValueChanged(event)} />
                            Agree Terms & Conditions?
                        </label>    <br/>
                    
                    <input 
                        type="submit" 
                        value="Submit"
                        onClick={this.submitHandler} />
                </form>

                <div>
                    <h2>Email: {this.state.email}</h2>
                    <h2>Full Name: {this.state.fullname}</h2>
                    <h2>Address: {this.state.address1}, {this.state.address2}</h2>
                    <h2>City Name: {this.state.city}</h2>
                    <h2>Province: {this.state.province}</h2>
                    <h2>Postal Code: {this.state.postalCode}</h2>
                </div>
            </>
        )
    }
}