
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <button
          onClick={handleGoHome}
          className="border p-2 px-5 rounded-md bg-[#C99A2D] text-white hover:bg-[#b08a25] transition-colors"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
