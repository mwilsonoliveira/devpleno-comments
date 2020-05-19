import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  constructor(props){
    super(props)

    this.postNewComment = this.postNewComment.bind(this)

    this.state = {
      comments: {
      },
      isLoggedIn: false,
      user: {}
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({ isLoggedIn: true, user })
      }else{
        this.setState({ isLoggedIn: false, user: {} })
      }
    })
  }

  postNewComment(comment){
    comment.user = {
      uid: this.state.user.uid,
      name: this.state.user.displayName
    }
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment
    this.setState({
      comments: comments
    })
  }
  auth(provider){
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">App de Comentários</h1>
        { this.state.isLoggedIn && 
              <nav className="navbar navbar-default navbar-fixed-top">
                <div className="row">  
                  <div className="col-md-1 col-md-offset-1">
                    <img alt={this.state.user.displayName} src={this.state.user.photoURL} />
                  </div>
                  <div className="col-md-5">  
                    <h2>{this.state.user.displayName}</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-md-offset-1">
                    <NewComment postNewComment={this.postNewComment}/>
                  </div>
                  <div className="col-md-2 text-center">
                    <button onClick={() => this.props.auth.signOut()}>Deslogar</button>
                  </div>
                </div>
              </nav>
        }
        { !this.state.isLoggedIn &&
          <div className='alert alert-info text-center'>
            <button onClick={()=> this.auth('facebook')}>Entre com o facebook para comentar</button>
          </div>
        }
        <br />
        <div className="row">
          <Comments comments={this.state.comments} />
        </div>
      </div>
    )
  }
}

export default App
