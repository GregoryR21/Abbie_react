import React, { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {comments.map((data) => {
        return (
          <div key={data.id}>
            <p>
              <h3 className="blueText"> Name: {data.name} </h3>
              <h4>Body: {data.body} </h4>
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Comments;
