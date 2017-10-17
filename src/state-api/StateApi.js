class StateApi {
  constructor(rawData) {
    this.data = {
      Widgets: this.mapIntoObject(rawData.tabbedWidgets),
    };
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getPanels = (panels) => {
    return this.mapIntoObject(panels);
  };

  getTabs = (tabs) => {
    return this.mapIntoObject(tabs);
  };

  getState = () => {
    return this.data;
  }
}

export default StateApi;
