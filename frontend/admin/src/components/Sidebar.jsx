import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, PlusCircle, LogOut, User, Mail, Image } from 'lucide-react'
import Modal from './Modal'
import logo from '../assets/logo.png'

const Sidebar = ({ setToken }) => {
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    return (
        <div className='w-[20%] min-h-screen border-r border-gray-100 bg-white sticky top-0 shadow-sm z-40'>
            <div className='px-8 py-10 flex items-center justify-center md:justify-start'>
                <div className='flex items-center gap-3 group cursor-pointer'>
                    <img src={logo} alt="Movish Logo" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                    <div className='flex flex-col'>
                        <span className='text-xl font-serif font-bold tracking-tight text-gray-900'>Movish</span>
                        <span className='text-[#b88a1e] text-[10px] font-bold tracking-[0.2em] uppercase'>Admin Panel</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2 pt-4 px-4'>
                <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-2'>Management</p>
                
                <NavLink 
                    to='/' 
                    className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${isActive ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:text-black hover:bg-gray-50'}`}
                >
                    <PlusCircle className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110`} />
                    <p className='hidden md:block text-sm font-medium'>Add Case Study</p>
                </NavLink>

                <NavLink 
                    to='/list' 
                    className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${isActive ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:text-black hover:bg-gray-50'}`}
                >
                    <LayoutDashboard className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110`} />
                    <p className='hidden md:block text-sm font-medium'>Case Studies</p>
                </NavLink>

                <NavLink 
                    to='/founder-image' 
                    className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${isActive ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:text-black hover:bg-gray-50'}`}
                >
                    <User className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110`} />
                    <p className='hidden md:block text-sm font-medium'>Founder Image</p>
                </NavLink>

                <NavLink 
                    to='/brands' 
                    className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${isActive ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:text-black hover:bg-gray-50'}`}
                >
                    <Image className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110`} />
                    <p className='hidden md:block text-sm font-medium'>Brand Uploads</p>
                </NavLink>

                <NavLink 
                    to='/contact-requests' 
                    className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${isActive ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:text-black hover:bg-gray-50'}`}
                >
                    <Mail className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110`} />
                    <p className='hidden md:block text-sm font-medium'>Contact Requests</p>
                </NavLink>

                <div className='mt-10 border-t border-gray-50 pt-6'>
                    <button 
                        onClick={() => setIsLogoutModalOpen(true)}
                        className='flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-300 w-full text-left group'
                    >
                        <LogOut className='w-5 h-5 transition-transform group-hover:-translate-x-1' />
                        <p className='hidden md:block text-sm font-medium'>Logout</p>
                    </button>
                </div>
            </div>

            <Modal 
                isOpen={isLogoutModalOpen} 
                onClose={() => setIsLogoutModalOpen(false)} 
                title="Confirm Logout"
                showConfirm={true}
                onConfirm={() => {
                    setToken('');
                    setIsLogoutModalOpen(false);
                }}
                confirmText="Logout"
                confirmColor="bg-red-500 hover:bg-red-600"
            >
                <p className="text-gray-600">Are you sure you want to log out of the admin panel?</p>
            </Modal>
        </div>
    )
}

export default Sidebar
