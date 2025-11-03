const NumericKeypad = ({ onNumberClick, onBackspace, onEnter }) => {
  const numbers = [
    { value: '1', letters: '' },
    { value: '2', letters: 'ABC' },
    { value: '3', letters: 'DEF' },
    { value: '4', letters: 'GHI' },
    { value: '5', letters: 'JKL' },
    { value: '6', letters: 'MNO' },
    { value: '7', letters: 'PQRS' },
    { value: '8', letters: 'TUV' },
    { value: '9', letters: 'WXYZ' },
  ];

  return (
    <div className="bg-gray-100 rounded-lg p-4 mt-6">
      <div className="grid grid-cols-3 gap-2 mb-2">
        {numbers.map((num) => (
          <button
            key={num.value}
            type="button"
            onClick={() => onNumberClick(num.value)}
            className="bg-white rounded-lg py-4 hover:bg-gray-50 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <div className="text-2xl font-semibold text-gray-800">{num.value}</div>
            {num.letters && (
              <div className="text-xs text-gray-500 mt-1">{num.letters}</div>
            )}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onNumberClick('0')}
          className="bg-white rounded-lg py-4 hover:bg-gray-50 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-1"
        >
          <div className="text-2xl font-semibold text-gray-800">0</div>
        </button>
        <button
          type="button"
          onClick={onBackspace}
          className="bg-white rounded-lg py-4 hover:bg-gray-50 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 flex items-center justify-center"
        >
          <div className="w-8 h-8 border-2 border-gray-400 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NumericKeypad;

