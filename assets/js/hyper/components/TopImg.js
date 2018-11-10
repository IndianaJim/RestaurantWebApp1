import { h, app } from 'hyperapp';

export default function TopImg({ state, actions }) {
  return (
    <section>
      testing
      <h5>Welcome</h5>
      <h1>Vegan Italian</h1>
      <div class="contact-info">
        <div>Book Table Directly</div>
        <h2>(317)222-2222</h2>
        <div class="hours">
          Opening Hours <strong>Mon - Fri: </strong>
          9a - 9pm <strong>Weekend: </strong>
          9a - 11pm
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
