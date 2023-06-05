gdjs.save_32screenCode = {};
gdjs.save_32screenCode.GDxbuttonObjects1= [];
gdjs.save_32screenCode.GDxbuttonObjects2= [];
gdjs.save_32screenCode.GDsavewarningObjects1= [];
gdjs.save_32screenCode.GDsavewarningObjects2= [];
gdjs.save_32screenCode.GDsavewarning2Objects1= [];
gdjs.save_32screenCode.GDsavewarning2Objects2= [];
gdjs.save_32screenCode.GDsave1ButtonObjects1= [];
gdjs.save_32screenCode.GDsave1ButtonObjects2= [];
gdjs.save_32screenCode.GDsave2ButtonObjects1= [];
gdjs.save_32screenCode.GDsave2ButtonObjects2= [];
gdjs.save_32screenCode.GDsave3ButtonObjects1= [];
gdjs.save_32screenCode.GDsave3ButtonObjects2= [];
gdjs.save_32screenCode.GDsave4ButtonObjects1= [];
gdjs.save_32screenCode.GDsave4ButtonObjects2= [];
gdjs.save_32screenCode.GDdeletesaveButtonObjects1= [];
gdjs.save_32screenCode.GDdeletesaveButtonObjects2= [];


gdjs.save_32screenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("save");
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " - menu (" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + " screen)");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.save_32screenCode.GDxbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.save_32screenCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.save_32screenCode.GDxbuttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.save_32screenCode.GDxbuttonObjects1[k] = gdjs.save_32screenCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.save_32screenCode.GDxbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.save_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.save_32screenCode.GDxbuttonObjects1.length = 0;
gdjs.save_32screenCode.GDxbuttonObjects2.length = 0;
gdjs.save_32screenCode.GDsavewarningObjects1.length = 0;
gdjs.save_32screenCode.GDsavewarningObjects2.length = 0;
gdjs.save_32screenCode.GDsavewarning2Objects1.length = 0;
gdjs.save_32screenCode.GDsavewarning2Objects2.length = 0;
gdjs.save_32screenCode.GDsave1ButtonObjects1.length = 0;
gdjs.save_32screenCode.GDsave1ButtonObjects2.length = 0;
gdjs.save_32screenCode.GDsave2ButtonObjects1.length = 0;
gdjs.save_32screenCode.GDsave2ButtonObjects2.length = 0;
gdjs.save_32screenCode.GDsave3ButtonObjects1.length = 0;
gdjs.save_32screenCode.GDsave3ButtonObjects2.length = 0;
gdjs.save_32screenCode.GDsave4ButtonObjects1.length = 0;
gdjs.save_32screenCode.GDsave4ButtonObjects2.length = 0;
gdjs.save_32screenCode.GDdeletesaveButtonObjects1.length = 0;
gdjs.save_32screenCode.GDdeletesaveButtonObjects2.length = 0;

gdjs.save_32screenCode.eventsList0(runtimeScene);

return;

}

gdjs['save_32screenCode'] = gdjs.save_32screenCode;
