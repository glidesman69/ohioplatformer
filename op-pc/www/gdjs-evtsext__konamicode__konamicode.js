
gdjs.evtsExt__KonamiCode__KonamiCode = gdjs.evtsExt__KonamiCode__KonamiCode || {};

/**
 * Behavior generated from Konami Code
 */
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode = class KonamiCode extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from Konami Code
 */
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.SharedData = class KonamiCodeSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._KonamiCode_KonamiCodeSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._KonamiCode_KonamiCodeSharedData = new gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.SharedData(
      initialData
    );
  }
  return instanceContainer._KonamiCode_KonamiCodeSharedData;
}

// Methods:
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects4= [];

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition4IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition3IsTrue_1 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition4IsTrue_1 = {val:false};


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15699868);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15700804);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15703372);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15704308);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15708620);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Down";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15706868);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Down";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15707804);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15712972);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Down";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15711220);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Down";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15712156);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15717244);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Left";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15715492);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Left";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15716428);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15721516);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Right";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15719764);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Right";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15720700);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15725940);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Left";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15724188);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Left";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15725124);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15730212);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Right";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15728460);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Right";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15729396);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15734484);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "b";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15732732);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "b";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15733668);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15738820);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "a";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15737004);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "a";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15737676);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList16(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition3IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 0;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp")) == "False";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition3IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15699236);
}
}}
}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition3IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 1;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15701308);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 2;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15702700);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 3;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15705132);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 4;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15706196);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 5;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15709404);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 6;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15710548);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 7;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15713756);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 8;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15714820);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 9;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15718028);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 10;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15719092);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 11;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15722452);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 12;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15723516);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 13;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15726724);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 14;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15727788);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 15;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15730996);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 16;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15732060);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 17;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15735268);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}}

}


{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 18;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15736332);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList17(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 19;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15739004);
}
}}
}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}{runtimeScene.getScene().getVariables().get("KC_IsCompleted").setString("True");
}}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15693732);
}
}if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}{runtimeScene.getScene().getVariables().get("KC_IsCompleted").setString("False");
}{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("False");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


{
{runtimeScene.getScene().getVariables().get("KC_KeyPressed").setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 0;
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15695364);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp")) == "True";
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15696636);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC_KeyPressed").setString("NoDirection");
}{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("False");
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "KC_InputTimer");
}if ( gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15697732);
}
}}
if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList18(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList19(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList20(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext = {};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects2= [];

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_IsCompleted")) == "True";
}if (gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{for(var i = 0, len = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_Inputted = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("KonamiCode::KonamiCode", gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode);
