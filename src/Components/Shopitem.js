import React, { Component } from "react";

class Shopitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,
        }
    }

    componentDidMount() {
        this.fetchImages()
    }

    fetchImages = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/${this.props.productInfo.listing_id}/images?api_key=qp5jp1jc3esdquq9jl7u8c8p `)
            .then(res => res.json())
            .then(data => {
                this.setState({ images: data })
            })
    }

    render() {
        console.log(this.props)
        return (
            <>
                <div className="shopitem">
                    {this.state.images && this.state.images.results.map(image => <img src={image.url_fullxfull} />)}
                    <h3>{this.props.productInfo.title}</h3>
                    <p>{this.props.productInfo.description}</p>
                    <p>{this.props.productInfo.quantity}</p>
                    <p>{this.props.productInfo.price + this.props.productInfo.currency_code}</p>
                    <a href={this.props.productInfo.url}><button className="etsybutton">Buy on Etsy</button></a>
                </div>
            </>
        )
    }
}

export default Shopitem;

//<a href="https://react.school" target="_blank">
//<Button> Link Button </Button>
//</a>