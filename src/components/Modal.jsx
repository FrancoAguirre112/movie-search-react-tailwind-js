import modalCloseIcon from '../assets/icons/menu/hamburgerMenuClose.svg';

function Modal( { open, onClose, children } ) {
  const overlayOpacity = open ? 'opacity-50' : 'opacity-0 pointer-events-none';
  const modalOpacity = open ? 'opacity-100' : 'opacity-0 pointer-events-none';

  return (
    <div className={`fixed inset-0 z-40 flex items-center ${open ? '' : 'pointer-events-none'}`}>
        {/* Overlay */}
        <div className={`${overlayOpacity} fixed inset-0 bg-black transition-opacity duration-200 ease-in-out`} onClick={onClose} />
        
        {/* Modal */}
        <div className={`${modalOpacity} fixed inset-x-0 mx-auto rounded-lg bg-gray-400 shadow-lg max-w-screen-sm p-4 transition-opacity duration-200 ease-in-out `}>
            <div className='flex justify-end mb-3'>
                <button onClick={onClose}><img src={modalCloseIcon} alt="close popup"/></button>
            </div>
            { children }
        </div>
    </div>
  )
}

export default Modal