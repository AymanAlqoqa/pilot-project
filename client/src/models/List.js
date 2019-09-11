import { types, flow } from "mobx-state-tree";
import Item from "./Item";
import client from "../feathers";

const List = types
  .model("List", {
    items: types.array(Item),
    isLoading: false,
    loadingError: false
  })
  .actions(self => {
    function markLoading(loading) {
      self.isLoading = loading;
    }
    function setLoadingError(status) {
      self.loadingError = status;
    }
    const fetchList = flow(function* fetchList() {
      markLoading(true);

      try {
        const json = yield client.service("list").find({
          query: {
            $limit: 20
          }
        });
        markLoading(false);
        self.items = json.data;
      } catch (err) {
        setLoadingError(true);
      }
    });
    const add = item => {
      client.service("list").create(item);
      self.fetchList();
    };
    return {
      fetchList,
      add
    };
  });

export default List;
