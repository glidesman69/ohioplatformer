gdjs.fake_32loading_32screenCode = {};
gdjs.fake_32loading_32screenCode.GDxbuttonObjects1= [];
gdjs.fake_32loading_32screenCode.GDxbuttonObjects2= [];
gdjs.fake_32loading_32screenCode.GDxbuttonObjects3= [];
gdjs.fake_32loading_32screenCode.GDamogusmanObjects1= [];
gdjs.fake_32loading_32screenCode.GDamogusmanObjects2= [];
gdjs.fake_32loading_32screenCode.GDamogusmanObjects3= [];
gdjs.fake_32loading_32screenCode.GDlevelTextObjects1= [];
gdjs.fake_32loading_32screenCode.GDlevelTextObjects2= [];
gdjs.fake_32loading_32screenCode.GDlevelTextObjects3= [];
gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1= [];
gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects2= [];
gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects3= [];
gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects1= [];
gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects2= [];
gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects3= [];
gdjs.fake_32loading_32screenCode.GDlvl1bgObjects1= [];
gdjs.fake_32loading_32screenCode.GDlvl1bgObjects2= [];
gdjs.fake_32loading_32screenCode.GDlvl1bgObjects3= [];
gdjs.fake_32loading_32screenCode.GDtimeelapsedfordebuggingpurposesObjects1= [];
gdjs.fake_32loading_32screenCode.GDtimeelapsedfordebuggingpurposesObjects2= [];
gdjs.fake_32loading_32screenCode.GDtimeelapsedfordebuggingpurposesObjects3= [];
gdjs.fake_32loading_32screenCode.GDforbiddenscreenwarningObjects1= [];
gdjs.fake_32loading_32screenCode.GDforbiddenscreenwarningObjects2= [];
gdjs.fake_32loading_32screenCode.GDforbiddenscreenwarningObjects3= [];


gdjs.fake_32loading_32screenCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("levelSubText"), gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("levelText"), gdjs.fake_32loading_32screenCode.GDlevelTextObjects2);
{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlevelTextObjects2.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlevelTextObjects2[i].setOpacity(gdjs.fake_32loading_32screenCode.GDlevelTextObjects2[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 10));
}
}{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects2.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects2[i].setOpacity(gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects2[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 10));
}
}}

}


};gdjs.fake_32loading_32screenCode.asyncCallback20202636 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("amogusman"), gdjs.fake_32loading_32screenCode.GDamogusmanObjects2);
{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDamogusmanObjects2.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDamogusmanObjects2[i].setOpacity(gdjs.fake_32loading_32screenCode.GDamogusmanObjects2[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 10));
}
}
{ //Subevents
gdjs.fake_32loading_32screenCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.fake_32loading_32screenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.fake_32loading_32screenCode.asyncCallback20202636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fake_32loading_32screenCode.asyncCallback20204236 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("lvl1bg"), gdjs.fake_32loading_32screenCode.GDlvl1bgObjects2);
{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlvl1bgObjects2.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlvl1bgObjects2[i].setOpacity(gdjs.fake_32loading_32screenCode.GDlvl1bgObjects2[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 10));
}
}}
gdjs.fake_32loading_32screenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.fake_32loading_32screenCode.asyncCallback20204236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fake_32loading_32screenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.fake_32loading_32screenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.fake_32loading_32screenCode.asyncCallback20206708 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("ohiogetdeleted"), gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects2);
{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects2.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects2[i].setOpacity(gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects2[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 10));
}
}}
gdjs.fake_32loading_32screenCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.fake_32loading_32screenCode.asyncCallback20206708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fake_32loading_32screenCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.fake_32loading_32screenCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.fake_32loading_32screenCode.asyncCallback20208180 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("ohiogetdeleted"), gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects2);
{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects2.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects2[i].setOpacity(gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects2[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 10));
}
}}
gdjs.fake_32loading_32screenCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.fake_32loading_32screenCode.asyncCallback20208180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fake_32loading_32screenCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.fake_32loading_32screenCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.fake_32loading_32screenCode.mapOfGDgdjs_46fake_9532loading_9532screenCode_46GDforbiddenscreenwarningObjects1Objects = Hashtable.newFrom({"forbiddenscreenwarning": gdjs.fake_32loading_32screenCode.GDforbiddenscreenwarningObjects1});
gdjs.fake_32loading_32screenCode.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("amogusman"), gdjs.fake_32loading_32screenCode.GDamogusmanObjects1);
gdjs.copyArray(runtimeScene.getObjects("levelSubText"), gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("levelText"), gdjs.fake_32loading_32screenCode.GDlevelTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("lvl1bg"), gdjs.fake_32loading_32screenCode.GDlvl1bgObjects1);
gdjs.copyArray(runtimeScene.getObjects("ohiogetdeleted"), gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects1);
{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDamogusmanObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDamogusmanObjects1[i].setOpacity(0);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlvl1bgObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlvl1bgObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loadingtimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loadingtimerreal");
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " - loading level " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlevelTextObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlevelTextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1[i].setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("amogusman"), gdjs.fake_32loading_32screenCode.GDamogusmanObjects1);
gdjs.copyArray(runtimeScene.getObjects("timeelapsedfordebuggingpurposes"), gdjs.fake_32loading_32screenCode.GDtimeelapsedfordebuggingpurposesObjects1);
{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDamogusmanObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDamogusmanObjects1[i].rotate(270, runtimeScene);
}
}{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDtimeelapsedfordebuggingpurposesObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDtimeelapsedfordebuggingpurposesObjects1[i].setString("time elapsed: " + gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "loadingtimer"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.fake_32loading_32screenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("levelSubText"), gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("levelText"), gdjs.fake_32loading_32screenCode.GDlevelTextObjects1);
{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlevelTextObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlevelTextObjects1[i].setString("ohio forest (level 1)");
}
}{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1[i].setString("the place where a funny monke got found");
}
}
{ //Subevents
gdjs.fake_32loading_32screenCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("levelSubText"), gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("levelText"), gdjs.fake_32loading_32screenCode.GDlevelTextObjects1);
{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlevelTextObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlevelTextObjects1[i].setString("how the fuck did this happen");
}
}{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1[i].setString("seriously how");
}
}
{ //Subevents
gdjs.fake_32loading_32screenCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("levelSubText"), gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("levelText"), gdjs.fake_32loading_32screenCode.GDlevelTextObjects1);
{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlevelTextObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlevelTextObjects1[i].setString("ohio test level");
}
}{for(var i = 0, len = gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1.length ;i < len;++i) {
    gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1[i].setString("hell");
}
}
{ //Subevents
gdjs.fake_32loading_32screenCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "loadingtimer") > 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1.1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ohio platformer testlvl1", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "loadingtimer") > 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 1;
}
if (isConditionTrue_0) {
gdjs.fake_32loading_32screenCode.GDforbiddenscreenwarningObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.fake_32loading_32screenCode.mapOfGDgdjs_46fake_9532loading_9532screenCode_46GDforbiddenscreenwarningObjects1Objects, 32, 160, "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "loadingtimer") > 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ohio platformer actuallvl1", false);
}}

}


