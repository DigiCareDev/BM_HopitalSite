import React from 'react';

function Tagline() {
  return (
    <div className="h-[220px] bg-yellow-100 flex flex-col justify-center overflow-hidden">
      <marquee direction="left" className="text-4xl font-semibold text-red-700">
        🚧 This website is under development 🚧
      </marquee>
      <marquee direction="right" className="text-4xl font-semibold text-red-700 mt-4">
        🚧 This website is under development 🚧
      </marquee>
      <marquee direction="left" className="text-4xl font-semibold text-red-700 mt-4">
        🚧 This website is under development 🚧
      </marquee>
        <marquee direction="right" className="text-4xl font-semibold text-red-700 mt-4">
        🚧 This website is under development 🚧
      </marquee>
    </div>
  );
}

export default Tagline;
