import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FaqData } from '@/data/faq'

function Faq() {
    return (
        <Accordion type="single" collapsible>
            {FaqData.map((data, index) => (
                <AccordionItem key={index} value={data.faqId}>
                    <AccordionTrigger>{data.faqQuestion}</AccordionTrigger>
                    <AccordionContent>
                        {data.faqAnswer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default Faq