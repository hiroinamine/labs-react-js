import React from "react";
import useFriendStatus from "../../hooks/useFriendStatus";

// Usando componente customizado 'useFriendStatus'
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.id);

  return <li style={{ color: isOnline ? "green" : "gray" }}>{props.name}</li>;
}

export default FriendListItem;
