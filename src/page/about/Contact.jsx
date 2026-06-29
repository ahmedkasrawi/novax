import PageTransition from "../../components/PageTransition";
import Container from "../../components/Container";
import Heading from "./components/Heading";
import Card from "./components/Card";
function Contact() {
  return (
    <PageTransition>
      <div className="py-16 bg-slate-50">
        <Container>
          <Heading
            pageTitle={"Contact"}
            title={"Need Help? We're Here for You."}
            paragraph={
              "Reach out to our team with questions about products, orders, or\
              returns. We will respond quickly with friendly, personalized\
              support."
            }
          />
          <section className="grid gap-6 md:grid-cols-3 mb-16">
            <Card
              title={"Customer Support"}
              paragraph={
                "Our team is available 7 days a week to answer questions and solve issues.."
              }
            >
              <p className="text-sm mt-2 font-medium text-(--main-color)">
                Mon - Fri: 9am - 8pm
              </p>
            </Card>
            <Card
              title={"Email Us"}
              paragraph={
                "Send us your questions and order details for fast assistance."
              }
            >
              <p className="text-sm mt-2 font-medium text-(--main-color)">
                support@onlinestore.com
              </p>
            </Card>

            <Card
              title={"Call Us"}
              paragraph={
                "Need an immediate answer? Call our support line for direct help."
              }
            >
              <p className="text-sm mt-2 font-medium text-(--main-color)">
                +1 (800) 123-4567
              </p>
            </Card>
          </section>

          <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 mb-2"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us how we can help"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-(--main-color) px-8 py-3 text-white font-semibold transition duration-300 hover:bg-purple-600 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <Card
                title={"General Inquiries"}
                paragraph={
                  "For product questions, order updates, or general support,\
                  reach out and we will get back to you within one business day."
                }
              ></Card>

              <Card
                title={"Visit Our Store"}
                paragraph={
                  "Visit our online store anytime for the latest products and\
                  promotional offers."
                }
              >
                <p className="text-sm mt-2 font-medium text-(--main-color)">
                  Monday - Sunday: 24/7 Online
                </p>
              </Card>
            </div>
          </section>
        </Container>
      </div>
    </PageTransition>
  );
}

export default Contact;
