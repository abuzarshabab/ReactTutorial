import React, { Component } from "react";
import classes from './BlogCard.module.css'


class BlogCard extends Component  {
  state = {
    likeCount: 0,
  }
  onLikeBtnClick = () => {
    this.setState((prevState, prevProps) => {
      return { likeCount: ++prevState.likeCount }
    })
  }
  
  render()  {
    return (<div className={ classes.paragraphStyle } id={ this.props.id }>
      <h3> { this.props.title }</h3>
      <p> { this.props.description }</p>
      <p >Like Count: <span className={ classes.likeCount } > {  this.state.likeCount }</span></p>
      <button onClick={ this.onLikeBtnClick } className={ classes.like }> Like </button>
    </div>)
  }
}

export default BlogCard