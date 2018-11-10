import { h, app } from 'hyperapp';

export default function TopImg({ state, actions }) {
  return (
    <section class="TopImg">
      <div class="container">
        <div class="title">
          <h5>Welcome</h5>
          <h1>Vegan Italian</h1>
        </div>
        <div class="contact-info">
          <div class="booking">Book Table Directly</div>
          <h3>(317) - 222 - 2222</h3>
          <div class="hours">
            Opening Hours <strong>Mon - Fri: </strong>
            9a - 9pm <strong>Weekend: </strong>
            9a - 11pm
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
