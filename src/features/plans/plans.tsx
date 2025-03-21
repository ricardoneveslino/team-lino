import {plans} from "@/data/plans";
import {Button} from "@/components/ui/button";
import {Check} from "lucide-react";
import {TeamLinoLogo} from "@/components/team-lino-logo";
import FeaturePopover from "@/features/plans/feature-popover";

const Plans = () => {

    return (
        <div className={"w-full flex flex-col items-center gap-8"}>

            {plans.map(plan =>
                <Plan key={plan.name} plan={plan}/>
            )}

            <span> Ou </span>

            <div className={`flex flex-col items-center gap-8 border rounded-lg p-8 scroll-animate`}>
                <h3 className={"text-xl font-bold mb-2 text-center flex flex-col items-center gap-2"}>
                    <span> Pack Especial </span>
                    <TeamLinoLogo />
                </h3>
                <div className={"flex flex-col items-center gap-2"}>
                    <div className={"flex items-center gap-2 text-sm"}>
                        <Check size={16} className={"flex-shrink-0"}/>
                        <span> Treino presencial com os Linos </span>
                    </div>
                    <div className={"flex items-center gap-2 text-sm"}>
                        <Check size={16} className={"flex-shrink-0"}/>
                        <span> Avaliação do Shape </span>
                    </div>
                </div>

                <div className={"flex flex-col justify-center items-center gap-4 text-center"}>
                    <h4 className={"text-5xl font-bold"}>
                        75€
                    </h4>
                    <Button variant={"contrast"} className={"h-12 px-16 w-full"} asChild>
                        <a href={"https://signup-teamlino.mkgest.com"} target={"_blank"} rel={"noreferrer nofolow"}>
                            Aderir
                        </a>
                    </Button>
                </div>
            </div>

        </div>
    )
}

interface PlanProps {
    plan: typeof plans[0];
}

const Plan = ({plan}: PlanProps) => {

    return (
        <div className={`relative border rounded-lg p-8 space-y-4 w-full scroll-animate`}>
            <div className={"w-full flex flex-col sm:flex-row items-stretch gap-4"}>
                <div className={"flex-1"}>

                    <h3 className={"text-xl font-bold mb-8 text-center sm:text-left"}>
                        O que está incluído no plano <span className={"text-primary"}>{plan.name}</span>
                    </h3>

                    <div className={"grid sm:grid-rows-3 grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pb-4"}>

                        {plan.features.map(feature =>
                            <FeaturePopover key={feature.title} feature={feature}/>
                        )}

                    </div>

                </div>
                <div className={"flex flex-col justify-center items-center gap-4 text-center"}>
                    <div>
                        <h4 className={"text-5xl font-bold"}>
                            {plan.price}€
                        </h4>
                        <span className={"text-sm"}>
                        A cada {plan.periodicity}
                    </span>
                    </div>
                    <Button variant={"contrast"} className={"h-12 px-16 w-full"} asChild>
                        <a href={"https://signup-teamlino.mkgest.com"} target={"_blank"} rel={"noreferrer nofolow"}>
                            Aderir
                        </a>
                    </Button>
                </div>
                {plan.saving > 0 &&
                    <SavingBadge savingPercentage={plan.saving} className={"absolute top-0 right-8"}/>
                }
            </div>
            {plan.specialOffer && <p className={"text-center sm:text-left text-sm m-1"}>
                <span className={"font-semibold text-primary"}> Oferta Especial: </span> {plan.specialOffer}
            </p>}
        </div>

    )
}

export default Plans;

const SavingBadge = ({savingPercentage, className}: { savingPercentage: number, className?: string }) => {
    return (
        <div
            className={`rounded-b-lg bg-gradient-to-tr from-primary via-primary to-white px-4 py-2 text-xs font-semibold ${className}`}>
            Poupa {savingPercentage}%!
        </div>
    )
}