import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AddVital() {
  const [vitals, setVitals] = useState({
    heartRate: "",
    bloodPressure: "",
    bmi: "",
    oxygenLevel: "",
  });

  const [submittedVitals, setSubmittedVitals] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setVitals({ ...vitals, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newVital = {
      ...vitals,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-IN'),
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
    };
    
    setSubmittedVitals(prev => [newVital, ...prev]);
    setShowSuccess(true);
    setVitals({ heartRate: "", bloodPressure: "", bmi: "", oxygenLevel: "" });
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getHealthStatus = (type, value) => {
    switch(type) {
      case 'heartRate':
        if (value < 60) return { status: 'Low', color: 'text-yellow-600', bg: 'bg-yellow-50' };
        if (value > 100) return { status: 'High', color: 'text-red-600', bg: 'bg-red-50' };
        return { status: 'Normal', color: 'text-green-600', bg: 'bg-green-50' };
      
      case 'bloodPressure':
        const [systolic, diastolic] = value.split('/').map(Number);
        if (systolic < 90 || diastolic < 60) return { status: 'Low', color: 'text-yellow-600', bg: 'bg-yellow-50' };
        if (systolic > 140 || diastolic > 90) return { status: 'High', color: 'text-red-600', bg: 'bg-red-50' };
        return { status: 'Normal', color: 'text-green-600', bg: 'bg-green-50' };
      
      case 'bmi':
        if (value < 18.5) return { status: 'Underweight', color: 'text-yellow-600', bg: 'bg-yellow-50' };
        if (value > 25) return { status: 'Overweight', color: 'text-orange-600', bg: 'bg-orange-50' };
        return { status: 'Healthy', color: 'text-green-600', bg: 'bg-green-50' };
      
      case 'oxygenLevel':
        if (value < 95) return { status: 'Low', color: 'text-red-600', bg: 'bg-red-50' };
        if (value < 97) return { status: 'Borderline', color: 'text-yellow-600', bg: 'bg-yellow-50' };
        return { status: 'Normal', color: 'text-green-600', bg: 'bg-green-50' };
      
      default:
        return { status: 'Normal', color: 'text-green-600', bg: 'bg-green-50' };
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-20 pb-12">
        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-20 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform animate-bounce z-50">
            <div className="flex items-center space-x-2">
              <span className="text-lg">✅</span>
              <span className="font-semibold">Vital Report Added Successfully!</span>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Add Vital Report
            </h1>
            <p className="text-gray-600 text-lg">
              Track and monitor your health vitals regularly
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center space-x-2">
                      <span className="text-red-500 text-lg">❤️</span>
                      <span>Heart Rate (bpm)</span>
                    </label>
                    <input
                      type="number"
                      name="heartRate"
                      value={vitals.heartRate}
                      onChange={handleChange}
                      placeholder="e.g. 75"
                      min="30"
                      max="200"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Normal range: 60-100 bpm</p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center space-x-2">
                      <span className="text-blue-500 text-lg">💙</span>
                      <span>Blood Pressure (mmHg)</span>
                    </label>
                    <input
                      type="text"
                      name="bloodPressure"
                      value={vitals.bloodPressure}
                      onChange={handleChange}
                      placeholder="e.g. 120/80"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Format: systolic/diastolic (e.g., 120/80)</p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center space-x-2">
                      <span className="text-green-500 text-lg">⚖️</span>
                      <span>BMI</span>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="bmi"
                      value={vitals.bmi}
                      onChange={handleChange}
                      placeholder="e.g. 22.5"
                      min="10"
                      max="50"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Healthy range: 18.5 - 25</p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center space-x-2">
                      <span className="text-purple-500 text-lg">💨</span>
                      <span>Oxygen Level (%)</span>
                    </label>
                    <input
                      type="number"
                      name="oxygenLevel"
                      value={vitals.oxygenLevel}
                      onChange={handleChange}
                      placeholder="e.g. 98"
                      min="80"
                      max="100"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Normal range: 95-100%</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>💾</span>
                  <span>Save Vital Report</span>
                </button>
              </form>
            </div>

            {/* Submitted Vitals History */}
            <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <span>📋</span>
                <span>Recent Vital Reports</span>
              </h2>

              {submittedVitals.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-500 text-lg">No vital reports added yet</p>
                  <p className="text-gray-400">Your submitted reports will appear here</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {submittedVitals.map((vital) => (
                    <div key={vital.id} className="border-2 border-gray-100 rounded-xl p-4 hover:border-blue-200 transition-all duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {vital.date} at {vital.time}
                          </h3>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          #{vital.id.toString().slice(-4)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className={`p-2 rounded-lg ${getHealthStatus('heartRate', vital.heartRate).bg}`}>
                          <p className="text-sm text-gray-600">Heart Rate</p>
                          <p className="font-bold">{vital.heartRate} bpm</p>
                          <span className={`text-xs font-semibold ${getHealthStatus('heartRate', vital.heartRate).color}`}>
                            {getHealthStatus('heartRate', vital.heartRate).status}
                          </span>
                        </div>
                        
                        <div className={`p-2 rounded-lg ${getHealthStatus('bloodPressure', vital.bloodPressure).bg}`}>
                          <p className="text-sm text-gray-600">Blood Pressure</p>
                          <p className="font-bold">{vital.bloodPressure}</p>
                          <span className={`text-xs font-semibold ${getHealthStatus('bloodPressure', vital.bloodPressure).color}`}>
                            {getHealthStatus('bloodPressure', vital.bloodPressure).status}
                          </span>
                        </div>
                        
                        <div className={`p-2 rounded-lg ${getHealthStatus('bmi', vital.bmi).bg}`}>
                          <p className="text-sm text-gray-600">BMI</p>
                          <p className="font-bold">{vital.bmi}</p>
                          <span className={`text-xs font-semibold ${getHealthStatus('bmi', vital.bmi).color}`}>
                            {getHealthStatus('bmi', vital.bmi).status}
                          </span>
                        </div>
                        
                        <div className={`p-2 rounded-lg ${getHealthStatus('oxygenLevel', vital.oxygenLevel).bg}`}>
                          <p className="text-sm text-gray-600">Oxygen Level</p>
                          <p className="font-bold">{vital.oxygenLevel}%</p>
                          <span className={`text-xs font-semibold ${getHealthStatus('oxygenLevel', vital.oxygenLevel).color}`}>
                            {getHealthStatus('oxygenLevel', vital.oxygenLevel).status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}