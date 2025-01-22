import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { EmailInput, HeaderNavigate, LoaderLogin, NumberInput, PasswordInput, SubmitButton, TextInput } from '../../../Components/Components'
import { useAuth } from '../../../Context/Auth'
import { usePost } from '../../../Hooks/usePost'
import { setOtpCode, setUser } from '../../../Store/CreateSlices'
import { IoIosArrowBack } from 'react-icons/io'
import { InputOtp } from 'primereact/inputotp'

const SignUpPage = () => {
       const auth = useAuth();
       const dispatch = useDispatch()
       const navigate = useNavigate();

       const signType = useSelector((state) => state.signUpType.data);
       const code = useSelector((state) => state.otp.code);

       const [signState, setSignState] = useState('signUp');

       const { postData: postEmail, loadingPost: loadingEmail, response: responseEmail } = usePost({ url: 'https://bcknd.food2go.online/api/user/auth/signup/code' }); // Destructure as an object
       const { postData: postPhone, loadingPost: loadingPhone, response: responsePhone } = usePost({ url: 'https://bcknd.food2go.online/api/user/auth/signup/phone_code' }); // Destructure as an object
       const { postData: postSignUp, loadingPost: loadingSignUp, response: responseSignUp } = usePost({ url: 'https://bcknd.food2go.online/api/user/auth/signup' }); // Destructure as an object

       const [firstName, setFirstName] = useState('');
       const [lastName, setLastName] = useState('');
       const [phone, setPhone] = useState('');
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [configPassword, setConfigPassword] = useState('');

       const [token, setToken] = useState(null);

       const customInput = ({ events, props }) => {
              const { invalid, ...inputProps } = props;
              const inputClass = invalid ? 'invalid-class' : ''; // Apply class conditionally

              return (
                     <input
                            {...events}
                            {...inputProps}
                            key={props.id}
                            className={`bg-secoundBgColor shadow-md text-center text-xl font-TextFontMedium border-b-2 text-secoundColor p-5 rounded-2xl outline-mainColor w-1/5 custom-otp-input ${inputClass}`}
                            type="text"
                            unstyled={props.unstyled ? 'true' : 'false'} // Convert the boolean to a string
                     />
              );
       };

       const handleSignUp = (e) => {
              e.preventDefault(); // Use uppercase "D"
              setToken('')
              if (!firstName) {
                     auth.toastError("Please Enter Your Name.");
                     return;
              }
              if (!lastName) {
                     auth.toastError("Please Enter Your Last Name.");
                     return;
              }
              if (!phone) {
                     auth.toastError("Please Enter Your Phone.");
                     return;
              }
              if (!email) {
                     auth.toastError("Please Enter Your Email.");
                     return;
              }
              if (!email.includes('@')) {
                     auth.toastError("Please Enter '@' before Your Email.");
                     return;
              }
              if (!password) {
                     auth.toastError("Please Enter Your Password.");
                     return;
              }
              if (configPassword !== password) {
                     auth.toastError("Your confirmation password does not match the password.");
                     return;
              }


              const payload =
              {
                     f_name: firstName,
                     l_name: lastName,
                     phone,
                     email,
                     password,
                     conf_password: configPassword
              }

              if (signType.login === 'manuel') {
                     postSignUp(payload);
              } else {
                     if (token) {
                            Number(token) === code ? postSignUp(payload) : auth.toastError('Your code is wrong');
                     } else {
                            if (signType.verification === 'email') {
                                   postEmail({ email: payload.email });
                            }
                            if (signType.verification === 'phone') {
                                   postPhone({ phone: payload.phone });
                            }
                     }
              }


       };
       useEffect(() => {
              console.log('token', Number(token))
       }, [token])
       /* send manuel */
       useEffect(() => {
              if (responseSignUp) {
                     console.log('responseSignUp', responseSignUp)
                     auth.login(responseSignUp.data)
                     dispatch(setOtpCode(''))
                     navigate("/", { replace: true });
              }
       }, [responseSignUp])

       /* send otp email */
       useEffect(() => {
              if (responseEmail) {
                     setSignState('otp')
                     dispatch(setOtpCode(responseEmail.data.code))
                     console.log('responseEmail', responseEmail)

              }
       }, [responseEmail])

       /* send otp Phone */
       useEffect(() => {
              if (responsePhone) {
                     setSignState('otp')
                     dispatch(setOtpCode(responsePhone.data.code))
                     console.log('responsePhone', responsePhone)

              }
       }, [responsePhone])


       return (
              <>
                     <form onSubmit={handleSignUp} className="w-full flex items-center justify-center mx-auto h-screen overflow-hidden">
                            <div className="sm:w-full flex flex-col items-start justify-start gap-y-8 h-full">
                                   {loadingSignUp || loadingEmail || loadingPhone ?
                                          (
                                                 <>
                                                        <div className="w-full mt-36">
                                                               <LoaderLogin />
                                                        </div>
                                                 </>
                                          )
                                          : (
                                                 <>
                                                        {signState === 'signUp' && (
                                                               <>
                                                                      <div className="w-full">
                                                                             <HeaderNavigate
                                                                                    title={'Sign Up'}
                                                                             />
                                                                      </div>

                                                                      <div className="flex w-full  flex-col items-start justify-start gap-y-4">
                                                                             <span className='sm:text-4xl xl:text-5xl font-TextFontRegular text-secoundColor'>Sign Up to Food2go</span>
                                                                      </div>
                                                                      <div className="w-full flex flex-col justify-center  gap-y-10 ">

                                                                             <div className="w-full flex flex-col justify-center gap-y-6">
                                                                                    <div className="w-full flex sm:flex-col lg:flex-row items-center justify-between sm:gap-6 ">
                                                                                           <TextInput
                                                                                                  value={firstName}
                                                                                                  placeholder={'First Name'}
                                                                                                  onChange={(e) => setFirstName(e.target.value)}
                                                                                           />
                                                                                           <TextInput
                                                                                                  value={lastName}
                                                                                                  placeholder={'Last Name'}
                                                                                                  onChange={(e) => setLastName(e.target.value)}
                                                                                           />
                                                                                    </div>

                                                                                    <div className="w-full">
                                                                                           <NumberInput
                                                                                                  value={phone}
                                                                                                  backgound={'secoundBgColor'}
                                                                                                  placeholder={'Phone'}
                                                                                                  onChange={(e) => setPhone(e.target.value)}
                                                                                           />
                                                                                    </div>
                                                                                    <div className="w-full">
                                                                                           <EmailInput
                                                                                                  value={email}
                                                                                                  required={false}
                                                                                                  placeholder={'Email'}
                                                                                                  onChange={(e) => setEmail(e.target.value)}
                                                                                           />
                                                                                    </div>

                                                                                    <div className="w-full flex flex-col gap-y-3">
                                                                                           <PasswordInput
                                                                                                  value={password}
                                                                                                  placeholder={'Password'}
                                                                                                  required={false}
                                                                                                  onChange={(e) => setPassword(e.target.value)}
                                                                                           />
                                                                                    </div>
                                                                                    <div className="w-full flex flex-col gap-y-3">
                                                                                           <PasswordInput
                                                                                                  value={configPassword}
                                                                                                  placeholder={'Config Password'}
                                                                                                  required={false}
                                                                                                  onChange={(e) => setConfigPassword(e.target.value)}
                                                                                           />
                                                                                    </div>
                                                                             </div>

                                                                             <div className="w-full flex flex-col gap-y-3">
                                                                                    <SubmitButton text={'Sign Up'} handleClick={handleSignUp} />
                                                                                    <div className="w-full ">
                                                                                           <span className='text-xl text-secoundColor font-TextFontRegular'>I Have An Account? <Link to={'/auth/login'} className='text-mainColor font-TextFontRegular border-b-2 border-mainColor'> LogIn</Link></span>
                                                                                    </div>

                                                                             </div>
                                                                      </div>
                                                               </>

                                                        )}
                                                        {signState === 'otp' && (
                                                               <>
                                                                      {code}
                                                                      <div className="w-full">
                                                                             <HeaderNavigate
                                                                                    title={'OTP Verification'}
                                                                                    handleNavigate={() => setSignState('signUp')}
                                                                             />
                                                                      </div>
                                                                      <div className="flex w-full  flex-col items-start justify-start gap-y-4 mt-5">
                                                                             <span className='sm:text-3xl xl:text-4xl font-TextFontRegular text-secoundColor'>OTP Verification</span>
                                                                             <span className='sm:text-xl xl:text-2xl font-TextFontRegular text-secoundColor'>
                                                                                    Enter the OTP sent to {signType.verification === 'email' && email} {signType.verification === 'phone' && phone}
                                                                             </span>
                                                                      </div>
                                                                      <div className="w-full  ">
                                                                             <div className="w-8/12 mx-auto flex items-center justify-center mt-12">
                                                                                    <InputOtp value={token} onChange={(e) => {
                                                                                           setToken(e.value);
                                                                                           if (e.value.length === 5) {  // Properly check if the length is 5
                                                                                                  handleSignUp;          // Call handleSignUp if length is 5
                                                                                           }
                                                                                    }} length={5} integerOnly inputTemplate={customInput} />
                                                                             </div>
                                                                      </div>

                                                                      <div className="w-full mt-5">
                                                                             <SubmitButton text={'Send'} handleClick={handleSignUp} />
                                                                      </div>
                                                               </>

                                                        )}
                                                 </>
                                          )}
                            </div>
                     </form>
              </>
       )
}

export default SignUpPage