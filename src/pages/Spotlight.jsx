function Spotlight() {
  return (
    <div className="bg-[#020817] text-white min-h-screen overflow-hidden">

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,40,120,0.45)), url('/ape-bg.png')",
        }}
      >

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-blue-950/20 to-[#020817]"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl flex flex-col items-center text-center w-full">

          {/* Heading */}
          <h1 className="flex flex-col justify-center uppercase leading-none text-center">

            <span className="overflow-hidden">
              <span className="block text-5xl md:text-7xl font-medium text-gray-300">
                Welcome to
              </span>
            </span>

            <span className="overflow-hidden mt-2">
              <span className="block text-5xl md:text-[120px] font-extrabold text-blue-300/80 tracking-tight">
                Spotlight
              </span>
            </span>

          </h1>




          {/* Floating Buttons - Aligned to page */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">

           {/* Top Left */}
            <button className="absolute left-[8%] top-[30%] border border-pink-500 bg-blue-800 hover:bg-blue-700 transition px-8 py-6 rounded-2xl font-semibold text-sm xl:text-xl tracking-wide shadow-lg shadow-blue-500/30 z-15 pointer-events-auto">
            COMPLETE QUESTS
            </button>

          {/* Top Right */}
           <button className="absolute right-[8%] top-[30%] border border-pink-500 bg-blue-800 hover:bg-blue-700 transition px-8 py-6 rounded-2xl font-semibold text-sm xl:text-xl tracking-wide shadow-lg shadow-blue-500/30 z-15 pointer-events-auto">
            WIN AWESOME PRIZES
           </button>

          {/* Bottom Left */}
          <button className="absolute left-[8%] bottom-[25%] border border-pink-500 bg-blue-800 hover:bg-blue-700 transition px-8 py-6 rounded-2xl font-semibold text-sm xl:text-xl tracking-wide shadow-lg shadow-blue-500/30 z-15 pointer-events-auto">
           CLIMB THE LEADERBOARDS
           </button>

          {/* Bottom Right */}
          <button className="absolute right-[8%] bottom-[25%] border border-pink-500 bg-blue-800 hover:bg-blue-700 transition px-8 py-6 rounded-2xl font-semibold text-sm xl:text-xl tracking-wide shadow-lg shadow-blue-500/30 z-15 pointer-events-auto">
           BUILD CONNECTIONS
          </button>

        </div>


          {/* Leaderboard Images */}
          <div className="relative mt-16 flex items-center justify-center">

            {/* Community Leaderboard */}
            <img
              src="/community-leaderboard.png"
              alt="Community Leaderboard"
              className="w-[110px] md:w-[220px] rotate-[-8deg] rounded-[30px] border border-pink-400 shadow-[0_0_80px_rgba(59,130,246,0.35)] z-20"
            />

            {/* Individual Leaderboard */}
            <img
              src="/individual.png"
              alt="Individual Leaderboard"
              className="w-[110px] md:w-[220px] rotate-[8deg] rounded-[30px] border border-pink-400 shadow-[0_0_80px_rgba(59,130,246,0.35)] -ml-12 mt-28 z-10"
            />

          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 md:px-8 -mt-20 pb-20">

        <div className="max-w-6xl mx-auto bg-[#07152e]/80 backdrop-blur-xl border border-blue-900 rounded-[40px] p-10 shadow-2xl shadow-blue-950/30">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-bold text-blue-400">
                500K+
              </h2>

              <p className="text-gray-400 mt-3 text-lg">
                Active Users
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-400">
                120+
              </h2>

              <p className="text-gray-400 mt-3 text-lg">
                Featured Projects
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-400">
                $2M+
              </h2>

              <p className="text-gray-400 mt-3 text-lg">
                Rewards Distributed
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Spotlight;