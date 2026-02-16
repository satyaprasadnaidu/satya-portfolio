import { 
  Code2, 
  Globe, 
  Brain, 
  Database, 
  Wrench, 
  Users 
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React", "Tailwind CSS", "Node.js"],
  },
  {
    icon: Brain,
    title: "ML & Data Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Excel", "Power BI", "Google Cloud"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Leadership"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2 text-sm uppercase tracking-wide">My Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive toolkit spanning web development, data analysis, and machine learning 
            that enables me to build end-to-end solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <category.icon className="w-6 h-6 text-blue-600" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
