import React, { Component } from "react";
import People from "./People";

export default class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person:[]
        }
    }

    fetchApi = async () => {
        let resp = await fetch("https://rickandmortyapi.com/api/character");
        let data = await resp.json();

        this.setState({
            person:[...data.results]
        })
    }

    componentDidMount() {
        this.fetchApi()
    }

    render() {
        return (
            this.state.person.map((person, i) => {
                return <People key={i}{...person}/>
            })
        )
    }
}