var thumbUp = document.getElementsByClassName("fa fa-heart");
var trash = document.getElementsByClassName("fa fa-trash");

Array.from(thumbUp).forEach(function(element) {
element.addEventListener('click', function(){
const name = this.parentNode.parentNode.children[0].innerText
const artist = this.parentNode.parentNode.children[2].innerText
const thumbUp = parseFloat(this.parentNode.parentNode.children[3].innerText)
fetch('heartSavedSongs', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'name': name,
    'artist': artist,
    'thumbUp':thumbUp
  })
})
.then(response => {
  if (response.ok) return response.json()
})
.then(data => {
  console.log(data)
  window.location.reload(true)
})
});
});

Array.from(trash).forEach(function(element) {
element.addEventListener('click', function(){
const name = this.parentNode.parentNode.children[0].innerText
const artist= this.parentNode.parentNode.children[2].innerText
fetch('deleteSavedSongs', {
  method: 'delete',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'name': name,
    'artist': artist
  })
}).then(function (response) {
  window.location.reload()
})
});
});
