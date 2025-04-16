
import { GrievanceForm } from "@/components/grievances/GrievanceForm";
import { ContactInfo } from "@/components/grievances/ContactInfo";

export default function GrievancesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Submit a Grievance</h1>
            <p className="text-lg text-gray-600">
              We take your concerns seriously. Please fill out the form below and we'll address your grievance as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <GrievanceForm />
              </div>
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
