// import { Utensils, Instagram, Facebook, Youtube, Star } from "lucide-react";
// import { useLocation } from "wouter";
// import FloatingParticles from "../components/floating-particles";
// import { useWelcomeAudio } from "../hooks/useWelcomeAudio";
// import { MediaPreloader } from "../components/media-preloader";
// import { useState } from "react";

// export default function Welcome() {
//   const [, setLocation] = useLocation();
//   const { hasPlayedAudio, audioError, isReady } = useWelcomeAudio();
//   const [mediaReady, setMediaReady] = useState(false);

//   return (
//     <div className="h-screen w-screen overflow-hidden relative bg-black">
//       {/* Media preloader */}
//       <MediaPreloader onComplete={() => setMediaReady(true)} />
      
//       {/* Animated background for empty spaces */}
//       <div className="absolute inset-0 z-0">
//         <FloatingParticles />
//       </div>

//       {/* Video background with multiple sources for deployment compatibility */}
//       <video
//         className="absolute inset-0 z-10 w-full h-full"
//         style={{
//           objectFit: "contain", // Shows complete video with letterboxing if needed
//         }}
//         autoPlay
//         muted
//         playsInline
//         loop={false}
//         preload="auto"
//         onEnded={(e) => e.currentTarget.pause()}
//         onError={(e) => {
//           console.warn('Video source failed, trying next fallback');
//           // This will be handled by the browser automatically through source tags
//         }}
//         onLoadStart={() => console.log('Video loading started')}
//         onCanPlay={() => console.log('Video can play')}
//         onLoadedData={() => console.log('Video data loaded')}
//       >
//         {/* Multiple video sources for different deployment environments */}
//         <source src="/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="./vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="/assets/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="./assets/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         {/* Fallback content for when video fails to load */}
//         <div className="absolute inset-0 bg-gradient-to-b from-orange-900 via-black to-orange-900 flex items-center justify-center">
//           <div className="text-white text-center">
//             <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: '"Cinzel Decorative", serif' }}>
//               Ming's Chinese Cuisine
//             </h2>
//             <p className="text-xl opacity-80">Loading Experience...</p>
//           </div>
//         </div>
//       </video>

//       {/* Content container */}
//       <div className="relative z-20 h-full w-full flex items-center justify-center">
//         <div className="flex flex-col items-center justify-center h-full space-y-6 mt-8">
//           {/* Social Media Buttons */}
//           <div className="flex space-x-4">
//             <button
//               onClick={() => window.open("https://instagram.com", "_blank")}
//               className="p-3 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Instagram className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => window.open("https://facebook.com", "_blank")}
//               className="p-3 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Facebook className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => window.open("https://youtube.com", "_blank")}
//               className="p-3 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Youtube className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Explore Menu Button */}
//           <div>
//             <button
//               onClick={() => setLocation("/menu")}
//               className="px-6 py-3 bg-black bg-opacity-50 text-white rounded-full text-sm font-light border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//               style={{ fontFamily: '"Cinzel Decorative", serif' }}
//             >
//               <span className="flex items-center justify-center">
//                 <Utensils className="inline-block mr-1.5 text-sm" />
//                 <span
//                   style={{
//                     fontFamily: '"Cinzel Decorative", serif',
//                     letterSpacing: "0.5px",
//                   }}
//                 >
//                   Explore Our Menu
//                 </span>
//               </span>
//             </button>
//           </div>

