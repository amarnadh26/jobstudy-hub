import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const ListItem = ({
  className,
  title,
  children,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export const Header = () => {
  return (
    <header className="border-b bg-white/50 backdrop-blur-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          TechBlog
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem href="/jobs/it" title="IT Jobs">
                    Browse technology and software development positions
                  </ListItem>
                  <ListItem href="/jobs/non-it" title="Non-IT Jobs">
                    Explore non-technical career opportunities
                  </ListItem>
                  <ListItem href="/jobs/remote" title="Remote Jobs">
                    Find remote work opportunities worldwide
                  </ListItem>
                  <ListItem href="/jobs/internships" title="Internships">
                    Start your career with internship positions
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Roadmaps</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem href="/roadmaps/it" title="IT Career Roadmaps">
                    Career paths for Python, Java, and more
                  </ListItem>
                  <ListItem href="/roadmaps/non-it" title="Non-IT Career Roadmaps">
                    Guide for non-technical career progression
                  </ListItem>
                  <ListItem href="/roadmaps/beginner" title="Beginner Guides">
                    Start your career journey here
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>News</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem href="/news/it" title="IT Industry Updates">
                    Latest technology industry news
                  </ListItem>
                  <ListItem href="/news/trends" title="Tech Trends">
                    Emerging technology trends
                  </ListItem>
                  <ListItem href="/news/non-it" title="Non-IT Market News">
                    Updates from non-technical sectors
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem href="/resources/study" title="Study Materials">
                    Learning resources and guides
                  </ListItem>
                  <ListItem href="/resources/interview" title="Interview Preparation">
                    Prepare for your next interview
                  </ListItem>
                  <ListItem href="/resources/certifications" title="Certifications">
                    Professional certification guides
                  </ListItem>
                  <ListItem href="/resources/tutorials" title="Tutorials">
                    Step-by-step learning guides
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem href="/tools/resume" title="Resume Builder">
                    Create professional resumes
                  </ListItem>
                  <ListItem href="/tools/assessment" title="Skill Assessment">
                    Evaluate your technical skills
                  </ListItem>
                  <ListItem href="/tools/tracker" title="Job Application Tracker">
                    Track your job applications
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/about" className="px-4 py-2 hover:text-primary transition-colors">
                About
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/contact" className="px-4 py-2 hover:text-primary transition-colors">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button>Write Post</Button>
      </div>
    </header>
  );
};