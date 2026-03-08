import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Rocket, Target, Users, MessageSquare, Receipt, Shield, Zap, Send, ArrowLeft, MoreVertical, Sparkles, User, Briefcase, Layout } from "lucide-react";

const agents = {
  visionary: { name: "The Visionary", icon: <Rocket className="h-5 w-5" />, color: "bg-orange-600" },
  webwizard: { name: "WebWizard", icon: <Layout className="h-5 w-5" />, color: "bg-teal-600" },
  "lead-magnet": { name: "LeadMagnet", icon: <Target className="h-5 w-5" />, color: "bg-red-600" },
  saleflow: { name: "SaleFlow", icon: <Users className="h-5 w-5" />, color: "bg-blue-600" },

  supportbot: { name: "SupportBot", icon: <MessageSquare className="h-5 w-5" />, color: "bg-emerald-600" },
  ledgerlink: { name: "LedgerLink", icon: <Receipt className="h-5 w-5" />, color: "bg-amber-600" },
  autopilot: { name: "AutoPilot", icon: <Zap className="h-5 w-5" />, color: "bg-purple-600" },
};

export default function AgentChat() {
  const { agentId } = useParams<{ agentId: keyof typeof agents }>();
  const agent = agentId && agents[agentId] ? agents[agentId] : agents.visionary;
  
  const [messages, setMessages] = useState([
    { role: "assistant", content: `Welcome to your business command center. I'm ${agent.name}. How can I help you automate your business processes today?` },
  ]);
  const [input, setInput] = useState("");
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
          content: `I've processed your request regarding your business operations. As ${agent.name}, I've analyzed the data and recommend we automate this specific workflow to save you approximately 4 hours per week. Should I set up the integration?`,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col bg-slate-50">
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">
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
                <span className="mr-1.5 h-2 w-2 rounded-full bg-emerald-500"></span>
                Operations Active
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="hidden rounded-full border-slate-200 sm:flex">
            <Briefcase className="mr-2 h-4 w-4 text-orange-600" />
            Business Settings
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreVertical className="h-5 w-5 text-slate-500" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full px-4 py-8">
           <div ref={scrollRef} className="h-full overflow-y-auto">
            <div className="mx-auto max-w-3xl space-y-8 pb-8">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start space-x-4 ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl shadow-sm ${msg.role === "user" ? "bg-orange-600 text-white" : "bg-white ring-1 ring-slate-200"}`}>
                    {msg.role === "user" ? <User className="h-6 w-6" /> : agent.icon}
                  </div>
                  <div className={`group relative max-w-[80%] rounded-2xl px-5 py-3 shadow-sm ${msg.role === "user" ? "bg-orange-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}>
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
      </div>

      {/* Input */}
      <div className="border-t bg-white p-4 sm:p-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative flex items-center space-x-4">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={`Instruct ${agent.name}...`}
              className="h-14 rounded-2xl border-slate-200 bg-slate-50 pr-14 text-base focus-visible:ring-orange-600"
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim()}
              className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-xl bg-orange-600 p-0 text-white hover:bg-orange-700 disabled:bg-slate-200"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <p className="mt-3 text-center text-[10px] font-medium text-slate-400">
            Powered by BizFlow Business Logic Engine. Private & Secure.
          </p>
        </div>
      </div>
    </div>
  );
}
