
gdjs.evtsExt__ChatBubble__ChatBubble = gdjs.evtsExt__ChatBubble__ChatBubble || {};

/**
 * Behavior generated from Chat Bubble Behavior
 */
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble = class ChatBubble extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.NameTagBackgroundColor = behaviorData.NameTagBackgroundColor !== undefined ? behaviorData.NameTagBackgroundColor : "155;155;155";
    this._behaviorData.DefaultColor = "";
    this._behaviorData.DefaultOutlineColor = "";
    this._behaviorData.DrawChatWidth = Number("") || 0;
    this._behaviorData.DrawChatHeight = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.NameTagBackgroundColor !== newBehaviorData.NameTagBackgroundColor)
      this._behaviorData.NameTagBackgroundColor = newBehaviorData.NameTagBackgroundColor;
    if (oldBehaviorData.DefaultColor !== newBehaviorData.DefaultColor)
      this._behaviorData.DefaultColor = newBehaviorData.DefaultColor;
    if (oldBehaviorData.DefaultOutlineColor !== newBehaviorData.DefaultOutlineColor)
      this._behaviorData.DefaultOutlineColor = newBehaviorData.DefaultOutlineColor;
    if (oldBehaviorData.DrawChatWidth !== newBehaviorData.DrawChatWidth)
      this._behaviorData.DrawChatWidth = newBehaviorData.DrawChatWidth;
    if (oldBehaviorData.DrawChatHeight !== newBehaviorData.DrawChatHeight)
      this._behaviorData.DrawChatHeight = newBehaviorData.DrawChatHeight;

    return true;
  }

  // Properties:
  
  _getNameTagBackgroundColor() {
    return this._behaviorData.NameTagBackgroundColor !== undefined ? this._behaviorData.NameTagBackgroundColor : "155;155;155";
  }
  _setNameTagBackgroundColor(newValue) {
    this._behaviorData.NameTagBackgroundColor = newValue;
  }
  _getDefaultColor() {
    return this._behaviorData.DefaultColor !== undefined ? this._behaviorData.DefaultColor : "";
  }
  _setDefaultColor(newValue) {
    this._behaviorData.DefaultColor = newValue;
  }
  _getDefaultOutlineColor() {
    return this._behaviorData.DefaultOutlineColor !== undefined ? this._behaviorData.DefaultOutlineColor : "";
  }
  _setDefaultOutlineColor(newValue) {
    this._behaviorData.DefaultOutlineColor = newValue;
  }
  _getDrawChatWidth() {
    return this._behaviorData.DrawChatWidth !== undefined ? this._behaviorData.DrawChatWidth : Number("") || 0;
  }
  _setDrawChatWidth(newValue) {
    this._behaviorData.DrawChatWidth = newValue;
  }
  _getDrawChatHeight() {
    return this._behaviorData.DrawChatHeight !== undefined ? this._behaviorData.DrawChatHeight : Number("") || 0;
  }
  _setDrawChatHeight(newValue) {
    this._behaviorData.DrawChatHeight = newValue;
  }
}

/**
 * Shared data generated from Chat Bubble Behavior
 */
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.SharedData = class ChatBubbleSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ChatBubble_ChatBubbleSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ChatBubble_ChatBubbleSharedData = new gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.SharedData(
      initialData
    );
  }
  return instanceContainer._ChatBubble_ChatBubbleSharedData;
}

// Methods:
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext = {};
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.GDObjectObjects1[i].setClearBetweenFrames(true);
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDefaultColor("");
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDefaultOutlineColor("");
}
}}

}


};

gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext = {};
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1= [];
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects2= [];
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1= [];
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects2= [];


gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.mapOfEmptyGDChatBubbleTextObjects = Hashtable.newFrom({"ChatBubbleText": []});
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.mapOfGDgdjs_46evtsExt_95_95ChatBubble_95_95ChatBubble_46ChatBubble_46prototype_46DrawChatBubbleContext_46GDChatBubbleTextObjects1Objects = Hashtable.newFrom({"ChatBubbleText": gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1});
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.mapOfEmptyGDChatBubbleTextObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18426700);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1);
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.mapOfGDgdjs_46evtsExt_95_95ChatBubble_95_95ChatBubble_46ChatBubble_46prototype_46DrawChatBubbleContext_46GDChatBubbleTextObjects1Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].getVariables().get("__ChatBubble").getChild("DrawWidth")).setNumber((( gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[0].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].getVariables().get("__ChatBubble").getChild("DrawHeight")).setNumber((( gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[0].getHeight()));
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[i].setZOrder(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[i].getZOrder() + ((gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[i].getZOrder())));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ChatBubbleText"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].setOutlineColor((gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDefaultOutlineColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].setFillColor((gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDefaultColor()));
}
}{runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatX").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PointX")) || 0 : 0) - 32);
}{runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatY").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PointY")) || 0 : 0) - 18 - 24 - 18);
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatX")) + 24,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatY")) + 18 - (gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[i].getHeight()));
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].getVariables().get("__ChatBubble").getChild("DrawWidth")).setNumber(gdjs.evtTools.common.lerp((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].getVariables().get("__ChatBubble").getChild("DrawWidth"))), (( gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[0].getWidth()), 0.08));
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].getVariables().get("__ChatBubble").getChild("DrawHeight")).setNumber(gdjs.evtTools.common.lerp((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].getVariables().get("__ChatBubble").getChild("DrawHeight"))), (( gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[0].getHeight()), 0.08));
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ChatBubbleText"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[0].getVariables()).get("__ChatBubble").getChild("DrawWidth"))) >= (( gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[0].getWidth()) - 24);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[0].getVariables()).get("__ChatBubble").getChild("DrawHeight"))) >= (( gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[0].getHeight()) - 24);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1[i].hide(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].drawRoundedRectangle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatY")) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].getVariables().get("__ChatBubble").getChild("DrawHeight"))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatX")) + 24 + Math.max(40, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].getVariables().get("__ChatBubble").getChild("DrawWidth")))) + 24, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatY")) + 18 + 18, 40);
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].beginFillPath(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatX")) + 32, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatY")) + 18 + 18);
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].drawPathLineTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatX")) + 32, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatY")) + 18 + 24 + 18);
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].drawPathLineTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatX")) + 32 + 24, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatY")) + 18 + 18);
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1[i].closePath();
}
}}

}


};

gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubble = function(PointX, PointY, ChatBubbleText, Layer, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ChatBubbleText": ChatBubbleText
},
  _objectArraysMap: {
"Object": thisObjectList
, "ChatBubbleText": gdjs.objectsListsToArray(ChatBubbleText)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects1.length = 0;
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.GDChatBubbleTextObjects2.length = 0;

gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext = {};
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1= [];
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects2= [];
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDChatBubbleTextObjects1= [];
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDChatBubbleTextObjects2= [];
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1= [];
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects2= [];


gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.mapOfGDgdjs_46evtsExt_95_95ChatBubble_95_95ChatBubble_46ChatBubble_46prototype_46DrawChatBubbleWithNameTagContext_46GDChatBubbleTextObjects1Objects = Hashtable.newFrom({"ChatBubbleText": gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDChatBubbleTextObjects1});
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.mapOfEmptyGDNameTagTextObjects = Hashtable.newFrom({"NameTagText": []});
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.mapOfGDgdjs_46evtsExt_95_95ChatBubble_95_95ChatBubble_46ChatBubble_46prototype_46DrawChatBubbleWithNameTagContext_46GDNameTagTextObjects1Objects = Hashtable.newFrom({"NameTagText": gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1});
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ChatBubbleText"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDChatBubbleTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DrawChatBubble((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PointX")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PointY")) || 0 : 0), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.mapOfGDgdjs_46evtsExt_95_95ChatBubble_95_95ChatBubble_46ChatBubble_46prototype_46DrawChatBubbleWithNameTagContext_46GDChatBubbleTextObjects1Objects, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.mapOfEmptyGDNameTagTextObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18436932);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("ChatBubbleText"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDChatBubbleTextObjects1);
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.mapOfGDgdjs_46evtsExt_95_95ChatBubble_95_95ChatBubble_46ChatBubble_46prototype_46DrawChatBubbleWithNameTagContext_46GDNameTagTextObjects1Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1[i].setZOrder(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1[i].getZOrder() + ((( gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDChatBubbleTextObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDChatBubbleTextObjects1[0].getZOrder())));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NameTagText"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatX")) - 18 + 17 + 5,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatY")) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1[0].getVariables()).get("__ChatBubble").getChild("DrawHeight"))) - 18 + 3 + 9);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NameTagText"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1[i].setOutlineColor((gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNameTagBackgroundColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1[i].setFillColor((gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNameTagBackgroundColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1[i].drawRoundedRectangle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatX")) - 18 + 15, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatY")) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1[i].getVariables().get("__ChatBubble").getChild("DrawHeight"))) - 9, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatX")) + (( gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1[0].getWidth()) + 5 + 5, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ChatBubble").getChild("DrawChatY")) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1[i].getVariables().get("__ChatBubble").getChild("DrawHeight"))) - 18 + 24 + 7, 10);
}
}}

}


};

gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTag = function(PointX, PointY, ChatBubbleText, Layer, NameTagText, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ChatBubbleText": ChatBubbleText
, "NameTagText": NameTagText
},
  _objectArraysMap: {
"Object": thisObjectList
, "ChatBubbleText": gdjs.objectsListsToArray(ChatBubbleText)
, "NameTagText": gdjs.objectsListsToArray(NameTagText)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDChatBubbleTextObjects1.length = 0;
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDChatBubbleTextObjects2.length = 0;
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects1.length = 0;
gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.GDNameTagTextObjects2.length = 0;

gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.DrawChatBubbleWithNameTagContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("ChatBubble::ChatBubble", gdjs.evtsExt__ChatBubble__ChatBubble.ChatBubble);
