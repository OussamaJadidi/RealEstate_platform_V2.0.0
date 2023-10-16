import { useEffect, useRef, useState } from 'react';

type UseHandlePopUpType =React.RefObject<HTMLElement>

const useHandlePopUp = (popupTriggerRef: UseHandlePopUpType, popupRef: UseHandlePopUpType): [boolean, () => void] => {
  const [open, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen(state => !state);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node) && popupTriggerRef.current && !popupTriggerRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return [open, togglePopup]  ;
};

export default useHandlePopUp;
