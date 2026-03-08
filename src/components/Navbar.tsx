import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Zap, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-lg bg-orange-600 p-1.5">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Biz<span className="text-orange-600">Flow</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/#features" className="text-sm font-medium transition-colors hover:text-orange-600">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-orange-600">
            Pricing
          </Link>
          
          {/* Currency Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1 rounded-full text-sm font-medium transition-colors hover:text-orange-600">
                <Globe className="h-4 w-4" />
                <span>{currency}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl border-slate-200">
              <DropdownMenuItem onClick={() => setCurrency('USD')} className="cursor-pointer focus:bg-orange-50 focus:text-orange-600">
                USD ($) - US
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrency('GBP')} className="cursor-pointer focus:bg-orange-50 focus:text-orange-600">
                GBP (£) - UK
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrency('CAD')} className="cursor-pointer focus:bg-orange-50 focus:text-orange-600">
                CAD (CA$) - CA
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/login" className="text-sm font-medium transition-colors hover:text-orange-600">
            Login
          </Link>
          <Link to="/signup">
            <Button className="rounded-full bg-orange-600 px-6 hover:bg-orange-700">
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
            className="block text-base font-medium transition-colors hover:text-orange-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="block text-base font-medium transition-colors hover:text-orange-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          
          {/* Mobile Currency Switcher */}
          <div className="flex items-center justify-between border-y py-2">
            <span className="text-sm font-medium text-slate-500">Currency</span>
            <div className="flex space-x-2">
              {(['USD', 'GBP', 'CAD'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`rounded-md px-3 py-1 text-xs font-bold transition-all ${currency === c ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/login"
            className="block text-base font-medium transition-colors hover:text-orange-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
          <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full rounded-full bg-orange-600 hover:bg-orange-700">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
