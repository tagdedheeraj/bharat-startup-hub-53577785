import { Wrench } from "lucide-react";

const PaymentDueOverlay = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 text-center border-t-8 border-yellow-500">
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-100 p-4 rounded-full">
            <Wrench className="h-12 w-12 text-yellow-600" />
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Under Maintenance
        </h1>
        <p className="text-gray-700 mb-2 font-semibold">
          Our website is currently undergoing scheduled maintenance.
        </p>
        <p className="text-gray-600">
          We'll be back online shortly. Thank you for your patience.
        </p>
      </div>
    </div>
  );
};

export default PaymentDueOverlay;
