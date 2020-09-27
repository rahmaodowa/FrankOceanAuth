var thumbUp = document.getElementsByClassName("fa fa-heart");
var trash = document.getElementsByClassName("fa fa-trash");

Array.from(thumbUp).forEach(function(element) {
element.addEventListener('click', function(){
const name = this.parentNode.parentNode.childNodes[1].innerText
const msg = this.parentNode.parentNode.childNodes[3].innerText
const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
fetch('messages', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'name': name,
    'msg': msg,
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
const name = this.parentNode.parentNode.childNodes[1].innerText
const msg = this.parentNode.parentNode.childNodes[3].innerText
fetch('messages', {
  method: 'delete',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'name': name,
    'msg': msg
  })
}).then(function (response) {
  window.location.reload()
})
});
});

let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
'<iframe src="https://open.spotify.com/embed/track/7DfFc7a6Rwfi3YQMRbDMau" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/6MEDfjHxnVNcYmHe3mM6L2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/4osgfFTICMkcGbbigdsa53" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/3CgZCQyuyxHRMWB9BTwmni" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/6YJZMNLwxl7am5XZEr7eqY" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/5RRbTnSvlD5AUYsQ1Cizor" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/3ouh8See3icUgSb4iXnIg7" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/4Jle0Cjj88YkM7jbAjiFjf" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/4r9CtoTORnhgolvhslLdTx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/1fOkmYW3ZFkkjIdOZSf596" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/2ohegz9maxzroKBu9YhcCM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/4QhWbupniDd44EDtnh2bFJ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/3QXm6zLOV9DKgLxmwqsysO" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/5F7nMiz7BtmJvppXALXSbZ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/41cpvQ2GyGb2BRdIRSsTqK" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/3gATNBVu8d7oWs9WijPDjD" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/6KuXb26rHuRy3ZDse1VRmx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/2q0VexHJirnUPnEOhr2DxK" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/3Osd3Yf8K73aj4ySn6LrvK" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/49sXkAcR5LvOrtq5Qcn5cf" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/6Nle9hKrkL1wQpwNfEkxjh" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
'<iframe src="https://open.spotify.com/embed/track/4FItdNoOT2CpVhSJy87hTz" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',




];

btn.addEventListener('click', function(){
var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
output.innerHTML = randomQuote;
})




let lyricsBtn = document.querySelector('#search')
lyricsBtn.addEventListener('click', function(){
searchSongs()
})

function searchSongs() {
let songName = document.querySelector('#songName').value
let songs = document.querySelector('#showLyrics')
fetch(`searchsongs?songName=${songName}`)
.then((res) => res.json())
.then((data) => {
let songTitle = data.result.track.name
let lyrics = data.result.track.text.replace(/(\r\n|\r|\n)/g, "<br>");

songs.innerHTML = `<button data-title="${songTitle}" id="bookmarkSong" type="button" name="button">bookmark This Song</button><br><h2><strong>${songTitle}</strong></h2>
<p>${lyrics}</p>`;
let saveSongBtn = document.querySelector('#bookmarkSong')
saveSongBtn.addEventListener('click', saveToDatabase)
})
}

function saveToDatabase() {
let info = document.querySelector('#bookmarkSong')
console.log(info.dataset.title)
  fetch('addsong', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': info.dataset.title,
      'artist': "Frank Ocean"
    })})
  .then(function (response) {
    window.location.reload()

  })
}
