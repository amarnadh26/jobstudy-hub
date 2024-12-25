import { Button } from "@/components/ui/button";

type Category = "all" | "jobs" | "study" | "roadmaps";

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export const CategoryFilter = ({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={activeCategory === "all" ? "default" : "outline"}
        onClick={() => onCategoryChange("all")}
      >
        All Posts
      </Button>
      <Button
        variant={activeCategory === "jobs" ? "default" : "outline"}
        onClick={() => onCategoryChange("jobs")}
      >
        Job Postings
      </Button>
      <Button
        variant={activeCategory === "study" ? "default" : "outline"}
        onClick={() => onCategoryChange("study")}
      >
        Study Materials
      </Button>
      <Button
        variant={activeCategory === "roadmaps" ? "default" : "outline"}
        onClick={() => onCategoryChange("roadmaps")}
      >
        Roadmaps
      </Button>
    </div>
  );
};