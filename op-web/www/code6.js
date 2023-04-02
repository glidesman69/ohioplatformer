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

gdjs.warning_32screenCode.conditionTrue_0 = {val:false};
gdjs.warning_32screenCode.condition0IsTrue_0 = {val:false};
gdjs.warning_32screenCode.condition1IsTrue_0 = {val:false};
gdjs.warning_32screenCode.condition2IsTrue_0 = {val:false};
gdjs.warning_32screenCode.conditionTrue_1 = {val:false};
gdjs.warning_32screenCode.condition0IsTrue_1 = {val:false};
gdjs.warning_32screenCode.condition1IsTrue_1 = {val:false};
gdjs.warning_32screenCode.condition2IsTrue_1 = {val:false};


gdjs.warning_32screenCode.eventsList0 = function(runtimeScene) {

{


gdjs.warning_32screenCode.condition0IsTrue_0.val = false;
{
{gdjs.warning_32screenCode.conditionTrue_1 = gdjs.warning_32screenCode.condition0IsTrue_0;
gdjs.warning_32screenCode.condition0IsTrue_1.val = false;
gdjs.warning_32screenCode.condition1IsTrue_1.val = false;
{
gdjs.warning_32screenCode.condition0IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.warning_32screenCode.condition0IsTrue_1.val ) {
    gdjs.warning_32screenCode.conditionTrue_1.val = true;
}
}
{
gdjs.warning_32screenCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.warning_32screenCode.condition1IsTrue_1.val ) {
    gdjs.warning_32screenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.warning_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


gdjs.warning_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.warning_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if (gdjs.warning_32screenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("inputtocontinue"), gdjs.warning_32screenCode.GDinputtocontinueObjects1);
{for(var i = 0, len = gdjs.warning_32screenCode.GDinputtocontinueObjects1.length ;i < len;++i) {
    gdjs.warning_32screenCode.GDinputtocontinueObjects1[i].setString("press anywhere on the screen to continue");
}
}}

}


{


gdjs.warning_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.warning_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.warning_32screenCode.condition0IsTrue_0.val) {
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
