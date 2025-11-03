import { useRef, useEffect } from 'react';

const OTPInput = ({ length = 5, value, onChange, error }) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '');
    
    if (newValue.length > 1) {
      const pastedValues = newValue.slice(0, length).split('');
      const newOtp = [...value.split('')];
      pastedValues.forEach((val, idx) => {
        if (index + idx < length) {
          newOtp[index + idx] = val;
        }
      });
      onChange(newOtp.join('').slice(0, length));
      const nextIndex = Math.min(index + pastedValues.length, length - 1);
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus();
      }
      return;
    }

    const newOtp = value.split('');
    newOtp[index] = newValue;
    onChange(newOtp.join('').slice(0, length));

    if (newValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, length);
    if (pastedData) {
      onChange(pastedData);
      const nextIndex = Math.min(pastedData.length, length - 1);
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  return (
    <div className="flex gap-2 sm:gap-4 justify-center mb-6">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={`
            w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-semibold
            border-2 rounded-lg focus:outline-none focus:ring-2 
            focus:ring-orange-400 focus:border-orange-400 transition-all
            ${error ? 'border-red-500' : 'border-orange-300'}
          `}
        />
      ))}
    </div>
  );
};

export default OTPInput;

