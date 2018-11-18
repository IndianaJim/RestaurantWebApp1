import { h, app } from 'hyperapp';

export default function RandomQuote({ state, actions }) {
  return (
    <section id="RandomQuote">
      <div class="container">
        <h1>
          "The table is a meeting place, a gathering ground, the source of
          sustenance and nourishment, festivity, safety, and satisfaction."
        </h1>
        <span class="author">- Laurie Colwin</span>
      </div>
    </section>
  );
}
