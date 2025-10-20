import { Utensils, Instagram, Facebook, Youtube, Star } from "lucide-react";
import { useLocation } from "wouter";
import { useWelcomeAudio } from "../hooks/useWelcomeAudio";
import { MediaPreloader } from "../components/media-preloader";
import { useState, useEffect, useCallback } from "react";
import backgroundImage from "/background.png";

export default function Welcome() {
  const [, setLocation] = useLocation();
  const { hasPlayedAudio, audioError, isReady } = useWelcomeAudio();
  const [mediaReady, setMediaReady] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });
  const [scaleFactor, setScaleFactor] = useState(1);

  // Detect screen size and calculate scale factor
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenDimensions({ width, height });

      // Calculate scale factor based on screen size for better screen utilization
      // Base dimensions: 384px width, optimized for mobile screens

      // Scale up for better screen utilization while maintaining proportions
      if (height < 600) {
        setScaleFactor(0.85);
      } else if (height < 700) {
        setScaleFactor(1.0);
      } else if (height < 800) {
        setScaleFactor(1.1);
      } else if (height < 900) {
        setScaleFactor(1.2);
      } else {
        setScaleFactor(1.3);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Social media click handlers
  const handleSocialClick = useCallback((url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      (document.activeElement as HTMLElement)?.blur();
    }
  }, []);

  // Calculate responsive container height - use more screen space
  const containerHeight = Math.min(screenDimensions.height * 0.98, screenDimensions.height - 20);

  return (
    <div className="h-screen w-screen overflow-hidden relative flex items-center justify-center" style={{ backgroundColor: '#FFF5F2' }}>
      {/* Media preloader */}
      <MediaPreloader onComplete={() => setMediaReady(true)} />

      {/* Responsive background container */}
      <div
        className="relative bg-cover bg-center bg-no-repeat md:w-full md:mx-auto w-screen h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          ...(screenDimensions.width > 768 ? {
            maxWidth: `${Math.min(420 * scaleFactor, screenDimensions.width * 0.95)}px`,
            height: `${containerHeight}px`,
            aspectRatio: '9/16',
          } : {
            width: '100vw',
            height: '100vh',
          })
        }}
      >
        {/* Content directly on background - dynamically scaled */}
        <div
          className="flex flex-col items-center justify-center h-full px-4"
          style={{
            padding: `${32 * scaleFactor}px ${16 * scaleFactor}px`,
            gap: `${24 * scaleFactor}px`,
          }}
        >

          {/* Ming's Logo */}
          <div className="flex flex-col items-center w-full">
            <img
              src="/images/logo.png"
              alt="Ming's Chinese Cuisine"
              style={{ width: `${240 * scaleFactor}px`, height: 'auto' }}
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex" style={{ gap: `${16 * scaleFactor}px` }}>
            <button
              {/* onClick={() => handleSocialClick("https://www.instagram.com/mings_chinese_cuisine_kalyan_?igsh=MXVqcGk4ZHhvcjM5Yw==")} */}
              onClick={() => handleSocialClick("https://www.instagram.com/mingschinesecuisine.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==")}
              className="border-2 border-orange-500 rounded-lg flex items-center justify-center bg-white hover:bg-orange-50 transition-colors"
              style={{
                width: `${48 * scaleFactor}px`,
                height: `${48 * scaleFactor}px`,
              }}
            >
              <Instagram style={{ width: `${20 * scaleFactor}px`, height: `${20 * scaleFactor}px` }} className="text-orange-500" />
            </button>
            <button
              onClick={() => handleSocialClick("https://facebook.com")}
              className="border-2 border-orange-500 rounded-lg flex items-center justify-center bg-white hover:bg-orange-50 transition-colors"
              style={{
                width: `${48 * scaleFactor}px`,
                height: `${48 * scaleFactor}px`,
              }}
            >
              <Facebook style={{ width: `${20 * scaleFactor}px`, height: `${20 * scaleFactor}px` }} className="text-orange-500" />
            </button>
            <button
              onClick={() => handleSocialClick("https://youtube.com")}
              className="border-2 border-orange-500 rounded-lg flex items-center justify-center bg-white hover:bg-orange-50 transition-colors"
              style={{
                width: `${48 * scaleFactor}px`,
                height: `${48 * scaleFactor}px`,
              }}
            >
              <Youtube style={{ width: `${20 * scaleFactor}px`, height: `${20 * scaleFactor}px` }} className="text-orange-500" />
            </button>
          </div>

          {/* Explore Menu Button */}
          <button
            onClick={() => setLocation("/menu")}
            className="bg-white text-orange-500 font-semibold border-2 border-orange-500 rounded-full hover:bg-orange-50 transition-colors flex items-center"
            style={{
              padding: `${12 * scaleFactor}px ${32 * scaleFactor}px`,
              gap: `${8 * scaleFactor}px`,
              fontSize: `${14 * scaleFactor}px`,
            }}
          >
            <Utensils style={{ width: `${20 * scaleFactor}px`, height: `${20 * scaleFactor}px` }} />
            <span>EXPLORE OUR MENU</span>
          </button>

          {/* Rating Section */}
          <div className="text-center">
            <p
              className="text-orange-500 font-medium mb-2"
              style={{ fontSize: `${14 * scaleFactor}px`, marginBottom: `${8 * scaleFactor}px` }}
            >
              Click to Rate us on Google
            </p>
            <div
              className="flex justify-center cursor-pointer"
              style={{ gap: `${4 * scaleFactor}px` }}
              onClick={() => window.open("https://g.page/r/CePLzPaLyBLNEAI/review")}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="text-orange-500 fill-orange-500"
                  style={{ width: `${24 * scaleFactor}px`, height: `${24 * scaleFactor}px` }}
                />
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div className="text-center">
            <div
              className="border-2 border-gray-600 rounded-full inline-block"
              style={{
                padding: `${4 * scaleFactor}px ${16 * scaleFactor}px`,
                marginBottom: `${12 * scaleFactor}px`,
              }}
            >
              <span
                className="text-orange-500 font-semibold"
                style={{ fontSize: `${12 * scaleFactor}px` }}
              >
                ADDRESS
              </span>
            </div>
            <div
              className="text-gray-700 leading-tight"
              style={{ fontSize: `${11 * scaleFactor}px` }}
            >
              <p>SHOP NO 2&3, GANGA GODAVARI</p>
              <p>APARTMENT, KATEMANIVALI NAKA,</p>
              <p>PRABHURAM NAGAR, KALYAN EAST,</p>
              <p>KALYAN EAST, THANE, KALYAN,</p>
              <p>MAHARASHTRA, 421306</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <div
              className="border-2 border-gray-600 rounded-full inline-block"
              style={{
                padding: `${4 * scaleFactor}px ${16 * scaleFactor}px`,
                marginBottom: `${12 * scaleFactor}px`,
              }}
            >
              <span
                className="text-orange-500 font-semibold"
                style={{ fontSize: `${12 * scaleFactor}px` }}
              >
                CONTACT
              </span>
            </div>
            <div
              className="text-gray-700"
              style={{ fontSize: `${11 * scaleFactor}px`, gap: `${4 * scaleFactor}px` }}
            >
              <p>info@mingschinesecuisine.in</p>
              <p>+91 75069 69333</p>
              <p
                className="text-orange-500 cursor-pointer no-underline"
                onClick={() => window.open("http://www.mingschinesecuisine.in", "_blank")}
                style={{ textDecoration: 'none' }}
              >
                www.mingschinesecuisine.in
              </p>
            </div>
          </div>

          {/* Developer Credit */}
          <div
            className="text-center text-gray-600"
            style={{ fontSize: `${10 * scaleFactor}px` }}
          >
            <p>Developed By</p>
            <p
              className="text-orange-500 font-medium cursor-pointer no-underline"
              onClick={() => window.open("http://www.airavatatechnologies.com", "_blank")}
              style={{ textDecoration: 'none' }}
            >
              AIRAVATA TECHNOLOGIES
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
