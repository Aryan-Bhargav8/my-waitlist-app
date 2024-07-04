import { WaitlistForm } from '../components/WaitlistForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative px-4 bg-cover">


      {/* Background Image */}
      <img src="/assets/images/backgroundimage.jpg" alt="Background Image" className="w-full h-full object-cover absolute inset-0 z-0"/>
      
      
      {/* Hero Section with Glass Morphism Background */}
      
      <div className="absolute top-0 left-0 m-4 text-5xl font-bold italic text-black">
        Lexicon
      </div>
      <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg border border-white border-opacity-20 ...">
      <div className="flex flex-col space-y-8 pb-16 px-8 md:flex-row md:space-x-16 lg:space-x-32 relative z-10 glass-morphism">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-9xl font-bold text-black">Tinder for Vocabulary</h1>
          <p className="text-5xl text-black text-center md:text-left">
            Swipe, learn, and find words to boost your vocabulary and impress!
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2">
          <svg className="w-48 h-48 fill-current text-black" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M90.5 10.644c-4.88 0-8.96 1.923-12.346 5.76l-29.4 29.4-29.4-29.4c-3.386-3.838-7.466-5.76-12.346-5.76-4.88 0-8.96 1.923-12.346 5.76L2.712 50.1c-3.386 3.838-3.386 9.614 0 13.45l29.4 29.4-29.4 29.4c-3.386 3.838-3.386 9.614 0 13.45l48 48c3.386 3.838 9.614 3.386 13.45 0l48-48 29.4-29.4 29.4 29.4c3.386 3.838 9.614 3.386 13.45 0l48-48c3.386-3.838 3.386-9.614 0-13.45l-29.4-29.4 29.4-29.4c3.386-3.838 3.386-9.614 0-13.45l-48-48zM100 100c22.089 0 40 17.911 40 40s-17.911 40-40 40-40-17.911-40-40 17.911-40 40-40z" />
          </svg>
        </div>
      </div>
      </div>
      {/* WaitlistForm Container */}
      {/* <div className="max-w-md w-full mx-auto p-8 m-6 bg-purple-500 rounded-lg shadow-lg relative z-10">
        <h1 className="text-2xl font-bold mb-4">Join The Lexicon Waitlist</h1>
        <WaitlistForm />
      </div>
    </div> */}
    {/* WaitlistForm Container */}
      <div className="max-w-md w-full mx-auto p-8 m-6 bg-purple-500 rounded-lg shadow-lg relative z-10">
        <h1 className="text-2xl font-bold mb-4 text-white">Join The Lexicon Waitlist</h1>
        <WaitlistForm />
      </div>
    </div>
  );
}