import { PageContainer } from "@/components/layout/container";
import { PRICING_PLANS } from "@/constants/pricing";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/constants/links";

export default function PricingPage() {
  return (
    <div className="py-12">
      <PageContainer className="py-14 max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you. Start learning smarter
            today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="rounded-3xl bg-accent/50 p-8 flex flex-col relative overflow-hidden"
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl">
                  POPULAR
                </div>
              )}
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-medium font-mono">
                    {plan.name}
                  </h2>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-light">
                    {plan.price === 0 ? "Free" : `$${plan.price}`}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">
                      /{plan.period}
                    </span>
                  )}
                </div>
                {plan.oldMonthlyPrice > 0 && (
                  <div className="text-muted-foreground line-through text-sm mt-1">
                    ${plan.oldMonthlyPrice}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.id} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                className="w-full h-12 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                <a href={LINKS.apple} target="_blank" rel="noopener noreferrer">
                  {plan.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include a 7-day free trial. Cancel anytime.
        </p>
      </PageContainer>
    </div>
  );
}
