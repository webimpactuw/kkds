export default function AboutPage(){

    const youthInstructors = [
        {
            name: "Anika Yechuri",
            bio: "Anika Yechuri has been dedicated to the art of Kuchipudi for over 17 years, earning accolades for her performances across the USA and India, including at prestigious events like the Silicon Andhra International Kuchipudi Convention. She completed her rangapravesam in 2018, marking her as one of the senior students at Kalamandapam Kuchipudi Dance School.",
        },
        {
            name: "Nithika Yechuri",
            bio: "Nithika Yechuri has been learning Kuchipudi for over 12 years under the guidance of her mother and guru at Kalamandapam Kuchipudi Dance School. Starting her journey at the age of four, she quickly developed a deep connection with this classical dance form. In 2018, after completing her rangapravesam, she officially joined the faculty at Kalamandapam.",
        }
    ];

    const teachingAssistants = Array(12).fill({ name : "Manya" })

    const checkerboardStyle = {
        backgroundImage: 'conic-gradient(#e5e7eb 90deg, #fff 90deg 180deg, #e5e7eb 180deg 270deg, #fff 270deg)',
        backgroundSize: '20px 20px'
    };

    return (
        <section className="font-sans antialiased bg-[#FFFAEE]">
            {/* About Us Header */}
            <div className="bg-[linear-gradient(180deg,#FFE299_0%,#FFFAEE_100%)] py-25.5 border-b border-gray-300">
                <h1 className="text-center text-[60px] md:text-[72px] font-bold text-black">
                About Us
                </h1>
            </div>

            {/* Message Page */}
            <div className="bg-[#FFDE8B] min-h-screen px-6 py-24 md:px-20 lg:px-40">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                
                {/* Text Column */}
                <div className="flex-1 space-y-6">
                    <header>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                        Sushma’s Message
                    </h2>
                    <p className="text-xl italic text-gray-800 py-4">
                        Founder & Instructor
                    </p>
                    </header>

                    <div className="space-y-6 text-lg leading-relaxed text-gray-900">
                    <p>
                        Welcome to Kalamandapam Kuchipudi Dance School, a vibrant cultural hub
                        based in Sammamish, dedicated to preserving and promoting the classical
                        Indian dance form of Kuchipudi. Our school offers a nurturing environment
                        where students of all ages, starting from 5 years onwards, can immerse
                        themselves in the rich traditions and expressive beauty of Kuchipudi.
                    </p>
                    
                    <p>
                        Our classes are designed to cater to all levels, from beginners to
                        advanced dancers. Whether you are looking to explore a new art form,
                        deepen your understanding of Indian culture, or pursue a serious study
                        of dance, Kalamandapam is the perfect place to start your journey.
                    </p>
                    
                    <p>
                        Join us at Kalamandapam Kuchipudi Dance School and become part of a
                        community that celebrates the joy of dance and the beauty of Indian
                        classical arts. We look forward to welcoming you and your family to
                        our dance family.
                    </p>
                    </div>
                </div>

                {/* Image Column */}
                <div className="flex-1 w-full max-w-md md:max-w-none">
                    {/* Aspect ratio box mimicking the placeholder in the design */}
                    <div className="aspect-square bg-white/50 backdrop-blur-sm border border-white shadow-xl overflow-hidden">
                    <img
                        src="your-image-url-here.jpg"
                        alt="Sushma - Founder & Instructor"
                        className="w-full h-full object-cover"
                        // If you don't have an image yet, this div displays the grid-like background
                        style={{
                        backgroundImage: 'conic-gradient(#f0f0f0 90deg, #fff 90deg 180deg, #f0f0f0 180deg 270deg, #fff 270deg)',
                        backgroundSize: '40px 40px'
                        }}
                    />
                    </div>
                </div>

                </div>
            </div>
            
            {/* Youth Instructors Page */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="bg-[#800032] py-4 mb-16">
                    <h2 className="text-center text-white text-2xl font-bold uppercase tracking-widest">
                        Youth Instructors
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 px-4 md:px-12">
                    {youthInstructors.map((person, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-64 h-80 mb-6 shadow-sm border border-gray-300" style={checkerboardStyle} />
                            <h3 className="text-2xl font-bold text-black mb-3">{person.name}</h3>
                            <p className="text-sm text-gray-800 leading-relaxed max-w-sm">{person.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Teaching Assistants Page */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="bg-[#800032] py-4 mb-16">
                    <h2 className="text-center text-white text-2xl font-bold uppercase tracking-widest">
                        Teaching Assistants
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
                    {teachingAssistants.map((ta, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-36 h-44 md:w-48 md:h-56 mb-4 shadow-sm border border-gray-300" style={checkerboardStyle} />
                            <span className="font-bold text-black text-lg">{ta.name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}