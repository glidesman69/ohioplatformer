
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator || {};

/**
 * Behavior generated from Platformer character animator
 */
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator = class PlatformerCharacterAnimator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.EnableAnimationChanges = behaviorData.EnableAnimationChanges !== undefined ? behaviorData.EnableAnimationChanges : true;
    this._behaviorData.EnableHorizontalFlipping = behaviorData.EnableHorizontalFlipping !== undefined ? behaviorData.EnableHorizontalFlipping : true;
    this._behaviorData.IdleAnimationName = behaviorData.IdleAnimationName !== undefined ? behaviorData.IdleAnimationName : "Idle";
    this._behaviorData.RunAnimationName = behaviorData.RunAnimationName !== undefined ? behaviorData.RunAnimationName : "Run";
    this._behaviorData.JumpAnimationName = behaviorData.JumpAnimationName !== undefined ? behaviorData.JumpAnimationName : "Jump";
    this._behaviorData.FallAnimationName = behaviorData.FallAnimationName !== undefined ? behaviorData.FallAnimationName : "Fall";
    this._behaviorData.ClimbAnimationName = behaviorData.ClimbAnimationName !== undefined ? behaviorData.ClimbAnimationName : "Climb";
    this._behaviorData.PlatformerBehavior = behaviorData.PlatformerBehavior !== undefined ? behaviorData.PlatformerBehavior : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.EnableAnimationChanges !== newBehaviorData.EnableAnimationChanges)
      this._behaviorData.EnableAnimationChanges = newBehaviorData.EnableAnimationChanges;
    if (oldBehaviorData.EnableHorizontalFlipping !== newBehaviorData.EnableHorizontalFlipping)
      this._behaviorData.EnableHorizontalFlipping = newBehaviorData.EnableHorizontalFlipping;
    if (oldBehaviorData.IdleAnimationName !== newBehaviorData.IdleAnimationName)
      this._behaviorData.IdleAnimationName = newBehaviorData.IdleAnimationName;
    if (oldBehaviorData.RunAnimationName !== newBehaviorData.RunAnimationName)
      this._behaviorData.RunAnimationName = newBehaviorData.RunAnimationName;
    if (oldBehaviorData.JumpAnimationName !== newBehaviorData.JumpAnimationName)
      this._behaviorData.JumpAnimationName = newBehaviorData.JumpAnimationName;
    if (oldBehaviorData.FallAnimationName !== newBehaviorData.FallAnimationName)
      this._behaviorData.FallAnimationName = newBehaviorData.FallAnimationName;
    if (oldBehaviorData.ClimbAnimationName !== newBehaviorData.ClimbAnimationName)
      this._behaviorData.ClimbAnimationName = newBehaviorData.ClimbAnimationName;
    if (oldBehaviorData.PlatformerBehavior !== newBehaviorData.PlatformerBehavior)
      this._behaviorData.PlatformerBehavior = newBehaviorData.PlatformerBehavior;

    return true;
  }

  // Properties:
  
  _getEnableAnimationChanges() {
    return this._behaviorData.EnableAnimationChanges !== undefined ? this._behaviorData.EnableAnimationChanges : true;
  }
  _setEnableAnimationChanges(newValue) {
    this._behaviorData.EnableAnimationChanges = newValue;
  }
  _toggleEnableAnimationChanges() {
    this._setEnableAnimationChanges(!this._getEnableAnimationChanges());
  }
  _getEnableHorizontalFlipping() {
    return this._behaviorData.EnableHorizontalFlipping !== undefined ? this._behaviorData.EnableHorizontalFlipping : true;
  }
  _setEnableHorizontalFlipping(newValue) {
    this._behaviorData.EnableHorizontalFlipping = newValue;
  }
  _toggleEnableHorizontalFlipping() {
    this._setEnableHorizontalFlipping(!this._getEnableHorizontalFlipping());
  }
  _getIdleAnimationName() {
    return this._behaviorData.IdleAnimationName !== undefined ? this._behaviorData.IdleAnimationName : "Idle";
  }
  _setIdleAnimationName(newValue) {
    this._behaviorData.IdleAnimationName = newValue;
  }
  _getRunAnimationName() {
    return this._behaviorData.RunAnimationName !== undefined ? this._behaviorData.RunAnimationName : "Run";
  }
  _setRunAnimationName(newValue) {
    this._behaviorData.RunAnimationName = newValue;
  }
  _getJumpAnimationName() {
    return this._behaviorData.JumpAnimationName !== undefined ? this._behaviorData.JumpAnimationName : "Jump";
  }
  _setJumpAnimationName(newValue) {
    this._behaviorData.JumpAnimationName = newValue;
  }
  _getFallAnimationName() {
    return this._behaviorData.FallAnimationName !== undefined ? this._behaviorData.FallAnimationName : "Fall";
  }
  _setFallAnimationName(newValue) {
    this._behaviorData.FallAnimationName = newValue;
  }
  _getClimbAnimationName() {
    return this._behaviorData.ClimbAnimationName !== undefined ? this._behaviorData.ClimbAnimationName : "Climb";
  }
  _setClimbAnimationName(newValue) {
    this._behaviorData.ClimbAnimationName = newValue;
  }
  _getPlatformerBehavior() {
    return this._behaviorData.PlatformerBehavior !== undefined ? this._behaviorData.PlatformerBehavior : "";
  }
  _setPlatformerBehavior(newValue) {
    this._behaviorData.PlatformerBehavior = newValue;
  }
}

