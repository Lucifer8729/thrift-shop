import React from 'react';

const SignInSignUp = () => {
    return (
        <>
            <section className="signup">
                <div className='container'>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <h2 className='form-title'> Sign Up </h2> 
                             <form className='register-form' id='register-form'>
                                <div className='form-group'>
                                    <label htmlFor='name'>                             
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete='off' placeholder='Name'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email'>                      
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete='off' placeholder='Email'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='mobile'>                           
                                    </label>
                                    <input type="text" name="mobile" id="mobile" autoComplete='off' placeholder='Mobile'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>                    
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete='off' placeholder='Password'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='confirm'>                          
                                    </label>
                                    <input type="password" name="confirm" id="confirm" autoComplete='off' placeholder='Confirm Password'/>
                                </div>
                                <div className='form-group form-button'>
                                    <input type="submit" name="sign-up-submit" id="sign-up-submit" value="Sign Up" /> 
                                </div>
                                <div>
                                    <h4>or</h4>
                                </div>
                                <div className='form-group form-button'>
                                    <input type="submit" name="sign-up-submit" id="sign-up-submit" value="Sign Up using Google" /> 
                                </div>
                                <div>
                                    <h5>Already have an account? Login</h5>
                                </div>
                            </form> 

                            {/* <div className='signup-image'>
                                <figure>
                                    <img src={shopimg} alt="image" />
                                </figure> 
                            </div> */}
                        </div>
                    </div>
                </div> 

            </section>
        </>
    )
}

export default SignInSignUp
