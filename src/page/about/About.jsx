import PageTransition from "../../components/PageTransition";
import Container from "../../components/Container";
import Heading from "./components/Heading";
import Card from "./components/Card";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react";

function About() {
  const [expanded,setExpanded]= useState(false)
  const handelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <PageTransition>
      <div className="py-16 bg-slate-50">
        <Container>
          <Heading
            pageTitle={"About Us"}
            title={" Welcome to Our Online Store"}
            paragraph={
              "We deliver an effortless shopping experience with fast shipping,\
              secure payments, and a curated selection of quality products. Our\
              mission is to make shopping simple, enjoyable, and reliable."
            }
          />
          <section className="grid gap-8 md:grid-cols-3 mb-16">
            <Card
              title={"Our Vision"}
              paragraph={
                "We aim to become your first choice for online shopping by\
              offering high-quality products and exceptional customer support."
              }
            />
            <Card
              title={"Fast Delivery"}
              paragraph={
                "Enjoy fast order processing, reliable shipping, and real-time\
                tracking so you always know when your package will arrive."
              }
            />
            <Card
              title={"Secure Checkout"}
              paragraph={
                "Pay with confidence using secure payment options and trusted\
                checkout flows that protect your information."
              }
            />
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-7 text-slate-900 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion
              disableGutters
              sx={{ marginBottom: "20px", borderRadius: "4px" }}
              expanded={expanded === "panel1"}
              onChange={handelChange("panel1")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  How can I track my order?
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-slate-600 leading-7">
                  After placing an order, you will receive a tracking number by
                  email. Use it to follow your shipment until it reaches your
                  doorstep.
                </p>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              sx={{ marginBottom: "20px", borderRadius: "4px" }}
              expanded={expanded === "panel2"}
              onChange={handelChange("panel2")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  What payment methods do you accept?
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-slate-600 leading-7">
                  We support credit card payments, debit cards, and local
                  payment methods depending on your region.
                </p>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              sx={{ borderRadius: "4px" }}
              expanded={expanded === "panel3"}
              onChange={handelChange("panel3")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Can I return an item?
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-slate-600 leading-7">
                  Yes, returns are accepted within the specified return window
                  as long as the item meets our return policy requirements.
                </p>
              </AccordionDetails>
            </Accordion>
          </section>
        </Container>
      </div>
    </PageTransition>
  );
}

export default About;
