import React from 'react';
import { AlertTriangle, Calendar, Info } from 'lucide-react';

const incidents = [
  {
    date: '2024-02-15',
    location: 'Chemical Plant, Texas',
    description: 'Hydrogen leak detected in storage facility. Quick response prevented escalation.',
    severity: 'Medium',
    casualties: 0,
    lessons: 'Importance of regular maintenance and early detection systems.'
  },
  {
    date: '2023-11-28',
    location: 'Research Lab, California',
    description: 'Minor hydrogen explosion during experiment. Contained within safety chamber.',
    severity: 'Low',
    casualties: 0,
    lessons: 'Proper safety protocols and containment systems proved effective.'
  },
  {
    date: '2023-09-10',
    location: 'Manufacturing Plant, Michigan',
    description: 'Major hydrogen leak leading to facility evacuation.',
    severity: 'High',
    casualties: 0,
    lessons: 'Need for improved ventilation systems and emergency response procedures.'
  }
];

const Incidents: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Incident History</h2>
        
        <div className="space-y-6">
          {incidents.map((incident, index) => (
            <div key={index} className="border-l-4 border-yellow-400 bg-yellow-50 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{incident.location}</h3>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">{incident.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{incident.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white bg-opacity-50 rounded p-3">
                      <p className="text-sm font-medium text-gray-500">Severity Level</p>
                      <p className={`text-lg font-semibold ${
                        incident.severity === 'High' ? 'text-red-600' :
                        incident.severity === 'Medium' ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>{incident.severity}</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-50 rounded p-3">
                      <p className="text-sm font-medium text-gray-500">Casualties</p>
                      <p className="text-lg font-semibold text-gray-900">{incident.casualties}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mt-4">
                    <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div className="ml-2">
                      <p className="text-sm font-medium text-gray-900">Key Lessons</p>
                      <p className="text-sm text-gray-600">{incident.lessons}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incidents;