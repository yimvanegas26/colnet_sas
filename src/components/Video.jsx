import React from 'react'
import videoPp from "../video/Colnet.mp4"

function Video() {
    return (
        <div>
            <iframe 
            class="w-full aspect-video ..."  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameborder="0"
            src={videoPp}>

            </iframe>
        </div>
    )
}

export default Video
