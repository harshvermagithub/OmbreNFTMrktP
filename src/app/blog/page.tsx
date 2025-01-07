import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, User, Tag } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    imageUrl: string;
  };
  category: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  imageUrl: string;
}

const FEATURED_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "How to Land Your First Tech Internship: A Complete Guide",
    excerpt: "Landing your first internship can be daunting. Learn the strategies that successful candidates use to stand out and secure their dream internships.",
    author: {
      name: "Sarah Wilson",
      role: "Career Coach",
      imageUrl: "/authors/sarah.jpg"
    },
    category: "Career Advice",
    tags: ["Internships", "Career Growth", "Interview Tips"],
    readTime: "8 min read",
    publishedAt: "2024-02-15",
    imageUrl: "/blog/internship-guide.jpg"
  },
  {
    id: "2",
    title: "The Future of AI in Education: Trends to Watch",
    excerpt: "Explore how artificial intelligence is transforming education and what it means for students and educators in the coming years.",
    author: {
      name: "Dr. James Lee",
      role: "AI Researcher",
      imageUrl: "/authors/james.jpg"
    },
    category: "Technology",
    tags: ["AI", "EdTech", "Future of Learning"],
    readTime: "6 min read",
    publishedAt: "2024-02-10",
    imageUrl: "/blog/ai-education.jpg"
  },
  {
    id: "3",
    title: "Essential Skills for Full-Stack Development in 2024",
    excerpt: "Stay ahead of the curve with our comprehensive guide to the most in-demand full-stack development skills and technologies.",
    author: {
      name: "Maria Garcia",
      role: "Senior Developer",
      imageUrl: "/authors/maria.jpg"
    },
    category: "Development",
    tags: ["Web Development", "Programming", "Career Skills"],
    readTime: "10 min read",
    publishedAt: "2024-02-05",
    imageUrl: "/blog/fullstack-skills.jpg"
  }
];

const CATEGORIES = [
  "All",
  "Career Advice",
  "Technology",
  "Development",
  "Data Science",
  "Design",
  "Student Life",
  "Industry Insights"
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Tech Education Insights
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay updated with the latest in tech education, career advice, and industry trends.
            Learn from experts and successful professionals.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..."
                className="pl-10 w-full"
              />
            </div>
            <Button>Search</Button>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((category) => (
              <Button 
                key={category}
                variant="outline" 
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_POSTS.map((post) => (
              <article 
                key={post.id}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="aspect-[16/9] bg-muted relative">
                    <div className="absolute top-2 right-2">
                      <span className="bg-background/95 text-foreground px-2 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author.name}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="my-16 text-center bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter for weekly curated content, latest industry trends, and career opportunities.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              type="email"
            />
            <Button>Subscribe</Button>
          </div>
        </section>
      </div>
    </main>
  );
}
