import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';



const BlogFormPage = (props) => {

	const { setShouldRefresh, urlEndPoint } = props;
    const [title, setTitle] = useState("")
	const [author, setAuthor] = useState("")
	const [text, setText] = useState("")
    const [categories, setCategories] = useState([])

	//instantiate navigator 
	const navigate = useNavigate();
	console.log(urlEndPoint)
    const handleCreateBlog = async () => {
		console.log('hello')
		console.log(setShouldRefresh)

		//if we are creating a new entry, let's refresh the page
		setShouldRefresh(true)



		const req =  {
            title: title,
            author: author,
            text: text,
            categories: categories
          }
		console.log(req);
		
        axios.post(`${urlEndPoint}/blogs/create-one`, req)
          .then(function (response) {
			setShouldRefresh(false);
            console.log(response);
          },{
			'Content-Type': 'application/x-www-form-urlencoded'
		  })
          .catch(function (error) {
            console.log(error);
          }); 

		 
		  navigate("/")

    }


    return (
		<div>
			<h1>Create Blog Form</h1>
			<label>Title</label>
			<input type="text" onChange={(e)=>{
				setTitle(e.target.value)
			}} />
			<br/>
			<label>Text</label>
			<textarea type="text" onChange={(e)=>{
				setText(e.target.value)
			}} />
			<br/>
			<label>Author</label>
			<input type="text" onChange={(e)=>{
				setAuthor(e.target.value)
			}} />
            <br/>
			<label>categories</label>
			<input type="text" onChange={(e)=>{
				setCategories(e.target.value)
			}}></input>
            

			<br/>
			<button onClick={()=>{
				handleCreateBlog()
			}}>Create Blog</button>
		</div>
	)
}

export default BlogFormPage