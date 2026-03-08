import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-violet-100 bg-white p-8 shadow-xl shadow-violet-50 sm:p-12">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-4 rounded-2xl bg-violet-600 p-3 text-white shadow-lg shadow-violet-200">
              <Zap className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
            <p className="mt-2 text-slate-600">Log in to manage your business operations</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                required
                className="h-12 rounded-xl border-slate-200 focus:border-violet-600 focus:ring-violet-600"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" text-slate-700 font-medium className="text-slate-700 font-medium">Password</Label>
                <Link to="#" className="text-sm font-medium text-violet-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="h-12 rounded-xl border-slate-200 focus:border-violet-600 focus:ring-violet-600"
              />
            </div>
            <Button type="submit" className="h-12 w-full rounded-xl bg-violet-600 text-lg font-semibold hover:bg-violet-700 transition-all active:scale-95 shadow-lg shadow-violet-100">
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-violet-600 hover:underline">
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
