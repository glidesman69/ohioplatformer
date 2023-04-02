
gdjs.evtsExt__Checkbox__Checkbox = gdjs.evtsExt__Checkbox__Checkbox || {};

/**
 * Behavior generated from Checkbox
 */
gdjs.evtsExt__Checkbox__Checkbox.Checkbox = class Checkbox extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Checked = behaviorData.Checked !== undefined ? behaviorData.Checked : false;
    this._behaviorData.HaloRadiusHover = behaviorData.HaloRadiusHover !== undefined ? behaviorData.HaloRadiusHover : Number("") || 0;
    this._behaviorData.HaloOpacityHover = behaviorData.HaloOpacityHover !== undefined ? behaviorData.HaloOpacityHover : Number("64") || 0;
    this._behaviorData.HaloOpacityClick = behaviorData.HaloOpacityClick !== undefined ? behaviorData.HaloOpacityClick : Number("128") || 0;
    this._behaviorData.Enabled = behaviorData.Enabled !== undefined ? behaviorData.Enabled : true;
    this._behaviorData.IsBeingPressed = false;
    this._behaviorData.NeedRedraw = true;
    this._behaviorData.IsHovered = false;
    this._behaviorData.CurrentHaloRadius = Number("") || 0;
    this._behaviorData.HaloGrowSpeed = Number("0.3") || 0;
    this._behaviorData.TargetHaloRadius = Number("") || 0;
    this._behaviorData.ToggleChanged = false;
    this._behaviorData.PrimaryColor = behaviorData.PrimaryColor !== undefined ? behaviorData.PrimaryColor : " 24;119;211";
    this._behaviorData.SecondaryColor = behaviorData.SecondaryColor !== undefined ? behaviorData.SecondaryColor : "255;255;255";
    this._behaviorData.SideLength = behaviorData.SideLength !== undefined ? behaviorData.SideLength : Number("24") || 0;
    this._behaviorData.LineWidth = behaviorData.LineWidth !== undefined ? behaviorData.LineWidth : Number("5") || 0;
    this._behaviorData.BorderThickness = behaviorData.BorderThickness !== undefined ? behaviorData.BorderThickness : Number("2") || 0;
    this._behaviorData.HaloRadiusPressed = behaviorData.HaloRadiusPressed !== undefined ? behaviorData.HaloRadiusPressed : Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Checked !== newBehaviorData.Checked)
      this._behaviorData.Checked = newBehaviorData.Checked;
    if (oldBehaviorData.HaloRadiusHover !== newBehaviorData.HaloRadiusHover)
      this._behaviorData.HaloRadiusHover = newBehaviorData.HaloRadiusHover;
    if (oldBehaviorData.HaloOpacityHover !== newBehaviorData.HaloOpacityHover)
      this._behaviorData.HaloOpacityHover = newBehaviorData.HaloOpacityHover;
    if (oldBehaviorData.HaloOpacityClick !== newBehaviorData.HaloOpacityClick)
      this._behaviorData.HaloOpacityClick = newBehaviorData.HaloOpacityClick;
    if (oldBehaviorData.Enabled !== newBehaviorData.Enabled)
      this._behaviorData.Enabled = newBehaviorData.Enabled;
    if (oldBehaviorData.IsBeingPressed !== newBehaviorData.IsBeingPressed)
      this._behaviorData.IsBeingPressed = newBehaviorData.IsBeingPressed;
    if (oldBehaviorData.NeedRedraw !== newBehaviorData.NeedRedraw)
      this._behaviorData.NeedRedraw = newBehaviorData.NeedRedraw;
    if (oldBehaviorData.IsHovered !== newBehaviorData.IsHovered)
      this._behaviorData.IsHovered = newBehaviorData.IsHovered;
    if (oldBehaviorData.CurrentHaloRadius !== newBehaviorData.CurrentHaloRadius)
      this._behaviorData.CurrentHaloRadius = newBehaviorData.CurrentHaloRadius;
    if (oldBehaviorData.HaloGrowSpeed !== newBehaviorData.HaloGrowSpeed)
      this._behaviorData.HaloGrowSpeed = newBehaviorData.HaloGrowSpeed;
    if (oldBehaviorData.TargetHaloRadius !== newBehaviorData.TargetHaloRadius)
      this._behaviorData.TargetHaloRadius = newBehaviorData.TargetHaloRadius;
    if (oldBehaviorData.ToggleChanged !== newBehaviorData.ToggleChanged)
      this._behaviorData.ToggleChanged = newBehaviorData.ToggleChanged;
    if (oldBehaviorData.PrimaryColor !== newBehaviorData.PrimaryColor)
      this._behaviorData.PrimaryColor = newBehaviorData.PrimaryColor;
    if (oldBehaviorData.SecondaryColor !== newBehaviorData.SecondaryColor)
      this._behaviorData.SecondaryColor = newBehaviorData.SecondaryColor;
    if (oldBehaviorData.SideLength !== newBehaviorData.SideLength)
      this._behaviorData.SideLength = newBehaviorData.SideLength;
    if (oldBehaviorData.LineWidth !== newBehaviorData.LineWidth)
      this._behaviorData.LineWidth = newBehaviorData.LineWidth;
    if (oldBehaviorData.BorderThickness !== newBehaviorData.BorderThickness)
      this._behaviorData.BorderThickness = newBehaviorData.BorderThickness;
    if (oldBehaviorData.HaloRadiusPressed !== newBehaviorData.HaloRadiusPressed)
      this._behaviorData.HaloRadiusPressed = newBehaviorData.HaloRadiusPressed;

    return true;
  }

  // Properties:
  
  _getChecked() {
    return this._behaviorData.Checked !== undefined ? this._behaviorData.Checked : false;
  }
  _setChecked(newValue) {
    this._behaviorData.Checked = newValue;
  }
  _toggleChecked() {
    this._setChecked(!this._getChecked());
  }
  _getHaloRadiusHover() {
    return this._behaviorData.HaloRadiusHover !== undefined ? this._behaviorData.HaloRadiusHover : Number("") || 0;
  }
  _setHaloRadiusHover(newValue) {
    this._behaviorData.HaloRadiusHover = newValue;
  }
  _getHaloOpacityHover() {
    return this._behaviorData.HaloOpacityHover !== undefined ? this._behaviorData.HaloOpacityHover : Number("64") || 0;
  }
  _setHaloOpacityHover(newValue) {
    this._behaviorData.HaloOpacityHover = newValue;
  }
  _getHaloOpacityClick() {
    return this._behaviorData.HaloOpacityClick !== undefined ? this._behaviorData.HaloOpacityClick : Number("128") || 0;
  }
  _setHaloOpacityClick(newValue) {
    this._behaviorData.HaloOpacityClick = newValue;
  }
  _getEnabled() {
    return this._behaviorData.Enabled !== undefined ? this._behaviorData.Enabled : true;
  }
  _setEnabled(newValue) {
    this._behaviorData.Enabled = newValue;
  }
  _toggleEnabled() {
    this._setEnabled(!this._getEnabled());
  }
  _getIsBeingPressed() {
    return this._behaviorData.IsBeingPressed !== undefined ? this._behaviorData.IsBeingPressed : false;
  }
  _setIsBeingPressed(newValue) {
    this._behaviorData.IsBeingPressed = newValue;
  }
  _toggleIsBeingPressed() {
    this._setIsBeingPressed(!this._getIsBeingPressed());
  }
  _getNeedRedraw() {
    return this._behaviorData.NeedRedraw !== undefined ? this._behaviorData.NeedRedraw : true;
  }
  _setNeedRedraw(newValue) {
    this._behaviorData.NeedRedraw = newValue;
  }
  _toggleNeedRedraw() {
    this._setNeedRedraw(!this._getNeedRedraw());
  }
  _getIsHovered() {
    return this._behaviorData.IsHovered !== undefined ? this._behaviorData.IsHovered : false;
  }
  _setIsHovered(newValue) {
    this._behaviorData.IsHovered = newValue;
  }
  _toggleIsHovered() {
    this._setIsHovered(!this._getIsHovered());
  }
  _getCurrentHaloRadius() {
    return this._behaviorData.CurrentHaloRadius !== undefined ? this._behaviorData.CurrentHaloRadius : Number("") || 0;
  }
  _setCurrentHaloRadius(newValue) {
    this._behaviorData.CurrentHaloRadius = newValue;
  }
  _getHaloGrowSpeed() {
    return this._behaviorData.HaloGrowSpeed !== undefined ? this._behaviorData.HaloGrowSpeed : Number("0.3") || 0;
  }
  _setHaloGrowSpeed(newValue) {
    this._behaviorData.HaloGrowSpeed = newValue;
  }
  _getTargetHaloRadius() {
    return this._behaviorData.TargetHaloRadius !== undefined ? this._behaviorData.TargetHaloRadius : Number("") || 0;
  }
  _setTargetHaloRadius(newValue) {
    this._behaviorData.TargetHaloRadius = newValue;
  }
  _getToggleChanged() {
    return this._behaviorData.ToggleChanged !== undefined ? this._behaviorData.ToggleChanged : false;
  }
  _setToggleChanged(newValue) {
    this._behaviorData.ToggleChanged = newValue;
  }
  _toggleToggleChanged() {
    this._setToggleChanged(!this._getToggleChanged());
  }
  _getPrimaryColor() {
    return this._behaviorData.PrimaryColor !== undefined ? this._behaviorData.PrimaryColor : " 24;119;211";
  }
  _setPrimaryColor(newValue) {
    this._behaviorData.PrimaryColor = newValue;
  }
  _getSecondaryColor() {
    return this._behaviorData.SecondaryColor !== undefined ? this._behaviorData.SecondaryColor : "255;255;255";
  }
  _setSecondaryColor(newValue) {
    this._behaviorData.SecondaryColor = newValue;
  }
  _getSideLength() {
    return this._behaviorData.SideLength !== undefined ? this._behaviorData.SideLength : Number("24") || 0;
  }
  _setSideLength(newValue) {
    this._behaviorData.SideLength = newValue;
  }
  _getLineWidth() {
    return this._behaviorData.LineWidth !== undefined ? this._behaviorData.LineWidth : Number("5") || 0;
  }
  _setLineWidth(newValue) {
    this._behaviorData.LineWidth = newValue;
  }
  _getBorderThickness() {
    return this._behaviorData.BorderThickness !== undefined ? this._behaviorData.BorderThickness : Number("2") || 0;
  }
  _setBorderThickness(newValue) {
    this._behaviorData.BorderThickness = newValue;
  }
  _getHaloRadiusPressed() {
    return this._behaviorData.HaloRadiusPressed !== undefined ? this._behaviorData.HaloRadiusPressed : Number("") || 0;
  }
  _setHaloRadiusPressed(newValue) {
    this._behaviorData.HaloRadiusPressed = newValue;
  }
}

