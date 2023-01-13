import { React, Component } from 'react'
import enero from "../video/Enero.mp4"
import Colnet from "../video/Colnet.mp4"

export default function Comision() {
  return (
    <div>
    
      <div id="carouselExampleCaptionsFull" class="carousel slide carousel-fade relative h-screen" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptionsFull"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptionsFull"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptionsFull"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden h-screen">
          <div class="carousel-item active relative float-left w-full h-screen bg-no-repeat bg-cover bg-center embed-responsive embed-responsive-21by9 overflow-hidden">
            <video class="min-w-full  max-w-full xl:min-w-0 xl:min-h-0 " playsinline autoPlay muted loop>
              <source class="" src={enero} type="video/mp4" />
            </video>
            
          </div>
          <div class="carousel-item relative float-left w-full h-screen bg-no-repeat bg-cover bg-center embed-responsive embed-responsive-21by9 overflow-hidden">
            <video class="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0" playsinline autoPlay muted loop>
              <source class="" src={enero} type="video/mp4" />
            </video>
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" >
              <div class="flex justify-center items-center h-full">
            
              </div>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full h-screen bg-no-repeat bg-cover bg-center">
            <video class="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0" playsinline autoPlay muted loop>
              <source class="" src={enero} type="video/mp4" />
            </video>
            
          </div>
        </div>
        
      </div>




    </div>
  )
}

