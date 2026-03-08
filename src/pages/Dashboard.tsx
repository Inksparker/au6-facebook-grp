import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Rocket, Target, Users, MessageSquare, Receipt, Zap, Sparkles, TrendingUp, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCurrency } from "@/context/CurrencyContext";

const agents = [
  {
    id: "visionary",
    name: "The Visionary",
    description: "Idea validation, market research, and business plan drafting.",
    icon: <Rocket className="h-6 w-6 text-orange-600" />,
    category: "Strategy",
    color: "bg-orange-50",
    status: "Premium",
  },
  {
    id: "webwizard",
    name: "WebWizard",
    description: "Build high-converting landing pages and websites in minutes.",
    icon: <Layout className="h-6 w-6 text-teal-600" />,
    category: "Growth",
    color: "bg-teal-50",
    status: "Premium",
  },
  {
    id: "lead-magnet",
    name: "LeadMagnet",

    description: "AI-driven prospect finding and automated outreach sequences.",
    icon: <Target className="h-6 w-6 text-red-600" />,
    category: "Sales",
    color: "bg-red-50",
    status: "Pro",
  },
  {
    id: "saleflow",
    name: "SaleFlow",
    description: "Manage your CRM, track pipeline, and close deals faster.",
    icon: <Users className="h-6 w-6 text-blue-600" />,
    category: "CRM",
    color: "bg-blue-50",
    status: "Pro",
  },
  {
    id: "supportbot",
    name: "SupportBot",
    description: "24/7 customer support that knows your products inside out.",
    icon: <MessageSquare className="h-6 w-6 text-emerald-600" />,
    category: "Support",
    color: "bg-emerald-50",
    status: "Free",
  },
  {
    id: "ledgerlink",
    name: "LedgerLink",
    description: "Automatic expense categorization and monthly tax prep.",
    icon: <Receipt className="h-6 w-6 text-amber-600" />,
    category: "Finance",
    color: "bg-amber-50",
    status: "Premium",
  },
  {
    id: "autopilot",
    name: "AutoPilot",
    description: "Connect your tools and automate recurring business tasks.",
    icon: <Zap className="h-6 w-6 text-purple-600" />,
    category: "Automation",
    color: "bg-purple-50",
    status: "Pro",
  },
];

export default function Dashboard() {
  const { formatPrice } = useCurrency();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 pb-12 pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Business Command Center</h1>
            <p className="mt-2 text-slate-600">Your AI workforce is ready to streamline your operations.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search business tools..."
              className="h-12 w-full rounded-2xl border-slate-200 bg-white pl-10 focus:ring-orange-600"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center space-x-4 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-orange-100 p-3">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase">Growth This Month</p>
              <p className="text-2xl font-bold text-slate-900">+24% Efficiency</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-blue-100 p-3">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase">Current Plan</p>
              <p className="text-2xl font-bold text-slate-900">Pro ({formatPrice(49)}/mo)</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-amber-100 p-3">
              <Sparkles className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase">Est. Monthly Savings</p>
              <p className="text-2xl font-bold text-slate-900">{formatPrice(1250)}</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Card key={agent.id} className="group overflow-hidden rounded-3xl border-none bg-white shadow-xl shadow-slate-200/60 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-100">
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
                  <Button className="w-full h-12 rounded-2xl bg-orange-600 font-bold tracking-wide hover:bg-orange-700 shadow-lg shadow-orange-100 transition-transform active:scale-95">
                    Launch Tool
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
