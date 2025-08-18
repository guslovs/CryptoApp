import video from '../../images/kings-video.mp4';
import kings from '../../images/kings.svg';

export default function Section8Partners() {
    return (
        <section className="section4-Partners">
            <div>
                <video style={{
                    
                }} autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <img style={{
                    position: 'relative',
                    left: '50px',
                    bottom: '750px',
                    height: '350px',
                    width: '550px'
                }} src={kings} alt="" />
            </div>
        </section>
    )
}