//           {/* 5 Star Review Button */}
//           <div>
//             <button
//               onClick={() => window.open("https://www.google.com/search?sca_esv=bbe24cb31649d4ed&sxsrf=AE3TifNB0rxkCBcfMPZUq4Cl7B1cbNiwbg:1755185663524&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5hjw2IezP_Bw3k_5rJeegZLUiDytyxIWp-4-ROn9bNJsQIZRow8EYRYRoeYE65h-v896ClcNr_EJ9DJAT8e-F7HGNkWdkTzWU8S7X92urJefrzAzQ%3D%3D&q=Ming%27s+Chinese+Cuisine+Reviews&sa=X&ved=2ahUKEwie2PSP0IqPAxUBRmcHHfPGIx0Q0bkNegQIPRAD&biw=1470&bih=832&dpr=2", "_blank")}
//               className="px-4 py-2 bg-black bg-opacity-50 text-white rounded-full text-sm font-light border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//               style={{ fontFamily: '"Cinzel Decorative", serif' }}
//             >
//               <span className="flex items-center justify-center space-x-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//                 ))}
//                 <span className="ml-2" style={{ fontFamily: '"Cinzel Decorative", serif', letterSpacing: "0.5px" }}>
//                   Review Us
//                 </span>
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { Utensils, Instagram, Facebook, Youtube, Star } from "lucide-react";
// import { useLocation } from "wouter";
// import FloatingParticles from "../components/floating-particles";
// import { useWelcomeAudio } from "../hooks/useWelcomeAudio";
// import { MediaPreloader } from "../components/media-preloader";
// import { useState } from "react";

// export default function Welcome() {
//   const [, setLocation] = useLocation();
//   const { hasPlayedAudio, audioError, isReady } = useWelcomeAudio();
//   const [mediaReady, setMediaReady] = useState(false);

//   return (
//     <div className="h-screen w-screen overflow-hidden relative bg-black">
//       {/* Media preloader */}
//       <MediaPreloader onComplete={() => setMediaReady(true)} />
      
//       {/* Animated background for empty spaces */}
//       <div className="absolute inset-0 z-0">
//         <FloatingParticles />
//       </div>

//       {/* Video background with multiple sources for deployment compatibility */}
//       <video
//         className="absolute inset-0 z-10 w-full h-full"
//         style={{
//           objectFit: "contain", // Shows complete video with letterboxing if needed
//         }}
//         autoPlay
//         muted
//         playsInline
//         loop={false}
//         preload="auto"
//         onEnded={(e) => e.currentTarget.pause()}
//         onError={(e) => {
//           console.warn('Video source failed, trying next fallback');
//           // This will be handled by the browser automatically through source tags
//         }}
//         onLoadStart={() => console.log('Video loading started')}
//         onCanPlay={() => console.log('Video can play')}
//         onLoadedData={() => console.log('Video data loaded')}
//       >
//         {/* Multiple video sources for different deployment environments */}
//         <source src="/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="./vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="/assets/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="./assets/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         {/* Fallback content for when video fails to load */}
//         <div className="absolute inset-0 bg-gradient-to-b from-orange-900 via-black to-orange-900 flex items-center justify-center">
//           <div className="text-white text-center">
//             <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: '"Cinzel Decorative", serif' }}>
//               Ming's Chinese Cuisine
//             </h2>
//             <p className="text-xl opacity-80">Loading Experience...</p>
//           </div>
//         </div>
//       </video>

//       {/* Content container */}
//       <div className="relative z-20 h-full w-full flex items-center justify-center">
//         <div className="flex flex-col items-center justify-center h-full space-y-6 mt-8">
//           {/* Social Media Buttons */}
//           <div className="flex space-x-4">
//             <button
//               onClick={() => window.open("https://instagram.com", "_blank")}
//               className="p-3 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Instagram className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => window.open("https://facebook.com", "_blank")}
//               className="p-3 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Facebook className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => window.open("https://youtube.com", "_blank")}
//               className="p-3 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Youtube className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Explore Menu Button */}
//           <div>
//             <button
//               onClick={() => setLocation("/menu")}
//               className="px-6 py-3 bg-black bg-opacity-50 text-white rounded-full text-sm font-light border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//               style={{ fontFamily: '"Cinzel Decorative", serif' }}
//             >
//               <span className="flex items-center justify-center">
//                 <Utensils className="inline-block mr-1.5 text-sm" />
//                 <span
//                   style={{
//                     fontFamily: '"Cinzel Decorative", serif',
//                     letterSpacing: "0.5px",
//                   }}
//                 >
//                   Explore Our Menu
//                 </span>
//               </span>
//             </button>
//           </div>

