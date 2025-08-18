import video from '../../images/conmebol-video.mp4';
import conmebol from '../../images/conmebol.svg';

export default function Section7Partners() {
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
                }} src={conmebol} alt="" />
            </div>
        </section>
    )
}