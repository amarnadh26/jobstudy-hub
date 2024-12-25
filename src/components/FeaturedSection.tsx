import { Card, CardContent } from "@/components/ui/card";

export const FeaturedSection = () => {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-accent/5 py-20 mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Discover Your Next Tech Opportunity
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Job Postings</h3>
              <p className="text-gray-600">
                Find your dream tech role with our curated job listings
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Study Materials</h3>
              <p className="text-gray-600">
                High-quality resources to level up your programming skills
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Career Roadmaps</h3>
              <p className="text-gray-600">
                Clear paths to guide your professional development
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};