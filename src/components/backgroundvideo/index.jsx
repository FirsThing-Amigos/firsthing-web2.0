// components/BackgroundVideo.js

const BackgroundVideo = ({ src }) => {
    return (
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={src} type="video/mp4" />
          {/* Add additional source elements for other formats if needed */}
          Your browser does not support the video tag.
        </video>
        <style jsx>{`
          .background-video {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }
          video {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
    );
  };
  
  export default BackgroundVideo;
  