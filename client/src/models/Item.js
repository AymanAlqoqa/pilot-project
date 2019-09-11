import { types } from "mobx-state-tree";
const Item = types.model("Item", {
  id: types.number,
  name: types.string,
  description: types.string
});
export default Item;
