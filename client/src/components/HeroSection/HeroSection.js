import React, { Component } from 'react'
import './HeroSection.css';

import { connect } from 'react-redux'
import { addUser, removeUser } from '../../store/Action/Action'


class HeroSection extends Component {
    render() {
        return (
            <div id="hero__jumbotron" className="jumbotron jumbotron-fluid">
                <div id="hero__container" className="container">
                    <h3 className="display-3 mb-5"><strong>{!this.props.hindi ? "Living Seeds" : "लिविंग सीड्स"}</strong></h3>
                    <p className="lead">
                        {
                            !this.props.hindi ?
                                "Living Seed is a platform to connect Farmers directly to potential buyers. Buyers interact with sellers by placing bids." : "लिविंग सीड किसानों को सीधे संभावित खरीदारों से जोड़ने का एक मंच है। खरीदार बोली लगाकर विक्रेताओं के साथ बातचीत करते हैं।"
                        }

                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    hindi: state.hindi
})
const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user)),
    removeUser: () => dispatch(removeUser())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeroSection)
