"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
      const clients = [
    { category: "Pottery", title: "Vases Family", image: "/superman.png" },
    { category: "Oil Painting", title: "Camel Portrait", image: "/superman.png" },
    { category: "Abstract Painting", title: "Euforia", image: "/superman.png" },
    { category: "Object Design", title: "Classic Watch", image: "/superman.png" },
    { category: "Sculpture", title: "White Angel", image: "/superman.png" },
  ];
   const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((data) => setHero(data));
  }, []);
  const videos = Array(6).fill({
    title: "Understanding Your Birth Chart",
    views: "25K",
    duration: "15:32",
  });
  const handleClientClick = (client: { category?: string; title: any; image?: string; }) => {
    router.push("/hero");
  };

  if (!mounted) return null;
  return (
    <main className="bg-gradient-to-br from-orange-100 dark:from-grey-900 dark:to-black  to-purple-100 min-h-screen p-6 transition">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
            ⭐️ Certified Vedic Astrologer
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Unlock Your <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Cosmic</span> Destiny
          </h1>

          <p className="text-gray-700 mt-4">
            Discover the ancient wisdom of Vedic astrology through personalized
            readings, cosmic guidance, and spiritual insights that illuminate
            your life’s journey.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
              Book Now
            </button>
            <button className="border border-gray-700 px-6 py-2 rounded-md hover:bg-gray-100">
              Call Now
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold">1B+</h3>
              <p className="text-gray-600 text-sm">Followers social media</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">800k</h3>
              <p className="text-gray-600 text-sm">Registration booked</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">25y</h3>
              <p className="text-gray-600 text-sm">Year of experience</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
      <div className="relative flex items-center justify-center h-80 w-80">
        {/* Circle border */}
        <div className="absolute inset-0 rounded-full border border-gray-400"></div>

        {/* Sun icon (top center) */}
        <button className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        bg-white rounded-full p-2 shadow"  onClick={() => setTheme("light")}>
          <Sun className="h-6 w-6 text-yellow-500" />
        </button>

        {/* Moon icon (bottom center) */}
        <button className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                        bg-white rounded-full p-2 shadow" onClick={() => setTheme("dark")}>
          <Moon className="h-6 w-6 text-blue-500" />
        </button>

        <Image
          src="/superman.png" // image in /public
          alt=""
          width={300}
          height={300}
          className="rounded-full shadow-lg"
          priority
        />
      </div>
    </div>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">🔮 Birth Chart Analysis</h3>
          <p className="text-gray-600 mt-2">
            Complete personality analysis and life path guidance through your cosmic blueprint.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">💎 Gemstone Therapy</h3>
          <p className="text-gray-600 mt-2">
            Personalized gemstone recommendations to enhance positive energies and well-being.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">🏠 Vastu Consultation</h3>
          <p className="text-gray-600 mt-2">
            Harmonize your living spaces with ancient principles for prosperity and peace.
          </p>
        </div>
      </section>

      
      <section className="text-center mt-20 bg-white w-full">
       <span className="px-3 py-1 mt-10 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full inline-block">
  ⭐️ Master Rajesh Sharma – Vedic Astrologer & Spiritual Guide
</span>

        <h2 className="text-3xl md:text-4xl font-bold mt-5">
          Meet Your <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Cosmic Guide</span>
        </h2>

        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          With over 15 years of experience in Vedic Astrology, I have dedicated my life
          to helping individuals discover their true potential through the wisdom of the stars.
        </p>
        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">2000+</h3>
            <p className="text-gray-600">Happy Clients Guided</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">4.9⭐️</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">25+</h3>
            <p className="text-gray-600">Countries Served</p>
          </div>
        </div>
      </section>
      // next section
         <section className="bg-gradient-to-br from-orange-100 via-yellow-100 to-blue-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Small Tag */}
        <div className="text-center mb-3">
          <span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            Astrological Services
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Comprehensive <span className="text-blue-600">Cosmic Services</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Discover a wide range of astrological services designed to illuminate your path,
          enhance your well-being, and guide you towards your highest potential.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Birth Chart Reading",
              desc: "Complete natal chart analysis revealing your personality, strengths, and life path",
              color: "from-yellow-400 to-orange-400",
            },
            {
              title: "Love & Relationships",
              desc: "Compatibility analysis and guidance for romantic relationships and marriage",
              color: "from-pink-400 to-red-300",
            },
            {
              title: "Career Guidance",
              desc: "Professional path analysis and timing for career changes and opportunities",
              color: "from-blue-400 to-indigo-400",
            },
            {
              title: "Vedic Astrology",
              desc: "Traditional Indian astrology with precise calculations and remedial measures",
              color: "from-purple-300 to-pink-300",
            },
            {
              title: "Vastu Consultation",
              desc: "Harmonizing your living and working spaces with cosmic energies",
              color: "from-green-400 to-emerald-400",
            },
            {
              title: "Gemstone Therapy",
              desc: "Personalized gemstone recommendations for enhancing positive energies",
              color: "from-purple-400 to-indigo-300",
            },
            {
              title: "Muhurat Selection",
              desc: "Auspicious timing selection for important life events and ceremonies",
              color: "from-teal-400 to-cyan-400",
            },
            {
              title: "Spiritual Guidance",
              desc: "Meditation practices and spiritual development based on your cosmic blueprint",
              color: "from-yellow-400 to-amber-400",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition"
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-tr ${service.color}`}
              ></div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
     <div>
      <section className="bg-[#f5f6ff] py-16 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <button className="bg-yellow-200 px-4 py-1 rounded-full text-sm mb-4">
          🎥 Video Content
        </button>

        <h2 className="text-3xl font-semibold mb-3 text-indigo-500">Video Wisdom</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Explore the mysteries of astrology through our comprehensive video library,
          featuring detailed explanations and practical guidance for your spiritual journey.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg font-medium">
            Trending Video
          </button>
          <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg font-medium">
            Popular Video
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-start"
            >
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3" />
              <h3 className="text-sm font-medium text-gray-800">{video.title}</h3>
              <div className="flex justify-between items-center w-full mt-2 text-xs text-gray-500">
                <span>👤 {video.views}</span>
                <span>⏱️ {video.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

<section className="bg-white py-16">

      <div className="max-w-6xl mx-auto px-4  ">
        <div className="flex justify-center">
        <button className="bg-purple-200 px-4 py-1 text-center rounded-full text-sm mb-4 justify-center">
          Client Testimonials
        </button>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-3">
          What Our Clients <span className="text-indigo-500">Say About Us</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-10">
          Discover how our astrological guidance has transformed lives across the globe,
          bringing clarity, purpose, and positive change to thousands of satisfied clients.
        </p>

        <div className="flex justify-between items-center mb-8">
          <span></span>
          <a href="#" className="text-indigo-500 font-medium">View All →</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className="relative rounded-lg overflow-hidden shadow-lg group"
               onClick={() => handleClientClick(client)}
            >
              <img
                src={client.image}
                alt={client.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />
  
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">{client.category}</p>
                <h3 className="text-lg font-semibold">{client.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* ===== Top Section ===== */}
      <section className="flex flex-col items-center justify-center text-center py-16 bg-gradient-to-r from-pink-200 to-yellow-100">
        <h3 className="text-lg font-semibold">Join Our Webinar</h3>
        <h1 className="text-4xl font-bold mt-2">
          Limited-<span className="text-blue-500">Time Offer!</span>
        </h1>
        <p className="max-w-xl text-gray-700 mt-4">
          Get 'The Guide' now and enjoy a special one-month free access to our upcoming 
          AI-scoring platform with over 5000 test questions. Act fast – this offer expires in 
          [Countdown Timer]
        </p>

        {/* Countdown Timer */}
        <div className="flex space-x-4 mt-6">
          <div className="bg-white shadow-md px-4 py-2 rounded">
            <p className="text-2xl font-bold text-blue-600">24</p>
            <p className="text-sm">Days</p>
          </div>
          <div className="bg-white shadow-md px-4 py-2 rounded">
            <p className="text-2xl font-bold text-blue-600">06</p>
            <p className="text-sm">Hours</p>
          </div>
          <div className="bg-white shadow-md px-4 py-2 rounded">
            <p className="text-2xl font-bold text-blue-600">22</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div className="bg-white shadow-md px-4 py-2 rounded">
            <p className="text-2xl font-bold text-blue-600">59</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700">
          Visit Now
        </button>
      </section>

      {/* ===== Footer Section ===== */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold">Pipepro</h2>
            <p className="text-gray-400 mt-2">
              Proin pretium sem libero, nec aliquet augue lobortis in. Phasellus nibh quam, molestie.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Drip Detectives</li>
              <li>Leak Stop Specialists</li>
              <li>Pipe Dream Team</li>
              <li>Rapid Repair Squad</li>
              <li>Clear Flow Plumbers</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Info</h3>
            <p className="text-gray-400">📞 +125 (895) 658 568</p>
            <p className="text-gray-400">🏢 66 Broklyant, New India</p>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-8">
          © Pipepro 2024 | All Rights Reserved | Privacy & Policy | Terms and Conditions
        </div>
      </footer>
    </div>
    </main>
  );
}