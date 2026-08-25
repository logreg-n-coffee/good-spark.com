import type { Metadata } from "next";
import Image from "next/image";
import { ContactButton } from "../../components/ContactButton";
import { Navigation } from "../../components/Navigation";

export const metadata: Metadata = {
  title: "Contact — Good Spark",
  description: "Contact Good Spark support.",
};

export default function ContactPage() {
  return <div className="contact-page">
    <Navigation variant="simple" />
    <main className="contact-card">
      <Image src="/web/icon-512.png" alt="Good Spark" width={88} height={88} />
      <p className="eyebrow">GOOD SPARK SUPPORT</p>
      <h1>How can we help?</h1>
      <p>Questions, feedback, or something not working as expected? Send us a note and we’ll get back to you.</p>
      <ContactButton />
    </main>
  </div>;
}
