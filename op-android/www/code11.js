gdjs.level_32selectCode = {};
gdjs.level_32selectCode.GDxbuttonObjects1= [];
gdjs.level_32selectCode.GDxbuttonObjects2= [];
gdjs.level_32selectCode.GDxbuttonObjects3= [];
gdjs.level_32selectCode.GDmenuBackground1Objects1= [];
gdjs.level_32selectCode.GDmenuBackground1Objects2= [];
gdjs.level_32selectCode.GDmenuBackground1Objects3= [];
gdjs.level_32selectCode.GDlvl1ButtonObjects1= [];
gdjs.level_32selectCode.GDlvl1ButtonObjects2= [];
gdjs.level_32selectCode.GDlvl1ButtonObjects3= [];

gdjs.level_32selectCode.conditionTrue_0 = {val:false};
gdjs.level_32selectCode.condition0IsTrue_0 = {val:false};
gdjs.level_32selectCode.condition1IsTrue_0 = {val:false};
gdjs.level_32selectCode.condition2IsTrue_0 = {val:false};
gdjs.level_32selectCode.conditionTrue_1 = {val:false};
gdjs.level_32selectCode.condition0IsTrue_1 = {val:false};
gdjs.level_32selectCode.condition1IsTrue_1 = {val:false};
gdjs.level_32selectCode.condition2IsTrue_1 = {val:false};


