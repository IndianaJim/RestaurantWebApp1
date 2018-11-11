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
              moon normcore portland waistcoat letterpress vexillologist. Yr
              kogi microdosing, chillwave vinyl readymade brunch thundercats
              gentrify kickstarter unicorn. Actually irony humblebrag chambray
              retro, DIY bushwick chillwave hoodie austin letterpress tattooed
              mustache. Snackwave salvia synth, hella pok pok farm-to-table
              direct trade.
            </p>
            <div class="quote">
              "The best vegan italian around!" - Thomas Plantster
            </div>
            <a href="#" class="reserve-btn">
              Reserve
            </a>
          </div>
          <div class="col-md-6">
            <img src="" />
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
