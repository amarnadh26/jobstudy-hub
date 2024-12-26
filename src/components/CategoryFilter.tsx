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
        className="bg-neon-orange-bright hover:bg-neon-orange-bright/90"
      >
        All Posts
      </Button>
      <Button
        variant={activeCategory === "it-jobs" ? "default" : "outline"}
        onClick={() => onCategoryChange("it-jobs")}
        className={activeCategory === "it-jobs" ? "bg-neon-orange-bright hover:bg-neon-orange-bright/90" : ""}
      >
        IT Jobs
      </Button>
      <Button
        variant={activeCategory === "non-it-jobs" ? "default" : "outline"}
        onClick={() => onCategoryChange("non-it-jobs")}
        className={activeCategory === "non-it-jobs" ? "bg-neon-orange-bright hover:bg-neon-orange-bright/90" : ""}
      >
        Non-IT Jobs
      </Button>
      <Button
        variant={activeCategory === "study" ? "default" : "outline"}
        onClick={() => onCategoryChange("study")}
        className={activeCategory === "study" ? "bg-neon-orange-bright hover:bg-neon-orange-bright/90" : ""}
      >
        Study Materials
      </Button>
      <Button
        variant={activeCategory === "roadmaps" ? "default" : "outline"}
        onClick={() => onCategoryChange("roadmaps")}
        className={activeCategory === "roadmaps" ? "bg-neon-orange-bright hover:bg-neon-orange-bright/90" : ""}
      >
        Roadmaps
      </Button>
    </div>
  );
};