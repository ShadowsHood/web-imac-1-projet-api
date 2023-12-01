fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=viewCount&q=avatar%20trailer%20francais&key=AIzaSyBVWlazW8DPFqh-oMJ45cRRlSi8vCYPy9E")
.then(result => result.json())
.then((data) =>{
    console.log(data)
    let videos = data.items
    let videoContainer = document.querySelector(".YoutubeBox")
    for(video of videos){
        videoContainer.innerHTML += `
            <img src="${video.snippet.thumbnails.high.url}">
        `   
    }
} 
)
