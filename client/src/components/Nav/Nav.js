import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser, removeUser, chnageLang } from '../../store/Action/Action'
import axios from 'axios'
import './Nav.css'

class Nav extends Component {

    logoutUser = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/user/logout`)
            .then(res => {
                this.props.removeUser()
                this.props.history.push('/signin')
            })
            .catch(err => {
                console.log("<<NAVBAR ERROR>>")
                this.props.history.push('/signin')
            })
    }

    profilePage = () => {
        this.props.history.push('/profile')
    }

    aboutPage = () => {
        this.props.history.push('/about')
    }

    homePage = () => {
        this.props.history.push('/')
    }

    render() {
        console.log("RENDER", this.props.history)
        const url = String(this.props.history.location.pathname)
        console.log(url)
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav__main py-3 px-2">
                <a className="navbar-brand pl-3" onClick={() => this.homePage()}><strong>{!this.props.hindi ? "Living Seeds" : "लिविंग सीड्स"}</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-2">
                            <span className={(url === '/') ? "nav__active nav-link" : "nav-link"} onClick={() => this.homePage()} >{!this.props.hindi ? "Home" : "होम"} <span className="sr-only">(current)</span></span>
                        </li>
                        <li className="nav-item mx-2">
                            <span className={(url.includes('profile')) ? "nav__active nav-link" : "nav-link"} onClick={() => this.profilePage()}>{!this.props.hindi ? "Profile" : "प्रोफाइल"}</span>
                        </li>
                        <li className="nav-item mx-2">
                            <span className={(url.includes('about')) ? "nav__active nav-link" : "nav-link"} onClick={() => this.aboutPage()}>{!this.props.hindi ? "About" : "अबाउट"}</span>
                        </li>
                        <li className="nav-item mx-2">
                            <button className=" btn btn-primary" onClick={() => this.props.chnageLang()}>{this.props.hindi ? "Change Lang" : "भाषा बदलो"}</button>
                        </li>
                        <li className="nav-item mx-2">
                            <button className="btn btn-warning" onClick={() => this.logoutUser()}>{!this.props.hindi ? "Logout" : "लॉगआउट"}</button>
                        </li>
                    </ul>
                </div>
            </nav>
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
)(Nav)