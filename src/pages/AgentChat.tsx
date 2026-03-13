import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Rocket, Target, Users, MessageSquare, Receipt, Shield, Zap, Send, 
  ArrowLeft, MoreVertical, Sparkles, User, Briefcase, Layout,
  Search, CheckCircle2, AlertCircle, Plus, Trash2, Mail, Phone, ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const agents = {
  visionary: { name: "The Visionary", icon: <Rocket className="h-5 w-5" />, color: "bg-violet-600", toolName: "Idea Validator" },
  webwizard: { name: "WebWizard", icon: <Layout className="h-5 w-5" />, color: "bg-cyan-600", toolName: "Site Builder" },
  "lead-magnet": { name: "LeadMagnet", icon: <Target className="h-5 w-5" />, color: "bg-rose-600", toolName: "Lead Search" },
  saleflow: { name: "SaleFlow", icon: <Users className="h-5 w-5" />, color: "bg-blue-600", toolName: "Basic CRM" },
  supportbot: { name: "SupportBot", icon: <MessageSquare className="h-5 w-5" />, color: "bg-emerald-600", toolName: "Support Desk" },
  ledgerlink: { name: "LedgerLink", icon: <Receipt className="h-5 w-5" />, color: "bg-amber-600", toolName: "Bookkeeper" },
  autopilot: { name: "AutoPilot", icon: <Zap className="h-5 w-5" />, color: "bg-fuchsia-600", toolName: "Automator" },
};

// --- Mock Data & Components ---

