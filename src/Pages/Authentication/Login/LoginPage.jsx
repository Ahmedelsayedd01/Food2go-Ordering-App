import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EmailInput, HeaderNavigate, LoaderLogin, PasswordInput, SubmitButton } from '../../../Components/Components';
import { useAuth } from '../../../Context/Auth';
import { usePost } from '../../../Hooks/usePost';
import { setNewPass, setOtpCode } from '../../../Store/CreateSlices';
import { InputOtp } from 'primereact/inputotp';
import { selectNewPassState, selectOtpCode, selectSignUpType } from '../../../Store/selectors';

const LoginPage = () => {
       const auth = useAuth();
       const dispatch = useDispatch();
       const navigate = useNavigate();

       const signType = useSelector(selectSignUpType);
       const code = useSelector(selectOtpCode);
       const newPassState = useSelector(selectNewPassState);

       const [loginState, setLoginState] = useState('logIn');
       const [phone, setPhone] = useState('');
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [token, setToken] = useState('');

       const { postData: postEmail, loadingPost: loadingEmail, response: responseEmail } = usePost({ url: 'https://bcknd.food2go.online/customer/otp/create_code' });
       const { postData: postPhone, loadingPost: loadingPhone, response: responsePhone } = usePost({ url: 'https://bcknd.food2go.online/api/user/auth/signup/phone_code' });
       const { postData: postLogin, loadingPost: loadingLogin, response: responseLogin } = usePost({ url: 'https://bcknd.food2go.online/api/user/auth/login' });
       const { postData: postNewLogin, loadingPost: loadingNewLogin, response: responseNewLogin } = usePost({ url: 'https://bcknd.food2go.online/customer/otp/change_password' });

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

       const handleLogin = (e) => {
              e.preventDefault();

              const payload = { email, password };

              if (!code && !newPassState) {
                     if (loginState === 'logIn') {
                            if (!email) {
                                   auth.toastError('Please Enter Your Email.');
                                   return;
                            }
                            if (!email.includes('@')) {
                                   auth.toastError('Please Enter a Valid Email Address.');
                                   return;
                            }
                            if (!password) {
                                   auth.toastError('Please Enter Your Password.');
                                   return;
                            }
                            postLogin(payload);
                     } else {
                            if (signType.verification === 'email') {
                                   if (!email) {
                                          auth.toastError('Please Enter Your Email.');
                                          return;
                                   }
                                   postEmail({ email });
                            } else if (signType.verification === 'phone') {
                                   if (!phone) {
                                          auth.toastError('Please Enter Your Phone.');
                                          return;
                                   }
                                   postPhone({ phone });
                            }
                     }
              } else {
                     if (loginState === 'otp') {
                            if (token) {
                                   if (Number(token) === code) {
                                          setLoginState('logIn');
                                          dispatch(setNewPass(true));
                                   } else {
                                          auth.toastError('Your code is incorrect.');
                                   }
                            } else {
                                   auth.toastError('Please Enter OTP.');
                            }
                     } else if (loginState === 'logIn') {
                            postNewLogin({ code, email, password }, 'Your Password Updated Successfully');
                     }
              }
       };

       useEffect(() => {
              if (responseEmail) {
                     setLoginState('otp');
                     dispatch(setOtpCode(responseEmail.data.code));
              }
       }, [responseEmail, dispatch]);

       useEffect(() => {
              if (responsePhone) {
                     setLoginState('otp');
                     dispatch(setOtpCode(responsePhone.data.code));
              }
       }, [responsePhone, dispatch]);

       useEffect(() => {
              if (responseLogin) {
                     auth.login(responseLogin.data);
                     dispatch(setOtpCode(null));
                     navigate('/', { replace: true });
              }
       }, [responseLogin]);

       useEffect(() => {
              if (responseNewLogin) {
                     auth.login(responseNewLogin.data);
                     dispatch(setOtpCode(null));
                     dispatch(setNewPass(false));
                     navigate('/', { replace: true });
              }
       }, [responseNewLogin]);

       return (
              <form onSubmit={handleLogin} className="w-full flex items-center justify-center mx-auto h-screen overflow-hidden">
                     <div className="sm:w-full flex flex-col items-start justify-start gap-y-8 h-full">
                            {(loadingLogin || loadingEmail || loadingPhone || loadingNewLogin) ? (
                                   <div className="w-full mt-36">
                                          <LoaderLogin />
                                   </div>
                            ) : (
                                   <>
                                          {loginState === 'logIn' && (
                                                 <>
                                                        <HeaderNavigate title={'LogIn'} />
                                                        <div className={`${newPassState ? 'mt-16' : 'mt-5'} flex w-full flex-col items-start justify-start gap-y-4`}>
                                                               <span className='sm:text-4xl xl:text-5xl font-TextFontRegular text-secoundColor'>
                                                                      {newPassState ? 'Set Your New Password' : 'Login to Food2go'}
                                                               </span>
                                                        </div>
                                                        <div className="w-full flex flex-col justify-center gap-y-10">
                                                               <div className="w-full flex flex-col justify-center gap-y-6">
                                                                      {!newPassState && (
                                                                             <EmailInput
                                                                                    value={email}
                                                                                    required={false}
                                                                                    placeholder={'Email'}
                                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                             />
                                                                      )}
                                                                      <PasswordInput
                                                                             value={password}
                                                                             required={false}
                                                                             placeholder={'Password'}
                                                                             onChange={(e) => setPassword(e.target.value)}
                                                                      />
                                                                      <div className="text-end">
                                                                             <button
                                                                                    type="button"
                                                                                    className="font-TextFontMedium text-xl text-mainColor border-b-2 border-mainColor"
                                                                                    onClick={() => setLoginState('forgetPass')}
                                                                             >
                                                                                    Forget Password?
                                                                             </button>
                                                                      </div>
                                                               </div>
                                                               <SubmitButton text={'Login'} />
                                                               <div className="w-full">
                                                                      <span className='text-xl text-secoundColor font-TextFontRegular'>
                                                                             I Don't Have An Account? <Link to={'/auth/sign_up'} className='text-mainColor font-TextFontRegular border-b-2 border-mainColor'>SignUp</Link>
                                                                      </span>
                                                               </div>
                                                        </div>
                                                 </>
                                          )}
                                          {loginState === 'forgetPass' && (
                                                 <>
                                                        <HeaderNavigate title={'Forgot Password'} handleNavigate={() => setLoginState('logIn')} />
                                                        <div className="flex w-full flex-col items-start justify-start gap-y-4 mt-20">
                                                               <span className='sm:text-2xl font-TextFontRegular text-secoundColor'>
                                                                      Don't worry! That happens. Please register your {signType === 'email' ? 'email' : 'phone'} to which we will send your One Time Password (OTP).
                                                               </span>
                                                        </div>
                                                        {signType.verification === "email" && (
                                                               <EmailInput
                                                                      value={email}
                                                                      placeholder={'Enter Your Email'}
                                                                      onChange={(e) => setEmail(e.target.value)}
                                                               />
                                                        )}
                                                        {signType.verification === "phone" && (
                                                               <EmailInput
                                                                      value={phone}
                                                                      placeholder={'Enter Your Phone'}
                                                                      onChange={(e) => setPhone(e.target.value)}
                                                               />
                                                        )}
                                                        <SubmitButton text={'Continue'} />
                                                 </>
                                          )}
                                          {loginState === 'otp' && (
                                                 <>
                                                        <HeaderNavigate title={'OTP Verification'} handleNavigate={() => setLoginState('forgetPass')} />
                                                        <div className="flex w-full flex-col items-start justify-start gap-y-4 mt-5">
                                                               <span className='sm:text-3xl xl:text-4xl font-TextFontRegular text-secoundColor'>OTP Verification</span>
                                                               <span className='sm:text-xl xl:text-2xl font-TextFontRegular text-secoundColor'>
                                                                      Enter the OTP sent to {signType.verification === 'email' ? email : phone}
                                                               </span>
                                                        </div>
                                                        <div className="w-8/12 mx-auto flex items-center justify-center mt-12">
                                                               <InputOtp
                                                                      value={token}
                                                                      onChange={(e) => setToken(e.value)}
                                                                      length={5}
                                                                      integerOnly
                                                                      inputTemplate={customInput}
                                                               />
                                                        </div>
                                                        <SubmitButton text={'Send'} />
                                                 </>
                                          )}
                                   </>
                            )}
                     </div>
              </form>
       );
};

export default LoginPage;
