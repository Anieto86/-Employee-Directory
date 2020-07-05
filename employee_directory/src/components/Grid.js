import React, { Component } from 'react'


//Styles
import "./Grid.css"

export default class Grid extends Component {
    render() {
        return (
            <div className="">
                <ul className="gridTitle">
                    <li>Image</li>
                    <li>Name</li>
                    <li>Phone</li>
                    <li>Email</li>
                    <li>DOB</li>
                </ul>
            </div>
        )
    }
}