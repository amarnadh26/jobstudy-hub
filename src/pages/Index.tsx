import { useState } from "react";
import { Header } from "@/components/Header";
import { FeaturedSection } from "@/components/FeaturedSection";
import { CategoryFilter } from "@/components/CategoryFilter";
import { BlogCard } from "@/components/BlogCard";

type Category = "all" | "jobs" | "study" | "roadmaps";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const posts = [
    {
      title: "Senior React Developer Position at Tech Corp",
      excerpt: "Exciting opportunity for a senior React developer to join our growing team...",
      category: "jobs",
      date: "Mar 1, 2024",
      readTime: "3",
    },
    {
      title: "Complete Guide to Modern JavaScript",
      excerpt: "Master JavaScript fundamentals and advanced concepts with this comprehensive guide...",
      category: "study",
      date: "Feb 28, 2024",
      readTime: "15",
    },
    {
      title: "Frontend Developer Career Path",
      excerpt: "A detailed roadmap to becoming a professional frontend developer in 2024...",
      category: "roadmaps",
      date: "Feb 27, 2024",
      readTime: "10",
    },
  ];

  const filteredPosts = activeCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <FeaturedSection />
        <div className="container mx-auto px-4 py-8">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;