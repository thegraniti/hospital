import React from "react";
import "./Post.css";
import User from "../../User/User";

function Post(props) {

  
  const [count, setCount] = React.useState(0);
  
   function handleCount() {
    setCount(prevCount => {
      // increment the count
      const newCount = prevCount + 1;
  
      // save the count to local storage
      localStorage.setItem(props.id, newCount);
  
      return newCount;
    });
  }
  React.useEffect(() => {
    // get the count from local storage
    const count = localStorage.getItem(props.id);
  
    // if the count exists in local storage, set it in the component state
    if (count) {
      setCount(parseInt(count, 10));
    }
  }, []);

  return (
    <div className="post-section" onClick={handleCount}>
      <div className="post-image">
        <img src={props.image} alt="blog" />
      </div>
      <div className="post-container1">
        <h1>{props.title}</h1>
        <p>{props.comment}</p>
      </div>
      <div className="line" />
      <div className="post-container2">
        <User count={count} />
      </div>
    </div>
  );
}

export default Post;
