import React, { Component } from 'react'

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
            // console.log(data, 'this is data')

            //New array, push new result for render 10 employee (loop )
            const newArray = this.state.persons
            newArray.push(data.results[0]) // el result comes from a propety of the object in this case
            this.setState({ persons: newArray })
            if (i === 9) {
                this.setState({ loading: false })
            }
        }
    }
}