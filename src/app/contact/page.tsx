import Navbar from "@/components/Navbar";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

export default function ContactRoutePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ECE8D9] text-[#1c2e24] overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
