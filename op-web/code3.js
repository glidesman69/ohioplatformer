gdjs.creditsCode = {};
gdjs.creditsCode.GDxbuttonObjects1= [];
gdjs.creditsCode.GDxbuttonObjects2= [];
gdjs.creditsCode.GDyourmomObjects1= [];
gdjs.creditsCode.GDyourmomObjects2= [];
gdjs.creditsCode.GDcreditstextObjects1= [];
gdjs.creditsCode.GDcreditstextObjects2= [];
gdjs.creditsCode.GDNewBBTextObjects1= [];
gdjs.creditsCode.GDNewBBTextObjects2= [];
gdjs.creditsCode.GDversionstringObjects1= [];
gdjs.creditsCode.GDversionstringObjects2= [];


gdjs.creditsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("credits");
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " - menu (" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + " screen)");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.creditsCode.GDxbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.creditsCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.creditsCode.GDxbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.creditsCode.GDxbuttonObjects1[k] = gdjs.creditsCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.creditsCode.GDxbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("versionstring"), gdjs.creditsCode.GDversionstringObjects1);
{for(var i = 0, len = gdjs.creditsCode.GDversionstringObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDversionstringObjects1[i].setString("ohio platformer version " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};

gdjs.creditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.creditsCode.GDxbuttonObjects1.length = 0;
gdjs.creditsCode.GDxbuttonObjects2.length = 0;
gdjs.creditsCode.GDyourmomObjects1.length = 0;
gdjs.creditsCode.GDyourmomObjects2.length = 0;
gdjs.creditsCode.GDcreditstextObjects1.length = 0;
gdjs.creditsCode.GDcreditstextObjects2.length = 0;
gdjs.creditsCode.GDNewBBTextObjects1.length = 0;
gdjs.creditsCode.GDNewBBTextObjects2.length = 0;
gdjs.creditsCode.GDversionstringObjects1.length = 0;
gdjs.creditsCode.GDversionstringObjects2.length = 0;

gdjs.creditsCode.eventsList0(runtimeScene);

return;

}

gdjs['creditsCode'] = gdjs.creditsCode;
