import styles from "./FriendListItem.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? "Online" : "Offline";
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <div className={styles.Item}>
      <img
        className={styles.Img}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles.Name}>{name}</p>
      <p className={statusClass}>{statusText}</p>
    </div>
  );
};

export default FriendsListItem;