import { Code2, Database, LineChart, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building responsive and scalable web applications using modern technologies.",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Extracting insights from complex datasets using Python, SQL, and visualization tools.",
  },
  {
    icon: LineChart,
    title: "Machine Learning",
    description: "Developing predictive models and AI-powered solutions for real-world problems.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Approaching challenges with analytical thinking and creative solutions.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2 text-sm uppercase tracking-wide">Get To Know Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-5">
            <p className="text-gray-600 leading-relaxed">
              I'm a final-year Information Technology student at Kakinada Institute of Engineering 
              and Technology, passionate about building technology solutions that make a difference.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With hands-on experience in <span className="text-gray-900 font-medium">Web Development</span>,{" "}
              <span className="text-gray-900 font-medium">Data Analysis</span>, and{" "}
              <span className="text-gray-900 font-medium">Machine Learning</span>, I enjoy working 
              at the intersection of software engineering and data science.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey includes building full-stack applications, analyzing complex datasets, 
              and developing ML models. I'm constantly learning and adapting to new technologies 
              to stay at the forefront of innovation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new AI tools, contributing to 
              open-source projects, or collaborating with teams to solve challenging problems.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">4+</p>
                <p className="text-sm text-gray-500 mt-1">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3</p>
                <p className="text-sm text-gray-500 mt-1">Internships</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">8+</p>
                <p className="text-sm text-gray-500 mt-1">Certifications</p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
