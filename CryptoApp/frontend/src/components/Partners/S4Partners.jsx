import video from '../../images/f1-video.mp4';
import f1 from '../../images/f1.svg';

export default function Section4Partners() {
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
                    left: '100px',
                    bottom: '600px',
                    height: '150px',
                    width: '450px'
                }} src={f1} alt="" />
            </div>
        </section>
    )
}