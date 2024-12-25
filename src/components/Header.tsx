import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b bg-white/50 backdrop-blur-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">TechBlog</h1>
        <nav className="hidden md:flex space-x-6">
          <Button variant="ghost">Jobs</Button>
          <Button variant="ghost">Study Materials</Button>
          <Button variant="ghost">Roadmaps</Button>
        </nav>
        <Button>Write Post</Button>
      </div>
    </header>
  );
};