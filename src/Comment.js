import React  from 'react'

// Functional Stateless Component

const Comment = props => 
    <p className="well">
        <b>{props.comment.user.name}:</b> {props.comment.comment}
    </p>


export default Comment