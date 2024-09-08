import "./index.css";

class ImWidget extends HTMLElement {
  __shadowElement: ShadowRoot;

  constructor() {
    super();

    this.__shadowElement = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.__shadowElement.innerHTML = "<div>w11dsdsdw2eqweqwe2w</div>";

    this.setAttribute("widget-uuid", "cadc6778-f4ea-4886-a9a8-1d029aebd312");
  }
}

customElements.define("im-widget", ImWidget);

new Array(50).fill(0).forEach(() => {
  document.body.appendChild(document.createElement("im-widget"));
});
