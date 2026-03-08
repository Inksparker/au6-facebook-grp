import { Button } from "@/components/ui/button";
import { Check, Sparkles, Rocket, Target, Users, MessageSquare, Receipt, Zap, Shield, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-orange-200 bg-white px-3 py-1 text-sm font-medium text-orange-700 shadow-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Built for Solopreneurs & Small Businesses</span>
            </div>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
              Automate Your Business. <span className="text-orange-600 underline decoration-orange-200 underline-offset-8">Focus on Your Passion.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-slate-600 sm:text-xl">
              The all-in-one AI workforce for your business. From idea validation to bookkeeping, we automate the boring stuff so you can build.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="h-12 rounded-full bg-orange-600 px-8 text-lg hover:bg-orange-700">
                  Start Your Automation Journey
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="h-12 rounded-full border-orange-200 px-8 text-lg hover:bg-orange-50">
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
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-orange-100">
                <Rocket className="h-8 w-8 text-orange-600" />
              </div>
              <span className="font-semibold text-slate-900">Idea Lab</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-orange-100">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <span className="font-semibold text-slate-900">Lead Gen</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-orange-100">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <span className="font-semibold text-slate-900">CRM & Sales</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-orange-100">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <span className="font-semibold text-slate-900">Support</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-orange-100">
                <Receipt className="h-8 w-8 text-amber-600" />
              </div>
              <span className="font-semibold text-slate-900">Bookkeeping</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-orange-100">
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
                  "Automated lead outreach and follow-ups",
                  "AI-driven customer support that learns your brand",
                  "Real-time expense tracking and financial summaries",
                  "Legal document drafting and compliance checks",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700">
                    <div className="flex-shrink-0 rounded-full bg-orange-100 p-1">
                      <Check className="h-5 w-5 text-orange-600" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-orange-100 to-orange-50 blur-2xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-2xl">
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
      <section className="bg-orange-600 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to scale your business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
            Join 5,000+ small businesses automating their workflow with boostBizFlow.
          </p>
          <div className="mt-8 flex justify-center space-x-4">

            <Link to="/signup">
              <Button size="lg" className="h-12 bg-white px-8 text-orange-600 hover:bg-orange-50">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 py-12">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-orange-600 font-bold mb-4">
             <Briefcase className="h-6 w-6" />
             <span>boostBizFlow</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 boostBizFlow. All rights reserved. Helping small businesses thrive.
          </p>
        </div>
      </footer>

    </div>
  );
}
