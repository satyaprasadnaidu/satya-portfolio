import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-sm text-gray-600">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-600">Kurru Satya Prasad</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
          Web Developer & Aspiring Data Analyst
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build scalable web applications and transform complex data into actionable insights.
          Passionate about solving real-world problems through code and data.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-medium rounded-lg transition-colors shadow-sm"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 px-8 py-6 text-base font-medium rounded-lg transition-colors"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-gray-600" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-600" />
          </a>
          <a
            href="mailto:satyaprasadnaidu31@gmail.com"
            className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-gray-600" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-gray-400" />
      </div>
    </section>
  );
}
