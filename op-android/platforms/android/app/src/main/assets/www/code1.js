gdjs.menuCode = {};
gdjs.menuCode.GDcheatactivationdebugbuttonObjects1_1final = [];

gdjs.menuCode.GDcheatsButtonObjects1_1final = [];

gdjs.menuCode.GDxbuttonObjects1= [];
gdjs.menuCode.GDxbuttonObjects2= [];
gdjs.menuCode.GDtitidObjects1= [];
gdjs.menuCode.GDtitidObjects2= [];
gdjs.menuCode.GDplayButtonObjects1= [];
gdjs.menuCode.GDplayButtonObjects2= [];
gdjs.menuCode.GDcreditsButtonObjects1= [];
gdjs.menuCode.GDcreditsButtonObjects2= [];
gdjs.menuCode.GDmadeinohioObjects1= [];
gdjs.menuCode.GDmadeinohioObjects2= [];
gdjs.menuCode.GDmenuBackgroundObjects1= [];
gdjs.menuCode.GDmenuBackgroundObjects2= [];
gdjs.menuCode.GDoptionsButtonObjects1= [];
gdjs.menuCode.GDoptionsButtonObjects2= [];
gdjs.menuCode.GDquitButtonObjects1= [];
gdjs.menuCode.GDquitButtonObjects2= [];
gdjs.menuCode.GDcheatsButtonObjects1= [];
gdjs.menuCode.GDcheatsButtonObjects2= [];
gdjs.menuCode.GDcheatactivationdebugbuttonObjects1= [];
gdjs.menuCode.GDcheatactivationdebugbuttonObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};
gdjs.menuCode.conditionTrue_1 = {val:false};
gdjs.menuCode.condition0IsTrue_1 = {val:false};
gdjs.menuCode.condition1IsTrue_1 = {val:false};
gdjs.menuCode.condition2IsTrue_1 = {val:false};


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.menuCode.GDplayButtonObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.menuCode.GDplayButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDplayButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.menuCode.condition0IsTrue_0.val = true;
        gdjs.menuCode.GDplayButtonObjects1[k] = gdjs.menuCode.GDplayButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDplayButtonObjects1.length = k;}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ohio platformer lvl1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "y2mate.com - Bruh Sound Effect HD.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("creditsButton"), gdjs.menuCode.GDcreditsButtonObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.menuCode.GDcreditsButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDcreditsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.menuCode.condition0IsTrue_0.val = true;
        gdjs.menuCode.GDcreditsButtonObjects1[k] = gdjs.menuCode.GDcreditsButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDcreditsButtonObjects1.length = k;}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "credits");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quitButton"), gdjs.menuCode.GDquitButtonObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.menuCode.GDquitButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDquitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.menuCode.condition0IsTrue_0.val = true;
        gdjs.menuCode.GDquitButtonObjects1[k] = gdjs.menuCode.GDquitButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDquitButtonObjects1.length = k;}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("optionsButton"), gdjs.menuCode.GDoptionsButtonObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.menuCode.GDoptionsButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDoptionsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.menuCode.condition0IsTrue_0.val = true;
        gdjs.menuCode.GDoptionsButtonObjects1[k] = gdjs.menuCode.GDoptionsButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDoptionsButtonObjects1.length = k;}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "options");
}}

}


