import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    institution: "Kakinada Institute of Engineering and Technology",
    location: "Andhra Pradesh, India",
    duration: "2022 – Present",
    score: "CGPA: 7.8",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Intermediate (MPC)",
    field: "Mathematics, Physics, Chemistry",
    institution: "Higher Secondary Education",
    location: "Andhra Pradesh, India",
    duration: "Completed",
    score: "CGPA: 8.5",
    icon: BookOpen,
    current: false,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "General Education",
    institution: "Secondary Education",
    location: "Andhra Pradesh, India",
    duration: "Completed",
    score: "CGPA: 8.8",
    icon: School,
    current: false,
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2 text-sm uppercase tracking-wide">Academic Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            My academic journey has provided me with a strong foundation in technology 
            and problem-solving skills.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-5">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                {/* Icon Section */}
                <div className="p-6 md:w-48 bg-slate-50 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center">
                    <edu.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                    {edu.current && (
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                        Currently Pursuing
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-1">{edu.field}</p>
                  <p className="text-sm text-gray-500 mb-3">
                    {edu.institution} • {edu.location}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-50 text-blue-600 rounded-lg">
                      {edu.score}
                    </span>
                    <span className="text-sm text-gray-500">{edu.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
