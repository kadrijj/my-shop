import React, { Component } from "react";
import Shopitem from "./Shopitem";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/shops/24041469/listings/active?api_key=qp5jp1jc3esdquq9jl7u8c8p`)
            .then(res => res.json())
            .then(data => {
                this.setState({ data })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.data && this.state.data.results.map(product => <Shopitem productInfo={product} />)
                }
            </div>
        )
    }
}

export default Shop;