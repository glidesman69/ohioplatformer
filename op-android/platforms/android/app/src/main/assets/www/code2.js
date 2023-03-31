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

gdjs.creditsCode.conditionTrue_0 = {val:false};
gdjs.creditsCode.condition0IsTrue_0 = {val:false};
gdjs.creditsCode.condition1IsTrue_0 = {val:false};


gdjs.creditsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.creditsCode.GDxbuttonObjects1);

gdjs.creditsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.creditsCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.creditsCode.GDxbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.creditsCode.condition0IsTrue_0.val = true;
        gdjs.creditsCode.GDxbuttonObjects1[k] = gdjs.creditsCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.creditsCode.GDxbuttonObjects1.length = k;}if (gdjs.creditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


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
