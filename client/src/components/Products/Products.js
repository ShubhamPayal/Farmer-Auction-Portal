import React, { Component } from 'react'
import Product from './Product/Product'
import Loader from '../Loader/Loader'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

class Products extends Component {
    state = {
        loading: true,
        products: []
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/product/viewproducts`)
            .then(res => {
                console.log("<<PRODUCT RESPONSE>>", res.data)
                this.setState({
                    products: res.data,
                    loading: false
                })
            })
            .catch(err => {
                console.log("<<PRODUCT RESPONSE>>", err)
            })
    }


    getNoProductsModal = () => {
        return (
            <>
                <Modal show={this.state.modalShow} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sorry!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>We curently have no products to bid on.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModalClose}>
                            Close
                </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
    getProductComponents = () => {
        if (this.state.products.length === 0) {
            return (this.getNoProductsModal())
        }

        const products = this.state.products
        return products.map(product => (
            <Product
                key={product._id}
                product={product}
                user={this.props.user}
                hindi={this.props.hindi}
            />
        ))
    }

    getProductsText = () => {
        if (this.props.user) {
            if (this.props.user.isBuyer === true) {
                return (!this.props.hindi ? "Currently Open for Bidding" : "वर्तमान में बोली लगाने के लिए खोलें")
            } else {
                return (!this.props.hindi ? "Currently Ongoing Biddings" : "वर्तमान में चल रही बिडिंग")
            }
        }
    }

    render() {
        return (
            <>
                <div className="container-fluid my-5 py-3">
                    <h2 className="text-center display-3">
                        {this.getProductsText()}
                    </h2>
                    <div className="row">
                        {(this.state.loading) ? <Loader /> : this.getProductComponents()}
                    </div>
                </div>
            </>
        )
    }
}

export default Products