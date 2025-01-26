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
        <Carousel className={"w-full max-w-[800px] mx-auto flex items-center justify-center scroll-animate"} opts={{loop: true}}>

            <CarouselPrevious
                className={
                    "hidden sm:flex relative left-0 rounded border-none z-20 bg-background/10 hover:bg-background/20 h-full p-2"
                }
            />

            <div className={"mask-fade"}>
                <CarouselContent>

                    {transformations.map(transformation =>
                        <TransformationCard key={transformation.id} transformation={transformation}/>
                    )}

                </CarouselContent>
            </div>

            <CarouselNext
                className={
                    "hidden sm:flex relative right-0 rounded border-none z-20 bg-background/10 hover:bg-background/20 h-full p-2"
                }
            />
        </Carousel>

    )
}

export default Transformations;

interface TransformationCardProps {
    transformation: typeof transformations[0];
}

const TransformationCard = ({transformation}: TransformationCardProps) => {

    return (
        <CarouselItem className={"basis-auto aspect-square w-8/12 flex justify-center items-center"}>
            <Image
                loading={"lazy"}
                src={transformation.image}
                alt={""}
                width={1000}
                height={1000}
                className={"object-cover"}
                sizes={"60vh"}
            />
        </CarouselItem>
    )
}