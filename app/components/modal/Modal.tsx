'use client';
import {useEffect, useRef} from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: any;
    modalTitle: string;
    onValidate: () => boolean;
    onRequestSubmit: () => Promise<boolean>;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children, modalTitle,onValidate, onRequestSubmit}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                handleSubmit();
            }
        }

        document.addEventListener("click", checkIfClickedOutside);
        document.addEventListener("keypress", handleKeyPress);

        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
            document.removeEventListener("keypress", handleKeyPress);
        };
    }, [onClose]);

    const handleSubmit = async () => {
        if(!onValidate()){
            return;
        }

        const success = await onRequestSubmit();

        if(success){
            onClose();
        }

        return
    }

    return (
        <div>
            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className={`relative bg-white rounded-lg shadow`} ref={modalRef}>
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {modalTitle}
                                </h3>
                                <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only" >Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                                <p className="text-base leading-relaxed text-gray-500">
                                    {children}
                                </p>
                            </div>
                            <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b gap-2">
                                <button  onClick={onClose} data-modal-hide="default-modal" type="button" className="ms-3 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10">Fechar</button>
                                <button  onClick={handleSubmit} data-modal-hide="default-modal" type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Criar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal;