import { AlertTriangle } from "lucide-react";

const PaymentDueOverlay = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black p-4 overflow-y-auto">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 text-center border-t-8 border-red-600">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Website Temporarily Down
        </h1>
        <p className="text-gray-700 mb-3 font-semibold">
          You have not made the payment for several months.
        </p>
        <p className="text-gray-600">
          Due to non-payment, your website is being taken down. To bring your
          website back live, please make the payment immediately.
        </p>
      </div>
    </div>
  );
};

export default PaymentDueOverlay;
