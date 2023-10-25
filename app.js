
// This function fetches the list of songs from songs.json and displays them on the webpage
window.onload = async () => {
    try {
        const response = await fetch('songs.json');
        if (!response.ok) {
            throw new Error("Couldn't fetch songs.json");
        }
        const songs = await response.json();

        const songList = document.getElementById('songList');
        songs.forEach(song => {
            const listItem = document.createElement('li');
            listItem.innerText = song;
            listItem.onclick = () => playSong(song);
            songList.appendChild(listItem);
        });
    } catch (error) {
        console.error("There was an error:", error);
    }
};

// This function plays the clicked song
function playSong(song) {
    const audio = document.getElementById('audio');
    audio.src = song;
    audio.play();
}
