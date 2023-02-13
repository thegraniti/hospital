import React from "react";
import './AddPost.css'



export default function AddPost(props) {


  

    function addPostHandler(postData){
                fetch(
                    'https://hospital-2b23a-default-rtdb.europe-west1.firebasedatabase.app/post',
                {
                    method: 'POST',
                    body: JSON.stringify(postData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                ).then(() => {
                    props.handleClick()
                });
    }

  const inputTitileRef = React.useRef();
  const inputImageRef = React.useRef();
  const inputCommentRef = React.useRef();

  function submitHandler(event){
    event.preventDefault()

    const enteredTitle = inputTitileRef.current.value;
    const enteredImage = inputImageRef.current.value;
    const enteredComment = inputCommentRef.current.value;
    
    const postData = {
        title: enteredTitle,
        image: enteredImage,
        comment: enteredComment,
    }

    addPostHandler(postData)
  }



  return (
    <div className="add-post">
      <form className="form" onSubmit={submitHandler}>
        <button type="button" onClick={props.handleClick}>X</button>
        <div className="control">
            <label htmlFor="title">Post Title</label>
            <input type="text" required id="title" ref={inputTitileRef} />
        </div>
        <div className="control">
            <label htmlFor="image">Post Image</label>
            <input type="url" required id="image" ref={inputImageRef} />
        </div>
        <div className="control">
            <label htmlFor="description">Description</label>
            <textarea id="comment" required rows='5' ref={inputCommentRef}/>
        </div>
        <div className="actions">
            <button >Add Post</button>
        </div>
      </form>
    </div>
  );
}
 