import { useState } from "react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/NavigationMenu";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/ui/Badge";
import { Check, Menu, X, ArrowRight, Star, Shield, Cpu, Rocket, Sparkles } from "lucide-react";
import Logo from "@/assets/logo.jpg";

const site = {
  companyName: "Elite Sales and Marketing",
  tagline: "",
  primary: "blue",
  cta: {
    label: "Get Started",
    href: "#contact",
  },
  nav: [
    { label: "Services", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Website() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.img src={Logo} alt="Elite Sales and Marketing Logo" className="h-10 w-auto"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>

            <nav className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  {site.nav.map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <a className="px-3 py-2 rounded-lg hover:bg-gray-100 transition" href={item.href}>
                        {item.label}
                      </a>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button onClick={() => document.querySelector(site.cta.href)?.scrollIntoView({ behavior: "smooth" })}>
                {site.cta.label}
              </Button>
            </div>

            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t">
            <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
              {site.nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
              <Button className="w-full mt-2" onClick={() => {
                setMobileOpen(false);
                document.querySelector(site.cta.href)?.scrollIntoView({ behavior: "smooth" });
              }}>
                {site.cta.label}
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
          <div className={"absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-300 blur-3xl"}></div>
          <div className={"absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-400 blur-3xl"}></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">Elite Sales and Marketing</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Experts in Sales & Account Management, Strategic Planning, Store & eCommerce Analytics, and Digital Marketing.
          </p>
          <div className="mt-6 flex justify-center">
            <Button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Star, title: "Sales & Account Management", desc: "Channel strategy, retail programs, and partner relationships." },
              { icon: Shield, title: "Strategic Planning", desc: "Go-to-market roadmaps, annual plans, and KPI alignment." },
              { icon: Cpu, title: "Store & eCommerce Analytics", desc: "Dashboards and insights across POS, marketplace, and DTC." },
              { icon: Rocket, title: "Digital Marketing", desc: "Paid social/search, email/SMS, and conversion optimization." },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border shadow-sm">
                <CardHeader>
                  <div className={"h-10 w-10 rounded-lg bg-blue-100 text-blue-700 grid place-items-center mb-2"}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-4">About Us</h3>
            <p className="text-gray-600">
              Based in Bentonville, AR, Elite Sales and Marketing partners with brands to deliver measurable growth across retail and eCommerce channels.
              Our experienced team brings strategic insight, data-driven planning, and execution expertise to every engagement.
            </p>
          </div>
          <div>
            <motion.img src={Logo} alt="Elite Sales and Marketing" className="rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.98, y: 6 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-3">Have questions or want to work together? Reach out anytime.</p>
            <p>Email: <a href="mailto:tysams@esm-omni.com" className="text-blue-600 hover:underline">tysams@esm-omni.com</a></p>
            <p>Phone: <a href="tel:+14795312918" className="text-blue-600 hover:underline">479-531-2918</a></p>
            <p>Location: Bentonville, AR</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Elite Sales and Marketing. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="contents">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>We’ll follow up by email.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Input id="name" name="name" placeholder="Your name" required />
          <Input id="email" name="email" type="email" placeholder="you@company.com" required />
          <Textarea id="message" name="message" placeholder="What can we help you with?" rows={5} required />
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit" disabled={status !== "idle"}>
            {status === "idle" ? "Send" : status === "sending" ? "Sending…" : "Sent!"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
