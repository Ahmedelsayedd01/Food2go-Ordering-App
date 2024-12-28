
const TitleSection = ({ text, size = '2xl' }) => {
       return (
              <>
                     <div className="w-full">
                            <span className={`sm:text-2xl xl:text-${size} font-TextFontMedium text-mainColor`}>{text}</span>
                     </div>
              </>
       )
}

export default TitleSection