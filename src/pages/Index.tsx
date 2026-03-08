import { Button } from "@/components/ui/button";
import { Check, Sparkles, Brain, Code, PenTool, Database, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-white px-3 py-1 text-sm font-medium text-indigo-700 shadow-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Next Generation AI Agent Marketplace</span>
            </div>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
              Scale Your Productivity with <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Expert AI Agents</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-slate-600 sm:text-xl">
              Access a library of specialized AI agents for coding, writing, research, and analysis. One subscription, unlimited possibilities.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="h-12 rounded-full bg-indigo-600 px-8 text-lg hover:bg-indigo-700">
                  Get Started for Free
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="h-12 rounded-full border-indigo-200 px-8 text-lg hover:bg-indigo-50">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-indigo-100">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <span className="font-semibold text-slate-900">Research</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-indigo-100">
                <Code className="h-8 w-8 text-emerald-600" />
              </div>
              <span className="font-semibold text-slate-900">Development</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-indigo-100">
                <PenTool className="h-8 w-8 text-amber-600" />
              </div>
              <span className="font-semibold text-slate-900">Creative</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-2xl bg-white p-4 shadow-xl shadow-indigo-100">
                <Database className="h-8 w-8 text-rose-600" />
              </div>
              <span className="font-semibold text-slate-900">Data Analysis</span>
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
                Powerful Agents for Every Task
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Our platform hosts a diverse range of AI agents specialized in specific domains. Whether you need a code reviewer, a technical writer, or a market analyst, we have you covered.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Specialized knowledge in 50+ domains",
                  "Fast response times with low latency",
                  "Secure and private interactions",
                  "Seamless integration with your workflow",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700">
                    <div className="flex-shrink-0 rounded-full bg-indigo-100 p-1">
                      <Check className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-100 to-indigo-50 blur-2xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                  alt="AI Platform Interface"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-indigo-600 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to augment your capabilities?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Join thousands of professionals using AgentHub to do more with AI.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link to="/signup">
              <Button size="lg" className="h-12 bg-white px-8 text-indigo-600 hover:bg-indigo-50">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 py-12">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-indigo-600 font-bold mb-4">
             <BrainCircuit className="h-6 w-6" />
             <span>AgentHub</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 AgentHub. All rights reserved. Built for the future of work.
          </p>
        </div>
      </footer>
    </div>
  );
}
