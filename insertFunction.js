const uuid = "cadc6778-f4ea-4886-a9a8-1d029aebd312";

function insertIntoTarget(element) {
  const observer = new MutationObserver(function (mutations) {
    const nodes = document.querySelectorAll(`[widget-uuid=${uuid}]`);

    if (nodes.length) {
      nodes.forEach((node) => {
        const parent = node && node.shadowRoot;
        parent && parent.appendChild(element.cloneNode(true));
      });

      observer.disconnect();
    }
  });

  observer.observe(document, {
    attributes: false,
    childList: true,
    characterData: false,
    subtree: true,
  });
}

module.exports = insertIntoTarget;
