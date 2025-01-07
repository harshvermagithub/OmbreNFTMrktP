import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Mail, CheckCircle } from "lucide-react";
import Link from "next/link";

const BENEFITS = [
  "Access to 1000+ internship opportunities",
  "Personalized course recommendations",
  "Connect with industry mentors",
  "Join student community",
  "Get job alerts",
  "Track your applications"
];

export default function SignUpPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div>
            <div className="text-center md:text-left mb-8">
              <h1 className="text-3xl font-bold mb-2">Create your account</h1>
              <p className="text-muted-foreground">
                Join thousands of students accelerating their careers
              </p>
            </div>

            <div className="space-y-4">
              {/* OAuth Buttons */}
              <div className="grid gap-2">
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  Sign up with Github
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Sign up with Google
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Sign Up Form */}
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <div className="text-sm text-muted-foreground">
                  <p>Password must contain:</p>
                  <ul className="list-disc list-inside">
                    <li>At least 8 characters</li>
                    <li>One uppercase letter</li>
                    <li>One number</li>
                    <li>One special character</li>
                  </ul>
                </div>
                <label className="flex items-start gap-2 text-sm">
                  <input type="checkbox" className="mt-1 rounded border-gray-300" />
                  <span>
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                <Button className="w-full">Create account</Button>
              </form>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link 
                  href="/signin" 
                  className="text-primary hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="hidden md:block bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Everything you need to succeed
            </h2>
            <div className="space-y-4">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-12 border-t pt-8">
              <blockquote className="italic text-muted-foreground">
                "This platform helped me land my dream internship at Google. The mentorship and resources were invaluable."
              </blockquote>
              <div className="mt-4">
                <div className="font-semibold">Alex Chen</div>
                <div className="text-sm text-muted-foreground">
                  Software Engineering Intern at Google
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 