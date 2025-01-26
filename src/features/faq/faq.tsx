import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {faq} from "@/data/faq";

const Faq = () => {

    return (
        <Accordion type="multiple">

            {faq.map((item, index) => 
                <AccordionItem key={item.question} value={`item-${index + 1}`} className={`scroll-animate delay-[${index * 400}]`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            )}

        </Accordion>
    )
}

export default Faq;
