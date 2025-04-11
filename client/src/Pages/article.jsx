import React from 'react';

const SignLanguageArticle = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-10 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-sec mb-6">Learn Sign Language</h1>
        
        <p className="text-lg mb-4 leading-relaxed">
          Sign language is a visual means of communication that uses hand gestures, facial expressions, and body language. It enables people with hearing impairments to communicate effectively and has its own unique grammar and structure.
        </p>
        
        <h2 className="text-2xl font-semibold text-blue-500 mt-6">Basics of Sign Language</h2>
        <ul className="list-disc list-inside text-lg mt-3">
          <li>Use clear hand shapes and movements.</li>
          <li>Facial expressions play a key role in conveying emotions.</li>
          <li>Maintain eye contact while signing.</li>
        </ul>
        
        <div className="mt-6 text-center">
          <img 
            src="/art/1.webp" 
            alt="ASL Alphabet" 
            className="w-full max-w-md mx-auto rounded-lg shadow-md"
          />
          <p className="text-sm text-gray-500 mt-2">American Sign Language (ASL) alphabet</p>
        </div>
        
        <h2 className="text-2xl font-semibold text-blue-500 mt-6">Common Signs</h2>
        <p className="text-lg mb-4">
          Here are a few common signs to get started:
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <img src="/art/2.webp" alt="Hello sign" className="rounded-lg shadow-md" />
            <p className="text-lg font-medium mt-2">Hello</p>
          </div>
          <div className="text-center">
            <img src="/art/3.webp" alt="Thank you sign" className="rounded-lg shadow-md" />
            <p className="text-lg font-medium mt-2">Thank You</p>
          </div>
        </div>
        
        <p className="text-lg mt-6">
          Learning sign language opens up new ways to communicate and fosters inclusivity. Keep practicing, and soon you’ll be able to hold conversations with ease!
        </p>
      </div>
    </div>
  );
};

export default SignLanguageArticle;
