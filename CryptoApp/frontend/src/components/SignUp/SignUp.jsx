import img from '../../images/sign-up-img.png'

export default function SignUp() {
    return (
        <section className="sign-up">
            <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                position: 'relative',
                top: '80px'
            }}>
                <div style={{
                    height: '620px',
                    width: '560px',
                    backgroundColor: '#061121',
                    borderRadius: '16px'
                }}>
                    <h1 style={{
                        fontSize: '40px',
                        position: 'relative',
                        left: '40px',
                        top: '50px'
                    }}>Sign up to Crypto</h1>
                    <p style={{
                        position: 'relative',
                        left: '40px',
                        top: '30px'
                    }}>Already have an account? <a style={{ textDecoration: 'none' }} href="/login"><span className='blue-words'>Log In</span></a></p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '80%',
                        position: 'relative',
                        left: '40px',
                        top: '50px'
                    }}>
                        <input style={{
                            height: '40px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#D3D3D3',
                            backgroundColor: '#061121',
                            border: '2px white solid',
                            borderRadius: '12px'
                        }}
                            type="text"
                            placeholder="Please enter your email address"
                        />

                        <button style={{
                            position: 'relative',
                            top: '20px',
                            height: '40px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: 'white',
                            backgroundColor: '#1199FA',
                            border: '0px',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}><a style={{ textDecoration: 'none', color: 'white' }} href='/'>Create new account</a></button>
                    </div>
                    <p style={{
                        position: 'relative',
                        left: '40px',
                        top: '70px',
                        color: '#D3D3D3',
                        width: '400px'
                    }}>By submitting your email, you confirm you've read this <a style={{ textDecoration: 'none', color: '#1199FA' }} href="https://crypto.com/privacy/en">Privacy Notice</a></p>
                </div>
                <div style={{
                    height: '620px',
                    width: '560px',
                    borderRadius: '16px'
                }}>
                    <img style={{
                        height: '620px',
                        width: '560px',
                        borderRadius: '16px'
                    }} src={img} alt="" />
                </div>
            </div>
        </section>
    )
}