import React from "react"
import FriendList from "./list"
import Friend from "./Friend"
// import Pet from "./Pet"



function App() {
  const myFriends = FriendList.map(friend => <Friend name={friend.name} age={friend.age} pets={friend.pets} />)

  return (
    <div>
      {myFriends}
    </div>
  );
}

export default App;
