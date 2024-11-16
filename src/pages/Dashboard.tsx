import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { AlertTriangle, CheckCircle, Activity, Wind, Thermometer, Droplets } from 'lucide-react';

// Sample data
const realtimeData = [
  { time: '00:00', level: 0.5, temperature: 23, humidity: 45, airflow: 1.2 },
  { time: '00:05', level: 0.7, temperature: 23.2, humidity: 46, airflow: 1.1 },
  { time: '00:10', level: 0.4, temperature: 23.1, humidity: 45, airflow: 1.3 },
  { time: '00:15', level: 0.8, temperature: 23.3, humidity: 44, airflow: 1.2 },
  { time: '00:20', level: 1.2, temperature: 23.4, humidity: 45, airflow: 1.0 },
  { time: '00:25', level: 0.9, temperature: 23.2, humidity: 46, airflow: 1.1 },
  { time: '00:30', level: 0.6, temperature: 23.1, humidity: 45, airflow: 1.2 }
];

const locationData = [
  { location: 'Zone A', level: 0.5 },
  { location: 'Zone B', level: 0.7 },
  { location: 'Zone C', level: 0.3 },
  { location: 'Zone D', level: 0.9 }
];

const Dashboard: React.FC = () => {
  const currentLevel = realtimeData[realtimeData.length - 1].level;
  const isHighLevel = currentLevel > 1.0;
  const currentTemp = realtimeData[realtimeData.length - 1].temperature;
  const currentHumidity = realtimeData[realtimeData.length - 1].humidity;
  const currentAirflow = realtimeData[realtimeData.length - 1].airflow;

  return (
    <div className="space-y-6">
      {isHighLevel && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                Warning: Hydrogen levels above threshold detected. Please check ventilation systems and follow safety protocols.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Real-time Monitoring</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">H₂ Level</p>
                  <p className="text-2xl font-semibold text-gray-900">{currentLevel} ppm</p>
                </div>
                <Activity className="w-8 h-8 text-indigo-600" />
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Temperature</p>
                  <p className="text-2xl font-semibold text-gray-900">{currentTemp}°C</p>
                </div>
                <Thermometer className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Humidity</p>
                  <p className="text-2xl font-semibold text-gray-900">{currentHumidity}%</p>
                </div>
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Airflow</p>
                  <p className="text-2xl font-semibold text-gray-900">{currentAirflow} m/s</p>
                </div>
                <Wind className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={realtimeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="level" name="H₂ Level" stroke="#4f46e5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Location Analysis</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={locationData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="level" name="H₂ Level" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Environmental Correlations</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={realtimeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="temperature" name="Temperature" stroke="#f97316" />
              <Line yAxisId="right" type="monotone" dataKey="humidity" name="Humidity" stroke="#0ea5e9" />
              <Line yAxisId="right" type="monotone" dataKey="airflow" name="Airflow" stroke="#22c55e" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;