//           {/* 5 Star Review Button */}
//           <div>
//             <button
//               onClick={() => window.open("https://www.google.com/search?sca_esv=bbe24cb31649d4ed&sxsrf=AE3TifNB0rxkCBcfMPZUq4Cl7B1cbNiwbg:1755185663524&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5hjw2IezP_Bw3k_5rJeegZLUiDytyxIWp-4-ROn9bNJsQIZRow8EYRYRoeYE65h-v896ClcNr_EJ9DJAT8e-F7HGNkWdkTzWU8S7X92urJefrzAzQ%3D%3D&q=Ming%27s+Chinese+Cuisine+Reviews&sa=X&ved=2ahUKEwie2PSP0IqPAxUBRmcHHfPGIx0Q0bkNegQIPRAD&biw=1470&bih=832&dpr=2", "_blank")}
//               className="px-4 py-2 bg-black bg-opacity-50 text-white rounded-full text-sm font-light border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//               style={{ fontFamily: '"Cinzel Decorative", serif' }}
//             >
//               <div className="flex flex-col items-center justify-center space-y-1">
//                 <span style={{ fontFamily: '"Cinzel Decorative", serif', letterSpacing: "0.5px" }}>
//                   Review Us & Rate Us
//                 </span>
//                 <div className="flex space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//                   ))}
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { Utensils, Instagram, Facebook, Youtube, Star } from "lucide-react";
// import { useLocation } from "wouter";
// import FloatingParticles from "../components/floating-particles";
// import { useWelcomeAudio } from "../hooks/useWelcomeAudio";
// import { MediaPreloader } from "../components/media-preloader";
// import { useState } from "react";

// export default function Welcome() {
//   const [, setLocation] = useLocation();
//   const { hasPlayedAudio, audioError, isReady } = useWelcomeAudio();
//   const [mediaReady, setMediaReady] = useState(false);

//   return (
//     <div className="h-screen w-screen overflow-hidden relative bg-black">
//       {/* Media preloader */}
//       <MediaPreloader onComplete={() => setMediaReady(true)} />
      
//       {/* Animated background for empty spaces */}
//       <div className="absolute inset-0 z-0">
//         <FloatingParticles />
//       </div>

//       {/* Video background with multiple sources for deployment compatibility */}
//       <video
//         className="absolute inset-0 z-10 w-full h-full"
//         style={{
//           objectFit: "contain", // Shows complete video with letterboxing if needed
//         }}
//         autoPlay
//         muted
//         playsInline
//         loop={false}
//         preload="auto"
//         onEnded={(e) => e.currentTarget.pause()}
//         onError={(e) => {
//           console.warn('Video source failed, trying next fallback');
//           // This will be handled by the browser automatically through source tags
//         }}
//         onLoadStart={() => console.log('Video loading started')}
//         onCanPlay={() => console.log('Video can play')}
//         onLoadedData={() => console.log('Video data loaded')}
//       >
//         {/* Multiple video sources for different deployment environments */}
//         <source src="/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="./vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="/assets/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="./assets/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         {/* Fallback content for when video fails to load */}
//         <div className="absolute inset-0 bg-gradient-to-b from-orange-900 via-black to-orange-900 flex items-center justify-center">
//           <div className="text-white text-center">
//             <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: '"Cinzel Decorative", serif' }}>
//               Ming's Chinese Cuisine
//             </h2>
//             <p className="text-xl opacity-80">Loading Experience...</p>
//           </div>
//         </div>
//       </video>

//       {/* Content container */}
//       <div className="relative z-20 h-full w-full flex items-center justify-center">
//         <div className="flex flex-col items-center justify-center h-full space-y-6 mt-8">
//           {/* Social Media Buttons */}
//           <div className="flex space-x-4">
//             <button
//               onClick={() => window.open("https://instagram.com", "_blank")}
//               className="p-2 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Instagram className="w-4 h-4" />
//             </button>
//             <button
//               onClick={() => window.open("https://facebook.com", "_blank")}
//               className="p-2 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Facebook className="w-4 h-4" />
//             </button>
//             <button
//               onClick={() => window.open("https://youtube.com", "_blank")}
//               className="p-2 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Youtube className="w-4 h-4" />
//             </button>
//           </div>

