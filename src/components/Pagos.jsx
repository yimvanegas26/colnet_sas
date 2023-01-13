import React from 'react'

export default function Pagos() {
  return (
    <div>
      <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div className="flex-col flex lg:flex-row items-start lg:items-center">
                            <div className="flex items-center">

                            </div>
                            <div className="ml-0 lg:ml-20 my-6 lg:my-0">
                                <h4 className="text-2xl font-bold leading-tight text-white mb-2">Dashboard</h4>
                                <p className="flex items-center text-gray-300 text-xs">
                                    <span>Portal</span>
                                    <span className="mx-2">&gt;</span>
                                    <span>Dashboard</span>
                                    <span className="mx-2">&gt;</span>
                                    <span>KPIs</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <button className="focus:outline-none mr-3 bg-transparent transition duration-150 ease-in-out rounded hover:bg-gray-700 text-white px-5 py-2 text-sm border border-white">Back</button>
                            <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm">Edit Profile</button>
                        </div>
                        

                    </div>
    </div>
  )
}
