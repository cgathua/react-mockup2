import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

function FAQs() {
    return (
        <section id="faq">
            <h2>FAQs</h2>
            <div className="container">
                <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                    <Accordion.Item className="AccordionItem" value="item-1">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>Is an extended warranty available?</span>
                            <ChevronDownIcon className="AccordionChevron" />
                        </Accordion.Trigger>
                        <Accordion.Content className="AccordionContent">
                            Yes, depending on the device, options to extend the warranty beyond the included 90 days, are available at checkout.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-2">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>How long does shipping take?</span>
                            <ChevronDownIcon className="AccordionChevron" />
                        </Accordion.Trigger>
                        <Accordion.Content className="AccordionContent">
                            Orders are shipped within 24hrs via Free Ground shipping or USPS.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-3">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>Are the devices factory refurbished?</span>
                            <ChevronDownIcon className="AccordionChevron" aria-hidden />
                        </Accordion.Trigger>
                        <Accordion.Content className="AccordionContent">
                            No, the phones are refurbished by our highly trained technicians.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-4">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>Are the parts used in repairs new?</span>
                            <ChevronDownIcon className="AccordionChevron" aria-hidden />
                        </Accordion.Trigger>
                        <Accordion.Content className="AccordionContent">
                            Yes, all parts used in repairs are new oem.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-5">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>Do you accept returns?</span>
                            <ChevronDownIcon className="AccordionChevron" aria-hidden />
                        </Accordion.Trigger>
                        <Accordion.Content className="AccordionContent">
                            All sales are final, unless you receive a non-working unit.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-6">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>Are the phones carrier locked?</span>
                            <ChevronDownIcon className="AccordionChevron" aria-hidden />
                        </Accordion.Trigger>
                        <Accordion.Content className="AccordionContent">
                            No, all phones are unlocked and can be used with any provider.
                        </Accordion.Content>
                    </Accordion.Item>

                </Accordion.Root>
            </div>
        </section>
    );
};

export default FAQs