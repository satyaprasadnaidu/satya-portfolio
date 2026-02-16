import { Award } from "lucide-react";

const certifications = [
  {
    name: "Full Stack Web Development (MERN)",
    provider: "Unstop",
    category: "Web Development",
  },
  {
    name: "Python Programming",
    provider: "Unstop",
    category: "Programming",
  },
  {
    name: "Java Programming",
    provider: "Unstop",
    category: "Programming",
  },
  {
    name: "SQL Certification",
    provider: "Unstop",
    category: "Database",
  },
  {
    name: "Python & SQL for Data Science",
    provider: "Scalar Academy",
    category: "Data Science",
  },
  {
    name: "Data Analytics",
    provider: "Unstop",
    category: "Data Analytics",
  },
  {
    name: "Power BI for Data Visualization",
    provider: "Unstop",
    category: "Data Visualization",
  },
  {
    name: "Foundations of Modern Machine Learning",
    provider: "IIIT Hyderabad",
    category: "Machine Learning",
  },
];

const categoryColors: Record<string, string> = {
  "Web Development": "bg-blue-50 text-blue-600",
  "Programming": "bg-amber-50 text-amber-600",
  "Database": "bg-emerald-50 text-emerald-600",
  "Data Science": "bg-purple-50 text-purple-600",
  "Data Analytics": "bg-cyan-50 text-cyan-600",
  "Data Visualization": "bg-pink-50 text-pink-600",
  "Machine Learning": "bg-orange-50 text-orange-600",
};

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2 text-sm uppercase tracking-wide">Continuous Learning</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Professional certifications that validate my skills and demonstrate 
            commitment to continuous learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, index) => {
            const colorClass = categoryColors[cert.category] || "bg-gray-50 text-gray-600";
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg ${colorClass.split(' ')[0]} flex items-center justify-center mb-4`}>
                  <Award className={`w-5 h-5 ${colorClass.split(' ')[1]}`} />
                </div>

                {/* Category Badge */}
                <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${colorClass} mb-3`}>
                  {cert.category}
                </span>

                {/* Certification Name */}
                <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
                  {cert.name}
                </h3>

                {/* Provider */}
                <p className="text-xs text-gray-500">
                  {cert.provider}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-slate-50 border border-gray-200 rounded-xl px-8 py-5">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">8+</p>
              <p className="text-sm text-gray-500 mt-1">Certifications</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">7</p>
              <p className="text-sm text-gray-500 mt-1">Categories</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">4</p>
              <p className="text-sm text-gray-500 mt-1">Providers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
