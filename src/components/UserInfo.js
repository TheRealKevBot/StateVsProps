import React from 'react'

export default function UserInfo(props) {

    return (
        <div>
            <h1>Current Users Information</h1>
            <h2>Username: {props.user.username}</h2>
            <h2>Email: {props.user.email}</h2>
            <h2>First Name: {props.user.f_name}</h2>
            <h2>Last Name: {props.user.l_name}</h2>
        </div>
    )
}
