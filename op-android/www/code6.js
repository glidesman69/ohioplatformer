gdjs.introCode = {};
gdjs.introCode.GDxbuttonObjects1= [];
gdjs.introCode.GDxbuttonObjects2= [];
gdjs.introCode.GDxbuttonObjects3= [];
gdjs.introCode.GDxbuttonObjects4= [];
gdjs.introCode.GDwavefrontlogoObjects1= [];
gdjs.introCode.GDwavefrontlogoObjects2= [];
gdjs.introCode.GDwavefrontlogoObjects3= [];
gdjs.introCode.GDwavefrontlogoObjects4= [];
gdjs.introCode.GDtimeelapsedObjects1= [];
gdjs.introCode.GDtimeelapsedObjects2= [];
gdjs.introCode.GDtimeelapsedObjects3= [];
gdjs.introCode.GDtimeelapsedObjects4= [];


gdjs.introCode.asyncCallback20174836 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "warning screen", false);
}}
gdjs.introCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.introCode.asyncCallback20174836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.introCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.introCode.asyncCallback20173956 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("wavefrontlogo"), gdjs.introCode.GDwavefrontlogoObjects3);

{for(var i = 0, len = gdjs.introCode.GDwavefrontlogoObjects3.length ;i < len;++i) {
    gdjs.introCode.GDwavefrontlogoObjects3[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.introCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.introCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.introCode.GDwavefrontlogoObjects2) asyncObjectsList.addObject("wavefrontlogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.introCode.asyncCallback20173956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.introCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.introCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.introCode.GDwavefrontlogoObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introCode.GDwavefrontlogoObjects2.length;i<l;++i) {
    if ( gdjs.introCode.GDwavefrontlogoObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.introCode.GDwavefrontlogoObjects2[k] = gdjs.introCode.GDwavefrontlogoObjects2[i];
        ++k;
    }
}
gdjs.introCode.GDwavefrontlogoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20172900);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{ //Subevents
gdjs.introCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.introCode.asyncCallback20172356 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("wavefrontlogo"), gdjs.introCode.GDwavefrontlogoObjects2);

{for(var i = 0, len = gdjs.introCode.GDwavefrontlogoObjects2.length ;i < len;++i) {
    gdjs.introCode.GDwavefrontlogoObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.introCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.introCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.introCode.GDwavefrontlogoObjects1) asyncObjectsList.addObject("wavefrontlogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.introCode.asyncCallback20172356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.introCode.GDxbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.introCode.GDxbuttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introCode.GDxbuttonObjects1[k] = gdjs.introCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.introCode.GDxbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer shitty ost menu.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer shitty ost lvl1.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer uwin.mp3");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("wavefrontlogo"), gdjs.introCode.GDwavefrontlogoObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "introtimer");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "uuhhh.mp3");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("in the beningging");
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{gdjs.evtTools.sound.playSound(runtimeScene, "uuhhh.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.introCode.GDwavefrontlogoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDwavefrontlogoObjects1[i].hide();
}
}
{ //Subevents
gdjs.introCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("timeelapsed"), gdjs.introCode.GDtimeelapsedObjects1);
{for(var i = 0, len = gdjs.introCode.GDtimeelapsedObjects1.length ;i < len;++i) {
    gdjs.introCode.GDtimeelapsedObjects1[i].setString("time elapsed:" + gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "introtimer"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDxbuttonObjects1.length = 0;
gdjs.introCode.GDxbuttonObjects2.length = 0;
gdjs.introCode.GDxbuttonObjects3.length = 0;
gdjs.introCode.GDxbuttonObjects4.length = 0;
gdjs.introCode.GDwavefrontlogoObjects1.length = 0;
gdjs.introCode.GDwavefrontlogoObjects2.length = 0;
gdjs.introCode.GDwavefrontlogoObjects3.length = 0;
gdjs.introCode.GDwavefrontlogoObjects4.length = 0;
gdjs.introCode.GDtimeelapsedObjects1.length = 0;
gdjs.introCode.GDtimeelapsedObjects2.length = 0;
gdjs.introCode.GDtimeelapsedObjects3.length = 0;
gdjs.introCode.GDtimeelapsedObjects4.length = 0;

gdjs.introCode.eventsList6(runtimeScene);

return;

}

gdjs['introCode'] = gdjs.introCode;
