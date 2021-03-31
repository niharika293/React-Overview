// When using React, think of your UI as a bunch of separate components.
// Components render/ return JSX.

import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {
    return (
        // <div>
        //     {/* 1. Static Text */}
        //     {/* <h1>Task Tracker</h1>  */}
        //     {/* 2. Using props */}
        //     {/* <h1>{props.title}</h1> */}
        //     {/* 3. Default Props , pass {title} to arguments  */}
        //     {/* <h1>{title}</h1> */}
        //    <h1>{props.title}</h1>
        //    <Button color = "green" text="Add"/>
        // </div>
        <header className = 'header'>
            <h1>{props.title}</h1>
            <Button color = "green" text="Add"/>
        </header>
          
    )
}

Header.defaultProps ={
    title : "Heyy default prop!!"
}
Header.propTypes = {
    title : PropTypes.string.isRequired
}


export default Header
