gdjs.changelog_32screenCode = {};
gdjs.changelog_32screenCode.GDxbuttonObjects1= [];
gdjs.changelog_32screenCode.GDxbuttonObjects2= [];
gdjs.changelog_32screenCode.GDohioplatformerverObjects1= [];
gdjs.changelog_32screenCode.GDohioplatformerverObjects2= [];
gdjs.changelog_32screenCode.GDchangeloglistObjects1= [];
gdjs.changelog_32screenCode.GDchangeloglistObjects2= [];

gdjs.changelog_32screenCode.conditionTrue_0 = {val:false};
gdjs.changelog_32screenCode.condition0IsTrue_0 = {val:false};


gdjs.changelog_32screenCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("ohioplatformerver"), gdjs.changelog_32screenCode.GDohioplatformerverObjects1);
{for(var i = 0, len = gdjs.changelog_32screenCode.GDohioplatformerverObjects1.length ;i < len;++i) {
    gdjs.changelog_32screenCode.GDohioplatformerverObjects1[i].setString(gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " changelog");
}
}}

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

gdjs.changelog_32screenCode.eventsList0(runtimeScene);

return;

}

gdjs['changelog_32screenCode'] = gdjs.changelog_32screenCode;
