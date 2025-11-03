const Input = ({ label, type = "text", value, onChange, placeholder, error, required = false, icon, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`
            w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base
            border rounded-lg focus:outline-none focus:ring-2 
            focus:ring-orange-400 focus:border-orange-400 transition-all duration-200
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${icon ? 'pr-8 sm:pr-10' : ''}
          `}
          {...props}
        />
        {icon && (
          <div className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <div className="w-4 h-4 sm:w-5 sm:h-5">
              {icon}
            </div>
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-xs sm:text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;

