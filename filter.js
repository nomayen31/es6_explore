const numbers = [1, 5, 6, 4, 15];
const player = [75, 68, 69, 72,55, 59]
// const selected  = player.filter(p => p > 70);
const selected = player.filter(p => p % 2 === 1)
console.log(selected);
  

const friends = [ 'nomayen','tom','eithu','santhika','shahanika'];
const oddFriend = friends.filter(friend => friend.length)
console.log(oddFriend);