import React from 'react';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    
    return (

        <ul className={styles.statsList}>
      {friends.map(friend => (
          <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
    );

};

export default FriendList;

