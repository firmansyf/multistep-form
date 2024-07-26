import MultistepForm from "@/components/MultipleStep";




export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Multistep Form</h1>
      <MultistepForm />
    </div>
  </div>
  );
}
