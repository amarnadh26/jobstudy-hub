import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const BlogCard = ({ title, excerpt, category, date, readTime }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-white/80 backdrop-blur animate-fade-up">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-neon-orange-soft/10 text-neon-orange-bright border-none">
            {category}
          </Badge>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold group-hover:text-neon-orange-bright transition-colors cursor-pointer">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{excerpt}</p>
      </CardContent>
      <CardFooter className="text-sm text-gray-500 flex items-center">
        <Clock className="w-4 h-4 mr-1" />
        {readTime} min read
      </CardFooter>
    </Card>
  );
};