const IdeaValidatorTool = () => {
  const [idea, setIdea] = useState("");
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    setLoading(true);
    setTimeout(() => {
      setReport({
        score: 85,
        marketSize: "High ($2.5B Market)",
        pros: ["Low competition in niche", "High recurring revenue potential", "Scalable infrastructure"],
        cons: ["High initial customer acquisition cost", "Depends on third-party API"],
        verdict: "Strongly Recommended to prototype."
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="border-violet-100 shadow-sm">
        <CardHeader>
          <CardTitle className="text-violet-600 flex items-center">
            <Rocket className="mr-2 h-5 w-5" /> Business Idea Validation
          </CardTitle>
          <CardDescription>Describe your business concept for a deep AI analysis.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input 
            placeholder="e.g. A subscription box for urban gardening..." 
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="h-12 border-violet-100 focus:ring-violet-600"
          />
          <Button 
            onClick={validate} 
            disabled={!idea || loading}
            className="w-full bg-violet-600 hover:bg-violet-700"
          >
            {loading ? "Analyzing..." : "Analyze My Idea"}
          </Button>
        </CardContent>
      </Card>

      {report && (
        <Card className="border-emerald-100 bg-emerald-50/30 overflow-hidden">
          <div className="bg-emerald-600 p-4 text-white flex justify-between items-center">
            <span className="font-bold flex items-center"><CheckCircle2 className="mr-2 h-5 w-5" /> AI Validation Report</span>
            <Badge variant="secondary" className="bg-white text-emerald-600">Score: {report.score}/100</Badge>
          </div>
          <CardContent className="pt-6 space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Market Opportunity</p>
              <p className="text-lg font-bold text-slate-900">{report.marketSize}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Strengths</p>
                <ul className="text-sm space-y-1">
                  {report.pros.map((p: string, i: number) => <li key={i} className="flex items-center">• {p}</li>)}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider">Risks</p>
                <ul className="text-sm space-y-1">
                  {report.cons.map((p: string, i: number) => <li key={i} className="flex items-center">• {p}</li>)}
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-emerald-100">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Final Verdict</p>
              <p className="font-bold text-slate-900">{report.verdict}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

const LeadSearchTool = () => {
  const [query, setQuery] = useState("");
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState(50);

  const search = () => {
    if (credits <= 0) return;
    setLoading(true);
    setTimeout(() => {
      setLeads([
        { name: "John Doe", company: "TechNova", email: "j.doe@technova.com", linkedin: "#" },
        { name: "Sarah Smith", company: "GreenLine", email: "sarah@greenline.io", linkedin: "#" },
        { name: "Mike Ross", company: "Pearson Law", email: "mike@pearson.com", linkedin: "#" },
      ]);
      setCredits(prev => prev - 1);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="border-rose-100 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-rose-600 flex items-center">
              <Target className="mr-2 h-5 w-5" /> Lead Finder
            </CardTitle>
            <CardDescription>Find prospects by industry or role.</CardDescription>
          </div>
          <Badge variant="outline" className="border-rose-200 text-rose-600 font-bold">
            {credits} Search Credits Left
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input 
              placeholder="e.g. Marketing Managers in London..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 border-rose-100 focus:ring-rose-600"
            />
            <Button 
              onClick={search} 
              disabled={!query || loading || credits === 0}
              className="h-12 bg-rose-600 hover:bg-rose-700 px-6"
            >
              {loading ? <Zap className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
            </Button>
          </div>
        </CardContent>
      </Card>

      {leads.length > 0 && (
        <div className="space-y-4">
          <p className="text-sm font-semibold text-slate-500 uppercase px-2">Results Found</p>
          {leads.map((lead, i) => (
            <Card key={i} className="hover:border-rose-200 transition-colors">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
                    {lead.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{lead.name}</p>
                    <p className="text-xs text-slate-500">{lead.company}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="text-rose-600 hover:bg-rose-50 rounded-full">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-rose-600 hover:bg-rose-50 rounded-full">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const CRMTool = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice Wonderland", email: "alice@rabbit.hole", status: "Negotiation" },
    { id: 2, name: "Bob Builder", email: "bob@fixit.com", status: "Closed" },
    { id: 3, name: "Charlie Chocolate", email: "ceo@wonka.com", status: "Lead" },
  ]);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const addContact = () => {
    if (!newName || !newEmail) return;
    setContacts(prev => [...prev, { id: Date.now(), name: newName, email: newEmail, status: "Lead" }]);
    setNewName("");
    setNewEmail("");
  };

  const deleteContact = (id: number) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="border-blue-100 shadow-sm">
        <CardHeader>
          <CardTitle className="text-blue-600 flex items-center">
            <Users className="mr-2 h-5 w-5" /> Basic CRM Tools
          </CardTitle>
          <CardDescription>Manage your business contacts and sales pipeline.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="Full Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <Input placeholder="Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
          </div>
          <Button onClick={addContact} className="w-full bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add New Contact
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900">{contact.name}</p>
                <p className="text-xs text-slate-500">{contact.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className={`rounded-full px-3 ${contact.status === 'Closed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                {contact.status}
              </Badge>
              <Button onClick={() => deleteContact(contact.id)} variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-600 transition-opacity">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Chat Page Component ---

export default function AgentChat() {
  const { agentId } = useParams<{ agentId: keyof typeof agents }>();
  const agent = agentId && agents[agentId] ? agents[agentId] : agents.visionary;
  
  const [messages, setMessages] = useState([
    { role: "assistant", content: `Welcome to your business command center. I'm ${agent.name}. How can I help you automate your business processes today?` },
  ]);
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState<"chat" | "tool">("chat");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I've processed your request regarding your business operations. As ${agent.name}, I've analyzed the data and recommend we use our specialized tools to automate this specific workflow. Would you like to switch to the tool view?`,
        },
      ]);
    }, 1000);
  };

  const renderTool = () => {
    switch(agentId) {
      case 'visionary': return <IdeaValidatorTool />;
      case 'lead-magnet': return <LeadSearchTool />;
      case 'saleflow': return <CRMTool />;
      default: return (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-20">
          <div className="p-6 rounded-full bg-slate-100 text-slate-400">
            <AlertCircle className="h-12 w-12" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Tool Coming Soon</h3>
            <p className="text-slate-500">I'm currently working on building a custom tool for this agent.</p>
          </div>
          <Button onClick={() => setActiveTab('chat')} variant="outline">Back to Chat</Button>
        </div>
      );
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col bg-slate-50">
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm z-10">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center space-x-3">
            <div className={`rounded-xl p-2 text-white shadow-lg ${agent.color}`}>
              {agent.icon}
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">{agent.name}</h2>
              <div className="flex items-center text-xs font-medium text-emerald-600">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Operations Active
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-slate-100 p-1 rounded-full items-center">
          <button 
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${activeTab === 'chat' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Chat
          </button>
          <button 
            onClick={() => setActiveTab('tool')}
            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all flex items-center ${activeTab === 'tool' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Sparkles className="mr-1.5 h-3 w-3 text-violet-600" />
            {(agent as any).toolName || "Tool"}
          </button>
        </div>

        <div className="hidden sm:flex items-center space-x-2">
          <Button variant="outline" size="sm" className="rounded-full border-slate-200">
            <Briefcase className="mr-2 h-4 w-4 text-violet-600" />
            Settings
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreVertical className="h-5 w-5 text-slate-500" />
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative">
        {activeTab === 'chat' ? (
          <ScrollArea className="h-full px-4 py-8">
            <div ref={scrollRef} className="h-full overflow-y-auto">
              <div className="mx-auto max-w-3xl space-y-8 pb-8">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex items-start space-x-4 ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl shadow-sm ${msg.role === "user" ? "bg-violet-600 text-white" : "bg-white ring-1 ring-slate-200"}`}>
                      {msg.role === "user" ? <User className="h-6 w-6" /> : agent.icon}
                    </div>
                    <div className={`group relative max-w-[80%] rounded-2xl px-5 py-3 shadow-sm ${msg.role === "user" ? "bg-violet-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}>
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                      <span className={`absolute -bottom-6 text-[10px] font-medium text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 ${msg.role === "user" ? "right-0" : "left-0"}`}>
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        ) : (
          <ScrollArea className="h-full px-4 py-8">
            <div className="mx-auto max-w-3xl pb-10">
              {renderTool()}
            </div>
          </ScrollArea>
        )}
      </div>

      {/* Input Area (Only for Chat) */}
      {activeTab === 'chat' && (
        <div className="border-t bg-white p-4 sm:p-6">
          <div className="mx-auto max-w-3xl">
            <div className="relative flex items-center space-x-4">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={`Instruct ${agent.name}...`}
                className="h-14 rounded-2xl border-slate-200 bg-slate-50 pr-14 text-base focus-visible:ring-violet-600"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-xl bg-violet-600 p-0 text-white hover:bg-violet-700 disabled:bg-slate-200 transition-all"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="mt-3 text-center text-[10px] font-medium text-slate-500">
              Powered by <span className="text-violet-600 font-bold">BoostaBizFlow</span> Logic Engine. Private & Secure.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
