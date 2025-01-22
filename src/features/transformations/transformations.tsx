import Image from 'next/image'
import {transformations} from "@/data/transformations";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Transformations = () => {
    return (
        <Carousel className={"w-10/12 md:w-8/12 lg:w-6/12 mx-auto"} >
            <CarouselContent className={""}>

                {transformations.map(transformation =>
                    <TransformationCard key={transformation.id} transformation={transformation}/>
                )}

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}

export default Transformations;

interface TransformationCardProps {
    transformation: typeof transformations[0];
}

const TransformationCard = ({transformation}: TransformationCardProps) => {

    return (
        <CarouselItem className={"flex aspect-video"}>
            <Image
                loading={"lazy"}
                src={transformation.image}
                alt={""}
                width={375}
                height={325}
                className={"flex-1 rounded-lg object-contain"}
                sizes={"(max-width: 640px) 80vw, 40vw"}
            />
        </CarouselItem>
    )
}