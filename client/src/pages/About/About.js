import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser, removeUser, chnageLang } from '../../store/Action/Action'
import './About.css'

// importing components
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

class About extends Component {

    state = {
        product: [],
    }

    componentDidMount() {
        console.log("HOME > STATE >", this.state)
        console.log("HOME > PROPS >", this.props)

        if (!this.props.isLoggedIn) {
            this.props.history.push('/signin')
        }


    }
    render() {
        return (
            <>
                <Nav history={this.props.history} />
                <div className="About">
                    <div id="container">
                        <h3 id="heading" className="display-3 mb-5">{this.props.hindi ? "विषय में" : "About"}</h3>
                        <div id="content-div" className="container">
                            <p>
                                {
                                    !this.props.hindi ?
                                        "Living seeds is a platform where farmers can put up there produce for sail, and gain higher profits." :
                                        "जीवित बीज एक ऐसा मंच है जहां किसान पाल के लिए उत्पादन कर सकते हैं, और अधिक लाभ प्राप्त कर सकते हैं।"
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <Footer history={this.props.history} />
            </>
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
    removeUser: () => dispatch(removeUser()),
    chnageLang: () => dispatch(chnageLang())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)


