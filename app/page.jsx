import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="p-4 max-w-3xl mx-auto bg-blue-100">
      <h1 className="text-3xl font-bold text-blue-700">Get in Touch with Us!</h1>
      <p className="text-blue-500">Kindly complete the form provided</p>

      <ContactForm />
    </div>
  );
}
