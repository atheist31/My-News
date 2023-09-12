import React, { Component } from 'react'
import infinity from "../Infinity.gif"

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
       <img src={infinity} alt="loading"/>
      </div>
    )
  }
}