//           {/* Explore Menu Button */}
//           <div>
//             <button
//               onClick={() => setLocation("/menu")}
//               className="px-4 py-2 bg-black bg-opacity-50 text-white rounded-full text-sm font-light border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//               style={{ fontFamily: '"Cinzel Decorative", serif' }}
//             >
//               <span className="flex items-center justify-center">
//                 <Utensils className="inline-block mr-1.5 text-xs" />
//                 <span
//                   style={{
//                     fontFamily: '"Cinzel Decorative", serif',
//                     letterSpacing: "0.5px",
//                   }}
//                 >
//                   Explore Our Menu
//                 </span>
//               </span>
//             </button>
//           </div>

//           {/* 5 Star Review Button */}
//           <div>
//             <button
//               onClick={() => window.open("https://www.google.com/search?sca_esv=bbe24cb31649d4ed&sxsrf=AE3TifNB0rxkCBcfMPZUq4Cl7B1cbNiwbg:1755185663524&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5hjw2IezP_Bw3k_5rJeegZLUiDytyxIWp-4-ROn9bNJsQIZRow8EYRYRoeYE65h-v896ClcNr_EJ9DJAT8e-F7HGNkWdkTzWU8S7X92urJefrzAzQ%3D%3D&q=Ming%27s+Chinese+Cuisine+Reviews&sa=X&ved=2ahUKEwie2PSP0IqPAxUBRmcHHfPGIx0Q0bkNegQIPRAD&biw=1470&bih=832&dpr=2", "_blank")}
//               className="px-3 py-1.5 bg-black bg-opacity-50 text-white rounded-full text-sm font-light border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//               style={{ fontFamily: '"Cinzel Decorative", serif' }}
//             >
//               <div className="flex flex-col items-center justify-center space-y-1">
//                 <span style={{ fontFamily: '"Cinzel Decorative", serif', letterSpacing: "0.5px" }}>
//                   Review Us & Rate Us
//                 </span>
//                 <div className="flex space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//                   ))}
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Utensils, Instagram, Facebook, Youtube, Star } from "lucide-react";
// import { useLocation } from "wouter";
// import FloatingParticles from "../components/floating-particles";
// import { useWelcomeAudio } from "../hooks/useWelcomeAudio";
// import { MediaPreloader } from "../components/media-preloader";
// import { useState, useEffect } from "react";

// export default function Welcome() {
//   const [, setLocation] = useLocation();
//   const { hasPlayedAudio, audioError, isReady } = useWelcomeAudio();
//   const [mediaReady, setMediaReady] = useState(false);
//   const [buttonsLoaded, setButtonsLoaded] = useState(false);

//   // Trigger button loading animation after a short delay
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setButtonsLoaded(true);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="h-screen w-screen overflow-hidden relative bg-black">
//       {/* Media preloader */}
//       <MediaPreloader onComplete={() => setMediaReady(true)} />
      
//       {/* Animated background for empty spaces */}
//       <div className="absolute inset-0 z-0">
//         <FloatingParticles />
//       </div>

//       {/* Video background with multiple sources for deployment compatibility */}
//       <video
//         className="absolute inset-0 z-10 w-full h-full"
//         style={{
//           objectFit: "contain", // Shows complete video with letterboxing if needed
//         }}
//         autoPlay
//         muted
//         playsInline
//         loop={false}
//         preload="auto"
//         onEnded={(e) => e.currentTarget.pause()}
//         onError={(e) => {
//           console.warn('Video source failed, trying next fallback');
//           // This will be handled by the browser automatically through source tags
//         }}
//         onLoadStart={() => console.log('Video loading started')}
//         onCanPlay={() => console.log('Video can play')}
//         onLoadedData={() => console.log('Video data loaded')}
//       >
//         {/* Multiple video sources for different deployment environments */}
//         <source src="/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="./vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="/assets/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         <source src="./assets/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
//         {/* Fallback content for when video fails to load */}
//         <div className="absolute inset-0 bg-gradient-to-b from-orange-900 via-black to-orange-900 flex items-center justify-center">
//           <div className="text-white text-center">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"Cinzel Decorative", serif' }}>
//               Ming's Chinese Cuisine
//             </h2>
//             <p className="text-lg sm:text-xl opacity-80">Loading Experience...</p>
//           </div>
//         </div>
//       </video>

