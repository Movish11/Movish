import React, { useState } from 'react'
import { Upload, Camera, User, CheckCircle2, ArrowRight } from 'lucide-react'
import { toast } from 'react-toastify'
import axios from 'axios'

const FounderImage = ({ token }) => {
    const [aboutImage, setAboutImage] = useState(null)
    const [homeImage, setHomeImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleUpload = async (e) => {
        e.preventDefault()
        if (!aboutImage && !homeImage) {
            toast.warn("Please select at least one image to upload")
            return
        }
        
        setLoading(true)
        try {
            // This is a placeholder for the actual upload logic
            // In a real scenario, we would append images to FormData and send to backend
            const formData = new FormData()
            if (aboutImage) formData.append('aboutImage', aboutImage)
            if (homeImage) formData.append('homeImage', homeImage)

            // Placeholder API call
            // const response = await axios.post('http://localhost:4000/api/founder/upload', formData, { headers: { token } })
            
            // Mocking success
            setTimeout(() => {
                toast.success("Founder images updated successfully!")
                setLoading(false)
            }, 1000)

        } catch (error) {
            toast.error("Failed to upload images")
            setLoading(false)
        }
    }

    return (
        <div className='flex-1 bg-[#faf8f4] p-8 lg:p-12'>
            <div className='max-w-4xl mx-auto'>
                <div className='mb-12'>
                    <h2 className='text-3xl font-playfair font-bold text-gray-900'>Founder Image Management</h2>
                    <p className='text-gray-400 mt-2 text-sm'>Update founder profile photos for different sections of the website</p>
                </div>

                <form onSubmit={handleUpload} className='space-y-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {/* About Page Image */}
                        <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300'>
                            <div className='flex items-center gap-3 mb-6'>
                                <div className='w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center'>
                                    <User className='w-5 h-5 text-[#b88a1e]' />
                                </div>
                                <div>
                                    <h3 className='font-bold text-gray-900'>About Section</h3>
                                    <p className='text-[10px] text-gray-400 font-bold uppercase tracking-wider'>Main Profile Photo</p>
                                </div>
                            </div>

                            <label htmlFor="aboutImage" className='flex flex-col items-center justify-center w-full aspect-[4/5] border-2 border-dashed border-gray-100 rounded-2xl cursor-pointer bg-gray-50 hover:bg-white hover:border-[#b88a1e]/30 transition-all duration-500 overflow-hidden relative group'>
                                {aboutImage ? (
                                    <>
                                        <img className='w-full h-full object-cover' src={URL.createObjectURL(aboutImage)} alt="About Founder" />
                                        <div className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                                            <Camera className='w-8 h-8 text-white' />
                                        </div>
                                    </>
                                ) : (
                                    <div className='flex flex-col items-center justify-center p-6 text-center'>
                                        <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform'>
                                            <Upload className='w-6 h-6 text-[#b88a1e]' />
                                        </div>
                                        <p className='text-xs font-semibold text-gray-600'>Upload Photo</p>
                                        <p className='text-[10px] text-gray-400 mt-1'>Used in 'Our Story' section</p>
                                    </div>
                                )}
                                <input type="file" id="aboutImage" hidden onChange={(e) => setAboutImage(e.target.files[0])} />
                            </label>
                        </div>

                        {/* Home Page Credentials Image */}
                        <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300'>
                            <div className='flex items-center gap-3 mb-6'>
                                <div className='w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center'>
                                    <CheckCircle2 className='w-5 h-5 text-[#b88a1e]' />
                                </div>
                                <div>
                                    <h3 className='font-bold text-gray-900'>Home Credentials</h3>
                                    <p className='text-[10px] text-gray-400 font-bold uppercase tracking-wider'>Small Badge/Card Photo</p>
                                </div>
                            </div>

                            <label htmlFor="homeImage" className='flex flex-col items-center justify-center w-full aspect-[4/5] border-2 border-dashed border-gray-100 rounded-2xl cursor-pointer bg-gray-50 hover:bg-white hover:border-[#b88a1e]/30 transition-all duration-500 overflow-hidden relative group'>
                                {homeImage ? (
                                    <>
                                        <img className='w-full h-full object-cover' src={URL.createObjectURL(homeImage)} alt="Home Founder" />
                                        <div className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                                            <Camera className='w-8 h-8 text-white' />
                                        </div>
                                    </>
                                ) : (
                                    <div className='flex flex-col items-center justify-center p-6 text-center'>
                                        <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform'>
                                            <Upload className='w-6 h-6 text-[#b88a1e]' />
                                        </div>
                                        <p className='text-xs font-semibold text-gray-600'>Upload Photo</p>
                                        <p className='text-[10px] text-gray-400 mt-1'>Used in Home Page credentials</p>
                                    </div>
                                )}
                                <input type="file" id="homeImage" hidden onChange={(e) => setHomeImage(e.target.files[0])} />
                            </label>
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <button 
                            type="submit" 
                            disabled={loading}
                            className='px-8 py-4 bg-black text-white hover:bg-[#b88a1e] transition-all duration-300 rounded-2xl font-bold shadow-xl shadow-black/10 hover:shadow-amber-900/20 transform hover:-translate-y-1 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3'
                        >
                            {loading ? "Updating..." : "SAVE FOUNDER IMAGES"}
                            {!loading && <ArrowRight className='w-5 h-5' />}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FounderImage
