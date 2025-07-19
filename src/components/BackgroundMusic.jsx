import React, { useRef, useState } from "react";

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    setMuted((prev) => !prev);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}>
      <audio
        ref={audioRef}
        src="/background.mp3"
        autoPlay
        loop
      />
      <button onClick={toggleMute} style={{ padding: "8px 16px", borderRadius: 4 }}>
        {muted ? "Unmute Music" : "Mute Music"}
      </button>
    </div>
  );
}

export default BackgroundMusic; 