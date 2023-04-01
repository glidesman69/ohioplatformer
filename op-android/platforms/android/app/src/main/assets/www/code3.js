gdjs.optionsCode = {};
gdjs.optionsCode.GDxbuttonObjects1= [];
gdjs.optionsCode.GDxbuttonObjects2= [];
gdjs.optionsCode.GDcontrolstabObjects1= [];
gdjs.optionsCode.GDcontrolstabObjects2= [];
gdjs.optionsCode.GDgameplaytabObjects1= [];
gdjs.optionsCode.GDgameplaytabObjects2= [];
gdjs.optionsCode.GDmisctabObjects1= [];
gdjs.optionsCode.GDmisctabObjects2= [];
gdjs.optionsCode.GDdisplaytabObjects1= [];
gdjs.optionsCode.GDdisplaytabObjects2= [];
gdjs.optionsCode.GDdisplaytab2Objects1= [];
gdjs.optionsCode.GDdisplaytab2Objects2= [];
gdjs.optionsCode.GDusedpadtextObjects1= [];
gdjs.optionsCode.GDusedpadtextObjects2= [];
gdjs.optionsCode.GDrepositionjoyObjects1= [];
gdjs.optionsCode.GDrepositionjoyObjects2= [];
gdjs.optionsCode.GDSmallPlasticGreenRoundSliderObjects1= [];
gdjs.optionsCode.GDSmallPlasticGreenRoundSliderObjects2= [];
gdjs.optionsCode.GDusedpadbuttonObjects1= [];
gdjs.optionsCode.GDusedpadbuttonObjects2= [];
gdjs.optionsCode.GDreposjoyObjects1= [];
gdjs.optionsCode.GDreposjoyObjects2= [];

gdjs.optionsCode.conditionTrue_0 = {val:false};
gdjs.optionsCode.condition0IsTrue_0 = {val:false};
gdjs.optionsCode.condition1IsTrue_0 = {val:false};


gdjs.optionsCode.eventsList0 = function(runtimeScene) {

{


gdjs.optionsCode.condition0IsTrue_0.val = false;
{
gdjs.optionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.optionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("options");
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " - menu (" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + " screen)");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("usedpadbutton"), gdjs.optionsCode.GDusedpadbuttonObjects1);

gdjs.optionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.optionsCode.GDusedpadbuttonObjects1.length;i<l;++i) {
    if ( gdjs.optionsCode.GDusedpadbuttonObjects1[i].getBehavior("ToggleSwitch").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.optionsCode.condition0IsTrue_0.val = true;
        gdjs.optionsCode.GDusedpadbuttonObjects1[k] = gdjs.optionsCode.GDusedpadbuttonObjects1[i];
        ++k;
    }
}
gdjs.optionsCode.GDusedpadbuttonObjects1.length = k;}if (gdjs.optionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("usedpadbutton"), gdjs.optionsCode.GDusedpadbuttonObjects1);

gdjs.optionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.optionsCode.GDusedpadbuttonObjects1.length;i<l;++i) {
    if ( gdjs.optionsCode.GDusedpadbuttonObjects1[i].getBehavior("ToggleSwitch").IsDisabled((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.optionsCode.condition0IsTrue_0.val = true;
        gdjs.optionsCode.GDusedpadbuttonObjects1[k] = gdjs.optionsCode.GDusedpadbuttonObjects1[i];
        ++k;
    }
}
gdjs.optionsCode.GDusedpadbuttonObjects1.length = k;}if (gdjs.optionsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.optionsCode.GDxbuttonObjects1);

gdjs.optionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.optionsCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.optionsCode.GDxbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.optionsCode.condition0IsTrue_0.val = true;
        gdjs.optionsCode.GDxbuttonObjects1[k] = gdjs.optionsCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.optionsCode.GDxbuttonObjects1.length = k;}if (gdjs.optionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gameplaytab"), gdjs.optionsCode.GDgameplaytabObjects1);

gdjs.optionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.optionsCode.GDgameplaytabObjects1.length;i<l;++i) {
    if ( gdjs.optionsCode.GDgameplaytabObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.optionsCode.condition0IsTrue_0.val = true;
        gdjs.optionsCode.GDgameplaytabObjects1[k] = gdjs.optionsCode.GDgameplaytabObjects1[i];
        ++k;
    }
}
gdjs.optionsCode.GDgameplaytabObjects1.length = k;}if (gdjs.optionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("controlstab"), gdjs.optionsCode.GDcontrolstabObjects1);
/* Reuse gdjs.optionsCode.GDgameplaytabObjects1 */
{for(var i = 0, len = gdjs.optionsCode.GDcontrolstabObjects1.length ;i < len;++i) {
    gdjs.optionsCode.GDcontrolstabObjects1[i].setBold(false);
}
}{for(var i = 0, len = gdjs.optionsCode.GDgameplaytabObjects1.length ;i < len;++i) {
    gdjs.optionsCode.GDgameplaytabObjects1[i].setBold(true);
}
}}

}


};

gdjs.optionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.optionsCode.GDxbuttonObjects1.length = 0;
gdjs.optionsCode.GDxbuttonObjects2.length = 0;
gdjs.optionsCode.GDcontrolstabObjects1.length = 0;
gdjs.optionsCode.GDcontrolstabObjects2.length = 0;
gdjs.optionsCode.GDgameplaytabObjects1.length = 0;
gdjs.optionsCode.GDgameplaytabObjects2.length = 0;
gdjs.optionsCode.GDmisctabObjects1.length = 0;
gdjs.optionsCode.GDmisctabObjects2.length = 0;
gdjs.optionsCode.GDdisplaytabObjects1.length = 0;
gdjs.optionsCode.GDdisplaytabObjects2.length = 0;
gdjs.optionsCode.GDdisplaytab2Objects1.length = 0;
gdjs.optionsCode.GDdisplaytab2Objects2.length = 0;
gdjs.optionsCode.GDusedpadtextObjects1.length = 0;
gdjs.optionsCode.GDusedpadtextObjects2.length = 0;
gdjs.optionsCode.GDrepositionjoyObjects1.length = 0;
gdjs.optionsCode.GDrepositionjoyObjects2.length = 0;
gdjs.optionsCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.optionsCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.optionsCode.GDusedpadbuttonObjects1.length = 0;
gdjs.optionsCode.GDusedpadbuttonObjects2.length = 0;
gdjs.optionsCode.GDreposjoyObjects1.length = 0;
gdjs.optionsCode.GDreposjoyObjects2.length = 0;

gdjs.optionsCode.eventsList0(runtimeScene);

return;

}

gdjs['optionsCode'] = gdjs.optionsCode;
