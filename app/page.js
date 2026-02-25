import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <section className="py-16 bg-[#E8CF8E]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Classes Offered
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative h-56">
                <Image
                  src="/placeholder.jpg"
                  alt="Beginner Class"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#8B002E] text-white text-center py-3 font-semibold text-lg">
                Beginner
              </div>
              <div className="p-6 text-gray-700 text-center">
                Introductory classes focused on fundamentals, technique, and building strong basics.
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative h-56">
                <Image
                  src="/placeholder.jpg"
                  alt="Advanced Class"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#8B002E] text-white text-center py-3 font-semibold text-lg">
                Advanced
              </div>
              <div className="p-6 text-gray-700 text-center">
                High-level training designed for experienced students refining technique and performance.
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative h-56">
                <Image
                  src="/placeholder.jpg"
                  alt="Intermediate Class"
                  fill
                  className="object-cover" as
                />
              </div>
              <div className="bg-[#8B002E] text-white text-center py-3 font-semibold text-lg">
                Intermediate
              </div>
              <div className="p-6 text-gray-700 text-center">
                Classes bridging foundational skills and advanced techniques.
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link
              href="/classes"
              className="inline-block bg-[#8B002E] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-red-900 transition"
            >
              Enroll Now
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}