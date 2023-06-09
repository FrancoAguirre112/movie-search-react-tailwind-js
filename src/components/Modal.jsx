import modalClose from '../assets/hamburgerMenuClose.svg';

function Modal( { open, onClose, children } ) {
  return (
    <div className={`fixed inset-0 flex items-center ${open ? '' : 'pointer-events-none'}`}>
        <div className={`fixed inset-0 bg-black ${open ? 'opacity-50' : 'pointer-events-none opacity-0'} transition-opacity duration-200 ease-in-out`} onClick={onClose} />
        <div className={`fixed inset-x-0 mx-auto rounded-lg bg-gray-400 shadow-lg max-w-screen-sm p-4 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-200 ease-in-out `}>
            <div className='flex justify-end mb-3'>
                <button onClick={onClose}><img src={modalClose}/></button>
            </div>
            { children }
        </div>
    </div>
  )
}

export default Modal