/**
 * Shared data generated from Checkbox
 */
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.SharedData = class CheckboxSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Checkbox_CheckboxSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Checkbox_CheckboxSharedData = new gdjs.evtsExt__Checkbox__Checkbox.Checkbox.SharedData(
      initialData
    );
  }
  return instanceContainer._Checkbox_CheckboxSharedData;
}

// Methods:
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1[i].setClearBetweenFrames(false);
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentHaloRadius((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 2);
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateHitbox((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects5= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition4IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition5IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition3IsTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition4IsTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition5IsTrue_1 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetHaloRadius((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusPressed()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{



}


{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsBeingPressed(false);
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition3IsTrue_0.val = false;
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.getCursorX(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getLayer()), 0) > ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getX()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) - Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()), 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.getCursorX(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getLayer()), 0) < ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getX()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()), 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition2IsTrue_0.val = gdjs.evtTools.input.getCursorY(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getLayer()), 0) > ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getY()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) - Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()), 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition2IsTrue_0.val ) {
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition3IsTrue_0.val = gdjs.evtTools.input.getCursorY(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getLayer()), 0) < ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getY()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()), 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}}
}
}
if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition3IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsBeingPressed(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ToggleChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15320772);
}
}}
if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsHovered(false);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition3IsTrue_0.val = false;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition4IsTrue_0.val = false;
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.getCursorX(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getLayer()), 0) > ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getX()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) - Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()), 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition2IsTrue_0.val = gdjs.evtTools.input.getCursorX(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getLayer()), 0) < ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getX()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()), 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition2IsTrue_0.val ) {
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition3IsTrue_0.val = gdjs.evtTools.input.getCursorY(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getLayer()), 0) > ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getY()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) - Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()), 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition3IsTrue_0.val ) {
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition4IsTrue_0.val = gdjs.evtTools.input.getCursorY(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getLayer()), 0) < ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getY()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()), 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}}
}
}
}
if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition4IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsHovered(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetHaloRadius((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()));
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2 */

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered()) ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetHaloRadius((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 2);
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingPressed() ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2 */

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingPressed()) ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.conditionTrue_1.val = (Math.abs((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius()) - (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetHaloRadius())) < 1);
}
}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentHaloRadius((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetHaloRadius()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{

/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius() != (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetHaloRadius()) ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentHaloRadius(gdjs.evtTools.common.lerp((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius()), (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetHaloRadius()), (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloGrowSpeed())));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsEnabled((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius() != (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetHaloRadius()) ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.GDObjectObjects5.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects4= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) < 10);
}
}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSideLength(10);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()) < 1);
}
}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLineWidth(1);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()) > (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 3);
}
}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLineWidth((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 3);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()) == 0);
}
}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloRadiusHover((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusPressed()) == 0);
}
}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloRadiusPressed((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()) * 1.1);
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrimaryColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setOutlineOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingPressed()) ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillOpacity((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityHover()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].drawCircle((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 2, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 2, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius()));
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2 */

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingPressed() ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityClick()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 2, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 2, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius()));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover() == 0 ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetHaloRadiusHover((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius() > (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 2 ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


{
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrimaryColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setOutlineColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrimaryColor()));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


{
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSecondaryColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setOutlineColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrimaryColor()));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


{
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setOutlineSize((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderThickness()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillOpacity(255);
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setOutlineOpacity(255);
}
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawRectangle(0, 0, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()), (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSecondaryColor()));
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawLineV2((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 1 / 10, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 1 / 2, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 1 / 3, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 3 / 4, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()));
}
}}

}


