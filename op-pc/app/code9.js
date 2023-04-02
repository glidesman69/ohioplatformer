gdjs.changelog_32screenCode = {};
gdjs.changelog_32screenCode.GDgithublinkObjects2_1final = [];

gdjs.changelog_32screenCode.GDxbuttonObjects1= [];
gdjs.changelog_32screenCode.GDxbuttonObjects2= [];
gdjs.changelog_32screenCode.GDxbuttonObjects3= [];
gdjs.changelog_32screenCode.GDohioplatformerverObjects1= [];
gdjs.changelog_32screenCode.GDohioplatformerverObjects2= [];
gdjs.changelog_32screenCode.GDohioplatformerverObjects3= [];
gdjs.changelog_32screenCode.GDchangeloglistObjects1= [];
gdjs.changelog_32screenCode.GDchangeloglistObjects2= [];
gdjs.changelog_32screenCode.GDchangeloglistObjects3= [];
gdjs.changelog_32screenCode.GDNewTextObjects1= [];
gdjs.changelog_32screenCode.GDNewTextObjects2= [];
gdjs.changelog_32screenCode.GDNewTextObjects3= [];
gdjs.changelog_32screenCode.GDingfoObjects1= [];
gdjs.changelog_32screenCode.GDingfoObjects2= [];
gdjs.changelog_32screenCode.GDingfoObjects3= [];
gdjs.changelog_32screenCode.GDgithublinkObjects1= [];
gdjs.changelog_32screenCode.GDgithublinkObjects2= [];
gdjs.changelog_32screenCode.GDgithublinkObjects3= [];

gdjs.changelog_32screenCode.conditionTrue_0 = {val:false};
gdjs.changelog_32screenCode.condition0IsTrue_0 = {val:false};
gdjs.changelog_32screenCode.condition1IsTrue_0 = {val:false};
gdjs.changelog_32screenCode.condition2IsTrue_0 = {val:false};
gdjs.changelog_32screenCode.conditionTrue_1 = {val:false};
gdjs.changelog_32screenCode.condition0IsTrue_1 = {val:false};
gdjs.changelog_32screenCode.condition1IsTrue_1 = {val:false};
gdjs.changelog_32screenCode.condition2IsTrue_1 = {val:false};


gdjs.changelog_32screenCode.mapOfGDgdjs_46changelog_9532screenCode_46GDgithublinkObjects1Objects = Hashtable.newFrom({"githublink": gdjs.changelog_32screenCode.GDgithublinkObjects1});
gdjs.changelog_32screenCode.mapOfGDgdjs_46changelog_9532screenCode_46GDgithublinkObjects3Objects = Hashtable.newFrom({"githublink": gdjs.changelog_32screenCode.GDgithublinkObjects3});
gdjs.changelog_32screenCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.changelog_32screenCode.GDgithublinkObjects1, gdjs.changelog_32screenCode.GDgithublinkObjects2);


gdjs.changelog_32screenCode.condition0IsTrue_0.val = false;
gdjs.changelog_32screenCode.condition1IsTrue_0.val = false;
{
{gdjs.changelog_32screenCode.conditionTrue_1 = gdjs.changelog_32screenCode.condition0IsTrue_0;
gdjs.changelog_32screenCode.GDgithublinkObjects2_1final.length = 0;gdjs.changelog_32screenCode.condition0IsTrue_1.val = false;
gdjs.changelog_32screenCode.condition1IsTrue_1.val = false;
{
gdjs.changelog_32screenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.changelog_32screenCode.condition0IsTrue_1.val ) {
    gdjs.changelog_32screenCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.changelog_32screenCode.GDgithublinkObjects1, gdjs.changelog_32screenCode.GDgithublinkObjects3);

gdjs.changelog_32screenCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.changelog_32screenCode.mapOfGDgdjs_46changelog_9532screenCode_46GDgithublinkObjects3Objects, runtimeScene, true, true);
if( gdjs.changelog_32screenCode.condition1IsTrue_1.val ) {
    gdjs.changelog_32screenCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.changelog_32screenCode.GDgithublinkObjects3.length;j<jLen;++j) {
        if ( gdjs.changelog_32screenCode.GDgithublinkObjects2_1final.indexOf(gdjs.changelog_32screenCode.GDgithublinkObjects3[j]) === -1 )
            gdjs.changelog_32screenCode.GDgithublinkObjects2_1final.push(gdjs.changelog_32screenCode.GDgithublinkObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.changelog_32screenCode.GDgithublinkObjects2_1final, gdjs.changelog_32screenCode.GDgithublinkObjects2);
}
}
}if ( gdjs.changelog_32screenCode.condition0IsTrue_0.val ) {
{
{gdjs.changelog_32screenCode.conditionTrue_1 = gdjs.changelog_32screenCode.condition1IsTrue_0;
gdjs.changelog_32screenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16403212);
}
}}
if (gdjs.changelog_32screenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.changelog_32screenCode.GDgithublinkObjects2 */
{for(var i = 0, len = gdjs.changelog_32screenCode.GDgithublinkObjects2.length ;i < len;++i) {
    gdjs.changelog_32screenCode.GDgithublinkObjects2[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.changelog_32screenCode.GDgithublinkObjects2.length ;i < len;++i) {
    gdjs.changelog_32screenCode.GDgithublinkObjects2[i].setOutline("0;0;0", 0);
}
}}

}


