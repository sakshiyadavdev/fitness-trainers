function TrainerList({ trainers }) {

    return (

        <section className="trainers-section">

            <div className="container">

                <div className="trainer-grid">

                    {trainers.map((trainer, index) => (

                        <div className="trainer-card" key={index}>

                            <img
                                src={trainer.img}
                                alt={trainer.name}
                            />

                            <div className="trainer-overlay">

                                <h3>{trainer.name}</h3>

                                <span>{trainer.role}</span>

                                <p>{trainer.para}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default TrainerList;