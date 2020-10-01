import React from "react";
import BlogSlider from "./BlogSlider";


const Blog = () => {
    return (
        <>
            <div className="main-content">
                <div className="blog-text"><h1>Welcome to Chido!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet auctor ligula, nec sagittis purus elementum posuere. Nullam augue diam, ornare ac finibus eget, sagittis nec augue. Maecenas ut sodales odio, hendrerit suscipit nulla. Pellentesque tempor et dolor nec viverra. Sed quis risus a massa auctor tempor sit amet ut nisi. </p>
                </div>
                <BlogSlider />
            </div>
        </>
    )
}


export default Blog;