import { useState } from "react";
import axios from 'axios';

// blogs
const Blogs = (props) => {

    const { blog , urlEndPoint, setShouldRefresh } = props;
    const [title, setTitle] = useState(blog.title);
    const [text, setText] = useState(blog.text);
    const [author, setAuthor] = useState(blog.author);
    const [categories, setCategories] = useState(blog.categories);
    const [complete, setComplete] = useState(blog.complete);
    const [isEditing, setIsEditing] = useState(false);

    //implement handlers 
    const handleSetBlogComplete = async () => {
      setShouldRefresh(true);
      const req = {
        isComplete: !blog.isComplete
      } 
      await axios.put(`${urlEndPoint}/blogs/update-one/${blog.id}`, req)
      .then(function (response) {
        console.log(response);
      },{
      'Content-Type': 'application/json'
      })
      setShouldRefresh(false);
    }
    const handleDeleteBlog = () => {
      axios.delete(`${urlEndPoint}/blogs/delete-one/${blog.id}`)
      .then(function (response) {
        console.log(response);
      },{
      'Content-Type': 'application/json'
      })

    }
    const handleUpdateBlog = () => {
      setShouldRefresh(true);
      const req = {
        title: title,
        text: text,
        categories: categories,
        author: author,
        complete:false,
      } 
     axios.put(`${urlEndPoint}/blogs/update-one/${blog.id}`, req)
      .then(function (response) {
        console.log(response);
      },{
      'Content-Type': 'application/json'
      })
      setShouldRefresh(false);
    }

    return (
        <div>
          {!isEditing && <h2>{blog.title}</h2>}
          {isEditing && (
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          )}
          <p>ID: {blog.id}</p>
          {!isEditing && <p>categories: {blog.categories}</p>}
          {isEditing && (
            <textarea
              type="text"
              value={categories}
              onChange={(e) => {
                setCategories(e.target.value);
              }}
            /> 
          )}
                
          {!isEditing && <p>{blog.author}</p>}
          {isEditing && (
            <input
              type="text"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          )}
            
            
          {!isEditing && <p>{blog.complete}</p>}
          {isEditing && (
            <input
              type="boolean"
              value={complete}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />

          )}
          <p>Is Complete: {blog.isComplete ? "Complete" : "Incomplete"}</p>
           <p>Creation Date: {blog.createdAt.toString()}</p>
          <button
            onClick={() => {
              handleSetBlogComplete();
            }}
          >
            Toggle Complete
          </button>
          <button
            onClick={() => {
              handleDeleteBlog();
            }}
          >
            Delete Blog
          </button>
                {!isEditing && 
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit Blog
          </button>
                }
                {isEditing && 
          <button
            onClick={() => {
              setIsEditing(false);
                        handleUpdateBlog()
            }}
          >
            Update Blog
          </button>
                }
        </div>
      );
}

export default Blogs;