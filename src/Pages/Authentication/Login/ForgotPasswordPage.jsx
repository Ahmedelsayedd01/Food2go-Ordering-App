import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { EmailInput, HeaderNavigate, LoaderLogin, PasswordInput, SubmitButton } from '../../../Components/Components'
import { useAuth } from '../../../Context/Auth'
import { usePost } from '../../../Hooks/usePost'
import { setUser } from '../../../Store/CreateSlices'
import { IoIosArrowBack } from 'react-icons/io'

const ForgotPasswordPage = () => {
       const auth = useAuth();
       const dispatch = useDispatch()
       const navigate = useNavigate();

       const { postData, loadingPost, response } = usePost({ url: 'https://lamadabcknd.food2go.online/api/admin/auth/login' }); // Destructure as an object
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');



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
                                                                      title={'Forgot Password'}
                                                               />
                                                        </div>
                                                        <div className="flex w-full  flex-col items-start justify-start gap-y-4 mt-5">
                                                               <span className='sm:text-3xl xl:text-4xl font-TextFontRegular text-secoundColor'>Forgot Password?</span>
                                                               <span className='sm:text-xl xl:text-2xl font-TextFontRegular text-secoundColor'>
                                                                      Don't worry! that happens. Please register your
                                                                      phone  or email to which we will send your One
                                                                      Time Password (OTP)
                                                               </span>
                                                        </div>
                                                        <div className="w-full flex flex-col justify-center  gap-y-10 ">

                                                               <div className="w-full flex flex-col justify-center gap-y-6 mt-6">

                                                                      <div className="w-full">
                                                                             <EmailInput
                                                                                    value={email}
                                                                                    required={false}
                                                                                    placeholder={'Enter Phone Or Email'}
                                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                             />
                                                                      </div>

                                                               </div>

                                                               <div className="w-full">
                                                                      <SubmitButton text={'Continue'} handleClick={handleLogin} />
                                                               </div>
                                                        </div>
                                                 </>
                                          )}
                            </div>
                     </form>
              </>
       )
}

export default ForgotPasswordPage