import "./App.css";
import BlogCard from "./blogCard";
import React from "react";
class App extends React.Component {
  state = {
    showBlogs: true
  }
  blogs = [
    { 
      id: 1,
      title: "Blog Abuzar",
      description:
        "Hello Abuzar are you not able to work here please check this",
    },
    { 
      id: 2,
      title: "Blog Nikhil",
      description:
        "Hello Nikhil are you not able to work here please check this",
    },
    { 
      id: 3,
      title: "Blog Hitesh",
      description: 
        "Hello Hitesh are you not able to work here please check this",
    },
    { 
      id: 4,
      title: "Blog Vishal",
      description:
      "Hello Vishal are you not able to work here please check this",
    },
  ];
  
  blogCards = this.blogs.map((blog) => {
    return (
      <BlogCard {...blog} key={blog.id}/>
    )
  });


  onToggleBtnClick = () =>  {
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs }
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={ this.onToggleBtnClick}> {this.state.showBlogs ? 'Hide Blogs' : 'Show Blogs'}</button>
        <br></br>
        {
          this.state.showBlogs  ? this.blogCards : null
        }
      </div>
    )
  }


}

export default App;