//       {/* Content container */}
//       <div className="relative z-20 h-full w-full flex items-center justify-center px-4">
//         <div className="flex flex-col items-center justify-center h-full space-y-4 sm:space-y-6 mt-8">
//           {/* Social Media Buttons */}
//           <div 
//             className={`flex space-x-3 sm:space-x-4 md:space-x-5 transition-opacity duration-1000 ${
//               buttonsLoaded ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{ transitionDelay: '0ms' }}
//           >
//             <button
//               onClick={() => window.open("https://instagram.com", "_blank")}
//               className="p-2 sm:p-3 md:p-3.5 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             </button>
//             <button
//               onClick={() => window.open("https://facebook.com", "_blank")}
//               className="p-2 sm:p-3 md:p-3.5 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             </button>
//             <button
//               onClick={() => window.open("https://youtube.com", "_blank")}
//               className="p-2 sm:p-3 md:p-3.5 bg-black bg-opacity-50 text-white rounded-full border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//             >
//               <Youtube className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             </button>
//           </div>

//           {/* Explore Menu Button */}
//           <div 
//             className={`transition-opacity duration-1000 ${
//               buttonsLoaded ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{ transitionDelay: '0ms' }}
//           >
//             <button
//               onClick={() => setLocation("/menu")}
//               className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 bg-black bg-opacity-50 text-white rounded-full text-sm sm:text-base md:text-lg font-light border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//               style={{ fontFamily: '"Cinzel Decorative", serif' }}
//             >
//               <span className="flex items-center justify-center">
//                 <Utensils className="inline-block mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
//                 <span
//                   style={{
//                     fontFamily: '"Cinzel Decorative", serif',
//                     letterSpacing: "0.5px",
//                   }}
//                 >
//                   Explore Our Menu
//                 </span>
//               </span>
//             </button>
//           </div>

//           {/* 5 Star Review Button */}
//           <div 
//             className={`transition-opacity duration-1000 ${
//               buttonsLoaded ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{ transitionDelay: '0ms' }}
//           >
//             <button
//               onClick={() => window.open("https://www.google.com/search?sca_esv=bbe24cb31649d4ed&sxsrf=AE3TifNB0rxkCBcfMPZUq4Cl7B1cbNiwbg:1755185663524&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5hjw2IezP_Bw3k_5rJeegZLUiDytyxIWp-4-ROn9bNJsQIZRow8EYRYRoeYE65h-v896ClcNr_EJ9DJAT8e-F7HGNkWdkTzWU8S7X92urJefrzAzQ%3D%3D&q=Ming%27s+Chinese+Cuisine+Reviews&sa=X&ved=2ahUKEwie2PSP0IqPAxUBRmcHHfPGIx0Q0bkNegQIPRAD&biw=1470&bih=832&dpr=2", "_blank")}
//               className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-black bg-opacity-50 text-white rounded-full text-sm sm:text-base md:text-lg font-light border border-white hover:bg-gray-900 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 backdrop-blur-sm"
//               style={{ fontFamily: '"Cinzel Decorative", serif' }}
//             >
//               <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-1.5">
//                 <span style={{ 
//                   fontFamily: '"Cinzel Decorative", serif', 
//                   letterSpacing: "0.5px" 
//                 }}>
//                   Review Us & Rate Us
//                 </span>
//                 <div className="flex space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star 
//                       key={i} 
//                       className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400"
//                     />
//                   ))}
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS animations - keeping minimal for fade-in only */}
//       <style>{`
//         /* Responsive adjustments for very small screens */
//         @media (max-width: 320px) {
//           .space-y-4 > :not([hidden]) ~ :not([hidden]) {
//             margin-top: 0.75rem;
//           }
//         }
        
