import { Button } from "@/components/ui/button";
import { Check, Sparkles, Rocket, Target, Users, MessageSquare, Receipt, Zap, Shield, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50 py-24 sm:py-32">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-violet-200 bg-white px-3 py-1 text-sm font-medium shadow-sm">
              <Sparkles className="mr-2 h-4 w-4 text-blue-600" />
              <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">Built for Solopreneurs & Small Businesses</span>
            </div>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
              Automate Your Business. <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Focus on Your Passion.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-slate-600 sm:text-xl">
              The all-in-one AI workforce for your business. From idea validation to bookkeeping, we automate the boring stuff so you can build.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="h-12 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 text-lg font-semibold text-white hover:shadow-xl transition-all">
                  Start Your Automation Journey
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="h-12 rounded-full border-blue-200 px-8 text-lg hover:bg-blue-50 transition-all">
                  View Business Plans
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6"
          >
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-violet-100 group-hover:scale-110 transition-transform">
                <Rocket className="h-8 w-8 text-violet-600" />
              </div>
              <span className="font-semibold text-slate-900">Idea Lab</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-blue-100 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <span className="font-semibold text-slate-900">Lead Gen</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-cyan-100 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-cyan-600" />
              </div>
              <span className="font-semibold text-slate-900">CRM & Sales</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-emerald-100 group-hover:scale-110 transition-transform">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <span className="font-semibold text-slate-900">Support</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-amber-100 group-hover:scale-110 transition-transform">
                <Receipt className="h-8 w-8 text-amber-600" />
              </div>
              <span className="font-semibold text-slate-900">Bookkeeping</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-slate-100 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-slate-600" />
              </div>
              <span className="font-semibold text-slate-900">Legal</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Your 24/7 Virtual Operations Team
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We've built specialized agents that handle the critical but time-consuming parts of running a business. No more juggling ten different apps.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { text: "Automated lead outreach and follow-ups", color: "text-violet-600", bg: "bg-violet-100" },
                  { text: "AI-driven customer support that learns your brand", color: "text-blue-600", bg: "bg-blue-100" },
                  { text: "Real-time expense tracking and financial summaries", color: "text-cyan-600", bg: "bg-cyan-100" },
                  { text: "Legal document drafting and compliance checks", color: "text-emerald-600", bg: "bg-emerald-100" },
                ].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700">
                    <div className={`flex-shrink-0 rounded-full ${feature.bg} p-1`}>
                      <Check className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-violet-100 via-blue-100 to-cyan-100 blur-2xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Business Dashboard"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500"></div>
        <div className="container relative mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">Ready to scale your business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Join 5,000+ small businesses automating their workflow with BoostaBizFlow.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link to="/signup">
              <Button size="lg" className="h-12 bg-white px-8 text-blue-600 hover:bg-slate-50 shadow-xl transition-all font-bold">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 py-12">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 font-bold mb-4">
             <Briefcase className="h-6 w-6 text-violet-600" />
             <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">BoostaBizFlow</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 BoostaBizFlow. All rights reserved. Helping small businesses thrive.
          </p>
        </div>
      </footer>
    </div>
  );
}
