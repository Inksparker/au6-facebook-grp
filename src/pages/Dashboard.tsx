import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Brain, Code, PenTool, Database, MessageSquare, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const agents = [
  {
    id: "researcher",
    name: "Dr. Analyst",
    description: "Deep research and competitive analysis expert.",
    icon: <Brain className="h-6 w-6 text-indigo-600" />,
    category: "Research",
    color: "bg-indigo-50",
    status: "Premium",
  },
  {
    id: "coder",
    name: "ByteWise",
    description: "Full-stack code assistant and debugger.",
    icon: <Code className="h-6 w-6 text-emerald-600" />,
    category: "Development",
    color: "bg-emerald-50",
    status: "Pro",
  },
  {
    id: "writer",
    name: "WordSmith",
    description: "Creative copywriter and technical editor.",
    icon: <PenTool className="h-6 w-6 text-amber-600" />,
    category: "Writing",
    color: "bg-amber-50",
    status: "Free",
  },
  {
    id: "data",
    name: "DataMancer",
    description: "Extract insights from complex datasets.",
    icon: <Database className="h-6 w-6 text-rose-600" />,
    category: "Data",
    color: "bg-rose-50",
    status: "Premium",
  },
  {
    id: "legal",
    name: "LexiGuard",
    description: "Legal document review and summarization.",
    icon: <Shield className="h-6 w-6 text-slate-600" />,
    category: "Legal",
    color: "bg-slate-50",
    status: "Enterprise",
  },
  {
    id: "support",
    name: "HelpHub",
    description: "Customer support specialist and FAQ builder.",
    icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
    category: "Support",
    color: "bg-blue-50",
    status: "Pro",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 pb-12 pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Agent Marketplace</h1>
            <p className="mt-2 text-slate-600">Choose an expert agent to assist you today.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search agents..."
              className="h-12 w-full rounded-2xl border-slate-200 bg-white pl-10 focus:ring-indigo-600"
            />
          </div>
        </div>

        {/* Stats / Banner */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center space-x-4 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-indigo-100 p-3">
              <Zap className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase">Usage This Month</p>
              <p className="text-2xl font-bold text-slate-900">42 / 500 Messages</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-emerald-100 p-3">
              <Shield className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase">Subscription</p>
              <p className="text-2xl font-bold text-slate-900">Pro Plan</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-amber-100 p-3">
              <Brain className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase">Active Agents</p>
              <p className="text-2xl font-bold text-slate-900">12 Agents Available</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Card key={agent.id} className="group overflow-hidden rounded-3xl border-none bg-white shadow-xl shadow-slate-200/60 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-100">
              <CardHeader className={`${agent.color} pb-8`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200/50">
                    {agent.icon}
                  </div>
                  <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-slate-700 font-medium rounded-full px-3">
                    {agent.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{agent.name}</CardTitle>
                <CardDescription className="text-slate-600 font-medium">{agent.category}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-slate-600 leading-relaxed">
                  {agent.description}
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <Link to={`/chat/${agent.id}`} className="w-full">
                  <Button className="w-full h-12 rounded-2xl bg-indigo-600 font-bold tracking-wide hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-transform active:scale-95">
                    Launch Agent
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
