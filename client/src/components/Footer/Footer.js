import React from 'react';
import './Footer.css'
import axios from 'axios'
import { connect } from 'react-redux'
import {addUser, removeUser} from '../../store/Action/Action'

const logoutUser = (props) => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/user/logout`)
         .then(res => {
            props.removeUser()
            props.history.push('/signin')
         })
         .catch(err => {
             console.log("<<NAVBAR ERROR>>")
         })
}

const Footer = (props) => {
    return (
        <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
        <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
            <h2>{!props.hindi ? "Living Seeds" : "लिविंग सीड्स"}</h2>
            <p className="pr-5 text-white-50"></p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
                <ul className="m-0 p-0 nav-list">
    <li><a onClick={()=>{props.history.push('/')}}>{props.hindi ? "होम" : "Home"}</a></li>
    <li><a onClick={()=>{props.history.push('/profile')}}>{props.hindi ? "प्रोफाइल" : "Profile"}</a></li>
                <li><a onClick={()=>logoutUser(props)}>{!props.hindi ? "Logout" : "लॉगआउट"}</a></li>
                </ul>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col copyright">
            <p className=""><small className="text-white-50">© 2020. All Rights Reserved.</small></p>
            </div>
        </div>
        </div>
        </div>
    );
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
)(Footer)
