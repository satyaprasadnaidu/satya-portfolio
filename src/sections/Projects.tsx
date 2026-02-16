import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, Heart, Wind, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "AI Flashcard Generator",
    domain: "Full Stack + AI",
    description: "A full-stack web application that generates personalized flashcards from text, topics, and PDFs using AI-powered Q&A generation.",
    highlights: [
      "Built responsive UI with React, Vite, and Tailwind CSS",
      "Integrated AI for automated flashcard generation",
      "Implemented authentication and database with Supabase",
      "Supports multiple input formats (text, topics, PDFs)",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "AI/ML"],
    icon: Sparkles,
    github: "#",
    demo: "#",
  },
  {
    title: "Heart Disease Prediction",
    domain: "Machine Learning",
    description: "Machine learning models to predict heart disease risk using patient datasets, enabling early detection and preventive care.",
    highlights: [
      "Performed data cleaning and feature analysis",
      "Compared Logistic Regression and Random Forest models",
      "Achieved high accuracy with interpretable results",
      "Created visualizations for model evaluation",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    icon: Heart,
    github: "#",
    demo: "#",
  },
  {
    title: "Predictive Maintenance - Wind Turbine",
    domain: "Data Science / ML",
    description: "Analyzed turbine sensor data to predict failures before they occur, reducing downtime and maintenance costs.",
    highlights: [
      "Applied preprocessing and EDA techniques",
      "Built supervised ML models with high precision/recall",
      "Created visual dashboards for insights",
      "Enabled proactive maintenance scheduling",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Power BI"],
    icon: Wind,
    github: "#",
    demo: "#",
  },
  {
    title: "Cart Abandonment Analysis",
    domain: "Data Analytics",
    description: "Analyzed e-commerce cart data to identify user drop-off patterns and delivered actionable recommendations to improve conversions.",
    highlights: [
      "Identified key drop-off points in user journey",
      "Evaluated KPIs using Python, SQL, and Excel",
      "Delivered data-driven business recommendations",
      "Proposed strategies to improve conversion rates",
    ],
    tech: ["Python", "SQL", "Excel", "Pandas", "Data Visualization"],
    icon: ShoppingCart,
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2 text-sm uppercase tracking-wide">Featured Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in web development, 
            data analysis, and machine learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                    <project.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-0 font-medium">
                    {project.domain}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>

              {/* Project Body */}
              <div className="p-6">
                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2.5 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-300 hover:bg-gray-50 text-gray-700"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
