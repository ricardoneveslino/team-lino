import React from 'react'
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className={"w-full flex flex-col sm:flex-row gap-4 justify-start items-start"}>
            <div className={"flex-1 flex gap-4"}>
                <div className={"flex-1 flex"}>
                    <p className={"text-balance text-center sm:text-left"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est augue, lacinia sed vehicula
                        quis, ultricies ut velit. Duis interdum lectus quam, quis luctus urna tempus et. In tortor
                        ipsum, tincidunt in pellentesque non, vestibulum ac nisl. Morbi feugiat vitae metus id
                        pellentesque. Duis fermentum enim vitae ipsum laoreet euismod non eu libero.
                    </p>
                </div>
            </div>
            <div className={"flex-1 flex gap-2"}>
                <div className={"flex-1"}>
                    <Image
                        loading={"lazy"}
                        src="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/ricardo_e_andre.jpeg"
                        alt="Ricardo Lino e André Lino"
                        width={600}
                        height={600}
                        quality={50}
                        sizes={"(max-width: 640px) 50vw, 25vw"}
                    />
                </div>
                <div className={"flex-1"}>
                    <Image
                        loading={"lazy"}
                        src="https://oemzduzzsdzlouednwio.supabase.co/storage/v1/object/public/team_lino_website/team_lino.png"
                        alt="Ricardo Lino e André Lino"
                        width={600}
                        height={600}
                        quality={50}
                        sizes="(max-width: 640px) 50vw, 25vw"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
