import Logo from '../components/Logo';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-4 py-6 flex items-center justify-center">
      <div className="w-full max-w-md">
        <Logo className="mb-8 mx-auto w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />

        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Congratulations! 🎉
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-2">
            You are on our waiting list
          </p>
          
          <p className="text-sm sm:text-base text-gray-600 mb-8">
            We'll notify you once we launch. Get ready for an amazing dining experience!
          </p>

          <Button
            onClick={() => navigate('/')}
            variant="gradient"
            className="w-full sm:w-auto px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold mx-auto"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

