import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCurrency } from "@/context/CurrencyContext";

export default function Pricing() {
  const { formatPrice } = useCurrency();

  const tiers = [
    {
      name: "Solopreneur",
      basePrice: 0,
      description: "Ideal for starting your business journey.",
      features: [
        "Access to SupportBot",
        "Business Idea Validation",
        "Up to 50 Lead searches/mo",
        "Basic CRM tools",
      ],
      buttonText: "Start Free",
      popular: false,
    },
    {
      name: "Business Pro",
      basePrice: 49,
      description: "Everything you need to automate & grow.",
      features: [
        "All Basic features",
        "Unlimited Lead Generation",
        "Full CRM & Sales Flow",
        "Automated Bookkeeping",
        "Process Automation (Zapier style)",
      ],
      buttonText: "Scale My Business",
      popular: true,
    },
    {
      name: "Agency / Enterprise",
      basePrice: 199,
      description: "For teams and high-volume operations.",
      features: [
        "Everything in Pro",
        "Custom Legal Tool drafting",
        "Advanced API access",
        "Multi-user collaboration",
        "Priority 24/7 human backup",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase">Business Pricing</h2>
          <p className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Investment in your time.
          </p>
          <p className="mt-4 text-xl text-slate-600">
            Automate your back-office and focus on what matters.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`relative flex flex-col rounded-3xl border-2 transition-all hover:shadow-xl ${tier.popular ? 'border-orange-600 shadow-orange-100 scale-105' : 'border-white'}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-600 px-4 py-1 text-sm font-semibold text-white">
                  Best Value
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription className="text-slate-600">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-slate-900">{formatPrice(tier.basePrice)}</span>
                  <span className="text-slate-600">/mo</span>
                </div>
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-orange-600" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/signup" className="w-full">
                  <Button className={`w-full rounded-xl py-6 text-lg font-semibold ${tier.popular ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50'}`}>
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
