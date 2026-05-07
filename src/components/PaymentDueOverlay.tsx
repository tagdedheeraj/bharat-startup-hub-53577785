import { AlertTriangle } from "lucide-react";

const PaymentDueOverlay = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 text-center border-t-8 border-red-600">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Website Temporarily Suspended
        </h1>
        <p className="text-gray-700 mb-2 font-semibold">
          Your payment has been pending for more than 2 months.
        </p>
        <p className="text-gray-600 mb-6">
          Please clear your due payments and your website will be live again automatically.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
          <p className="text-sm text-gray-500 mb-2">Pay via UPI</p>
          <p className="text-xl font-mono font-bold text-gray-900 select-all">
            zxpredict@ybl
          </p>
        </div>
        <p className="text-xs text-gray-500">
          After payment, please share the receipt with your developer to restore service.
        </p>
      </div>
    </div>
  );
};

export default PaymentDueOverlay;