{


gdjs.changelog_32screenCode.condition0IsTrue_0.val = false;
gdjs.changelog_32screenCode.condition1IsTrue_0.val = false;
{
gdjs.changelog_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.changelog_32screenCode.condition0IsTrue_0.val ) {
{
{gdjs.changelog_32screenCode.conditionTrue_1 = gdjs.changelog_32screenCode.condition1IsTrue_0;
gdjs.changelog_32screenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16404044);
}
}}
if (gdjs.changelog_32screenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://github.com/glidesman69/ohioplatformer/releases", runtimeScene);
}}

}


{


{
}

}


};gdjs.changelog_32screenCode.eventsList1 = function(runtimeScene) {

{


gdjs.changelog_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.changelog_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.changelog_32screenCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("changelog");
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " - menu (" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) + " screen)");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.changelog_32screenCode.GDxbuttonObjects1);

gdjs.changelog_32screenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.changelog_32screenCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.changelog_32screenCode.GDxbuttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.changelog_32screenCode.condition0IsTrue_0.val = true;
        gdjs.changelog_32screenCode.GDxbuttonObjects1[k] = gdjs.changelog_32screenCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.changelog_32screenCode.GDxbuttonObjects1.length = k;}if (gdjs.changelog_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ohioplatformerver"), gdjs.changelog_32screenCode.GDohioplatformerverObjects1);
{for(var i = 0, len = gdjs.changelog_32screenCode.GDohioplatformerverObjects1.length ;i < len;++i) {
    gdjs.changelog_32screenCode.GDohioplatformerverObjects1[i].setString(gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " changelog");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("githublink"), gdjs.changelog_32screenCode.GDgithublinkObjects1);

gdjs.changelog_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.changelog_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.changelog_32screenCode.mapOfGDgdjs_46changelog_9532screenCode_46GDgithublinkObjects1Objects, runtimeScene, true, false);
}if (gdjs.changelog_32screenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.changelog_32screenCode.GDgithublinkObjects1 */
{for(var i = 0, len = gdjs.changelog_32screenCode.GDgithublinkObjects1.length ;i < len;++i) {
    gdjs.changelog_32screenCode.GDgithublinkObjects1[i].setColor("74;144;226");
}
}{for(var i = 0, len = gdjs.changelog_32screenCode.GDgithublinkObjects1.length ;i < len;++i) {
    gdjs.changelog_32screenCode.GDgithublinkObjects1[i].setOutline("74;144;226", 1);
}
}
{ //Subevents
gdjs.changelog_32screenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.changelog_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.changelog_32screenCode.GDxbuttonObjects1.length = 0;
gdjs.changelog_32screenCode.GDxbuttonObjects2.length = 0;
gdjs.changelog_32screenCode.GDxbuttonObjects3.length = 0;
gdjs.changelog_32screenCode.GDohioplatformerverObjects1.length = 0;
gdjs.changelog_32screenCode.GDohioplatformerverObjects2.length = 0;
gdjs.changelog_32screenCode.GDohioplatformerverObjects3.length = 0;
gdjs.changelog_32screenCode.GDchangeloglistObjects1.length = 0;
gdjs.changelog_32screenCode.GDchangeloglistObjects2.length = 0;
gdjs.changelog_32screenCode.GDchangeloglistObjects3.length = 0;
gdjs.changelog_32screenCode.GDNewTextObjects1.length = 0;
gdjs.changelog_32screenCode.GDNewTextObjects2.length = 0;
gdjs.changelog_32screenCode.GDNewTextObjects3.length = 0;
gdjs.changelog_32screenCode.GDingfoObjects1.length = 0;
gdjs.changelog_32screenCode.GDingfoObjects2.length = 0;
gdjs.changelog_32screenCode.GDingfoObjects3.length = 0;
gdjs.changelog_32screenCode.GDgithublinkObjects1.length = 0;
gdjs.changelog_32screenCode.GDgithublinkObjects2.length = 0;
gdjs.changelog_32screenCode.GDgithublinkObjects3.length = 0;

gdjs.changelog_32screenCode.eventsList1(runtimeScene);

return;

}

gdjs['changelog_32screenCode'] = gdjs.changelog_32screenCode;