gdjs.level_32selectCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.sound.playMusic(runtimeScene, "ohio platformer shitty ost menu.mp3", true, 100, 1);
}}

}


};gdjs.level_32selectCode.eventsList1 = function(runtimeScene) {

{


{
{/* Unknown object - skipped. */}}

}


};gdjs.level_32selectCode.eventsList2 = function(runtimeScene) {

{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "auth settings");
}}

}


};gdjs.level_32selectCode.eventsList3 = function(runtimeScene) {

{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
gdjs.level_32selectCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "changelog screen");
}}

}


};gdjs.level_32selectCode.eventsList4 = function(runtimeScene) {

{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "level select");
}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "credits");
}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "options");
}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cheats menu");
}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("C:\\U\\s\\e\\r\\s\\Gildas\\D\\e\\s\\k\\t\\o\\p\\shitsite", runtimeScene);
}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
gdjs.level_32selectCode.condition1IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if ( gdjs.level_32selectCode.condition0IsTrue_0.val ) {
{
{gdjs.level_32selectCode.conditionTrue_1 = gdjs.level_32selectCode.condition1IsTrue_0;
gdjs.level_32selectCode.condition0IsTrue_1.val = false;
gdjs.level_32selectCode.condition1IsTrue_1.val = false;
{
gdjs.level_32selectCode.condition0IsTrue_1.val = !(gdjs.playerAuthentication.isAuthenticated());
if( gdjs.level_32selectCode.condition0IsTrue_1.val ) {
    gdjs.level_32selectCode.conditionTrue_1.val = true;
}
}
{
gdjs.level_32selectCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 0;
if( gdjs.level_32selectCode.condition1IsTrue_1.val ) {
    gdjs.level_32selectCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.level_32selectCode.condition1IsTrue_0.val) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}
{ //Subevents
gdjs.level_32selectCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
{gdjs.level_32selectCode.conditionTrue_1 = gdjs.level_32selectCode.condition0IsTrue_0;
gdjs.level_32selectCode.condition0IsTrue_1.val = false;
gdjs.level_32selectCode.condition1IsTrue_1.val = false;
{
gdjs.level_32selectCode.condition0IsTrue_1.val = gdjs.playerAuthentication.isAuthenticated();
if( gdjs.level_32selectCode.condition0IsTrue_1.val ) {
    gdjs.level_32selectCode.conditionTrue_1.val = true;
}
}
{
gdjs.level_32selectCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 1;
if( gdjs.level_32selectCode.condition1IsTrue_1.val ) {
    gdjs.level_32selectCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}
{ //Subevents
gdjs.level_32selectCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
{gdjs.level_32selectCode.conditionTrue_1 = gdjs.level_32selectCode.condition0IsTrue_0;
gdjs.level_32selectCode.condition0IsTrue_1.val = false;
{
/* Unknown object - skipped. */if( gdjs.level_32selectCode.condition0IsTrue_1.val ) {
    gdjs.level_32selectCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "save screen");
}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
gdjs.level_32selectCode.condition1IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if ( gdjs.level_32selectCode.condition0IsTrue_0.val ) {
{
{gdjs.level_32selectCode.conditionTrue_1 = gdjs.level_32selectCode.condition1IsTrue_0;
gdjs.level_32selectCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16347828);
}
}}
if (gdjs.level_32selectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://github.com/glidesman69/ohioplatformer/releases", runtimeScene);
}
{ //Subevents
gdjs.level_32selectCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.level_32selectCode.eventsList5 = function(runtimeScene) {

{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.level_32selectCode.GDxbuttonObjects1);

gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level_32selectCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDxbuttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.level_32selectCode.condition0IsTrue_0.val = true;
        gdjs.level_32selectCode.GDxbuttonObjects1[k] = gdjs.level_32selectCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDxbuttonObjects1.length = k;}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
gdjs.level_32selectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer shitty ost menu.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer shitty ost lvl1.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer uwin.mp3");
}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
{gdjs.level_32selectCode.conditionTrue_1 = gdjs.level_32selectCode.condition0IsTrue_0;
gdjs.level_32selectCode.condition0IsTrue_1.val = false;
gdjs.level_32selectCode.condition1IsTrue_1.val = false;
{
gdjs.level_32selectCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if( gdjs.level_32selectCode.condition0IsTrue_1.val ) {
    gdjs.level_32selectCode.conditionTrue_1.val = true;
}
}
{
gdjs.level_32selectCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if( gdjs.level_32selectCode.condition1IsTrue_1.val ) {
    gdjs.level_32selectCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("menu");
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, gdjs.evtsExt__GetPropertiesData__ReturnGameTitle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + " - menu");
}
{ //Subevents
gdjs.level_32selectCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.level_32selectCode.eventsList4(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("xbutton"), gdjs.level_32selectCode.GDxbuttonObjects1);

gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level_32selectCode.GDxbuttonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDxbuttonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.level_32selectCode.condition0IsTrue_0.val = true;
        gdjs.level_32selectCode.GDxbuttonObjects1[k] = gdjs.level_32selectCode.GDxbuttonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDxbuttonObjects1.length = k;}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
gdjs.level_32selectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer shitty ost menu.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer shitty ost lvl1.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ohio platformer uwin.mp3");
}}

}


{


gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
gdjs.level_32selectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("lvl1Button"), gdjs.level_32selectCode.GDlvl1ButtonObjects1);

gdjs.level_32selectCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.level_32selectCode.GDlvl1ButtonObjects1.length;i<l;++i) {
    if ( gdjs.level_32selectCode.GDlvl1ButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.level_32selectCode.condition0IsTrue_0.val = true;
        gdjs.level_32selectCode.GDlvl1ButtonObjects1[k] = gdjs.level_32selectCode.GDlvl1ButtonObjects1[i];
        ++k;
    }
}
gdjs.level_32selectCode.GDlvl1ButtonObjects1.length = k;}if (gdjs.level_32selectCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ohio platformer lvl1", true);
}}

}


{


{
}

}


};

gdjs.level_32selectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level_32selectCode.GDxbuttonObjects1.length = 0;
gdjs.level_32selectCode.GDxbuttonObjects2.length = 0;
gdjs.level_32selectCode.GDxbuttonObjects3.length = 0;
gdjs.level_32selectCode.GDmenuBackground1Objects1.length = 0;
gdjs.level_32selectCode.GDmenuBackground1Objects2.length = 0;
gdjs.level_32selectCode.GDmenuBackground1Objects3.length = 0;
gdjs.level_32selectCode.GDlvl1ButtonObjects1.length = 0;
gdjs.level_32selectCode.GDlvl1ButtonObjects2.length = 0;
gdjs.level_32selectCode.GDlvl1ButtonObjects3.length = 0;

gdjs.level_32selectCode.eventsList5(runtimeScene);

return;

}

gdjs['level_32selectCode'] = gdjs.level_32selectCode;
