import { Component } from '@theme/component';

export default class CustomColorVariant extends Component {
  onConnect() {
    const colorImages = JSON.parse(this.el.dataset.colorImages || '{}');

    this.el.addEventListener('variant:selected', (event) => {
      const selectedVariant = event.detail;
      console.log(selectedVariant);
      const color = selectedVariant.options[0];
      const matchedImages = colorImages[color];
      console.log("Colors")
console.log("MatchedImages"+matchedImages);
      if (!matchedImages) return;

      document.querySelectorAll('.product__media-item').forEach(el => {
        el.style.display = 'none';
      });

      matchedImages.forEach(src => {
        const imgEl = document.querySelector(`.product__media-item img[src*="${src}"]`);
        if (imgEl) imgEl.closest('.product__media-item').style.display = 'block';
      });
    });
  }
}
