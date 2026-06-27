import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto p-2 bg-white">

      {/* Top Section */}
      <div className="grid grid-cols-12 gap-4">

        {/* Pharmacy Card */}
        <div className="col-span-12 lg:col-span-3 bg-[#dfe8f3] rounded-2xl overflow-hidden h-[280px] relative p-6">

          <div>
            <h2 className="text-4xl font-bold text-black">
              Pharmacy
            </h2>

            <p className="text-lg mt-2 text-black">
              Upload prescription and
              <br />
              we will create your order!
            </p>
          </div>

          <button className="absolute bottom-5 left-6 bg-[#01479d] text-white px-8 py-3 rounded-xl text-xl font-semibold">
            Order Now
          </button>

          <Image
            src="/images/pharmacy.png"
            alt="pharmacy"
            width={150}
            height={150}
            className="absolute bottom-0 right-0"
          />
        </div>

        {/* Main Banner */}
        <div className="col-span-12 lg:col-span-9 rounded-2xl overflow-hidden relative h-[280px] bg-gradient-to-r from-[#2d89ef] to-[#17b4f4]">

          <div className="absolute top-6 left-10 text-white">
            <h1 className="text-6xl font-bold leading-tight">
              Online Doctor
              <br />
              Consultation
            </h1>
          </div>

          <Image
            src="/images/doctor-mobile.png"
            alt="doctor"
            width={260}
            height={260}
            className="absolute bottom-0 left-10"
          />

          <div className="absolute top-24 right-12 text-center">
            <h2 className="text-yellow-300 text-6xl font-extrabold">
              DOCTOR JUST A
              <br />
              CALL AWAY!
            </h2>

            <button className="mt-8 bg-[#003d91] text-white px-20 py-4 rounded-2xl text-4xl font-bold">
              BOOK NOW
            </button>

            <p className="text-white text-3xl mt-5">
              📞 0317-1719451
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-12 gap-4 mt-4">

        {/* Prescription */}
        <div className="col-span-12 md:col-span-4 bg-[#f7e7d3] rounded-2xl h-[180px] relative p-6">

          <h3 className="text-4xl font-bold">
            Have a prescription?
          </h3>

          <p className="text-lg mt-2">
            Upload prescription and
            <br />
            we will create your order!
          </p>

          <button className="absolute bottom-4 left-5 bg-[#f39c33] text-white px-8 py-3 rounded-xl text-2xl font-semibold">
            Order Now
          </button>

          <Image
            src="/images/prescription.png"
            alt=""
            width={150}
            height={150}
            className="absolute right-0 bottom-0"
          />
        </div>

        {/* Consultation */}
        <div className="col-span-12 md:col-span-4 bg-[#dce9e8] rounded-2xl h-[180px] relative p-6">

          <p className="text-lg">Speak to Specialists</p>

          <h3 className="text-4xl font-bold">
            Doctor Consultation
          </h3>

          <button className="absolute bottom-4 left-5 bg-[#31a8a2] text-white px-8 py-3 rounded-xl text-2xl font-semibold">
            Book Now
          </button>

          <Image
            src="/images/video-call.png"
            alt=""
            width={150}
            height={150}
            className="absolute right-0 bottom-0"
          />
        </div>

        {/* Lab Tests */}
        <div className="col-span-12 md:col-span-4 bg-[#f3dddd] rounded-2xl h-[180px] relative p-6">

          <p className="text-lg">Lab at home</p>

          <h3 className="text-4xl font-bold">
            Lab Tests & Checkups
          </h3>

          <button className="absolute bottom-4 left-5 bg-[#01479d] text-white px-8 py-3 rounded-xl text-2xl font-semibold">
            Book Now
          </button>

          <Image
            src="/images/lab-test.png"
            alt=""
            width={160}
            height={160}
            className="absolute right-0 bottom-0"
          />
        </div>

      </div>

    </main>
  );
}