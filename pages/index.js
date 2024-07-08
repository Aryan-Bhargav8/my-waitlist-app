import { WaitlistForm } from '../components/WaitlistForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative px-4 bg-cover pt-16 md:pt-24">

      {/* Background Image */}
      <img src="/assets/images/backgroundimage.jpg" alt="Background Image" className="w-full h-full object-cover absolute inset-0 z-0"/>

      {/* Hero Section with Glass Morphism Background */}
      <div className="absolute top-0 left-0 m-4 text-2xl md:text-5xl font-bold italic text-yellow-300 z-10">
        Lexicon
      </div>
      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg border border-white border-opacity-20 p-4 md:p-8 mx-4 md:mx-8 lg:mx-16 my-8 z-10">
        <div className="flex flex-col space-y-8 md:space-y-0 pb-16 px-4 md:px-8 lg:px-16 md:flex-row md:space-x-8 lg:space-x-16 relative">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-yellow-400 text-center md:text-left">Tinder for Vocabulary</h1>
            <p className="text-lg md:text-2xl lg:text-5xl text-black text-center md:text-left">
              Swipe, learn, and find words to boost your vocabulary and impress!
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <svg className="w-24 h-24 md:w-48 md:h-48 fill-current text-black" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M90.5 10.644c-4.88 0-8.96 1.923-12.346 5.76l-29.4 29.4-29.4-29.4c-3.386-3.838-7.466-5.76-12.346-5.76-4.88 0-8.96 1.923-12.346 5.76L2.712 50.1c-3.386 3.838-3.386 9.614 0 13.45l29.4 29.4-29.4 29.4c-3.386 3.838-3.386 9.614 0 13.45l48 48c3.386 3.838 9.614 3.386 13.45 0l48-48 29.4-29.4 29.4 29.4c3.386 3.838 9.614 3.386 13.45 0l48-48c3.386-3.838 3.386-9.614 0-13.45l-29.4-29.4 29.4-29.4c3.386-3.838 3.386-9.614 0-13.45l-48-48zM100 100c22.089 0 40 17.911 40 40s-17.911 40-40 40-40-17.911-40-40 17.911-40 40-40z" />
            </svg>
          </div>
        </div>
      </div>

      {/* WaitlistForm Container */}
      <div className="max-w-md w-full mx-auto p-4 md:p-8 my-6 bg-purple-500 rounded-lg shadow-lg relative z-10">
        <h1 className="text-xl md:text-2xl font-bold mb-4 text-white text-center">Join The Lexicon Waitlist</h1>
        <WaitlistForm />
      </div>
    </div>
  );
}
