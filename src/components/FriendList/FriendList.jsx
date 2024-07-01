import styles from './FriendList.module.css';
import propTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <>
    <div className={styles.container}>
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
    </div>
    </>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;