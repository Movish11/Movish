import React, { useState, useEffect } from 'react'
import { Upload, Camera, Trash2, Plus, LayoutGrid } from 'lucide-react'
import { toast } from 'react-toastify'
import axios from 'axios'

const Brands = ({ token }) => {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [brands, setBrands] = useState([])

    const fetchBrands = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/brand`)
            if (response.data.success) {
                // Sort redundantly for safety: latest at the end (Ascending)
                const sorted = [...response.data.data].sort((a, b) => {
                    const getT = (v) => {
                        if (!v) return 0;
                        if (typeof v === 'number') return v;
                        if (v.seconds !== undefined) return v.seconds * 1000 + (v.nanoseconds ? v.nanoseconds / 1000000 : 0);
                        const d = new Date(v);
                        return isNaN(d.getTime()) ? 0 : d.getTime();
                    };
                    return getT(a.createdAt) - getT(b.createdAt);
                });
                setBrands(sorted);
            }
        } catch (error) {
            console.error('Failed to fetch brands', error)
        }
    }

    useEffect(() => {
        fetchBrands()
    }, [])

    const handleUpload = async (e) => {
        e.preventDefault()
        if (!image) {
            toast.warn("Please select an image to upload")
            return
        }
        
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('image', image)

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/brand/upload`, formData, { headers: { token } })
            
            if (response.data.success) {
                toast.success("Brand added successfully!")
                setImage(null)
                fetchBrands()
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Failed to upload brand image")
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this brand?")) return;
        setLoading(true)
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/brand/delete`, { id }, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                fetchBrands()
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Failed to delete brand")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex-1 bg-[#faf8f4] p-8 lg:p-12'>
            <div className='max-w-6xl mx-auto'>
                <div className='mb-12'>
                    <h2 className='text-3xl font-playfair font-bold text-gray-900'>Brand Management</h2>
                    <p className='text-gray-400 mt-2 text-sm'>Upload and manage hospitality brands featured on the website</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* Upload Section */}
                    <div className='lg:col-span-1'>
                        <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-8'>
                            <div className='flex items-center gap-3 mb-6'>
                                <div className='w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center'>
                                    <Plus className='w-5 h-5 text-[#b88a1e]' />
                                </div>
                                <h3 className='font-bold text-gray-900'>Add New Brand</h3>
                            </div>

                            <form onSubmit={handleUpload} className='space-y-6'>
                                <div className='relative w-full aspect-square'>
                                    <label htmlFor="brandImage" className='flex flex-col items-center justify-center w-full h-full border-2 border-dashed border-gray-100 rounded-2xl cursor-pointer bg-gray-50 hover:bg-white hover:border-[#b88a1e]/30 transition-all duration-500 overflow-hidden relative group'>
                                        {image ? (
                                            <>
                                                <img className='w-full h-full object-contain' src={URL.createObjectURL(image)} alt="Brand Preview" />
                                                <div className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                                                    <Camera className='w-8 h-8 text-white' />
                                                </div>
                                            </>
                                        ) : (
                                            <div className='flex flex-col items-center justify-center p-6 text-center'>
                                                <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform'>
                                                    <Upload className='w-6 h-6 text-[#b88a1e]' />
                                                </div>
                                                <p className='text-xs font-semibold text-gray-600'>Upload Brand Logo</p>
                                                <p className='text-[10px] text-gray-400 mt-1'>PNG or JPG preferred</p>
                                            </div>
                                        )}
                                        <input type="file" id="brandImage" hidden onChange={(e) => setImage(e.target.files[0])} />
                                    </label>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={loading || !image}
                                    className='w-full py-4 bg-black text-white hover:bg-[#b88a1e] transition-all duration-300 rounded-2xl font-bold shadow-xl shadow-black/10 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3'
                                >
                                    {loading ? "Uploading..." : "UPLOAD BRAND"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Brands List Section */}
                    <div className='lg:col-span-2'>
                        <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100'>
                            <div className='flex items-center gap-3 mb-8'>
                                <div className='w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center'>
                                    <LayoutGrid className='w-5 h-5 text-[#b88a1e]' />
                                </div>
                                <h3 className='font-bold text-gray-900'>Existing Brands ({brands.length})</h3>
                            </div>

                            {brands.length === 0 ? (
                                <div className='text-center py-20 border-2 border-dashed border-gray-50 rounded-2xl'>
                                    <p className='text-gray-400 text-sm'>No brands uploaded yet</p>
                                </div>
                            ) : (
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
                                    {brands.map((brand) => (
                                        <div key={brand.id} className='relative group'>
                                            <div className='aspect-square bg-gray-50 rounded-2xl p-4 flex items-center justify-center border border-gray-100 hover:border-amber-200 transition-colors'>
                                                <img 
                                                    src={brand.image} 
                                                    alt="Brand Logo" 
                                                    className='max-h-full max-w-full object-contain'
                                                />
                                            </div>
                                            <button 
                                                onClick={() => handleDelete(brand.id)}
                                                className='absolute -top-2 -right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10'
                                                title="Delete Brand"
                                            >
                                                <Trash2 className='w-4 h-4' />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