{



}


};

gdjs.fake_32loading_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fake_32loading_32screenCode.GDxbuttonObjects1.length = 0;
gdjs.fake_32loading_32screenCode.GDxbuttonObjects2.length = 0;
gdjs.fake_32loading_32screenCode.GDxbuttonObjects3.length = 0;
gdjs.fake_32loading_32screenCode.GDamogusmanObjects1.length = 0;
gdjs.fake_32loading_32screenCode.GDamogusmanObjects2.length = 0;
gdjs.fake_32loading_32screenCode.GDamogusmanObjects3.length = 0;
gdjs.fake_32loading_32screenCode.GDlevelTextObjects1.length = 0;
gdjs.fake_32loading_32screenCode.GDlevelTextObjects2.length = 0;
gdjs.fake_32loading_32screenCode.GDlevelTextObjects3.length = 0;
gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects1.length = 0;
gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects2.length = 0;
gdjs.fake_32loading_32screenCode.GDlevelSubTextObjects3.length = 0;
gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects1.length = 0;
gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects2.length = 0;
gdjs.fake_32loading_32screenCode.GDohiogetdeletedObjects3.length = 0;
gdjs.fake_32loading_32screenCode.GDlvl1bgObjects1.length = 0;
gdjs.fake_32loading_32screenCode.GDlvl1bgObjects2.length = 0;
gdjs.fake_32loading_32screenCode.GDlvl1bgObjects3.length = 0;
gdjs.fake_32loading_32screenCode.GDtimeelapsedfordebuggingpurposesObjects1.length = 0;
gdjs.fake_32loading_32screenCode.GDtimeelapsedfordebuggingpurposesObjects2.length = 0;
gdjs.fake_32loading_32screenCode.GDtimeelapsedfordebuggingpurposesObjects3.length = 0;
gdjs.fake_32loading_32screenCode.GDforbiddenscreenwarningObjects1.length = 0;
gdjs.fake_32loading_32screenCode.GDforbiddenscreenwarningObjects2.length = 0;
gdjs.fake_32loading_32screenCode.GDforbiddenscreenwarningObjects3.length = 0;

gdjs.fake_32loading_32screenCode.eventsList8(runtimeScene);

return;

}

gdjs['fake_32loading_32screenCode'] = gdjs.fake_32loading_32screenCode;
