import { Cloud, Code, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Web Development Intern",
    company: "Remote",
    duration: "Internship",
    icon: Code,
    achievements: [
      "Built responsive web applications using React, Node.js, and modern JavaScript",
      "Developed RESTful APIs and integrated third-party services for dynamic functionality",
      "Implemented database schemas and optimized queries for performance",
      "Collaborated with cross-functional teams using Git and agile methodologies",
    ],
  },
  {
    title: "Generative AI Intern",
    company: "Google Cloud",
    duration: "Remote",
    icon: Cloud,
    achievements: [
      "Engineered AI-powered solutions using advanced prompt engineering techniques",
      "Deployed scalable applications on Google Cloud Platform services",
      "Experimented with LLM fine-tuning and API integration for production use cases",
      "Delivered AI prototypes that automated content generation workflows",
    ],
  },
  {
    title: "AI/ML Virtual Intern",
    company: "Google for Developers",
    duration: "Virtual Internship",
    icon: GraduationCap,
    achievements: [
      "Developed predictive models using Python, Scikit-learn, and TensorFlow",
      "Performed end-to-end ML pipelines: data preprocessing, feature engineering, model training",
      "Evaluated model performance with precision, recall, and cross-validation techniques",
      "Applied ML solutions to real-world datasets for classification and regression tasks",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2 text-sm uppercase tracking-wide">My Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Internships & Experience</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hands-on experience through technical internships that have strengthened my skills 
            in software development, AI, and machine learning.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left - Icon & Company */}
                <div className="p-6 md:w-64 bg-slate-50 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <exp.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{exp.company}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-white border border-gray-200 text-gray-600 rounded-full">
                    {exp.duration}
                  </span>
                </div>

                {/* Right - Details */}
                <div className="p-6 md:flex-1">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, aIndex) => (
                      <li key={aIndex} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
