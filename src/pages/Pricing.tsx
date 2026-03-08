import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for exploring our AI capabilities.",
      features: [
        "Access to 3 basic agents",
        "100 messages per month",
        "Community support",
        "Web access only",
      ],
      buttonText: "Start for Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "Ideal for professionals and power users.",
      features: [
        "Access to all 50+ agents",
        "Unlimited messages",
        "Priority support",
        "Early access to new agents",
        "API access (beta)",
      ],
      buttonText: "Get Pro Access",
      popular: true,
    },
    {
      name: "Team",
      price: "$99",
      description: "Best for teams scaling their output.",
      features: [
        "Everything in Pro",
        "Custom agent training",
        "Team collaboration tools",
        "Dedicated account manager",
        "Custom integrations",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Choose the plan that's right for you
          </p>
          <p className="mt-4 text-xl text-slate-600">
            Simple, transparent pricing. No hidden fees.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`relative flex flex-col rounded-3xl border-2 transition-all hover:shadow-xl ${tier.popular ? 'border-indigo-600 shadow-indigo-100 scale-105' : 'border-white'}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription className="text-slate-600">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-slate-900">{tier.price}</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/signup" className="w-full">
                  <Button className={`w-full rounded-xl py-6 text-lg font-semibold ${tier.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'}`}>
                    {tier.buttonText}
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
