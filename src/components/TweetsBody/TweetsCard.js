import styles from "./TweetsCard.module.scss";

const TweetCard = (props) => {
  return (
    <div className={styles.tweet}>
      <div className={styles.tweetContainer}>
        <div className={styles.tweetInfo}>
          <img src={props.imageSrc} alt="user pfp" />
          <div className={styles.handleDate}>
            <p className="handle">{props.handle}</p>
            <p className="date">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
