import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"

const TitlePage = ({ title }) => {
       const navigate = useNavigate();
       const handleBack = () => {
              navigate(-1, { replace: true })
       }
       return (
              <>
                     <div className="w-full flex items-center justify-start py-2">
                            <IoIosArrowBack
                                   className="text-5xl text-mainColor cursor-pointer"
                                   onClick={handleBack}
                            />
                            {/* <div className="w-1/12 flex items-start justify-start">
                            </div> */}
                            <div className="w-full flex items-start justify-center">
                                   <span className="text-4xl font-TextFontMedium text-mainColor">{title}</span>
                            </div>
                     </div>
              </>
       )
}

export default TitlePage