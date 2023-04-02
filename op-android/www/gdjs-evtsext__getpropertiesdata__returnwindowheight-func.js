
if (typeof gdjs.evtsExt__GetPropertiesData__ReturnWindowHeight !== "undefined") {
  gdjs.evtsExt__GetPropertiesData__ReturnWindowHeight.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GetPropertiesData__ReturnWindowHeight = {};

gdjs.evtsExt__GetPropertiesData__ReturnWindowHeight.conditionTrue_0 = {val:false};
gdjs.evtsExt__GetPropertiesData__ReturnWindowHeight.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__GetPropertiesData__ReturnWindowHeight.userFunc0xc0f670 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = runtimeScene.getGame().getGameData().properties.windowHeight;
};
gdjs.evtsExt__GetPropertiesData__ReturnWindowHeight.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GetPropertiesData__ReturnWindowHeight.userFunc0xc0f670(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__GetPropertiesData__ReturnWindowHeight.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GetPropertiesData__ReturnWindowHeight.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__GetPropertiesData__ReturnWindowHeight.registeredGdjsCallbacks = [];