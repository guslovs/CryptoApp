import video from '../../images/ufc-video.mp4';
import ufc from '../../images/ufc.svg';

export default function Section5Partners() {
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
                }} src={ufc} alt="" />
            </div>
        </section>
    )
}