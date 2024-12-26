import { Header } from "@/components/Header";
import { FeaturedSection } from "@/components/FeaturedSection";
import { CategoryFilter } from "@/components/CategoryFilter";
import { BlogCard } from "@/components/BlogCard";
import { useState } from "react";

type Category = "all" | "it-jobs" | "non-it-jobs" | "study" | "roadmaps";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const posts = [
    {
      title: "Top 10 IT Jobs in 2024",
      excerpt: "Discover the most in-demand tech roles and skills needed to succeed in today's market.",
      category: "it-jobs",
      date: "Mar 15, 2024",
      readTime: "5",
    },
    {
      title: "Complete Guide to Python Development",
      excerpt: "Master Python programming with this comprehensive guide for beginners and intermediates.",
      category: "study",
      date: "Mar 14, 2024",
      readTime: "10",
    },
    {
      title: "Marketing Career Roadmap",
      excerpt: "Step-by-step guide to building a successful career in digital marketing.",
      category: "non-it-jobs",
      date: "Mar 13, 2024",
      readTime: "7",
    },
    {
      title: "Frontend Development Career Path",
      excerpt: "Everything you need to know about becoming a frontend developer in 2024.",
      category: "roadmaps",
      date: "Mar 12, 2024",
      readTime: "8",
    },
    {
      title: "Remote Work Best Practices",
      excerpt: "Tips and tricks for succeeding in a remote work environment.",
      category: "it-jobs",
      date: "Mar 11, 2024",
      readTime: "6",
    },
    {
      title: "Interview Preparation Guide",
      excerpt: "Comprehensive guide to ace your next tech interview.",
      category: "study",
      date: "Mar 10, 2024",
      readTime: "12",
    },
  ];

  const trendingTopics = [
    "📰 Latest Post: Top 10 IT Jobs in 2024",
    "Web3 Development 🚀",
    "AI/ML Engineering 🤖",
    "Remote Work Opportunities 🌍",
    "Cloud Computing Skills ☁️",
    "DevOps Trends 🔄"
  ];

  const filteredPosts = activeCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="bg-neon-orange-bright overflow-hidden py-2 relative mt-[72px]">
        <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
          <div className="flex gap-8 items-center text-white font-semibold px-4">
            {trendingTopics.map((topic, index) => (
              <span key={index} className="inline-flex items-center">
                {!topic.startsWith("📰") && <span className="mr-2">🔥</span>}
                {topic}
              </span>
            ))}
          </div>
          <div className="flex gap-8 items-center text-white font-semibold px-4">
            {trendingTopics.map((topic, index) => (
              <span key={`duplicate-${index}`} className="inline-flex items-center">
                {!topic.startsWith("📰") && <span className="mr-2">🔥</span>}
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
      <main className="pt-8">
        <FeaturedSection />
        <div className="container mx-auto px-4 py-12">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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