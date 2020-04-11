import { merge, equals } from "/web_modules/ramda.js";

export default function(state, action) {
  if (action.type === "CHANGE_DIRECTION") {
    const keyIs = equals(action.payload);
    if (keyIs("j")) {
      return merge(state, { direction: "down" });
    }
    if (keyIs("h")) {
      return merge(state, { direction: "left" });
    }
    if (keyIs("k")) {
      return merge(state, { direction: "up" });
    }
    if (keyIs("l")) {
      return merge(state, { direction: "right" });
    }
  }
  return state;
}
