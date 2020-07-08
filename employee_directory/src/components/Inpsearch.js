import React, { Component } from 'react'


// //Import the API
// import API from "../utils/API";

//Styles
import "./style/Inpsearch.css"

export default class Inpsearch extends Component {


    state = {
        person: "",
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ name: e.target.value });

    }

    Search = (e) => {
        console.log("search");
        e.preventDefault();
        this.state.search(this.state.person);

    }

    render() {
        return (
            <form className="inpS" onSubmit={this.search}>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={this.handleChange}
                    value={this.state.person} />

                <button
                    onSearch={this.Search} >
                    Search
                </button>
            </form>
        )
    }

}


