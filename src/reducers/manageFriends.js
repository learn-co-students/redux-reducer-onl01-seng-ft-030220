export function manageFriends(state={friends: []}, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return {
        friends: [...state.friends, action.friend]
      }
      break;

    case "REMOVE_FRIEND":
      let removeFriend = state.friends.find(friend => friend.id === action.id)
      return {
        friends: state.friends.filter(friend => friend !== removeFriend)
      }
      break;
    default:
      return state
  }
}
