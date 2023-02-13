import React from 'react'
import Post from '../../../components/Post/PostItems/Post'
import './BlogGrid.css'
import AddPost from '../../../components/Post/addPost/AddPost'

function BlogGrid() {

  const [loadPost, setLoadPost] = React.useState([])
 
  const [toggle , setToggle] = React.useState(true)


  function handleChange() {
    setToggle(prevState => !prevState)
  }


    React.useEffect(() => {
      fetch(
        "https://hospital-2b23a-default-rtdb.europe-west1.firebasedatabase.app/post.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const showPosts = [];
  
          for (const key in data) {
            const post = {
              id: key,
              ...data[key],
            };
  
            showPosts.push(post);
          }
          showPosts.reverse();
          setLoadPost(showPosts);
        });
    }, []);


    const showPosts = loadPost.map(post => {
      return <Post key={post.id} {...post} />
  })


  return (
    <div className='section'>
      <div className='blogGrid-container'>
        <div className="blogGrid-header flex header">
          <h2>Blog Post</h2>
          <h1>Our Latest Medical Blog Posts</h1>
        </div>
        {toggle ?  <button  className='button-3 post-button' onClick={handleChange}>ADD POST</button> :<AddPost handleClick={handleChange} />}
       <div className='grid'>
        {showPosts}
       </div>
      </div>
    </div>
  )
}

export default BlogGrid