//         /* Ensure proper scaling on larger mobile devices */
//         @media (min-width: 640px) and (max-width: 1024px) {
//           .space-y-6 > :not([hidden]) ~ :not([hidden]) {
//             margin-top: 2rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

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

  // Trigger button loading animation with a tiny delay to allow CSS transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonsLoaded(true);
    }, 50); // Very small delay to allow CSS transition to work
    return () => clearTimeout(timer);
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
          console.warn('Video source failed, trying next fallback');
          // This will be handled by the browser automatically through source tags
        }}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onLoadedData={() => console.log('Video data loaded')}
      >
        {/* Multiple video sources for different deployment environments */}
        <source src="/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
        <source src="./vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
        <source src="/assets/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
        <source src="./assets/vedio/Black Elegant Wedding Menu.mp4" type="video/mp4" />
        {/* Fallback content for when video fails to load */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900 via-black to-orange-900 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"Cinzel Decorative", serif' }}>
              Ming's Chinese Cuisine
            </h2>
            <p className="text-lg sm:text-xl opacity-80">Loading Experience...</p>
          </div>
        </div>
      </video>

      {/* Content container */}
      <div className="relative z-20 h-full w-full flex items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center h-full space-y-3 -mt-32">
          {/* Social Media Buttons */}
          <div 
            className={`flex space-x-3 transition-opacity duration-500 ${
              buttonsLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <button
              onClick={() => window.open("https://instagram.com", "_blank")}
              className="w-8 h-8 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center"
              style={{ backgroundColor: '#FF6B35' }}
            >
              <Instagram className="w-4 h-4" />
            </button>
            <button
              onClick={() => window.open("https://facebook.com", "_blank")}
              className="w-8 h-8 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center"
              style={{ backgroundColor: '#FF6B35' }}
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              onClick={() => window.open("https://youtube.com", "_blank")}
              className="w-8 h-8 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center"
              style={{ backgroundColor: '#FF6B35' }}
            >
              <Youtube className="w-4 h-4" />
            </button>
          </div>

          {/* Explore Menu Button */}
          <div 
            className={`transition-opacity duration-500 ${
              buttonsLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <button
              onClick={() => setLocation("/menu")}
              className="px-4 py-1.5 bg-white text-orange-500 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 border-2 flex items-center justify-center space-x-1.5 max-w-[200px] h-8"
              style={{ 
                fontFamily: '"DM Sans", sans-serif',
                borderColor: '#FF6B35',
                color: '#FF6B35',
                letterSpacing: '0.5px'
              }}
            >
              <Utensils className="w-3 h-3" style={{ color: '#FF6B35' }} />
              <span className="font-bold text-xs">
                EXPLORE OUR MENU
              </span>
            </button>
          </div>

          {/* Google Review Section */}
          <div 
            className={`transition-opacity duration-500 flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-6 ${
              buttonsLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <div 
              onClick={() => window.open("https://www.google.com/search?sca_esv=bbe24cb31649d4ed&sxsrf=AE3TifNB0rxkCBcfMPZUq4Cl7B1cbNiwbg:1755185663524&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5hjw2IezP_Bw3k_5rJeegZLUiDytyxIWp-4-ROn9bNJsQIZRow8EYRYRoeYE65h-v896ClcNr_EJ9DJAT8e-F7HGNkWdkTzWU8S7X92urJefrzAzQ%3D%3D&q=Ming%27s+Chinese+Cuisine+Reviews&sa=X&ved=2ahUKEwie2PSP0IqPAxUBRmcHHfPGIx0Q0bkNegQIPRAD&biw=1470&bih=832&dpr=2", "_blank")}
              className="cursor-pointer text-center"
            >
              <p 
                className="text-orange-500 font-medium mb-1.5 tracking-wide text-sm"
                style={{ 
                  fontFamily: '"DM Sans", sans-serif',
                  color: '#FF6B35'
                }}
              >
                Click to Rate us on Google
              </p>
              <div className="flex space-x-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 hover:scale-110 transition-transform duration-200"
                    style={{ color: '#FF6B35', fill: '#FF6B35' }}
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