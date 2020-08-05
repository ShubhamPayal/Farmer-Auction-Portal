import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, removeUser } from "../../store/Action/Action";

// import component
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import './Profile.css'

class Profile extends Component {
  componentDidMount() {
    console.log("HOME > STATE >", this.state);
    console.log("HOME > PROPS >", this.props);

    if (!this.props.isLoggedIn) {
      this.props.history.push("/signin");
    }
  }

  render() {
    return (
      <div>
        <Nav history={this.props.history} />
        <div className="Profile">
          <div id="container" >
            <div className="img-container">
              <img className="avatar" src="profile-pic.png" />
            </div>
            {
              this.props.user &&
              <React.Fragment>
                <h1>{this.props.user.email}</h1>
                <h2>{this.props.user.isSeller && "Seller"}</h2>
                <h2>{this.props.user.isBuyer && "Buyer"}</h2>
                <h2>{this.props.user.isCourier && "Courier"}</h2>
              </React.Fragment>
            }
          </div>

          <Footer history={this.props.history} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  isLoggedIn: state.isLoggedIn,
});
const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
  removeUser: () => dispatch(removeUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
