
const SubmitButton = ({ width = 'w-full', text, bgColor = "mainColor", Color = "white", Size = "text-2xl", px = "px-7", rounded = "rounded-xl", handleClick }) => {
       return (
              <button
                     type='submit'
                     className={`bg-mainColor ${width} text-white ${Size} font-TextFontRegular ${rounded} pt-2 py-3 ${px} border-2 border-mainColor hover:bg-white hover:text-mainColor transition-all duration-300`}
                     onClick={handleClick}>
                     {text}
              </button>
       );
};
export default SubmitButton;