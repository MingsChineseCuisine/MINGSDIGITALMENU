import { Utensils, Instagram, Facebook, Youtube, Star } from "lucide-react";
import { useLocation } from "wouter";
import { useWelcomeAudio } from "../hooks/useWelcomeAudio";
import { MediaPreloader } from "../components/media-preloader";
import { useState, useEffect, useCallback } from "react";

export default function Welcome() {
  const [, setLocation] = useLocation();
  const { hasPlayedAudio, audioError, isReady } = useWelcomeAudio();
  const [mediaReady, setMediaReady] = useState(false);

  // Social media click handlers
  const handleSocialClick = useCallback((url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      (document.activeElement as HTMLElement)?.blur();
    }
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative" style={{ backgroundColor: '#FFF5F2' }}>
      {/* Media preloader */}
      <MediaPreloader onComplete={() => setMediaReady(true)} />

      {/* Background image */}
      <div 
        className="absolute inset-0 z-10 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/background.png')`,
        }}
      />

      {/* Content container - fixed mobile-first design */}
      <div className="relative z-20 h-full w-full flex items-center justify-center p-4">
        {/* Fixed aspect ratio container that looks good on mobile and desktop */}
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl w-full max-w-sm mx-auto"
          style={{
            aspectRatio: '9/16', // Fixed mobile-like aspect ratio
            maxHeight: '90vh',
          }}
        >
          <div className="flex flex-col items-center justify-center h-full px-6 py-8 space-y-6">
            
            {/* Ming's Logo */}
            <div className="flex flex-col items-center w-full">
              <img 
                src="/images/logo.png" 
                alt="Ming's Chinese Cuisine"
                className="w-44 h-auto"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick("https://instagram.com")}
                className="w-12 h-12 border-2 border-orange-500 rounded-lg flex items-center justify-center bg-white hover:bg-orange-50 transition-colors"
              >
                <Instagram className="w-5 h-5 text-orange-500" />
              </button>
              <button 
                onClick={() => handleSocialClick("https://facebook.com")}
                className="w-12 h-12 border-2 border-orange-500 rounded-lg flex items-center justify-center bg-white hover:bg-orange-50 transition-colors"
              >
                <Facebook className="w-5 h-5 text-orange-500" />
              </button>
              <button 
                onClick={() => handleSocialClick("https://youtube.com")}
                className="w-12 h-12 border-2 border-orange-500 rounded-lg flex items-center justify-center bg-white hover:bg-orange-50 transition-colors"
              >
                <Youtube className="w-5 h-5 text-orange-500" />
              </button>
            </div>

            {/* Explore Menu Button */}
            <button
              onClick={() => setLocation("/menu")}
              className="bg-white text-orange-500 font-semibold px-8 py-3 border-2 border-orange-500 rounded-full hover:bg-orange-50 transition-colors flex items-center space-x-2 text-sm"
            >
              <Utensils className="w-5 h-5" />
              <span>EXPLORE OUR MENU</span>
            </button>

            {/* Rating Section */}
            <div className="text-center">
              <p className="text-orange-500 font-medium mb-2 text-sm">Click to Rate us on Google</p>
              <div 
                className="flex justify-center space-x-1 cursor-pointer"
                onClick={() => window.open("https://www.google.com/search?sca_esv=bbe24cb31649d4ed&sxsrf=AE3TifNB0rxkCBcfMPZUq4Cl7B1cbNiwbg:1755185663524&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5hjw2IezP_Bw3k_5rJeegZLUiDytyxIWp-4-ROn9bNJsQIZRow8EYRYRoeYE65h-v896ClcNr_EJ9DJAT8e-F7HGNkWdkTzWU8S7X92urJefrzAzQ%3D%3D&q=Ming%27s+Chinese+Cuisine+Reviews&sa=X&ved=2ahUKEwie2PSP0IqPAxUBRmcHHfPGIx0Q0bkNegQIPRAD&biw=1470&bih=832&dpr=2", "_blank")}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 text-orange-500 fill-orange-500"
                  />
                ))}
              </div>
            </div>

            {/* Address Section */}
            <div className="text-center">
              <div className="bg-white px-4 py-2 rounded-full border-2 border-gray-600 mb-3">
                <span className="text-gray-800 font-semibold text-sm">ADDRESS</span>
              </div>
              <div className="text-gray-700 text-xs leading-tight">
                <p>SHOP NO 2&3, GANGA GODAVARI</p>
                <p>APARTMENT, KATEMANIVALI NAKA,</p>
                <p>PRABHURAM NAGAR, KALYAN EAST,</p>
                <p>KALYAN EAST, THANE, KALYAN,</p>
                <p>MAHARASHTRA, 421306</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <div className="bg-white px-4 py-2 rounded-full border-2 border-gray-600 mb-3">
                <span className="text-gray-800 font-semibold text-sm">CONTACT</span>
              </div>
              <div className="text-gray-700 text-xs space-y-1">
                <p>info@mingschinesecuisine.in</p>
                <p>+91 75069 69333</p>
                <p className="text-orange-500">www.mingschinesecuisine.in</p>
              </div>
            </div>

            {/* Developer Credit */}
            <div className="text-center text-xs text-gray-600">
              <p>Developed By</p>
              <p className="text-orange-500 font-medium">AIRAVATA TECHNOLOGIES</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}