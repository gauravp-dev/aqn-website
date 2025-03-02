export default function AboutPage() {
  return (
    <div
      id="aboutUs"
      className="flex flex-col justify-center bg-white min-h-screen"
    >
      {/* Hero Section */}
      <div className="bg-white rounded-[40px] overflow-hidden mx-4 sm:mx-12 my-6 sm:my-8 lg:mx-48">
        <div className="grid md:grid-cols-1 items-center h-[60vh] border-b-2">
          <div className="bg-cyan-800 p-4 sm:p-6 md:p-12 flex flex-col justify-center items-center text-center h-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About us
            </h1>
            <p className="text-cyan-50 text-lg sm:text-xl leading-relaxed max-w-3xl">
              At AquaNova, our team of senior marine engineers and technology
              leaders is devoted to tackling the unique & unmitigated challenges
              of the maritime industry. With our deep understanding of maritime
              demands, we leverage technology to craft transformative solutions
              for maritime operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
