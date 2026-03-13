import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, Rocket, Target, Users, MessageSquare, Receipt, Zap, 
  Sparkles, TrendingUp, Layout, ShieldCheck, Globe2, Palette, Lock 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCurrency } from "@/context/CurrencyContext";

const agents = [
  // Free Tier
  {
    id: "supportbot",
    name: "SupportBot",
    description: "24/7 basic customer support and FAQ automation.",
    icon: <MessageSquare className="h-6 w-6 text-emerald-600" />,
    category: "Support",
    color: "bg-emerald-50",
    status: "Free",
  },
  {
    id: "visionary",
    name: "The Visionary",
    description: "Free business idea validation and market niche analysis.",
    icon: <Rocket className="h-6 w-6 text-violet-600" />,
    category: "Strategy",
    color: "bg-violet-50",
    status: "Free",
  },
  {
    id: "lead-magnet",
    name: "LeadMagnet",
    description: "Search for leads (50/mo limit) and automate outreach.",
    icon: <Target className="h-6 w-6 text-rose-600" />,
    category: "Sales",
    color: "bg-rose-50",
    status: "Free",
  },
  {
    id: "saleflow",
    name: "SaleFlow",
    description: "Manage your business contacts and basic sales pipeline.",
    icon: <Users className="h-6 w-6 text-blue-600" />,
    category: "CRM",
    color: "bg-blue-50",
    status: "Free",
  },
  // Pro Tier
  {
    id: "legaleagle",
    name: "LegalEagle Pro",
    description: "Full library of downloadable & customizable business legal documents.",
    icon: <ShieldCheck className="h-6 w-6 text-slate-700" />,
    category: "Legal",
    color: "bg-slate-100",
    status: "Pro",
    powerful: true,
  },
  {
    id: "autopilot",
    name: "AutoPilot Pro",
    description: "Advanced cross-platform workflow automation and custom integrations.",
    icon: <Zap className="h-6 w-6 text-fuchsia-600" />,
    category: "Automation",
    color: "bg-fuchsia-50",
    status: "Pro",
    powerful: true,
  },
  {
    id: "brandmaster",
    name: "BrandMaster Pro",
    description: "AI brand identity builder, social media kits, and content strategy.",
    icon: <Palette className="h-6 w-6 text-orange-600" />,
    category: "Marketing",
    color: "bg-orange-50",
    status: "Pro",
    powerful: true,
  },
  // Premium Tier
  {
    id: "webwizard",
    name: "WebWizard Elite",
    description: "Multi-page site building, custom domains, and e-commerce integration.",
    icon: <Layout className="h-6 w-6 text-cyan-600" />,
    category: "Growth",
    color: "bg-cyan-50",
    status: "Premium",
    powerful: true,
  },
  {
    id: "ledgerlink",
    name: "LedgerLink AI",
    description: "Full double-entry bookkeeping, tax forecasting, and audit protection.",
    icon: <Receipt className="h-6 w-6 text-amber-600" />,
    category: "Finance",
    color: "bg-amber-50",
    status: "Premium",
    powerful: true,
  },
  {
    id: "globalscale",
    name: "GlobalScale Premium",
    description: "International expansion strategy and multi-region compliance mapping.",
    icon: <Globe2 className="h-6 w-6 text-indigo-600" />,
    category: "Scale",
    color: "bg-indigo-50",
    status: "Premium",
    powerful: true,
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
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Business Command Center</h1>
            <p className="mt-2 text-slate-600 font-medium">Empower your business with specialized AI agents.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search agents & tools..."
              className="h-12 w-full rounded-2xl border-slate-200 bg-white pl-10 focus:ring-violet-600 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Categories / Tabs */}
        <div className="mb-8 flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          <Badge className="bg-violet-600 hover:bg-violet-700 cursor-pointer px-4 py-1.5 rounded-full whitespace-nowrap">All Services</Badge>
          <Badge variant="outline" className="border-slate-200 bg-white hover:bg-slate-50 text-slate-600 cursor-pointer px-4 py-1.5 rounded-full whitespace-nowrap">Free Tools</Badge>
          <Badge variant="outline" className="border-slate-200 bg-white hover:bg-slate-50 text-slate-600 cursor-pointer px-4 py-1.5 rounded-full whitespace-nowrap">Pro Powerups</Badge>
          <Badge variant="outline" className="border-slate-200 bg-white hover:bg-slate-50 text-slate-600 cursor-pointer px-4 py-1.5 rounded-full whitespace-nowrap">Elite Systems</Badge>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Card key={agent.id} className="group overflow-hidden rounded-3xl border-none bg-white shadow-xl shadow-slate-200/60 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-100 relative">
              {agent.powerful && (
                <div className="absolute top-4 right-4 z-10">
                   <div className="bg-gradient-to-r from-violet-600 to-blue-600 text-white p-1.5 rounded-xl shadow-lg animate-pulse">
                     <Sparkles className="h-4 w-4" />
                   </div>
                </div>
              )}
              <CardHeader className={`${agent.color} pb-8 transition-colors group-hover:brightness-95`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-2xl bg-white p-3 shadow-md ring-1 ring-slate-200/50">
                    {agent.icon}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`bg-white/90 backdrop-blur-sm font-bold rounded-full px-3 ${
                      agent.status === 'Free' ? 'text-emerald-600' : 
                      agent.status === 'Pro' ? 'text-blue-600' : 'text-amber-600'
                    }`}
                  >
                    {agent.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-violet-900 transition-colors">{agent.name}</CardTitle>
                <CardDescription className="text-slate-600 font-bold uppercase text-[10px] tracking-widest">{agent.category}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 h-24">
                <p className="text-slate-600 leading-relaxed line-clamp-2 font-medium">
                  {agent.description}
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <Link to={`/chat/${agent.id}`} className="w-full">
                  <Button className={`w-full h-12 rounded-2xl font-bold tracking-wide transition-all active:scale-95 shadow-lg ${
                    agent.status === 'Free' ? 'bg-white border-2 border-emerald-100 text-emerald-600 hover:bg-emerald-50' :
                    agent.status === 'Pro' ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:brightness-110 shadow-violet-100' :
                    'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'
                  }`}>
                    {agent.status === 'Free' ? 'Access Tool' : 'Launch Powerful Agent'}
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
