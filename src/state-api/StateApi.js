class StateApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getWidgets = () => {
    return this.mapIntoObject(this.rawData.tabbedWidgets);
  }

  getPanels = (panels) => {
    return this.mapIntoObject(panels);
  }

  getTabs = (tabs) => {
    return this.mapIntoObject(tabs);
  }
}

export default StateApi;
