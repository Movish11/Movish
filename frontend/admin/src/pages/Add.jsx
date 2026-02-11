import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Upload, TrendingUp, Users, Star, BarChart3, Clock, ChevronRight, ArrowRight, LayoutDashboard } from 'lucide-react'

const iconsList = [
  { name: 'TrendingUp', icon: TrendingUp },
  { name: 'Users', icon: Users },
  { name: 'Star', icon: Star },
  { name: 'BarChart3', icon: BarChart3 },
  { name: 'Clock', icon: Clock }
]

const Add = ({ token }) => {

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("QSR")
  const [date, setDate] = useState("")
  
  const [tags, setTags] = useState("") // Comma separated
  const [meta, setMeta] = useState("") // Comma separated
  
  const [stat1, setStat1] = useState({ value: "", label: "", icon: "TrendingUp" })
  const [stat2, setStat2] = useState({ value: "", label: "", icon: "Users" })
  const [stat3, setStat3] = useState({ value: "", label: "", icon: "Star" })
  const [stat4, setStat4] = useState({ value: "", label: "", icon: "BarChart3" })

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData()

      formData.append("title", title)
      formData.append("description", description)
      formData.append("category", category)
      formData.append("date", date)
      formData.append("image", image)
      
      // Process tags and meta as arrays
      const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag !== "")
      const metaArray = meta.split(',').map(m => m.trim()).filter(m => m !== "")
      
      formData.append("tags", JSON.stringify(tagsArray))
      formData.append("meta", JSON.stringify(metaArray))
      formData.append("stats", JSON.stringify([stat1, stat2, stat3, stat4]))

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/blog/add`, formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setTitle("")
        setDescription("")
        setImage(false)
        setDate("")
        setTags("")
        setMeta("")
        setStat1({ value: "", label: "", icon: "TrendingUp" })
        setStat2({ value: "", label: "", icon: "Users" })
        setStat3({ value: "", label: "", icon: "Star" })
        setStat4({ value: "", label: "", icon: "BarChart3" })
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

  return (
    <div className='flex-1 bg-[#faf8f4] p-8 lg:p-12'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-center gap-2 text-sm text-gray-400 mb-8'>
            <span className='hover:text-black cursor-pointer transition-colors'>Admin</span>
            <ChevronRight className='w-4 h-4' />
            <span className='text-[#b88a1e] font-medium'>Add New Case Study</span>
        </div>

        <form onSubmit={onSubmitHandler} className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          
          {/* Left Column - Main Info */}
          <div className='lg:col-span-2 flex flex-col gap-8'>
            <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300'>
              <div className='flex items-center justify-between mb-8'>
                <h2 className='text-xl font-playfair font-bold text-gray-900 flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center'>
                      <LayoutDashboard className='w-5 h-4 text-[#b88a1e]' />
                    </div>
                    General Information
                </h2>
              </div>
              
              <div className='space-y-8'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                      <label className='text-xs font-bold text-gray-400 uppercase tracking-widest'>Case Study Title</label>
                    </div>
                    <ReactQuill 
                        theme="snow"
                        value={title}
                        onChange={setTitle}
                        modules={titleModules}
                        formats={titleFormats}
                        className='bg-white rounded-xl border border-gray-100 focus-within:border-[#b88a1e]/30 transition-all'
                        placeholder='e.g. Scaling Excellence: 40% Revenue Growth'
                    />
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                      <label className='text-xs font-bold text-gray-400 uppercase tracking-widest'>Detailed Description</label>
                    </div>
                    <ReactQuill 
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                        modules={modules}
                        formats={formats}
                        className='bg-white rounded-xl border border-gray-100 focus-within:border-[#b88a1e]/30 transition-all h-[300px] mb-12'
                        placeholder='Describe the challenge, solution, and results...'
                    />
                </div>
              </div>
            </div>

            <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300'>
               <h2 className='text-xl font-playfair font-bold text-gray-900 mb-6'>Key Statistics</h2>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {/* Stat 1 */}
                  <div className='space-y-4'>
                    <p className='text-sm font-bold text-[#b88a1e] mb-2'>Statistic 1</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase'>Value</label>
                            <input onChange={(e) => setStat1({...stat1, value: e.target.value})} value={stat1.value} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50' type="text" placeholder='+40%' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase'>Label</label>
                            <input onChange={(e) => setStat1({...stat1, label: e.target.value})} value={stat1.label} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50' type="text" placeholder='Growth' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[10px] font-bold text-gray-400 uppercase'>Icon</label>
                        <select onChange={(e) => setStat1({...stat1, icon: e.target.value})} value={stat1.icon} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50'>
                            {iconsList.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
                        </select>
                    </div>
                  </div>

                   {/* Stat 2 */}
                  <div className='space-y-4'>
                    <p className='text-sm font-bold text-[#b88a1e] mb-2'>Statistic 2</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase'>Value</label>
                            <input onChange={(e) => setStat2({...stat2, value: e.target.value})} value={stat2.value} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50' type="text" placeholder='96%' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase'>Label</label>
                            <input onChange={(e) => setStat2({...stat2, label: e.target.value})} value={stat2.label} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50' type="text" placeholder='Consistency' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[10px] font-bold text-gray-400 uppercase'>Icon</label>
                        <select onChange={(e) => setStat2({...stat2, icon: e.target.value})} value={stat2.icon} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50'>
                            {iconsList.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
                        </select>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className='space-y-4'>
                    <p className='text-sm font-bold text-[#b88a1e] mb-2'>Statistic 3</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase'>Value</label>
                            <input onChange={(e) => setStat3({...stat3, value: e.target.value})} value={stat3.value} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50' type="text" placeholder='5/5' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase'>Label</label>
                            <input onChange={(e) => setStat3({...stat3, label: e.target.value})} value={stat3.label} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50' type="text" placeholder='Rating' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[10px] font-bold text-gray-400 uppercase'>Icon</label>
                        <select onChange={(e) => setStat3({...stat3, icon: e.target.value})} value={stat3.icon} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50'>
                            {iconsList.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
                        </select>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className='space-y-4'>
                    <p className='text-sm font-bold text-[#b88a1e] mb-2'>Statistic 4</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase'>Value</label>
                            <input onChange={(e) => setStat4({...stat4, value: e.target.value})} value={stat4.value} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50' type="text" placeholder='12+' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[10px] font-bold text-gray-400 uppercase'>Label</label>
                            <input onChange={(e) => setStat4({...stat4, label: e.target.value})} value={stat4.label} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50' type="text" placeholder='Outlets' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[10px] font-bold text-gray-400 uppercase'>Icon</label>
                        <select onChange={(e) => setStat4({...stat4, icon: e.target.value})} value={stat4.icon} className='rounded-xl px-4 py-2.5 border border-gray-100 bg-gray-50'>
                            {iconsList.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
                        </select>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column - Secondary Settings */}
          <div className='flex flex-col gap-8'>
            <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100'>
              <label className='text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4'>Cover Image</label>
              <label htmlFor="image" className='flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-gray-100 rounded-2xl cursor-pointer bg-gray-50 hover:bg-white hover:border-[#b88a1e]/30 transition-all duration-500 overflow-hidden relative group'>
                {!image ? 
                  <div className='flex flex-col items-center justify-center p-6 text-center'>
                      <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform'>
                        <Upload className='w-6 h-6 text-[#b88a1e]' />
                      </div>
                      <p className='text-xs font-semibold text-gray-600'>Drop image or click</p>
                      <p className='text-[10px] text-gray-400 mt-1'>PNG, JPG, JPEG (Max 5MB)</p>
                  </div>
                : 
                <>
                    <img className='w-full h-full object-cover' src={URL.createObjectURL(image)} alt="" />
                    <div className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                        <Upload className='w-8 h-8 text-white' />
                    </div>
                </>
                }
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
              </label>
            </div>

            <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6'>
                <div className='flex flex-col gap-2'>
                    <label className='text-[10px] font-bold text-gray-400 uppercase'>Category</label>
                    <select onChange={(e) => setCategory(e.target.value)} value={category} className='rounded-xl px-4 py-3 border border-gray-100 bg-gray-50 outline-none focus:ring-2 focus:ring-[#b88a1e]/10'>
                      <option value="QSR">QSR</option>
                      <option value="Fine Dining">Fine Dining</option>
                      <option value="Cafe">Cafe</option>
                      <option value="Cloud Kitchen">Cloud Kitchen</option>
                      <option value="Expansion Strategy">Expansion Strategy</option>
                    </select>
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='text-[10px] font-bold text-gray-400 uppercase'>Tags (comma separated)</label>
                  <input onChange={(e) => setTags(e.target.value)} value={tags} className='rounded-xl px-4 py-3 border border-gray-100 bg-gray-50' type="text" placeholder='Revenue, Growth, Staff' />
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='text-[10px] font-bold text-gray-400 uppercase'>Meta Info (comma separated)</label>
                  <input onChange={(e) => setMeta(e.target.value)} value={meta} className='rounded-xl px-4 py-3 border border-gray-100 bg-gray-50' type="text" placeholder='Mumbai, 6-10 Outlets' />
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='text-[10px] font-bold text-gray-400 uppercase'>Publish Date</label>
                  <input onChange={(e) => setDate(e.target.value)} value={date} className='rounded-xl px-4 py-3 border border-gray-100 bg-gray-50' type="date" required/>
                </div>
            </div>

            <button type="submit" disabled={loading} className='w-full py-4 px-6 bg-black text-white hover:bg-[#b88a1e] transition-all duration-300 rounded-2xl font-bold shadow-xl shadow-black/10 hover:shadow-amber-900/20 transform hover:-translate-y-1 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3'>
              {loading ? "Publishing..." : "PUBLISH CASE STUDY"}
              {!loading && <ArrowRight className='w-5 h-5' />}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Add
