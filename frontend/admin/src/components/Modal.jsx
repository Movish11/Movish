import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, showConfirm, onConfirm, confirmText = "Confirm", confirmColor = "bg-black", maxWidth = "max-w-lg" }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
            <div className={`bg-white rounded-[2rem] w-full ${maxWidth} shadow-2xl border border-gray-100 overflow-hidden transform animate-in slide-in-from-bottom-8 duration-300`}>
                {/* Header */}
                <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
                    <h3 className="text-xl font-playfair font-bold text-gray-900">{title}</h3>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400 hover:text-gray-900"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="px-8 py-8">
                    {children}
                </div>

                {/* Footer (Optional) */}
                {showConfirm && (
                    <div className="px-8 py-6 bg-gray-50/50 flex items-center justify-end gap-3">
                        <button 
                            onClick={onClose}
                            className="px-6 py-2.5 rounded-xl text-sm font-bold text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={onConfirm}
                            className={`px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 ${confirmColor}`}
                        >
                            {confirmText}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
