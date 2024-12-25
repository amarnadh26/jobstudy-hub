import { Button } from "@/components/ui/button";

type Category = "all" | "it-jobs" | "non-it-jobs" | "study" | "roadmaps";

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
        variant={activeCategory === "it-jobs" ? "default" : "outline"}
        onClick={() => onCategoryChange("it-jobs")}
      >
        IT Jobs
      </Button>
      <Button
        variant={activeCategory === "non-it-jobs" ? "default" : "outline"}
        onClick={() => onCategoryChange("non-it-jobs")}
      >
        Non-IT Jobs
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