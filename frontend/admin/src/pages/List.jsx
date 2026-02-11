import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Trash2, LayoutDashboard, Edit, Upload, TrendingUp, Users, Star, BarChart3, Clock, X } from 'lucide-react'
import Modal from '../components/Modal'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const iconsList = [
  { name: 'TrendingUp', icon: TrendingUp },
  { name: 'Users', icon: Users },
  { name: 'Star', icon: Star },
  { name: 'BarChart3', icon: BarChart3 },
  { name: 'Clock', icon: Clock }
]

const List = ({ token }) => {

  const [list, setList] = useState([])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState(null)
  
  // Edit Form States
  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [editCategory, setEditCategory] = useState("")
  const [editDate, setEditDate] = useState("")
  const [editTags, setEditTags] = useState("")
  const [editMeta, setEditMeta] = useState("")
  const [editStat1, setEditStat1] = useState({ value: "", label: "", icon: "TrendingUp" })
  const [editStat2, setEditStat2] = useState({ value: "", label: "", icon: "Users" })
  const [editStat3, setEditStat3] = useState({ value: "", label: "", icon: "Star" })
  const [editStat4, setEditStat4] = useState({ value: "", label: "", icon: "BarChart3" })
  const [editImage, setEditImage] = useState(false)
  const [loading, setLoading] = useState(false)

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'align'
  ];

  const titleModules = {
    toolbar: [
      ['bold', 'italic'],
      [{ 'color': [] }],
      ['clean']
    ]
  };

  const titleFormats = [
    'bold', 'italic',
    'color'
  ];

  const fetchList = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blog/list`)
      if (response.data.success) {
        setList(response.data.blogs)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const removeBlog = async () => {
    if (!selectedBlog) return;
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/blog/remove`, { id: selectedBlog.id }, { headers: { token } })
        if (response.data.success) {
            toast.success(response.data.message)
            setList(prevList => prevList.filter(blog => blog.id !== selectedBlog.id))
            setIsDeleteModalOpen(false)
        } else {
            toast.error(response.data.message)
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
  }

  const handleEdit = (blog) => {
    setSelectedBlog(blog)
    setEditTitle(blog.title)
    setEditDescription(blog.description)
    setEditCategory(blog.category)
    setEditDate(blog.date)
    setEditTags(blog.tags ? blog.tags.join(', ') : "")
    setEditMeta(blog.meta ? blog.meta.join(', ') : "")
    setEditStat1(blog.stats && blog.stats[0] ? blog.stats[0] : { value: "", label: "", icon: "TrendingUp" })
    setEditStat2(blog.stats && blog.stats[1] ? blog.stats[1] : { value: "", label: "", icon: "Users" })
    setEditStat3(blog.stats && blog.stats[2] ? blog.stats[2] : { value: "", label: "", icon: "Star" })
    setEditStat4(blog.stats && blog.stats[3] ? blog.stats[3] : { value: "", label: "", icon: "BarChart3" })
    setEditImage(false)
    setIsEditModalOpen(true)
  }

  const onUpdateHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const formData = new FormData()
        formData.append("id", selectedBlog.id)
        formData.append("title", editTitle)
        formData.append("description", editDescription)
        formData.append("category", editCategory)
        formData.append("date", editDate)
        
        if (editImage) {
            formData.append("image", editImage)
        }

        const tagsArray = editTags.split(',').map(tag => tag.trim()).filter(tag => tag !== "")
        const metaArray = editMeta.split(',').map(m => m.trim()).filter(m => m !== "")
        
        formData.append("tags", JSON.stringify(tagsArray))
        formData.append("meta", JSON.stringify(metaArray))
        formData.append("stats", JSON.stringify([editStat1, editStat2, editStat3, editStat4]))

        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/blog/update`, formData, { headers: { token } })

        if (response.data.success) {
            toast.success(response.data.message)
            fetchList()
            setIsEditModalOpen(false)
        } else {
            toast.error(response.data.message)
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='flex-1 bg-[#faf8f4] p-8 lg:p-12'>
        <div className='max-w-6xl mx-auto'>
            <div className='flex items-center justify-between mb-12'>
                <div>
                   <h2 className='text-3xl font-playfair font-bold text-gray-900'>Published Case Studies</h2>
                   <p className='text-gray-400 mt-2 text-sm'>Manage your hospitality transformation stories</p>
                </div>
                <div className='bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3'>
                    <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
                    <span className='text-xs font-bold text-gray-500 uppercase tracking-widest'>{list.length} Stories Live</span>
                </div>
            </div>
            
            <div className='bg-white rounded-[2rem] shadow-sm border border-gray-50 overflow-hidden'>
                {/* Table Header */}
                <div className='hidden md:grid grid-cols-[1fr_3fr_1.5fr_1.5fr_1.5fr] items-center py-5 px-8 bg-gray-50/50 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]'>
                    <span>Preview</span>
                    <span>Case Study Details</span>
                    <span>Category</span>
                    <span>Published</span>
                    <span className='text-right'>Actions</span>
                </div>

                {/* List Items */}
                <div className='divide-y divide-gray-50'>
                    {list.map((item, index) => (
                        <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1.5fr_1.5fr_1.5fr] items-center gap-4 py-6 px-8 hover:bg-gray-50/30 transition-all duration-300 group'>
                            <div className='relative overflow-hidden rounded-xl aspect-square w-16'>
                                <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={item.image} alt="" />
                            </div>
                            
                            <div className='pr-4'>
                                <div 
                                    className='font-playfair font-bold text-gray-900 text-lg group-hover:text-[#b88a1e] transition-colors line-clamp-1 [&>p]:inline [&>p]:m-0'
                                    dangerouslySetInnerHTML={{ __html: item.title }}
                                />
                                <div 
                                    className='text-xs text-gray-400 mt-1 line-clamp-1 [&>p]:inline [&>p]:m-0'
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />
                            </div>

                            <div className='hidden md:block'>
                                <span className='px-3 py-1 bg-[#b88a1e]/5 text-[#b88a1e] rounded-full text-[10px] font-bold uppercase tracking-wider'>
                                    {item.category}
                                </span>
                            </div>

                            <p className='hidden md:block text-sm text-gray-500 font-medium'>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                            
                            <div className='flex items-center justify-end gap-2'>
                                <button 
                                    onClick={() => handleEdit(item)}
                                    className='p-3 bg-gray-50 text-gray-400 hover:text-[#b88a1e] hover:bg-[#b88a1e]/5 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-sm'
                                    title="Edit Case Study"
                                >
                                    <Edit className='w-4 h-4' />
                                </button>
                                <button 
                                    onClick={() => {
                                        setSelectedBlog(item);
                                        setIsDeleteModalOpen(true);
                                    }} 
                                    className='p-3 bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-sm'
                                    title="Archive Case Study"
                                >
                                    <Trash2 className='w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {list.length === 0 && (
                    <div className='text-center py-24 bg-gray-50/20'>
                        <div className='w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mx-auto mb-4'>
                            <LayoutDashboard className='w-8 h-8 text-gray-200' />
                        </div>
                        <p className='text-gray-400 font-medium'>No case studies found. Start by adding a new one!</p>
                    </div>
                )}
            </div>
        </div>

        {/* Delete Confirmation Modal */}
        <Modal 
            isOpen={isDeleteModalOpen} 
            onClose={() => setIsDeleteModalOpen(false)} 
            title="Delete Case Study"
            showConfirm={true}
            onConfirm={removeBlog}
            confirmText="Delete"
            confirmColor="bg-red-500 hover:bg-red-600"
        >
            <div className='flex flex-col items-center text-center gap-4'>
                <div className='w-16 h-16 rounded-full bg-red-50 flex items-center justify-center'>
                    <Trash2 className='w-8 h-8 text-red-500' />
                </div>
                <div>
                    <p className='text-gray-900 font-bold'>Are you sure?</p>
                    <p className='text-gray-500 text-sm mt-1'>This action cannot be undone. This case study will be permanently removed from your website.</p>
                </div>
            </div>
        </Modal>

        {/* Edit Modal */}
        <Modal 
            isOpen={isEditModalOpen} 
            onClose={() => setIsEditModalOpen(false)} 
            title="Edit Case Study"
            maxWidth="max-w-7xl"
        >
            <form onSubmit={onUpdateHandler} className='space-y-6 max-h-[85vh] overflow-y-auto px-1'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* Left Side */}
                    <div className='space-y-8'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Title</label>
                            <ReactQuill 
                                theme="snow"
                                value={editTitle}
                                onChange={setEditTitle}
                                modules={titleModules}
                                formats={titleFormats}
                                className='bg-white rounded-xl border border-gray-100'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Description</label>
                            <ReactQuill 
                                theme="snow"
                                value={editDescription}
                                onChange={setEditDescription}
                                modules={modules}
                                formats={formats}
                                className='bg-white rounded-xl border border-gray-100 h-[400px] mb-12'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Category</label>
                            <select onChange={(e) => setEditCategory(e.target.value)} value={editCategory} className='rounded-xl px-4 py-3 border border-gray-100 bg-gray-50 outline-none focus:border-[#b88a1e] transition-all'>
                                <option value="QSR">QSR</option>
                                <option value="Fine Dining">Fine Dining</option>
                                <option value="Cafe">Cafe</option>
                                <option value="Cloud Kitchen">Cloud Kitchen</option>
                                <option value="Expansion Strategy">Expansion Strategy</option>
                            </select>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Date</label>
                            <input onChange={(e) => setEditDate(e.target.value)} value={editDate} className='rounded-xl px-4 py-3 border border-gray-100 bg-gray-50' type="date" required />
                        </div>
                        {/* Tags Input Removed */}
                        
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Meta Info</label>
                            <input onChange={(e) => setEditMeta(e.target.value)} value={editMeta} className='rounded-xl px-4 py-3 border border-gray-100 bg-gray-50' type="text" placeholder='Comma separated' />
                        </div>
                        <div className='flex flex-col gap-2'>
                           <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Image (Leave empty to keep current)</label>
                           <label htmlFor="editImage" className='flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-gray-100 rounded-xl cursor-pointer bg-gray-50 hover:bg-white transition-all overflow-hidden'>
                               {!editImage ? 
                                   <div className='flex flex-col items-center p-4 text-center'>
                                       <Upload className='w-6 h-6 text-[#b88a1e] mb-2' />
                                       <p className='text-[10px] text-gray-500'>Click to change image</p>
                                   </div>
                               : 
                                   <img className='w-full h-full object-cover' src={URL.createObjectURL(editImage)} alt="" />
                               }
                               <input onChange={(e) => setEditImage(e.target.files[0])} type="file" id='editImage' hidden />
                           </label>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-50/50 rounded-2xl p-6 space-y-6'>
                    <h3 className='text-sm font-bold text-gray-900 flex items-center gap-2'>
                        <LayoutDashboard className='w-4 h-4 text-[#b88a1e]' />
                        Key Statistics
                    </h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {/* Stat 1 */}
                        <div className='bg-white p-4 rounded-xl border border-gray-100 space-y-4'>
                            <p className='text-[10px] font-bold text-[#b88a1e] uppercase tracking-widest'>Stat 1</p>
                            <div className='space-y-3'>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>VALUE</label>
                                    <input onChange={(e) => setEditStat1({...editStat1, value: e.target.value})} value={editStat1.value} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50' type="text" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>LABEL</label>
                                    <input onChange={(e) => setEditStat1({...editStat1, label: e.target.value})} value={editStat1.label} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50' type="text" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>ICON</label>
                                    <select onChange={(e) => setEditStat1({...editStat1, icon: e.target.value})} value={editStat1.icon} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50'>
                                        {iconsList.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Stat 2 */}
                        <div className='bg-white p-4 rounded-xl border border-gray-100 space-y-4'>
                            <p className='text-[10px] font-bold text-[#b88a1e] uppercase tracking-widest'>Stat 2</p>
                            <div className='space-y-3'>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>VALUE</label>
                                    <input onChange={(e) => setEditStat2({...editStat2, value: e.target.value})} value={editStat2.value} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50' type="text" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>LABEL</label>
                                    <input onChange={(e) => setEditStat2({...editStat2, label: e.target.value})} value={editStat2.label} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50' type="text" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>ICON</label>
                                    <select onChange={(e) => setEditStat2({...editStat2, icon: e.target.value})} value={editStat2.icon} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50'>
                                        {iconsList.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Stat 3 */}
                        <div className='bg-white p-4 rounded-xl border border-gray-100 space-y-4'>
                            <p className='text-[10px] font-bold text-[#b88a1e] uppercase tracking-widest'>Stat 3</p>
                            <div className='space-y-3'>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>VALUE</label>
                                    <input onChange={(e) => setEditStat3({...editStat3, value: e.target.value})} value={editStat3.value} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50' type="text" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>LABEL</label>
                                    <input onChange={(e) => setEditStat3({...editStat3, label: e.target.value})} value={editStat3.label} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50' type="text" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>ICON</label>
                                    <select onChange={(e) => setEditStat3({...editStat3, icon: e.target.value})} value={editStat3.icon} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50'>
                                        {iconsList.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Stat 4 */}
                        <div className='bg-white p-4 rounded-xl border border-gray-100 space-y-4'>
                            <p className='text-[10px] font-bold text-[#b88a1e] uppercase tracking-widest'>Stat 4</p>
                            <div className='space-y-3'>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>VALUE</label>
                                    <input onChange={(e) => setEditStat4({...editStat4, value: e.target.value})} value={editStat4.value} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50' type="text" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>LABEL</label>
                                    <input onChange={(e) => setEditStat4({...editStat4, label: e.target.value})} value={editStat4.label} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50' type="text" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[10px] text-gray-400 font-bold'>ICON</label>
                                    <select onChange={(e) => setEditStat4({...editStat4, icon: e.target.value})} value={editStat4.icon} className='w-full px-3 py-2 text-xs border border-gray-100 rounded-lg bg-gray-50'>
                                        {iconsList.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-50 pt-6 flex justify-end gap-3'>
                    <button type="button" onClick={() => setIsEditModalOpen(false)} className='px-6 py-2.5 text-sm font-bold text-gray-500 hover:bg-gray-100 rounded-xl transition-all'>Cancel</button>
                    <button type="submit" disabled={loading} className='px-8 py-2.5 bg-black text-white text-sm font-bold rounded-xl shadow-lg hover:bg-[#b88a1e] transition-all disabled:bg-gray-400'>
                        {loading ? "Updating..." : "Save Changes"}
                    </button>
                </div>
            </form>
        </Modal>
    </div>
  )
}

export default List
