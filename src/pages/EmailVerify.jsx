import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';
import OTPInput from '../components/OTPInput';
import { BASE_URL, SIGNUP_URL } from '../config/config';

const EmailVerify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, password, type } = location.state || {};
  
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    if (!storedUserId || !email || !password) {
      navigate('/signup');
      return;
    }
    setUserId(storedUserId);
  }, [navigate, email, password]);

  const handleResend = async () => {
    setResending(true);
    setError('');

    try {
      const response = await fetch(SIGNUP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          type: type || 'normal',
          fcm_token: "cfergferljljsfljsfdkjfg"
        }),
      });

      const data = await response.json();

      if (response.ok && data.status) {
        sessionStorage.setItem('userId', data.userdata._id);
        setUserId(data.userdata._id);
        setError('Verification code resent successfully!');
        setOtp(''); // Clear existing OTP
      } else {
        setError(data.message || 'Failed to resend code. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setResending(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.length !== 5) {
      setError('Please enter the complete 5-digit code');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/user/verify/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();

      if (response.ok && data.status) {
        // Clear userId from session storage
        sessionStorage.removeItem('userId');
        navigate('/thank-you');
      } else {
        setError(data.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 py-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <div className="mb-8">
          <Logo className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto" />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Verification Code
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Please enter the 5-digit code sent to<br />
            <span className="font-medium">{email}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <OTPInput
            length={5}
            value={otp}
            onChange={setOtp}
            error={error}
          />

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg mx-4 sm:mx-0">
              <p className="text-sm text-red-600 text-center">{error}</p>
            </div>
          )}

          <div className="px-4 sm:px-0">
            <Button
              type="submit"
              variant="gradient"
              className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold"
              disabled={loading || otp.length !== 5}
            >
              {loading ? 'Verifying...' : 'Verify'}
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Didn't receive the code?{" "}
            <button 
              type="button"
              className="text-orange-500 font-medium hover:text-orange-600 focus:outline-none disabled:opacity-50"
              onClick={handleResend}
              disabled={resending}
            >
              {resending ? 'Resending...' : 'Resend'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
