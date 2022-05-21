import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  console.log("ESTO ES EL PROFile image: ", ProfileImage);

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            <User userData={props.tweet.user} />
          </span>
          <Timestamp time={props.tweet.timestamp} />{" "}
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
