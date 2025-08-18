import video from '../../images/ucl-video.mp4';
import ucl from '../../images/ucl.webp'

export default function Section3Partners() {
    return (
        <section className="section3-Partners">
            <div>
                <video style={{
                }} autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <img style={{
                    position: 'relative',
                    left: '150px',
                    bottom: '750px'
                }} src={ucl} alt="" />
            </div>
        </section>
    )
}