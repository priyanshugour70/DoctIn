import React from 'react'

const TreatmentLifeCycle = () => {
  return (
    <div className="py-16 bg-gray-100 rounded-2xl">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Treatment Life Cycle</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <img src="/images/consult.png" alt="Consultation Icon" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Consultation</h3>
            <p className="text-gray-700">Connect with our doctors online or in-person to get initial consultation.</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <img src="/images/diagnose.png" alt="Diagnosis Icon" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Diagnosis</h3>
            <p className="text-gray-700">Get diagnosed by our expert doctors and receive personalized treatment plan.</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <img src="/images/treatment.png" alt="Treatment Icon" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Treatment</h3>
            <p className="text-gray-700">Get started with the recommended treatment plan and track your progress.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TreatmentLifeCycle