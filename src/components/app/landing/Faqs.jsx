import { Box, Container, Accordion, Span, Stack } from "@chakra-ui/react";
import H2Heading from "./H2Heading";
import HeadingMarker from "./HeadingMarker";

export default function Faqs() {
  const FAQS = [
    {
      value: "get-started",
      title: "How do we start working together on my website?",
      text: "Just send me a message with your idea or business needs. I’ll arrange a quick chat to understand your goals, suggest the best approach, and then get started on the design and development process.",
    },
    {
      value: "cost-of-website",
      title: "How much will my website cost?",
      text: "Pricing depends on the type of website (portfolio, business site, e-commerce, etc.), the number of pages, and the features you’d like. I offer flexible packages starting from ₦30,000 to suit different needs and budgets.",
    },
    {
      value: "time-to-complete",
      title: "How long does it take to build a website?",
      text: "A simple website can take around 7 days, while a standard business site usually takes 14–21 days. More complex projects such as e-commerce stores can take 4–6 weeks. I’ll always give you a clear timeline and keep you updated as we go.",
    },
    {
      value: "hosting-domain",
      title: "Can you help with hosting and domain registration?",
      text: "Yes — I can help you register a domain (.com, .ng, .com.ng, etc.) and set up reliable hosting. I also take care of SSL certificates for security and can help with custom email setup.",
    },
    {
      value: "seo-services",
      title: "Will my website appear on Google?",
      text: "Yes. Every site I build is SEO-friendly from the start. I also offer optional, more advanced SEO services to help your site rank higher, attract more visitors, and generate leads online.",
    },
    {
      value: "maintenance-support",
      title: "Do you provide ongoing website maintenance?",
      text: "Absolutely. I offer ongoing maintenance plans that include updates, backups, bug fixes, and security monitoring — so your website stays fast, secure, and up to date.",
    },
  ];

  return (
    <Box
      id="faqs"
      bg="baseLight"
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
      px={{ base: 6, md: 20 }}
    >
      <Container
        maxW="container.lg"
        p={0}
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Stack align={"center"}>
          <Box>
            <HeadingMarker text="Curiosity Corner" />
            <H2Heading>Frequently Asked Questions</H2Heading>
          </Box>
        </Stack>
        <Box
          p={{ base: 8, md: 12 }}
          py={{ base: 4, md: 12 }}
          rounded="3xl"
          width={{ base: "100%", md: "2xl" }}
          bg="secondary"
        >
          <Accordion.Root size={"lg"} collapsible>
            <Stack>
              {FAQS.map(({ value, title, text }, index) => (
                <Accordion.Item key={`faq-${index}`} value={value}>
                  <Accordion.ItemTrigger pb={4} cursor={"pointer"}>
                    <Span
                      fontSize={".9em"}
                      fontWeight={"semibold"}
                      color="baseLight"
                      flex="1"
                    >
                      {title}
                    </Span>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody
                      color="#d7d7d7"
                      lineHeight={1.9}
                      fontSize={{ base: "1.05em", md: "1em" }}
                    >
                      {text}
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Stack>
          </Accordion.Root>
        </Box>
      </Container>
    </Box>
  );
}
