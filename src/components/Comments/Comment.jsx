import React from 'react'

export default function Comment(props) {
    return (
        <li>{props.text} ({props.user})</li>
    )
}
