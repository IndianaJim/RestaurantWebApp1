import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
  return (
    <section id="ContactUs">
      <div class="container">
        <h5 class="comp-title">Special Menu</h5>
        <h2>Delicious Flavor of Autumn</h2>
        <div class="row boxes">
          <div class="col-md-4">
            <div class="box">
              <div class="box-img">
                <div class="price-circle">$25</div>
              </div>
              <p class="title">Super Vegan BBQ No Meat</p>
              <p class="details">
                Fried Veggies, French Fries, Veggies, and more Veggies
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="box-img">
                <div class="price-circle">$25</div>
              </div>
              <p class="title">Super Vegan BBQ No Meat</p>
              <p class="details">
                Fried Veggies, French Fries, Veggies, and more Veggies
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="box-img">
                <div class="price-circle">$25</div>
              </div>
              <p class="title">Super Vegan BBQ No Meat</p>
              <p class="details">
                Fried Veggies, French Fries, Veggies, and more Veggies
              </p>
            </div>
          </div>
        </div>
        <a href="#" class="link">
          View Full Menu
        </a>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
