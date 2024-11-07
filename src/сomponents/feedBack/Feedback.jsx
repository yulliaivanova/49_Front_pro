import { useState } from "react";
import MyButton from "../myButton/MyButton";
import "./feedback.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLikes = () => {
    setLikes((likes) => likes + 1);
  };
  const handleDislikes = () => {
    setDislikes((dislikes) => dislikes + 1);
  };
  const handleReset = () => {
    setLikes(0);
    dislikes(0);
  };

  return (
    <div>
      className="lesson-container"
      <h2> Like or Dislike </h2>
      <div className="counter">
        <span>{likes}</span>
        <MyButton func={handleLikes} text={"😄"} isDanger={"false"} />
        <MyButton func={handleDislikes} text={"☹️"} isDanger={true} />
        <span>{dislikes}</span>
      </div>
      <div>
        <MyButton func={handleReset} text={"Reset Results"} isDanger={false} />
      </div>
    </div>
  );
}
export default Feedback;
