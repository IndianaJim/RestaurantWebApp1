import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
  return (
    <section id="Reviews">
      <div class="container">
        <div class="row">
          <h5 class="comp-title">Reviews</h5>
          <h2>The Food Network</h2>
          <h4>"Best Restaurant in the L.A. area!"</h4>
          <p>
            Lorem ipsum dolor amet seitan raw denim offal fam intelligentsia
            distillery. Hella coloring book fixie tumblr chillwave banjo cronut
            portland typewriter you probably haven't heard of them air plant.
            Copper mug vinyl direct trade chartreuse pop-up. 3 wolf moon
            normcore portland waistcoat letterpress vexillologist.
          </p>
          <div class="author">
            <strong>Joe Bastiachi</strong> - winner of the Chef Masters
          </div>
          <div class="arrows">
            <i class="fas fa-arrow-left" />
            <i class="fas fa-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
