import Title from "./Title"
import { tours } from './data.js'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subtitle='tours' />

      <div className="section-center featured-center">
        {tours.map( (tour) => {
          const { id, image, info, title, date, price, place, duration } = tour
          return (
            <article id={id} className="tour-card">
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>
                  {info}
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {place}
                  </p>
                  <p>{duration} days</p>
                  <p>From ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  )
}
export default Tours