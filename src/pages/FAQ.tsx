import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is the safe level of hydrogen gas?',
    answer: 'The safe level of hydrogen gas is typically below 1.0 ppm (parts per million) in indoor environments. Levels above this threshold may require investigation and ventilation measures.'
  },
  {
    question: 'How often is the hydrogen level monitored?',
    answer: 'Our system continuously monitors hydrogen levels with readings taken every 5 minutes. This ensures real-time detection of any potentially dangerous situations.'
  },
  {
    question: 'What should I do if the system shows high levels?',
    answer: 'If the system detects levels above 1.0 ppm: 1) Evacuate the area immediately, 2) Ensure proper ventilation, 3) Contact your safety supervisor, and 4) Do not return until levels have normalized.'
  },
  {
    question: 'How accurate is the detection system?',
    answer: 'Our hydrogen detection system has an accuracy of ±0.1 ppm and is calibrated regularly to ensure reliable measurements.'
  },
  {
    question: 'How long is historical data stored?',
    answer: 'The system stores detailed historical data for up to 12 months, allowing for long-term trend analysis and compliance reporting.'
  },
  {
    question: 'Can I export the monitoring data?',
    answer: 'Yes, you can export monitoring data in various formats (CSV, PDF) from the History page. This feature is useful for record-keeping and analysis.'
  }
];

const FAQ: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-start">
                <HelpCircle className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;