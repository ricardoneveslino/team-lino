import React from 'react'
import Image from 'next/image'
import {transformations} from "@/data/transformations";

export const Transformations = () => {
    return (
        <div className={"w-full grid justify-items-center gap-2 md:gap-4 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}>

            {transformations.map(transformation =>
                <TransformationCard key={transformation.id} transformation={transformation}/>
            )}

        </div>
    )
}

interface TransformationCardProps {
    transformation: typeof transformations[0];
}

const TransformationCard = ({transformation}: TransformationCardProps) => {

    return (
        <div className={"flex flex-col gap-2 rounded-lg p-4 bg-gradient-to-tr from-primary/10 to-background shadow-lg shadow-primary/10 hover:scale-105 transition-all"}>
            <Image
                src={transformation.image}
                alt={""}
                width={375}
                height={325}
                className={"rounded-lg h-auto w-auto"}
            />
        </div>
    )
}