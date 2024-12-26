import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Briefcase, Map } from "lucide-react";

export const FeaturedSection = () => {
  return (
    <div className="bg-gradient-to-r from-neon-orange-soft/10 to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-orange-bright to-primary bg-clip-text text-transparent">
            Discover Your Career Path
          </h1>
          <p className="text-lg text-gray-600">
            Expert guidance, resources, and opportunities to accelerate your career growth
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-white/80 backdrop-blur">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Briefcase className="w-8 h-8 text-neon-orange-bright" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-orange-bright transition-colors">
                Job Opportunities
              </h3>
              <p className="text-gray-600 mb-4">
                Find your dream role with our curated job listings
              </p>
              <div className="flex items-center text-neon-orange-bright font-medium">
                Explore Jobs <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-white/80 backdrop-blur">
            <CardContent className="pt-6">
              <div className="mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Learning Resources
              </h3>
              <p className="text-gray-600 mb-4">
                High-quality materials to level up your skills
              </p>
              <div className="flex items-center text-primary font-medium">
                Start Learning <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-white/80 backdrop-blur">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Map className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                Career Roadmaps
              </h3>
              <p className="text-gray-600 mb-4">
                Clear paths to guide your professional growth
              </p>
              <div className="flex items-center text-accent font-medium">
                View Roadmaps <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};