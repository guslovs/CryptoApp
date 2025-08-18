import bgImage from '../../images/banking-bg.jpg'
import logo from '../../images/Logo.png'

export default function Section3LevelUp() {
    return (
        <section style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            height: '700px'
        }} className='section3-LevelUp' >
            <div>
                <div className='S3-img-div'>
                    <img src={logo} alt="Logo" />
                </div>
                <h1>BANKING</h1>
                <h5>COMING SOON</h5>
                <h3>Boost your banking</h3>
                <p>Experience a simpler, more rewarding way to bank with no hidden fees, competitive interest, and instant transfers.</p>
            </div>
        </section>
    )
}