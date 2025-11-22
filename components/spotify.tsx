import React from "react";

const Spotify = () => {
  return (
    <div>
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "30px", border: "none",background:"transparent" }}
        src="https://open.spotify.com/embed/track/0YRpv07J0y7J73X87efpia?utm_source=generator&theme=0"
        width="90%"
        height="102"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
