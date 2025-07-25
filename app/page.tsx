"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Code2,
  Users,
  MessageCircle,
  Star,
  ArrowRight,
  BookOpen,
  Zap,
  Heart,
  Search,
  Filter,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CodeSaathiPlatform() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const mentors = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Full Stack Developer",
      company: "Google",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
      sessions: 150,
      skills: ["React", "Node.js", "Python", "System Design"],
      location: "Bangalore, India",
      price: "₹500/hour",
      bio: "Passionate about mentoring junior developers and helping them navigate their tech careers.",
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "ML Engineer",
      company: "Microsoft",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
      sessions: 89,
      skills: ["Python", "TensorFlow", "AWS", "Data Science"],
      location: "Hyderabad, India",
      price: "₹600/hour",
      bio: "Helping aspiring data scientists and ML engineers build strong foundations.",
    },
    {
      id: 3,
      name: "Sneha Reddy",
      role: "DevOps Engineer",
      company: "Amazon",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
      sessions: 120,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      location: "Chennai, India",
      price: "₹550/hour",
      bio: "Specializing in cloud infrastructure and helping teams scale their applications.",
    },
  ]

  const features = [
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Expert Mentors",
      description:
        "Connect with experienced professionals from top tech companies who are passionate about sharing knowledge.",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-indigo-600" />,
      title: "1-on-1 Sessions",
      description: "Get personalized guidance through video calls, code reviews, and career counseling sessions.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: "Structured Learning",
      description: "Follow curated learning paths designed by industry experts to accelerate your growth.",
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: "Instant Help",
      description: "Get quick answers to your coding questions through our community forum and chat support.",
    },
  ]

  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      description: "Tell us about your goals, current skill level, and what you want to learn.",
    },
    {
      step: "02",
      title: "Find Your Mentor",
      description: "Browse through our curated list of mentors and find the perfect match for your needs.",
    },
    {
      step: "03",
      title: "Book a Session",
      description: "Schedule a convenient time for your mentoring session and start learning.",
    },
    {
      step: "04",
      title: "Grow Together",
      description: "Build lasting relationships and accelerate your career with ongoing support.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Code Saathi</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#mentors" className="text-gray-700 hover:text-indigo-600 font-medium">
                Find Mentors
              </Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium">
                How it Works
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium">
                Pricing
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-indigo-600 font-medium">
                About
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700">
                Sign In
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href="#mentors" className="text-gray-700 hover:text-indigo-600 font-medium">
                  Find Mentors
                </Link>
                <Link href="#how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium">
                  How it Works
                </Link>
                <Link href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium">
                  Pricing
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-indigo-600 font-medium">
                  About
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="ghost" className="text-gray-700 justify-start">
                    Sign In
                  </Button>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white justify-start">Get Started</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  🚀 Join 10,000+ learners already growing
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Your coding journey starts with the right <span className="text-indigo-600">mentor</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect with experienced developers, get personalized guidance, and accelerate your tech career with
                  Code Saathi - where learning meets mentorship.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                  Find Your Mentor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 bg-transparent"
                >
                  Become a Mentor
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Expert Mentors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10k+</div>
                  <div className="text-sm text-gray-600">Sessions Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">Priya Sharma</div>
                      <div className="text-sm text-gray-600">Senior Developer @ Google</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">Next session:</div>
                    <div className="font-semibold text-gray-900">React Best Practices</div>
                    <div className="text-sm text-indigo-600 mt-1">Tomorrow, 3:00 PM</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-2xl shadow-lg p-6 transform -rotate-3">
                <div className="text-center">
                  <Heart className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="font-bold text-white">98%</div>
                  <div className="text-xs text-white opacity-90">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why choose Code Saathi?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built the perfect platform to connect passionate learners with experienced mentors who genuinely
              care about your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-indigo-50 rounded-full w-fit">{feature.icon}</div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet our expert mentors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry professionals who are passionate about sharing their knowledge and helping you
              succeed.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input placeholder="Search mentors by skill, company, or name..." className="pl-10 h-12" />
            </div>
            <Button variant="outline" className="h-12 px-6 bg-transparent">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={mentor.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {mentor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-900">{mentor.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-600 mb-2">
                        {mentor.role} @ {mentor.company}
                      </CardDescription>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          {mentor.rating}
                        </div>
                        <div>{mentor.sessions} sessions</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{mentor.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {mentor.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {mentor.location}
                    </div>
                    <div className="text-lg font-semibold text-indigo-600">{mentor.price}</div>
                  </div>

                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Book Session</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 bg-transparent"
            >
              View All Mentors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How Code Saathi works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is simple. Follow these four easy steps to begin your mentorship journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to accelerate your coding journey?</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Join thousands of developers who have transformed their careers with personalized mentorship. Your next
              breakthrough is just one session away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 bg-transparent"
              >
                Explore Mentors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Code Saathi</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering developers through personalized mentorship and community-driven learning.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Find Mentors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Become a Mentor
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Career Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Code Saathi. All rights reserved. Made with ❤️ for the developer
              community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
