export class StateApi {
  constructor(rawData) {
    this.data = {
      Widgets: this.mapIntoObject(rawData.tabbedWidgets),
    };
  }

  mapIntoObject(arr) {
    if (Array.isArray(arr)) {
      return arr.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});
    } else {
      throw new Error('non-array passed into mapIntoObject');
    }

  }

  getPanels = (panels) => {
    return this.mapIntoObject(panels);
  };

  getTabs = (tabs) => {
    return this.mapIntoObject(tabs);
  };

  getState = () => {
    return this.data;
  };

}

export default StateApi;
