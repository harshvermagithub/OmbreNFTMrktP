import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Briefcase, Calendar, Globe2, MessageSquare } from "lucide-react";

interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  experience: string;
  expertise: string[];
  availability: string;
  rate: string;
  location: string;
  bio: string;
  languages: string[];
  imageUrl: string;
}

const FEATURED_MENTORS: Mentor[] = [
  {
    id: "1",
    name: "David Kumar",
    title: "Senior Software Engineer",
    company: "Google",
    experience: "8+ years",
    expertise: ["System Design", "Frontend Development", "Career Growth"],
    availability: "10 hrs/week",
    rate: "$75/hour",
    location: "San Francisco, CA",
    bio: "Passionate about helping early-career developers navigate the tech industry. Specialized in frontend architecture and system design.",
    languages: ["English", "Hindi"],
    imageUrl: "/mentors/david.jpg"
  },
  {
    id: "2",
    name: "Lisa Chen",
    title: "Product Manager",
    company: "Microsoft",
    experience: "6+ years",
    expertise: ["Product Strategy", "Agile", "Tech Leadership"],
    availability: "5 hrs/week",
    rate: "$90/hour",
    location: "Seattle, WA",
    bio: "Former software engineer turned PM. Help mentees transition into product management and develop leadership skills.",
    languages: ["English", "Mandarin"],
    imageUrl: "/mentors/lisa.jpg"
  },
  {
    id: "3",
    name: "Marcus Johnson",
    title: "Data Science Lead",
    company: "Netflix",
    experience: "10+ years",
    expertise: ["Machine Learning", "Data Strategy", "Python"],
    availability: "8 hrs/week",
    rate: "$100/hour",
    location: "Remote",
    bio: "Helping aspiring data scientists build strong foundations and practical skills. Focus on real-world applications.",
    languages: ["English"],
    imageUrl: "/mentors/marcus.jpg"
  }
];

const EXPERTISE_AREAS = [
  "All Areas",
  "Software Development",
  "Data Science",
  "Product Management",
  "UI/UX Design",
  "DevOps",
  "Cloud Architecture",
  "Career Guidance",
  "Interview Prep"
];

export default function MentorshipPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Learn from Industry Leaders
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with experienced mentors who can guide you through your tech career journey.
            Get personalized advice, code reviews, and career guidance.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by expertise, company, or location..."
                className="pl-10 w-full"
              />
            </div>
            <Button>Find Mentor</Button>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Browse by Expertise</h2>
          <div className="flex gap-2 flex-wrap">
            {EXPERTISE_AREAS.map((area) => (
              <Button 
                key={area}
                variant="outline" 
                className="rounded-full"
              >
                {area}
              </Button>
            ))}
          </div>
        </section>

        {/* Mentors Grid */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_MENTORS.map((mentor) => (
            <div 
              key={mentor.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[3/2] bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {mentor.title} at {mentor.company}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{mentor.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{mentor.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-muted-foreground" />
                    <span>{mentor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span>{mentor.languages.join(", ")}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {mentor.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {mentor.expertise.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">
                    {mentor.rate}
                  </span>
                  <Button>Book Session</Button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="my-16 text-center bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Want to become a mentor?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Share your expertise, give back to the community, and earn while helping others grow.
          </p>
          <Button size="lg">
            Apply as Mentor
          </Button>
        </section>
      </div>
    </main>
  );
} 