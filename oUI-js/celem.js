class oUI extends HTMLElement {
    connectedCallback() {
      console.log('openUI Connected');
    }
    disconnectedCallback() {
      console.log('openUI Disconnected');
    }
}

customElements.define('oui-c',oUI);
