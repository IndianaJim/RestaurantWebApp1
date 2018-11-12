import { h, app } from 'hyperapp';

export default function SpecialMenu({ state, actions }) {
  return (
    <section id="SpecialMenu">
      <div class="container">
        <h5 class="comp-title">Special Menu</h5>
        <h2>Delicious Flavor of Autumn</h2>
        <div class="row">
          <div class="col-md-4" />
          <div class="col-md-4" />
          <div class="col-md-4" />
          <a href="#">View Full Menu</a>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
