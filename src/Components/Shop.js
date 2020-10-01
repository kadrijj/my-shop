import React, { Component } from "react";
import Shopitem from "./Shopitem";
import Loading from "./Loading";
import data from "./data";

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
        fetch(`/v2/shops/24041469/listings/active?api_key=qp5jp1jc3esdquq9jl7u8c8p`)
            .then(res => res.json())
            .then(data => {
                this.setState({ data })
            })
    }

    render() {
        return (
            <div className="shop">
                {
                    !this.state.data ? <Loading /> : this.state.data.results.map(product => <Shopitem productInfo={product} />)
                }

            </div>
        )
    }
}

export default Shop;

