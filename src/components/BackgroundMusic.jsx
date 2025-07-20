import React, { useState, forwardRef } from "react";

const BackgroundMusic = forwardRef((props, ref) => {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    setMuted((prev) => !prev);
    if (ref && ref.current) {
      ref.current.muted = !ref.current.muted;
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}>
      <audio
        ref={ref}
        src="/background.mp3"
        loop
      />
      <button onClick={toggleMute} style={{ padding: "8px 16px", borderRadius: 4 }}>
        {muted ? "Unmute Music" : "Mute Music"}
      </button>
    </div>
  );
});

export default BackgroundMusic; 