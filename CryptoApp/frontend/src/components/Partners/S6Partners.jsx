import video from '../../images/76ers-video.mp4';
import sixers from '../../images/76ers.svg';

export default function Section6Partners() {
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
                    bottom: '750px',
                    height: '350px',
                    width: '450px'
                }} src={sixers} alt="" />
            </div>
        </section>
    )
}