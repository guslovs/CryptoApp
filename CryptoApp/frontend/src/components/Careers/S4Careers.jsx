import { useState } from "react"
import { JOBS } from "../../../../backend/Jobs"
import forward from '../../images/forward-arrow.png'
import backward from '../../images/backward-arrow.png'

export default function Section4Careers() {
    const itemsPerPage = 5;
    const totalPages = Math.ceil(JOBS.length / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentJobs = JOBS.slice(indexOfFirst, indexOfLast);

    function handleNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    }

    function handlePrevPage() {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    }

    return (
        <section id="section4" className="section4-Careers">
            <div style={{
                position: 'relative',
                left: '150px',
                top: '50px'
            }}>
                <h1 style={{
                    fontSize: '60px',
                    position: 'relative',
                    left: '40px'
                }}>Join the Team.</h1>
                {currentJobs.map((job, id) => (
                    <ul style={{
                        listStyle: 'none'
                    }} key={id}>
                        <a style={{
                            textDecoration: 'none',
                            color: 'black'
                        }} href={job.link}>
                            <li style={{
                                fontSize: '30px',
                                fontWeight: 'bold'
                            }}>{job.title}</li>
                            <li style={{
                                fontSize: '30px',
                                color: '#1199FA'
                            }}>{job.location}</li>
                        </a>
                        <hr style={{
                            width: '75%',
                            position: 'relative',
                            right: '180px'
                        }} />
                    </ul>
                ))}
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                top: '80px',
                gap: '30px'
            }}>
                <button style={{
                    borderRadius: '16px',
                    width: '80px',
                    cursor: 'pointer'
                }} onClick={handlePrevPage} disabled={currentPage === 1}>
                    <img style={{
                        height: '30px',
                        width: '40px',
                        height: '40px',
                        position: 'relative',
                        top: '2px',
                        right: '3px'
                    }} src={backward} alt="" />
                </button>
                <span style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    position: 'relative',
                    top: '10px'
                }}>
                    {currentPage} of {totalPages}
                </span>
                <button style={{
                    borderRadius: '16px',
                    width: '80px',
                    cursor: 'pointer'
                }} onClick={handleNextPage} disabled={currentPage === totalPages}>
                    <img style={{
                        height: '30px',
                        width: '40px',
                        height: '40px',
                        position: 'relative',
                        top: '2px',
                        left: '3px'
                    }} src={forward} alt="" />
                </button>
            </div>
        </section>
    );
}