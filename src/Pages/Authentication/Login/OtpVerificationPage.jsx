import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { EmailInput, HeaderNavigate, LoaderLogin, PasswordInput, SubmitButton } from '../../../Components/Components'
import { useAuth } from '../../../Context/Auth'
import { usePost } from '../../../Hooks/usePost'
import { setUser } from '../../../Store/CreateSlices'
import { IoIosArrowBack } from 'react-icons/io'
import { InputOtp } from 'primereact/inputotp'

const OtpVerificationPage = () => {
       const auth = useAuth();
       const dispatch = useDispatch()
       const navigate = useNavigate();

       const { postData, loadingPost, response } = usePost({ url: 'https://lamadabcknd.food2go.online/api/admin/auth/login' }); // Destructure as an object
       const [token, setToken] = useState('');

       const customInput = ({ events, props }) => {
              console.log('props', props);
              
              // Remove 'invalid' from props and apply the logic accordingly
              const { invalid, ...inputProps } = props;
              const inputClass = invalid ? 'invalid-class' : ''; // Apply class conditionally
          
              return (
                  <input 
                      {...events} 
                      {...inputProps} 
                      key={props.id} 
                      className={`bg-secoundBgColor shadow-md text-center text-xl font-TextFontMedium border-b-2 text-secoundColor p-5 rounded-2xl outline-mainColor w-1/4 custom-otp-input ${inputClass}`} 
                      type="text"
                      unstyled={props.unstyled ? 'true' : 'false'} // Convert the boolean to a string

                  />
              );
          };
          


       const handleLogin = (e) => {
              e.preventDefault(); // Use uppercase "D"

              if (!email) {
                     auth.toastError("Please Enter The Email.");
                     return;
              }
              if (!password) {
                     auth.toastError("Please Enter The Password.");
                     return;
              }
              const payload =
              {
                     email,
                     password
              }

              postData(payload); // Call postData with formData
       };

       useEffect(() => {
              if (response) {
                     console.log('response', response)

                     dispatch(setUser(response.data.admin))


                     auth.login(response.data.admin)

                     navigate("/dashboard", { replace: true });
              }
       }, [response])
       return (
              <>
                     <form onSubmit={handleLogin} className="w-full flex items-center justify-center mx-auto h-screen overflow-hidden">
                            <div className="sm:w-full flex flex-col items-start justify-start gap-y-8 h-full">

                                   {loadingPost ?
                                          (
                                                 <>
                                                        <div className="w-full h-full"><LoaderLogin /></div>
                                                 </>
                                          )
                                          : (
                                                 <>
                                                        <div className="w-full">
                                                               <HeaderNavigate
                                                                      title={'OTP Verification'}
                                                               />
                                                        </div>
                                                        <div className="flex w-full  flex-col items-start justify-start gap-y-4 mt-5">
                                                               <span className='sm:text-3xl xl:text-4xl font-TextFontRegular text-secoundColor'>OTP Verification</span>
                                                               <span className='sm:text-xl xl:text-2xl font-TextFontRegular text-secoundColor'>
                                                                      Enter the OTP sent to - +91-8976500001
                                                               </span>
                                                        </div>
                                                        <div className="w-full  ">
                                                               <div className="w-8/12 mx-auto flex items-center justify-center mt-12">
                                                                      <InputOtp value={token} onChange={(e) => setToken(e.value)} inputTemplate={customInput} />
                                                               </div>
                                                        </div>

                                                        <div className="w-full mt-5">
                                                               <SubmitButton text={'Send'} handleClick={() => handleOtp} />
                                                        </div>
                                                 </>
                                          )}
                            </div>
                     </form>
              </>
       )
}

export default OtpVerificationPage