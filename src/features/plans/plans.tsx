import {plans} from "@/data/plans";
import {Button} from "@/components/ui/button";
import FeaturePopover from "@/features/plans/feature-popover";

const Plans = () => {
    return (
        <div className="w-full flex flex-col items-center gap-8">
            {plans.map(plan =>
                <Plan key={plan.name} plan={plan}/>
            )}
        </div>
    )
}

interface PlanProps {
    plan: typeof plans[0];
}

const Plan = ({plan}: PlanProps) => {
    return (
        <div className="relative border rounded-lg p-8 space-y-4 w-full scroll-animate">
            <div className="w-full flex flex-col sm:flex-row items-stretch gap-4">
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-8 text-center sm:text-left">
                        O que está incluído no plano <span className="text-primary">{plan.name}</span>
                    </h3>

                    <div className="grid sm:grid-rows-3 grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pb-4">
                        {plan.features.map(feature =>
                            <FeaturePopover key={feature.title} feature={feature}/>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 text-center">
                    <div>
                        <h4 className="text-5xl font-bold">
                            {plan.price}€
                        </h4>
                        <span className="text-sm text-muted-foreground">
                            A cada {plan.periodicity}
                        </span>
                    </div>
                    <Button variant="contrast" className="h-12 px-16 w-full" asChild>
                        <a href="https://signup-teamlino.mkgest.com/" target="_blank" rel="noreferrer nofollow">
                            Aderir
                        </a>
                    </Button>
                </div>

                {plan.saving > 0 &&
                    <SavingBadge savingPercentage={plan.saving} className="absolute top-0 right-8"/>
                }
            </div>
        </div>
    )
}

const SavingBadge = ({savingPercentage, className}: { savingPercentage: number, className?: string }) => {
    return (
        <div
            className={`rounded-b-lg bg-gradient-to-tr from-primary via-primary to-white px-4 py-2 text-xs font-semibold text-white ${className}`}>
            Poupa {savingPercentage}%!
        </div>
    )
}

export default Plans;