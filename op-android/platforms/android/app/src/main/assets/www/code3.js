gdjs.optionsCode = {};
gdjs.optionsCode.GDxbuttonObjects1= [];
gdjs.optionsCode.GDxbuttonObjects2= [];
gdjs.optionsCode.GDusedpadbuttonObjects1= [];
gdjs.optionsCode.GDusedpadbuttonObjects2= [];
gdjs.optionsCode.GDcontrolstabObjects1= [];
gdjs.optionsCode.GDcontrolstabObjects2= [];
gdjs.optionsCode.GDusedpadtextObjects1= [];
gdjs.optionsCode.GDusedpadtextObjects2= [];
gdjs.optionsCode.GDSmallPlasticGreenRoundSliderObjects1= [];
gdjs.optionsCode.GDSmallPlasticGreenRoundSliderObjects2= [];
gdjs.optionsCode.GDNewShapePainterObjects1= [];
gdjs.optionsCode.GDNewShapePainterObjects2= [];

gdjs.optionsCode.conditionTrue_0 = {val:false};
gdjs.optionsCode.condition0IsTrue_0 = {val:false};
gdjs.optionsCode.condition1IsTrue_0 = {val:false};
gdjs.optionsCode.condition2IsTrue_0 = {val:false};


gdjs.optionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.optionsCode.GDNewShapePainterObjects1);
gdjs.copyArray(runtimeScene.getObjects("usedpadbutton"), gdjs.optionsCode.GDusedpadbuttonObjects1);

gdjs.optionsCode.condition0IsTrue_0.val = false;
gdjs.optionsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.optionsCode.GDusedpadbuttonObjects1.length;i<l;++i) {
    if ( gdjs.optionsCode.GDusedpadbuttonObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.optionsCode.condition0IsTrue_0.val = true;
        gdjs.optionsCode.GDusedpadbuttonObjects1[k] = gdjs.optionsCode.GDusedpadbuttonObjects1[i];
        ++k;
    }
}
gdjs.optionsCode.GDusedpadbuttonObjects1.length = k;}if ( gdjs.optionsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.optionsCode.GDNewShapePainterObjects1.length;i<l;++i) {
    if ( gdjs.optionsCode.GDNewShapePainterObjects1[i].getBehavior("ToggleSwitch").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.optionsCode.condition1IsTrue_0.val = true;
        gdjs.optionsCode.GDNewShapePainterObjects1[k] = gdjs.optionsCode.GDNewShapePainterObjects1[i];
        ++k;
    }
}
gdjs.optionsCode.GDNewShapePainterObjects1.length = k;}}
if (gdjs.optionsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.optionsCode.GDNewShapePainterObjects1);
gdjs.copyArray(runtimeScene.getObjects("usedpadbutton"), gdjs.optionsCode.GDusedpadbuttonObjects1);

gdjs.optionsCode.condition0IsTrue_0.val = false;
gdjs.optionsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.optionsCode.GDusedpadbuttonObjects1.length;i<l;++i) {
    if ( !(gdjs.optionsCode.GDusedpadbuttonObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.optionsCode.condition0IsTrue_0.val = true;
        gdjs.optionsCode.GDusedpadbuttonObjects1[k] = gdjs.optionsCode.GDusedpadbuttonObjects1[i];
        ++k;
    }
}
gdjs.optionsCode.GDusedpadbuttonObjects1.length = k;}if ( gdjs.optionsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.optionsCode.GDNewShapePainterObjects1.length;i<l;++i) {
    if ( gdjs.optionsCode.GDNewShapePainterObjects1[i].getBehavior("ToggleSwitch").IsDisabled((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.optionsCode.condition1IsTrue_0.val = true;
        gdjs.optionsCode.GDNewShapePainterObjects1[k] = gdjs.optionsCode.GDNewShapePainterObjects1[i];
        ++k;
    }
}
gdjs.optionsCode.GDNewShapePainterObjects1.length = k;}}
if (gdjs.optionsCode.condition1IsTrue_0.val) {
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


};

gdjs.optionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.optionsCode.GDxbuttonObjects1.length = 0;
gdjs.optionsCode.GDxbuttonObjects2.length = 0;
gdjs.optionsCode.GDusedpadbuttonObjects1.length = 0;
gdjs.optionsCode.GDusedpadbuttonObjects2.length = 0;
gdjs.optionsCode.GDcontrolstabObjects1.length = 0;
gdjs.optionsCode.GDcontrolstabObjects2.length = 0;
gdjs.optionsCode.GDusedpadtextObjects1.length = 0;
gdjs.optionsCode.GDusedpadtextObjects2.length = 0;
gdjs.optionsCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.optionsCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.optionsCode.GDNewShapePainterObjects1.length = 0;
gdjs.optionsCode.GDNewShapePainterObjects2.length = 0;

gdjs.optionsCode.eventsList0(runtimeScene);

return;

}

gdjs['optionsCode'] = gdjs.optionsCode;
