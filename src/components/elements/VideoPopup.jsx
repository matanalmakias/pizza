import React, { useState } from "react";
import ModalVideo from "react-modal-video";
export default function VideoPopup() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div class="video-block-wrapper" onClick={() => setOpen(true)}>
        <i class="fas fa-play"></i>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="vfhzo499OeA"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