{



}


{


{
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].drawLineV2((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 1 / 3 - ((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()) * 0.5 / Math.sqrt(2)), (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 3 / 4 + ((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()) * 0.5 / Math.sqrt(2)), (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 9 / 10, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 2 / 10, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1);

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNeedRedraw() ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].isVisible() ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition2IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[0].getLayer()));
}}
}
if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].clear();
}
}
{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList9(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList10(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.conditionTrue_1 = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.condition0IsTrue_0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("State") : false);
}
}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(false);
}
}}

}


{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.conditionTrue_1 = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.condition0IsTrue_0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("State") : false);
}
}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(true);
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetChecked = function(State, parentEventsFunctionContext) {

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
if (argName === "State") return State;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects2= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects3= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsBeingPressed(false);
}
}}

}


{



}


{


{
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetHaloRadius(0);
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.conditionTrue_1 = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.condition0IsTrue_0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Enable") : false);
}
}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnabled(false);
}
}
{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.conditionTrue_1 = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.condition0IsTrue_0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Enable") : false);
}
}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnabled(true);
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabled = function(Enable, parentEventsFunctionContext) {

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
if (argName === "Enable") return Enable;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetEnabledContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setToggleChanged(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1);

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked() ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setToggleChanged(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1);

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked()) ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getToggleChanged()) ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(true);
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleChecked = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPrimaryColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSecondaryColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloOpacityClick((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressed = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloOpacityHover((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHover = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloRadiusPressed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressed = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloRadiusHover((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHover = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusHoverContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBorderThickness((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThickness = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSideLength((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateHitbox((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLength = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLineWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidth = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1);

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked() ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsChecked = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.GDObjectObjects1);

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnabled() ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabled = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrimaryColor()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColor = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSecondaryColor()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColor = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusPressed()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HaloOpacityPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadiusHover()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHover = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloRadiusHoverContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityHover()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHover = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidth = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLength = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderThickness()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThickness = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.BorderThicknessContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.GDObjectObjects1);

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingPressed() ) {
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsBeingPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects2= [];

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1[i].setRotationCenter((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 2, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 2);
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1[i].setRectangularCollisionMask(-((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BorderThickness((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) / 2, -((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BorderThickness((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) / 2, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) + (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BorderThickness((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 2, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) + (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BorderThickness((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 2);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitbox = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.UpdateHitboxContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Checkbox::Checkbox", gdjs.evtsExt__Checkbox__Checkbox.Checkbox);
