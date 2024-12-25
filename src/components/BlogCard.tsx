import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const BlogCard = ({ title, excerpt, category, date, readTime }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-secondary">
            {category}
          </Badge>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold hover:text-primary transition-colors cursor-pointer">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{excerpt}</p>
      </CardContent>
      <CardFooter className="text-sm text-gray-500">
        {readTime} min read
      </CardFooter>
    </Card>
  );
};