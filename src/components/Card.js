import React from 'react'

export default function Card(props) {
    return (
        <div className="text-center">     
          <section id="team">
            <div class="col-lg-3 col-md-10 ">
              <div class="card text-center">
              
                <div class="card-body">
                  <p>Name: {props.data.name}</p>
                  <p>Episode: {props.data.episode}</p>
                  <p>Date: {props.data.air_date}</p>
                </div>
              
              </div>
            </div>
          </section>
        </div>
    )
}
