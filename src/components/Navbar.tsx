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
  const { currency, setCurrency, symbol } = useCurrency();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 opacity-75 blur-sm animate-pulse"></div>
            <div className="relative rounded-lg bg-white p-1.5 shadow-sm">
              <Zap className="h-6 w-6 text-violet-600" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Boosta<span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">BizFlow</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/#features" className="text-sm font-medium transition-colors hover:text-violet-600">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-violet-600">
            Pricing
          </Link>

          {/* Currency Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 rounded-full border border-slate-200 hover:bg-slate-50">
                <Globe className="h-4 w-4" />
                <span>{currency} ({symbol})</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <DropdownMenuItem 
                onClick={() => setCurrency("USD")}
                className="rounded-lg px-4 py-2 text-sm text-slate-700 cursor-pointer hover:bg-violet-50 hover:text-violet-600"
              >
                🇺🇸 USD ($)
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setCurrency("GBP")}
                className="rounded-lg px-4 py-2 text-sm text-slate-700 cursor-pointer hover:bg-violet-50 hover:text-violet-600"
              >
                🇬🇧 GBP (£)
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setCurrency("CAD")}
                className="rounded-lg px-4 py-2 text-sm text-slate-700 cursor-pointer hover:bg-violet-50 hover:text-violet-600"
              >
                🇨🇦 CAD (C$)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/login" className="text-sm font-medium transition-colors hover:text-violet-600">
            Login
          </Link>
          <Link to="/signup">
            <Button className="rounded-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 px-6 font-semibold text-white hover:opacity-90 shadow-md">
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
          <div className="flex items-center justify-between border-b pb-4">
            <span className="text-sm font-medium text-slate-500">Region & Currency</span>
            <div className="flex space-x-2">
              <Button 
                variant={currency === "USD" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setCurrency("USD")}
                className={currency === "USD" ? "bg-violet-600" : ""}
              >
                USD
              </Button>
              <Button 
                variant={currency === "GBP" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setCurrency("GBP")}
                className={currency === "GBP" ? "bg-violet-600" : ""}
              >
                GBP
              </Button>
              <Button 
                variant={currency === "CAD" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setCurrency("CAD")}
                className={currency === "CAD" ? "bg-violet-600" : ""}
              >
                CAD
              </Button>
            </div>
          </div>
          <Link
            to="/#features"
            className="block text-base font-medium transition-colors hover:text-violet-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="block text-base font-medium transition-colors hover:text-violet-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/login"
            className="block text-base font-medium transition-colors hover:text-violet-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
          <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
