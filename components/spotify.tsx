import React from "react";

const Spotify = () => {
  return (
    <div className="mt-6 mb-20">
      <div>
        <p className="font-inter text-lg font-semibold text-black dark:text-white mb-8">
          Songs
        </p>
      </div>

      <div>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/0YRpv07J0y7J73X87efpia?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
         
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Spotify;
