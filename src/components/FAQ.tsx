import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

type FAQItem = {
  question: string
  answer: string | React.ReactNode
  value: string
}

type FAQProps = {
  title?: string
  items: FAQItem[]
}

export default function FAQ({ title = 'Preguntas frecuentes', items }: FAQProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="text-center">
        <h2 className="font-bold text-slate-900 text-[2.4rem]">{title}</h2>
      </header>
      <div className="mt-10">
        <Accordion type="single" collapsible className="w-full divide-y divide-slate-200/70">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="">
              <AccordionTrigger className="text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-8 text-base text-slate-700">
                {typeof item.answer === 'string' ? (
                  <p className="max-w-3xl leading-7">{item.answer}</p>
                ) : (
                  item.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}


