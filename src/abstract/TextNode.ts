// I wished i didn't have to make a text node
// but JS's pass by reference only applies to objects..

import { Element } from "./Element";

// So here it is, the world's simplest text node
class TextNode {
  str: string;
  parent?: Element;
  constructor(str: string) {
    this.str = str;
  }
  toString() {
    return this.str;
  }
  overwrite(to: string) {
    this.str = to;
    this.renderUp();
  }

  renderUp (): string {
    if (!this.parent) throw new Error('Cannot render up if I have no parent');
    return this.parent.renderUp();
  }
}

export default TextNode;
