import React from 'react'

const experiences = [
    {
        id: 1,
        title: "Fullstack Web Development",
        description: "Combining frontend (React, HTML, CSS) and backend (Laravel, Node.js) development skills to deliver complete web applications.",
    },
    {
        id: 2,
        title: "Mobile Development",
        description: "Building mobile applications using Java, Android SDK, and cross-platform frameworks like Flutter for seamless user experiences on both Android and iOS.",
    },
    {
        id: 3,
        title: "IoT and Digitalization",
        description: "Creating systems to automate processes in industrial settings, including IoT device configuration and dashboard development with PowerBI.",
    }
]

const Experience = () => {
    return (
        <div className="bg-black text-white py-20" id="service">
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((service) => (
                <div
                  key={service.id}
                  className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
                  transition-transform duration-300 hover:scale-105"
                >
                  <div
                    className="text-right text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-600 to-blue-400"
                  >
                    {service.id}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-300">{service.description}</p>
                  <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Experience;
