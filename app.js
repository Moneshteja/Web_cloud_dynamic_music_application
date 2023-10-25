window.onload = async () => {
    const response = await fetch('songs.json');
    const songs = await response.json();
    
    const songList = document.getElementById('songList');
    songs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.innerText = song;
        listItem.onclick = () => playSong(song);
        songList.appendChild(listItem);
    });
};

function playSong(song) {
    const audio = document.getElementById('audio');
    audio.src = song;
    audio.play();
}