{

gdjs.menuCode.GDcheatactivationdebugbuttonObjects1.length = 0;

gdjs.menuCode.GDcheatsButtonObjects1.length = 0;


gdjs.menuCode.condition0IsTrue_0.val = false;
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition0IsTrue_0;
gdjs.menuCode.GDcheatactivationdebugbuttonObjects1_1final.length = 0;gdjs.menuCode.GDcheatsButtonObjects1_1final.length = 0;gdjs.menuCode.condition0IsTrue_1.val = false;
gdjs.menuCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("cheatsButton"), gdjs.menuCode.GDcheatsButtonObjects2);
for(var i = 0, k = 0, l = gdjs.menuCode.GDcheatsButtonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDcheatsButtonObjects2[i].getBehavior("KonamiCode").KC_Inputted((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.menuCode.condition0IsTrue_1.val = true;
        gdjs.menuCode.GDcheatsButtonObjects2[k] = gdjs.menuCode.GDcheatsButtonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDcheatsButtonObjects2.length = k;if( gdjs.menuCode.condition0IsTrue_1.val ) {
    gdjs.menuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.menuCode.GDcheatsButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.menuCode.GDcheatsButtonObjects1_1final.indexOf(gdjs.menuCode.GDcheatsButtonObjects2[j]) === -1 )
            gdjs.menuCode.GDcheatsButtonObjects1_1final.push(gdjs.menuCode.GDcheatsButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("cheatactivationdebugbutton"), gdjs.menuCode.GDcheatactivationdebugbuttonObjects2);
for(var i = 0, k = 0, l = gdjs.menuCode.GDcheatactivationdebugbuttonObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDcheatactivationdebugbuttonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.menuCode.condition1IsTrue_1.val = true;
        gdjs.menuCode.GDcheatactivationdebugbuttonObjects2[k] = gdjs.menuCode.GDcheatactivationdebugbuttonObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDcheatactivationdebugbuttonObjects2.length = k;if( gdjs.menuCode.condition1IsTrue_1.val ) {
    gdjs.menuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.menuCode.GDcheatactivationdebugbuttonObjects2.length;j<jLen;++j) {
        if ( gdjs.menuCode.GDcheatactivationdebugbuttonObjects1_1final.indexOf(gdjs.menuCode.GDcheatactivationdebugbuttonObjects2[j]) === -1 )
            gdjs.menuCode.GDcheatactivationdebugbuttonObjects1_1final.push(gdjs.menuCode.GDcheatactivationdebugbuttonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.menuCode.GDcheatactivationdebugbuttonObjects1_1final, gdjs.menuCode.GDcheatactivationdebugbuttonObjects1);
gdjs.copyArray(gdjs.menuCode.GDcheatsButtonObjects1_1final, gdjs.menuCode.GDcheatsButtonObjects1);
}
}
}if (gdjs.menuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDcheatsButtonObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDcheatsButtonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcheatsButtonObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cheatsButton"), gdjs.menuCode.GDcheatsButtonObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.menuCode.GDcheatsButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDcheatsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.menuCode.condition0IsTrue_0.val = true;
        gdjs.menuCode.GDcheatsButtonObjects1[k] = gdjs.menuCode.GDcheatsButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDcheatsButtonObjects1.length = k;}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cheats menu");
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDxbuttonObjects1.length = 0;
gdjs.menuCode.GDxbuttonObjects2.length = 0;
gdjs.menuCode.GDtitidObjects1.length = 0;
gdjs.menuCode.GDtitidObjects2.length = 0;
gdjs.menuCode.GDplayButtonObjects1.length = 0;
gdjs.menuCode.GDplayButtonObjects2.length = 0;
gdjs.menuCode.GDcreditsButtonObjects1.length = 0;
gdjs.menuCode.GDcreditsButtonObjects2.length = 0;
gdjs.menuCode.GDmadeinohioObjects1.length = 0;
gdjs.menuCode.GDmadeinohioObjects2.length = 0;
gdjs.menuCode.GDmenuBackgroundObjects1.length = 0;
gdjs.menuCode.GDmenuBackgroundObjects2.length = 0;
gdjs.menuCode.GDoptionsButtonObjects1.length = 0;
gdjs.menuCode.GDoptionsButtonObjects2.length = 0;
gdjs.menuCode.GDquitButtonObjects1.length = 0;
gdjs.menuCode.GDquitButtonObjects2.length = 0;
gdjs.menuCode.GDcheatsButtonObjects1.length = 0;
gdjs.menuCode.GDcheatsButtonObjects2.length = 0;
gdjs.menuCode.GDcheatactivationdebugbuttonObjects1.length = 0;
gdjs.menuCode.GDcheatactivationdebugbuttonObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
