import StateApi from '../StateApi';
import { data } from '../../data';

const store = new StateApi(data);

describe('The StateApi', () => {

  const tabbedWidgets = store.data;
  const tabbedWidget = tabbedWidgets.Widgets[data.tabbedWidgets[0].id];
  const panels = store.getPanels(tabbedWidget.panels);
  const panel = panels[data.tabbedWidgets[0].panels[0].id];
  const tabs = store.getTabs(tabbedWidget.tabs);
  const tab = tabs[data.tabbedWidgets[0].tabs[0].id];

  it('can initialize a new instance of StateApi', () => {
    expect(store).toBeDefined();
    expect(store).toBeInstanceOf(StateApi);
  });

  it('the "getWidgets" method returns and object', () => {
    expect(tabbedWidgets.constructor).toEqual(Object);
  });

  it('the "getPanels" method returns and object', () => {
    const returnedType = store.getPanels([]);
    expect(returnedType instanceof Object).toBe(true);
  });

  test('the getPanels method throws an error id not passed an array', () => {
    expect(() => {store.getPanels({});}).toThrow();
  });

  it('the "getTabs" method returns and object', () => {
    expect(tabbedWidgets.constructor).toEqual(Object);
  });

  test('the getTabs method throws an error id not passed an array', () => {
    expect(() => {store.getTabs({});}).toThrow();
  });

  describe('The TabbedWidgets collection object', () => {
    it('is defined and contains one or more "tabbedWidgets"', () => {
      expect(tabbedWidgets).toBeDefined();
      expect(Object.keys(tabbedWidgets).length).toBeGreaterThan(0);
    });
  });

  describe('A tabbedWidget', () => {
    it('contains an "id" property and is mapped correctly', () => {
      expect(tabbedWidget).toHaveProperty('id');
      expect(tabbedWidget.id).toBe(data.tabbedWidgets[0].id);

    });
    it('contains an "widgetHeading" property and is mapped correctly', () => {
      expect(tabbedWidget).toHaveProperty('widgetHeading');
      expect(tabbedWidget.widgetHeading).toBe(data.tabbedWidgets[0].widgetHeading);

    });
    describe('A tabbedWidget\'s "panels" array', () => {

      it('has a populated "panels" array', () => {
        expect(tabbedWidget).toHaveProperty('panels');
        expect(Array.isArray(tabbedWidget.panels)).toBeTruthy();
        expect(tabbedWidget.panels.length).toBeGreaterThan(0);
      });

      describe('A "panel"', () => {

        it('contains an "id" property and is mapped correctly', () => {
          expect(panel).toHaveProperty('id');
          expect(panel.id).toBe(data.tabbedWidgets[0].panels[0].id);

        });
        it('contains an "labeledBy" property and is mapped correctly', () => {
          expect(panel).toHaveProperty('labeledBy');
          expect(panel.labeledBy).toBe(data.tabbedWidgets[0].panels[0].labeledBy);

        });
        it('contains an "isPanelExpanded" property and is mapped correctly', () => {
          expect(panel).toHaveProperty('isPanelExpanded');
          expect(panel.isPanelExpanded).toBe(data.tabbedWidgets[0].panels[0].isPanelExpanded);

        });
      });

    });

    describe('A tabbedWidget\'s "tabs" array', () => {

      it('has a populated "tabs" array', () => {
        expect(tabbedWidget).toHaveProperty('tabs');
        expect(Array.isArray(tabbedWidget.tabs)).toBeTruthy();
        expect(tabbedWidget.tabs.length).toBeGreaterThan(0);
      });

      describe('A "tab"', () => {

        it('contains an "id" property and is mapped correctly', () => {
          expect(tab).toHaveProperty('id');
          expect(tab.id).toBe(data.tabbedWidgets[0].tabs[0].id);
        });

        it('contains an "tabLabel" property and is mapped correctly', () => {
          expect(tab).toHaveProperty('tabLabel');
          expect(tab.tabLabel).toBe(data.tabbedWidgets[0].tabs[0].tabLabel);
        });

        it('contains an "ariaControls" property and is mapped correctly', () => {
          expect(tab).toHaveProperty('ariaControls');
          expect(tab.ariaControls).toBe(data.tabbedWidgets[0].tabs[0].ariaControls);
        });

        it('contains an "ariaSelected" property and is mapped correctly', () => {
          expect(tab).toHaveProperty('ariaSelected');
          expect(tab.ariaSelected).toBe(data.tabbedWidgets[0].tabs[0].ariaSelected);
        });
      });

    });

  });

});
