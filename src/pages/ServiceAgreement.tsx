
import React, { useEffect } from 'react';
import SectionHeading from '@/components/SectionHeading';

const ServiceAgreement = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="max-w-4xl mx-auto py-8">
      <SectionHeading
        subheading="LEGAL"
        heading="Client Service Agreement"
        description="Standard service agreement document for our clients"
      />
      
      <div className="prose prose-lg mt-8">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold">Bharat Startup Solution</h2>
          <p className="text-sm text-gray-600">Service Agreement Rev-00 | 13.11.2024</p>
          <p className="text-sm text-gray-600">
            727, Arved Transcube Plaza, 132 Ft. Ring Road, Ranip,<br />
            Ahmedabad – 380081, Gujarat, India.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold text-center my-6">CLIENT SERVICE AGREEMENT</h2>
        
        <p>This Client Service Agreement ("Agreement") is made as of the 13th day of NOVEMBER 2024 at 3:00 PM.</p>
        
        <h3 className="font-bold mt-6">BY AND BETWEEN</h3>
        <p>
          Bharat Startup Solution, having its registered office at 727, Arved Transcube Plaza, 132 Ft. Ring Road, Ranip, 
          Ahmedabad – 380081, Gujarat, India (hereinafter referred to as the <strong>"Consultant"/"Service Provider"</strong>), 
          of the ONE PART;
        </p>
        
        <h3 className="font-bold mt-6">AND</h3>
        <p>
          TECHGENIUS AUTOMATION SOLUTIONS PRIVATE LIMITED, having its registered office at VILLA NO 60, 80-17-47/60, 
          SAINAGAR, MORAMPUDI, Hukumpeta, Rajahmundry Rural, East Godavari- 533107, Andhra Pradesh 
          (hereinafter referred to as the <strong>"Client"</strong>), of the OTHER PART.
        </p>
        
        <hr className="my-8 border-gray-300" />
        
        <h3 className="font-bold">Key Modifications:</h3>
        <ol className="list-decimal pl-6">
          <li className="mb-4">
            <strong>Company Name</strong>: All instances of "Shaswat Initial Support Pvt. Ltd." or "Shaswat Initial Support" 
            have been replaced with <strong>"Bharat Startup Solution"</strong> in:
            <ul className="list-disc pl-6 mt-2">
              <li>Headers and footers.</li>
              <li>Definitions (e.g., "Service Provider" and "Consultant").</li>
              <li>Recitals, clauses, and obligations.</li>
              <li>Signature blocks (except the client's details).</li>
            </ul>
          </li>
          
          <li className="mb-4">
            <strong>Structure and Content</strong>:
            <ul className="list-disc pl-6 mt-2">
              <li>The scope of services, payment terms, confidentiality clauses, and other legal provisions remain <strong>unchanged</strong>.</li>
              <li>Only the service provider's name has been updated to reflect "Bharat Startup Solution."</li>
            </ul>
          </li>
          
          <li className="mb-4">
            <strong>Signature Block</strong>:
            <pre className="bg-gray-100 p-4 rounded-md">
EXECUTED and DELIVERED by, for and on behalf of Bharat Startup Solution, Ahmedabad.
Authorized Signatory:
Name: Chandni Solanki
Title: Business Development Executive
Date: 13th Nov 2024
            </pre>
          </li>
          
          <li className="mb-4">
            <strong>Payment Terms</strong>:
            <ul className="list-disc pl-6 mt-2">
              <li>Retained as per the original agreement:</li>
              <ul className="list-disc pl-6">
                <li><strong>Amount</strong>: ₹35,000/-</li>
                <li><strong>Scheme</strong>: Startup Registration, Seed Fund Application, Income Tax 80IAC, ISO.</li>
                <li><strong>Payment Trigger</strong>: After Startup Certificate is received.</li>
              </ul>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ServiceAgreement;