/**
 * Shared data generated from Platformer character animator
 */
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.SharedData = class PlatformerCharacterAnimatorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PlatformerCharacterAnimator_PlatformerCharacterAnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PlatformerCharacterAnimator_PlatformerCharacterAnimatorSharedData = new gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.SharedData(
      initialData
    );
  }
  return instanceContainer._PlatformerCharacterAnimator_PlatformerCharacterAnimatorSharedData;
}

// Methods:
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects4= [];

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Left") ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Right")) ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15475628);
}
}}
}
if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipX(true);
}
}}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Right") ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isUsingControl("Left")) ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15476716);
}
}}
}
if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].flipX(false);
}
}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnableHorizontalFlipping() ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3);


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle() ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15480452);
}
}}
if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRunAnimationName()));
}
}}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle()) ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15481324);
}
}}
if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleAnimationName()));
}
}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15482548);
}
}if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClimbAnimationName()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3);


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle() ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15482908);
}
}}
if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3[i].playAnimation();
}
}}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isMovingEvenALittle()) ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15484132);
}
}}
if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].pauseAnimation();
}
}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isJumping() ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15478060);
}
}}
if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpAnimationName()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isFalling() ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15479236);
}
}}
if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName((gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFallAnimationName()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnFloor() ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnLadder() ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnLadder()) ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15485068);
}
}}
if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].playAnimation();
}
}}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnableAnimationChanges() ) {
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "PlatformerBehavior": this._getPlatformerBehavior()
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

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnableAnimationChanges(false);
}
}}

}


{


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.condition0IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("EnableAnimationChanges") : false);
}
}if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnableAnimationChanges(true);
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimations = function(EnableAnimationChanges, parentEventsFunctionContext) {

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
, "PlatformerBehavior": this._getPlatformerBehavior()
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
if (argName === "EnableAnimationChanges") return EnableAnimationChanges;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableChangingAnimationsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnableHorizontalFlipping(false);
}
}}

}


{


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.conditionTrue_1 = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.condition0IsTrue_0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("EnableHorizontalFlipping") : false);
}
}if (gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnableHorizontalFlipping(true);
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlipping = function(EnableHorizontalFlipping, parentEventsFunctionContext) {

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
, "PlatformerBehavior": this._getPlatformerBehavior()
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
if (argName === "EnableHorizontalFlipping") return EnableHorizontalFlipping;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.EnableHorizontalFlippingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIdleAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AnimationName") : ""));
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationName = function(AnimationName, parentEventsFunctionContext) {

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
, "PlatformerBehavior": this._getPlatformerBehavior()
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
if (argName === "AnimationName") return AnimationName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetIdleAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRunAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AnimationName") : ""));
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationName = function(AnimationName, parentEventsFunctionContext) {

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
, "PlatformerBehavior": this._getPlatformerBehavior()
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
if (argName === "AnimationName") return AnimationName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetMoveAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJumpAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AnimationName") : ""));
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationName = function(AnimationName, parentEventsFunctionContext) {

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
, "PlatformerBehavior": this._getPlatformerBehavior()
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
if (argName === "AnimationName") return AnimationName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetJumpAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFallAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AnimationName") : ""));
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationName = function(AnimationName, parentEventsFunctionContext) {

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
, "PlatformerBehavior": this._getPlatformerBehavior()
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
if (argName === "AnimationName") return AnimationName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetFallAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext = {};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setClimbAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AnimationName") : ""));
}
}}

}


};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationName = function(AnimationName, parentEventsFunctionContext) {

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
, "PlatformerBehavior": this._getPlatformerBehavior()
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
if (argName === "AnimationName") return AnimationName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator.prototype.SetClimbAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("PlatformerCharacterAnimator::PlatformerCharacterAnimator", gdjs.evtsExt__PlatformerCharacterAnimator__PlatformerCharacterAnimator.PlatformerCharacterAnimator);
