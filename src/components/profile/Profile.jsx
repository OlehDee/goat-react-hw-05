import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Head}>
        <img className={styles.Image} src={image} alt="User avatar" />
        <p className={styles.Name}>{name}</p>
        <p className={styles.Tag}>@{tag}</p>
        <p className={styles.Location}>{location}</p>
      </div>

      <ul className={styles.Information}>
        <li className={styles.InformationItem}>
          <span>Followers</span>
          <span className={styles.integer}>{stats.followers}</span>
        </li>

        <li className={styles.InformationItem}>
          <span>Views</span>
          <span className={styles.integer}>{stats.views}</span>
        </li>

        <li className={styles.InformationItem}>
          <span>Likes</span>
          <span className={styles.integer}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;