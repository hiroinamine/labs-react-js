/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

// Criando hooks customizados
// nome do hook deve comecar sempre com `use...`
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  console.log("rendering useFriendStatus: ", isOnline);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status);
    }

    // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    // return () => {
    //  ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    // };

    const interval = parseInt(Math.random() * (1 * 10) * 1000);
    console.log(
      `Interval of '${interval}ms' to change friend '${friendID}' - online:'${isOnline}' to '${!isOnline}'`
    );
    const id = setInterval(() => {
      handleStatusChange(!isOnline);
    }, interval);

    return () => {
      console.log(`Stopping friend '${friendID}' status.`);
      clearInterval(id);
    };
  });

  return isOnline;
}

export default useFriendStatus;
