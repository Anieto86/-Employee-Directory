import React, {Component} from 'react';

//Styles
import "./style/Edirectory.css"

export default class Edirectory extends Component {


    render() {
        return (
            <div className="head">
                <ul className="nav">
                    <li className="nav-item">
                        <h2 className="ED">Employee Directory</h2>
                        <p> Find Employee</p>
                        <hr className="redL"/>
                    </li>
                </ul>
            </div>
        )
    }
}



 