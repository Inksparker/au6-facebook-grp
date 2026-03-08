import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { BrainCircuit, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-lg bg-indigo-600 p-1.5">
            <BrainCircuit className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Agent<span className="text-indigo-600">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/#features" className="text-sm font-medium transition-colors hover:text-indigo-600">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-indigo-600">
            Pricing
          </Link>
          <Link to="/login" className="text-sm font-medium transition-colors hover:text-indigo-600">
            Login
          </Link>
          <Link to="/signup">
            <Button className="rounded-full bg-indigo-600 px-6 hover:bg-indigo-700">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 space-y-4">
          <Link
            to="/#features"
            className="block text-base font-medium transition-colors hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="block text-base font-medium transition-colors hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/login"
            className="block text-base font-medium transition-colors hover:text-indigo-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
          <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
