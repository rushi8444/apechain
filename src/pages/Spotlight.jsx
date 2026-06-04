function Spotlight() {
  return (
    <main className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Static Card */}
      <SeasonCard />

      <SpotHero />
      <RiseCards />
      <RoundTwo />
      <ReadMore />
      <Reviews />

      <Footer />
    </main>
  );
}

export default Apps;