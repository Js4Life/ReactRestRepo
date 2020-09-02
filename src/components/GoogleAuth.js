import React from 'react'
import {signIn,signOut} from '../actions/index';
import {connect} from 'react-redux'
class GoogleAuth extends React.Component {

   // state = { isSignedIn : null }

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId : '870369786497-vo8pd6hpnhjt87nm3erjc1t6sssuml0q.apps.googleusercontent.com',
                scope : 'email'
            }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                //   this.setState({ isSignedIn : this.auth.isSignedIn.get() })
                  this.onAuthChange(this.auth.isSignedIn.get())
                  this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }

    onAuthChange=(isSignedIn)=>{
      //  this.setState({isSignedIn : this.auth.isSignedIn.get()})
        console.log('props',this.props)
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId() )
        } else {
            this.props.signOut()
        }

    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null
        } else if(this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />Sign out
                </button>
            )
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon" />Sign in with Google
                </button>
                )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);