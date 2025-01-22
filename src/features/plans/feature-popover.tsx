import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {Check} from "lucide-react";
import {plans} from "@/data/plans";

interface FeatureProps {
    feature: typeof plans[0]['features'][0];
}

const FeaturePopover = ({ feature }: FeatureProps) => {
    return (
        <Popover>
            <PopoverTrigger className={"flex items-center gap-2 text-sm cursor-pointer group"}>
                <Check size={16} className={"flex-shrink-0"}/>
                <span className={"text-left group-hover:underline"}>{feature.title}</span>
                <span className={"text-[10px] text-foreground/75 -ms-1 -mt-1"}> ? </span>
            </PopoverTrigger>
            <PopoverContent className={"text-sm bg-background border w-96"}>
                {feature.description}
            </PopoverContent>
        </Popover>
    )
}
export default FeaturePopover
