import { Utensils, Instagram, Facebook, Youtube, Star } from "lucide-react";
import { useLocation } from "wouter";
import { useWelcomeAudio } from "../hooks/useWelcomeAudio";
import { MediaPreloader } from "../components/media-preloader";
import { useState, useEffect } from "react";

export default function Welcome() {
  const [, setLocation] = useLocation();
  const { hasPlayedAudio, audioError, isReady } = useWelcomeAudio();
  const [mediaReady, setMediaReady] = useState(false);
  const [buttonsLoaded, setButtonsLoaded] = useState(false);
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });
  const [buttonScale, setButtonScale] = useState(1);

  // Trigger button loading animation with dynamic scaling based on video size
  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonsLoaded(true);
    }, 50); // Very small delay to allow CSS transition to work

    // Function to calculate button scale based on video size
    const calculateButtonScale = () => {
      const videoElement = document.querySelector('video');
      if (videoElement) {
        const rect = videoElement.getBoundingClientRect();
        const baseWidth = 428; // iPhone 14 Pro Max width as reference
        const scale = Math.max(0.6, Math.min(1.4, rect.width / baseWidth));
        setButtonScale(scale);
        setVideoSize({ width: rect.width, height: rect.height });
      }
    };

    // Calculate initial scale after a short delay to ensure video is loaded
    setTimeout(calculateButtonScale, 500);

    // Recalculate on resize
    const handleResize = () => {
      calculateButtonScale();
    };

    window.addEventListener('resize', handleResize);
    
    // Also listen for video metadata loaded to get accurate dimensions
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', calculateButtonScale);
      videoElement.addEventListener('canplay', calculateButtonScale);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      if (videoElement) {
        videoElement.removeEventListener('loadedmetadata', calculateButtonScale);
        videoElement.removeEventListener('canplay', calculateButtonScale);
      }
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-white">
      {/* Media preloader */}
      <MediaPreloader onComplete={() => setMediaReady(true)} />

      {/* Video background with multiple sources for deployment compatibility */}
      <video
        className="absolute inset-0 z-10 w-full h-full"
        style={{
          objectFit: "contain", // Shows complete video with letterboxing if needed
        }}
        autoPlay
        muted
        playsInline
        loop={false}
        preload="auto"
        onEnded={(e) => e.currentTarget.pause()}
        onError={(e) => {
          console.warn("Video source failed, trying next fallback");
          // This will be handled by the browser automatically through source tags
        }}
        onLoadStart={() => console.log("Video loading started")}
        onCanPlay={() => console.log("Video can play")}
        onLoadedData={() => console.log("Video data loaded")}
      >
        {/* Multiple video sources for different deployment environments */}
        <source src="/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
        <source src="./vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
        <source
          src="/assets/vedio/Black Elegant Wedding Menu.mp4"
          type="video/mp4"
        />
        <source
          src="./assets/vedio/Black Elegant Wedding Menu.mp4"
          type="video/mp4"
        />
        {/* Fallback content for when video fails to load */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900 via-black to-orange-900 flex items-center justify-center">
          <div className="text-white text-center">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: '"Cinzel Decorative", serif' }}
            >
              Ming's Chinese Cuisine
            </h2>
            <p className="text-lg sm:text-xl opacity-80">
              Loading Experience...
            </p>
          </div>
        </div>
      </video>

      {/* Content container */}
      <div className="relative z-20 h-full w-full flex items-center justify-center px-4">
        <div 
          className="flex flex-col items-center justify-center h-full transition-all duration-300"
          style={{ 
            gap: `${16 * buttonScale}px`,
            transform: `translateY(-${Math.min(80, 80 * buttonScale)}px)`
          }}
        >
          {/* Social Media Buttons */}
          <div
            className={`flex transition-opacity duration-500 ${
              buttonsLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ 
              transitionDelay: "300ms",
              gap: `${12 * buttonScale}px`
            }}
          >
            <button
              onClick={() => window.open("https://instagram.com", "_blank")}
              className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center"
              style={{ 
                backgroundColor: "#FF6B35",
                width: `${48 * buttonScale}px`,
                height: `${48 * buttonScale}px`,
                borderRadius: `${12 * buttonScale}px`
              }}
            >
              <Instagram style={{ width: `${20 * buttonScale}px`, height: `${20 * buttonScale}px` }} />
            </button>
            <button
              onClick={() => window.open("https://facebook.com", "_blank")}
              className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center"
              style={{ 
                backgroundColor: "#FF6B35",
                width: `${48 * buttonScale}px`,
                height: `${48 * buttonScale}px`,
                borderRadius: `${12 * buttonScale}px`
              }}
            >
              <Facebook style={{ width: `${20 * buttonScale}px`, height: `${20 * buttonScale}px` }} />
            </button>
            <button
              onClick={() => window.open("https://youtube.com", "_blank")}
              className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center"
              style={{ 
                backgroundColor: "#FF6B35",
                width: `${48 * buttonScale}px`,
                height: `${48 * buttonScale}px`,
                borderRadius: `${24 * buttonScale}px` // Fully rounded
              }}
            >
              <Youtube style={{ width: `${20 * buttonScale}px`, height: `${20 * buttonScale}px` }} />
            </button>
          </div>

          {/* Explore Menu Button */}
          <div
            className={`transition-opacity duration-500 ${
              buttonsLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <button
              onClick={() => setLocation("/menu")}
              className="bg-white text-orange-500 font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                borderColor: "#FF6B35",
                color: "#FF6B35",
                letterSpacing: "0.5px",
                border: `${3 * buttonScale}px solid #FF6B35`,
                borderRadius: `${22 * buttonScale}px`,
                padding: `${12 * buttonScale}px ${24 * buttonScale}px`,
                gap: `${8 * buttonScale}px`,
                maxWidth: `${260 * buttonScale}px`,
                height: `${44 * buttonScale}px`,
                fontSize: `${16 * buttonScale}px`
              }}
            >
              <Utensils style={{ width: `${16 * buttonScale}px`, height: `${16 * buttonScale}px`, color: "#FF6B35" }} />
              <span className="font-bold">EXPLORE OUR MENU</span>
            </button>
          </div>

          {/* Google Review Section */}
          <div
            className={`transition-opacity duration-500 flex flex-col items-center ${
              buttonsLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ 
              transitionDelay: "900ms",
              gap: `${8 * buttonScale}px`
            }}
          >
            <div
              onClick={() =>
                window.open(
                  "https://www.google.com/search?sca_esv=bbe24cb31649d4ed&sxsrf=AE3TifNB0rxkCBcfMPZUq4Cl7B1cbNiwbg:1755185663524&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5hjw2IezP_Bw3k_5rJeegZLUiDytyxIWp-4-ROn9bNJsQIZRow8EYRYRoeYE65h-v896ClcNr_EJ9DJAT8e-F7HGNkWdkTzWU8S7X92urJefrzAzQ%3D%3D&q=Ming%27s+Chinese+Cuisine+Reviews&sa=X&ved=2ahUKEwie2PSP0IqPAxUBRmcHHfPGIx0Q0bkNegQIPRAD&biw=1470&bih=832&dpr=2",
                  "_blank",
                )
              }
              className="cursor-pointer text-center"
            >
              <p
                className="text-orange-500 font-medium tracking-wide"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  color: "#FF6B35",
                  fontSize: `${16 * buttonScale}px`,
                  marginBottom: `${8 * buttonScale}px`
                }}
              >
                Click to Rate us on Google
              </p>
              <div 
                className="flex justify-center"
                style={{ gap: `${4 * buttonScale}px` }}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="hover:scale-110 transition-transform duration-200"
                    style={{ 
                      color: "#FF6B35", 
                      fill: "#FF6B35",
                      width: `${24 * buttonScale}px`,
                      height: `${24 * buttonScale}px`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations - keeping minimal for fade-in only */}
      <style>{`
        /* Responsive adjustments for very small screens */
        @media (max-width: 320px) {
          .space-y-4 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 0.75rem;
          }
        }
        
        /* Ensure proper scaling on larger mobile devices */
        @media (min-width: 640px) and (max-width: 1024px) {
          .space-y-6 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
