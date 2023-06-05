gdjs.warning_32screenCode = {};
gdjs.warning_32screenCode.GDxbuttonObjects1= [];
gdjs.warning_32screenCode.GDxbuttonObjects2= [];
gdjs.warning_32screenCode.GDwarningObjects1= [];
gdjs.warning_32screenCode.GDwarningObjects2= [];
gdjs.warning_32screenCode.GDwarningtextObjects1= [];
gdjs.warning_32screenCode.GDwarningtextObjects2= [];
gdjs.warning_32screenCode.GDclickdetectionObjects1= [];
gdjs.warning_32screenCode.GDclickdetectionObjects2= [];
gdjs.warning_32screenCode.GDinputtocontinueObjects1= [];
gdjs.warning_32screenCode.GDinputtocontinueObjects2= [];


gdjs.warning_32screenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("inputtocontinue"), gdjs.warning_32screenCode.GDinputtocontinueObjects1);
{for(var i = 0, len = gdjs.warning_32screenCode.GDinputtocontinueObjects1.length ;i < len;++i) {
    gdjs.warning_32screenCode.GDinputtocontinueObjects1[i].setString("press anywhere on the screen to continue");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("warning");
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + " screen");
}}

}


};

gdjs.warning_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.warning_32screenCode.GDxbuttonObjects1.length = 0;
gdjs.warning_32screenCode.GDxbuttonObjects2.length = 0;
gdjs.warning_32screenCode.GDwarningObjects1.length = 0;
gdjs.warning_32screenCode.GDwarningObjects2.length = 0;
gdjs.warning_32screenCode.GDwarningtextObjects1.length = 0;
gdjs.warning_32screenCode.GDwarningtextObjects2.length = 0;
gdjs.warning_32screenCode.GDclickdetectionObjects1.length = 0;
gdjs.warning_32screenCode.GDclickdetectionObjects2.length = 0;
gdjs.warning_32screenCode.GDinputtocontinueObjects1.length = 0;
gdjs.warning_32screenCode.GDinputtocontinueObjects2.length = 0;

gdjs.warning_32screenCode.eventsList0(runtimeScene);

return;

}

gdjs['warning_32screenCode'] = gdjs.warning_32screenCode;
