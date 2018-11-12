import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="comp-title">Our Story</h5>
            <h2>Cooking is the Art of Adjustment</h2>
            <p>
              Lorem ipsum dolor amet seitan raw denim offal fam intelligentsia
              distillery. Hella coloring book fixie tumblr chillwave banjo
              cronut portland typewriter you probably haven't heard of them air
              plant. Copper mug vinyl direct trade chartreuse pop-up. 3 wolf
              moon normcore portland waistcoat letterpress vexillologist.
            </p>
            <div class="quote">
              "The best vegan italian around!" -{' '}
              <strong>Thomas Plantster</strong>
            </div>
            <a href="#" class="reserve-btn">
              Reserve
            </a>
          </div>
          <div class="col-md-6">
            <div class="video-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
