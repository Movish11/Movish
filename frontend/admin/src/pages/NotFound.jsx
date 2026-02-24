import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard, AlertCircle } from 'lucide-react'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-md w-full">
                <div className="flex justify-center mb-6">
                    <div className="bg-red-50 p-4 rounded-full">
                        <AlertCircle className="h-12 w-12 text-red-500" />
                    </div>
                </div>
                
                <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
                
                <p className="text-gray-500 mb-8">
                    The admin page you are looking for doesn't exist or has been moved.
                </p>

                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 bg-[#c59a2a] hover:bg-[#b38b24] text-white px-6 py-3 rounded-xl font-medium transition-all shadow-sm"
                >
                    <LayoutDashboard className="h-5 w-5" />
                    Back to Dashboard
                </Link>
            </div>
        </div>
    )
}

export default NotFound
