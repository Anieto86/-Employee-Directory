import React, { Component } from 'react'

//Styles
import "./style/Emplo.css"


export default class Emplo extends Component {


    state = {
        loading: true,
        persons: [],

    }

    // componentDidMount() is ejected ones the component was render
    async componentDidMount() {


        for (let i = 0; i < 10; i++) {

            const res = await fetch('https://randomuser.me/api/')
            // console.log(res)
            const data = await res.json();
            console.log(data, 'this is data')
            //    this.setState({ persons: data.results[0], loading: false });
            // console.log(data.results[0]);
            // week19   13loop inside render fuction!! map. 
            const newArray = this.state.persons
            newArray.push(data.results[0])
            this.setState({ persons: newArray })
            if(i === 9 ) {
                this.setState({loading: false})
            }

        }


    }



    render() {
        console.log(this.state.persons, 'these are the persons')

        return (
            <div className="container">
                {this.state.loading || !this.state.persons ? (
                    <div> loading...</div>  // {this.props.myprop} 
                ) : (
                        <div>
                            {console.log(this.state.person)}
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">DOB</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.persons.map( (e, index ) => (
                                        <tr key= {index}>
                                        <img src={e.picture.medium} alt='' />
                                        <td>{e.name.first}</td>
                                        <td>{e.phone}</td>
                                        <td>{e.email}</td>
                                        <td>{e.dob.age}</td>
                                    </tr>
                                    ) )}
                                    
                                </tbody>
                            </table>
                        </div>
                    )}
            </div>
        );
    }

}
