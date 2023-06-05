gdjs.changelog_32screenCode = {};
gdjs.changelog_32screenCode.GDxbuttonObjects1= [];
gdjs.changelog_32screenCode.GDxbuttonObjects2= [];
gdjs.changelog_32screenCode.GDohioplatformerverObjects1= [];
gdjs.changelog_32screenCode.GDohioplatformerverObjects2= [];
gdjs.changelog_32screenCode.GDchangeloglistObjects1= [];
gdjs.changelog_32screenCode.GDchangeloglistObjects2= [];
gdjs.changelog_32screenCode.GDNewTextObjects1= [];
gdjs.changelog_32screenCode.GDNewTextObjects2= [];
gdjs.changelog_32screenCode.GDingfoObjects1= [];
gdjs.changelog_32screenCode.GDingfoObjects2= [];
gdjs.changelog_32screenCode.GDgithublinkObjects1= [];
gdjs.changelog_32screenCode.GDgithublinkObjects2= [];
gdjs.changelog_32screenCode.GDNewTiledSpriteObjects1= [];
gdjs.changelog_32screenCode.GDNewTiledSpriteObjects2= [];


gdjs.changelog_32screenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("changelog");
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " - menu (" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + " screen)");
}{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "iframe", "google.com", 1024, 768, 96, 96, true, true, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.changelog_32screenCode.GDxbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.changelog_32screenCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.changelog_32screenCode.GDxbuttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.changelog_32screenCode.GDxbuttonObjects1[k] = gdjs.changelog_32screenCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.changelog_32screenCode.GDxbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{



}


{



}


};

gdjs.changelog_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.changelog_32screenCode.GDxbuttonObjects1.length = 0;
gdjs.changelog_32screenCode.GDxbuttonObjects2.length = 0;
gdjs.changelog_32screenCode.GDohioplatformerverObjects1.length = 0;
gdjs.changelog_32screenCode.GDohioplatformerverObjects2.length = 0;
gdjs.changelog_32screenCode.GDchangeloglistObjects1.length = 0;
gdjs.changelog_32screenCode.GDchangeloglistObjects2.length = 0;
gdjs.changelog_32screenCode.GDNewTextObjects1.length = 0;
gdjs.changelog_32screenCode.GDNewTextObjects2.length = 0;
gdjs.changelog_32screenCode.GDingfoObjects1.length = 0;
gdjs.changelog_32screenCode.GDingfoObjects2.length = 0;
gdjs.changelog_32screenCode.GDgithublinkObjects1.length = 0;
gdjs.changelog_32screenCode.GDgithublinkObjects2.length = 0;
gdjs.changelog_32screenCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.changelog_32screenCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.changelog_32screenCode.eventsList0(runtimeScene);

return;

}

gdjs['changelog_32screenCode'] = gdjs.changelog_32screenCode;
