// import { useState } from "react";
import Blogs from "../Components/Blogs";

//home page component 
const HomePage = (props) => {

    const {
        blogs, 
        setBlogs, 
        urlEndPoint,
        setShouldRefresh, 
    } = props

    return (
        <div>
            <h1>Blogger</h1>
            {blogs.map((item, index) => {
                return (<Blogs
                    blogs={blogs} 
                    setBlogs={setBlogs} 
                    urlEndPoint={urlEndPoint}
                    ShouldRefresh={setShouldRefresh}
                    key={index} /> 
                );
            })}
        </div>
    )
}

export default HomePage