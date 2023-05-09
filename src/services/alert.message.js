import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccess = (message) => {
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const showWarning = (message) => {
  toast.warning(message, {
    position: 'bottom-right',
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const showError = (message) => {
  toast.error(message, {
    position: 'bottom-right',
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
