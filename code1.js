gdjs.LoadingCode = {};
gdjs.LoadingCode.GDbackground_95backObjects1= [];
gdjs.LoadingCode.GDbackground_95backObjects2= [];
gdjs.LoadingCode.GDbackground_95backObjects3= [];
gdjs.LoadingCode.GDbackground_95frontObjects1= [];
gdjs.LoadingCode.GDbackground_95frontObjects2= [];
gdjs.LoadingCode.GDbackground_95frontObjects3= [];
gdjs.LoadingCode.GDNewObjectObjects1= [];
gdjs.LoadingCode.GDNewObjectObjects2= [];
gdjs.LoadingCode.GDNewObjectObjects3= [];
gdjs.LoadingCode.GDNewObject2Objects1= [];
gdjs.LoadingCode.GDNewObject2Objects2= [];
gdjs.LoadingCode.GDNewObject2Objects3= [];
gdjs.LoadingCode.GDDialougeTXTObjects1= [];
gdjs.LoadingCode.GDDialougeTXTObjects2= [];
gdjs.LoadingCode.GDDialougeTXTObjects3= [];
gdjs.LoadingCode.GDNewObject3Objects1= [];
gdjs.LoadingCode.GDNewObject3Objects2= [];
gdjs.LoadingCode.GDNewObject3Objects3= [];
gdjs.LoadingCode.GDNewObject4Objects1= [];
gdjs.LoadingCode.GDNewObject4Objects2= [];
gdjs.LoadingCode.GDNewObject4Objects3= [];
gdjs.LoadingCode.GDpictoupperObjects1= [];
gdjs.LoadingCode.GDpictoupperObjects2= [];
gdjs.LoadingCode.GDpictoupperObjects3= [];
gdjs.LoadingCode.GDpicto_95colorObjects1= [];
gdjs.LoadingCode.GDpicto_95colorObjects2= [];
gdjs.LoadingCode.GDpicto_95colorObjects3= [];
gdjs.LoadingCode.GDResultpageObjects1= [];
gdjs.LoadingCode.GDResultpageObjects2= [];
gdjs.LoadingCode.GDResultpageObjects3= [];
gdjs.LoadingCode.GDresult_95countObjects1= [];
gdjs.LoadingCode.GDresult_95countObjects2= [];
gdjs.LoadingCode.GDresult_95countObjects3= [];

gdjs.LoadingCode.conditionTrue_0 = {val:false};
gdjs.LoadingCode.condition0IsTrue_0 = {val:false};
gdjs.LoadingCode.condition1IsTrue_0 = {val:false};
gdjs.LoadingCode.condition2IsTrue_0 = {val:false};
gdjs.LoadingCode.condition3IsTrue_0 = {val:false};
gdjs.LoadingCode.conditionTrue_1 = {val:false};
gdjs.LoadingCode.condition0IsTrue_1 = {val:false};
gdjs.LoadingCode.condition1IsTrue_1 = {val:false};
gdjs.LoadingCode.condition2IsTrue_1 = {val:false};
gdjs.LoadingCode.condition3IsTrue_1 = {val:false};


gdjs.LoadingCode.eventsList0x789ef4 = function(runtimeScene) {

{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
gdjs.LoadingCode.condition1IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.dialogueTree.hasClippedScrollingCompleted();
}if ( gdjs.LoadingCode.condition0IsTrue_0.val ) {
{
gdjs.LoadingCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.LoadingCode.condition1IsTrue_0.val) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)), "textScroll");
}if (gdjs.LoadingCode.condition0IsTrue_0.val) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "textScroll");
}}

}


}; //End of gdjs.LoadingCode.eventsList0x789ef4
gdjs.LoadingCode.userFunc0x792ac8 = function(runtimeScene, objects) {
"use strict";

var object = "Resultpage"; //get object from scene variable
var anim = 0; //get animation number from scene variable; // get the url from scene variable
var url = "http://foodyland.co.kr/foodyland_result/"+runtimeScene.getVariables().get("result").getAsString()+".png"; // get the url from scene variable

runtimeScene.myCallback = function(loader, resources){ // loader and ressources come from PIXI.loader

    var mySprite= resources["Sprite_Logo_GDevelop"]; //get the image from PIXI ressources
    
    var game = runtimeScene.getGame(); //get the game currently running
    
    var object_texture_image = runtimeScene.getObjects(object); // Get all the objects called "My_picture"

    var object_texture_image_renderer = object_texture_image[anim].getRendererObject(); // get the frist (and unique) objet called "My_picture" and get this renderer (PIXI sprite)

    object_texture_image_renderer.texture = mySprite.texture; // change the texture in renderer (PIXI sprite)
  

};

PIXI.loader.reset(); // reset the loader because if you press many times M key the ressources "Sprite_Logo_GDevelop" exist and crash your application
PIXI.loader.add("Sprite_Logo_GDevelop", url);  // here change the URL for get you own images from web !
PIXI.loader.load(runtimeScene.myCallback); // Use callback for load the new image
};
gdjs.LoadingCode.eventsList0x791e7c = function(runtimeScene) {

{

gdjs.LoadingCode.GDResultpageObjects1.createFrom(runtimeScene.getObjects("Resultpage"));

var objects = [];
objects.push.apply(objects,gdjs.LoadingCode.GDResultpageObjects1);
gdjs.LoadingCode.userFunc0x792ac8(runtimeScene, objects);

}


}; //End of gdjs.LoadingCode.eventsList0x791e7c
gdjs.LoadingCode.eventsList0x5b7a18 = function(runtimeScene) {

{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LoadingCode.condition0IsTrue_0.val) {
gdjs.LoadingCode.GDResultpageObjects1.createFrom(runtimeScene.getObjects("Resultpage"));
gdjs.LoadingCode.GDpicto_95colorObjects1.createFrom(runtimeScene.getObjects("picto_color"));
gdjs.LoadingCode.GDresult_95countObjects1.createFrom(runtimeScene.getObjects("result_count"));
{gdjs.evtTools.network.sendHttpRequest("http://foodyland.co.kr", "/foodyland_result/foodyland_return_result.php?Q1=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) + "&Q2=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(11)) + "&Q3=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)) + "&Q4=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(13)) + "&Q5=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)) + "&Q6=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) + "&Q7=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16)) + "&Q8=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(17)) + "&Q9=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(18)) + "&Q10=" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(19)), "", "GET", "", runtimeScene.getVariables().getFromIndex(1));
}{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "loading.json");
}{gdjs.dialogueTree.startFrom("Start");
}{for(var i = 0, len = gdjs.LoadingCode.GDpicto_95colorObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDpicto_95colorObjects1[i].setColor(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(35)) + ";" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(36)) + ";" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(37)));
}
}{for(var i = 0, len = gdjs.LoadingCode.GDResultpageObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDResultpageObjects1[i].pauseAnimation();
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(35)) + ";" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(36)) + ";" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(37)));
}{gdjs.evtTools.sound.playMusic(runtimeScene, "asset\\backgroundmusic\\bensound-jazzcomedy.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.LoadingCode.GDresult_95countObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDresult_95countObjects1[i].hide();
}
}}

}


{



}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.dialogueTree.isDialogueLineType("text");
}if (gdjs.LoadingCode.condition0IsTrue_0.val) {
gdjs.LoadingCode.GDDialougeTXTObjects1.createFrom(runtimeScene.getObjects("DialougeTXT"));
{for(var i = 0, len = gdjs.LoadingCode.GDDialougeTXTObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDDialougeTXTObjects1[i].setString(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.LoadingCode.eventsList0x789ef4(runtimeScene);} //End of subevents
}

}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.dialogueTree.compareVariable("loading", 1);
}if (gdjs.LoadingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "camera");
}{gdjs.dialogueTree.setVariable("loading", 2);
}{gdjs.evtTools.network.sendHttpRequest("http://foodyland.co.kr", "/foodyland_result/foodyland_return_result_count.php?result=" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)), "", "GET", "", runtimeScene.getVariables().getFromIndex(2));
}}

}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
gdjs.LoadingCode.condition1IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.dialogueTree.compareVariable("loading", 2);
}if ( gdjs.LoadingCode.condition0IsTrue_0.val ) {
{
gdjs.LoadingCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "camera");
}}
if (gdjs.LoadingCode.condition1IsTrue_0.val) {
{gdjs.dialogueTree.setVariable("loading", 3);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "camera");
}}

}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.dialogueTree.compareVariable("loading", 3);
}if (gdjs.LoadingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 960 + gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "camera") * 1500, "Back", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 960 + gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "camera") * 1500, "NPC", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 960 + gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "camera") * 1500, "Front", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 960 + gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "camera") * 1500, "loading", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 960 + gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "camera") * 1500, "Dialouge", 0);
}}

}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
gdjs.LoadingCode.condition1IsTrue_0.val = false;
gdjs.LoadingCode.condition2IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "loading", 0) >= 2880;
}if ( gdjs.LoadingCode.condition0IsTrue_0.val ) {
{
{gdjs.LoadingCode.conditionTrue_1 = gdjs.LoadingCode.condition1IsTrue_0;
gdjs.LoadingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7924492);
}
}if ( gdjs.LoadingCode.condition1IsTrue_0.val ) {
{
gdjs.LoadingCode.condition2IsTrue_0.val = gdjs.dialogueTree.compareVariable("loading", 3);
}}
}
if (gdjs.LoadingCode.condition2IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 2880, "Back", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 2880, "NPC", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 2880, "Front", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 2880, "loading", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 2880, "Dialouge", 0);
}{gdjs.dialogueTree.setVariable("loading", 4);
}}

}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
gdjs.LoadingCode.condition1IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.dialogueTree.compareVariable("loading", 4);
}if ( gdjs.LoadingCode.condition0IsTrue_0.val ) {
{
{gdjs.LoadingCode.conditionTrue_1 = gdjs.LoadingCode.condition1IsTrue_0;
gdjs.LoadingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7937932);
}
}}
if (gdjs.LoadingCode.condition1IsTrue_0.val) {
gdjs.LoadingCode.GDbackground_95backObjects1.createFrom(runtimeScene.getObjects("background_back"));
gdjs.LoadingCode.GDbackground_95frontObjects1.createFrom(runtimeScene.getObjects("background_front"));
{gdjs.dialogueTree.setVariable("loading", 5);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loading");
}{for(var i = 0, len = gdjs.LoadingCode.GDbackground_95backObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDbackground_95backObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoadingCode.GDbackground_95frontObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDbackground_95frontObjects1[i].hide();
}
}
{ //Subevents
gdjs.LoadingCode.eventsList0x791e7c(runtimeScene);} //End of subevents
}

}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.dialogueTree.compareVariable("loading", 5);
}if (gdjs.LoadingCode.condition0IsTrue_0.val) {
gdjs.LoadingCode.GDpicto_95colorObjects1.createFrom(runtimeScene.getObjects("picto_color"));
{for(var i = 0, len = gdjs.LoadingCode.GDpicto_95colorObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDpicto_95colorObjects1[i].setWidth(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "loading") * 100);
}
}}

}


{

gdjs.LoadingCode.GDpicto_95colorObjects1.createFrom(runtimeScene.getObjects("picto_color"));

gdjs.LoadingCode.condition0IsTrue_0.val = false;
gdjs.LoadingCode.condition1IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.dialogueTree.compareVariable("loading", 5);
}if ( gdjs.LoadingCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LoadingCode.GDpicto_95colorObjects1.length;i<l;++i) {
    if ( gdjs.LoadingCode.GDpicto_95colorObjects1[i].getScaleX() >= 12.4 ) {
        gdjs.LoadingCode.condition1IsTrue_0.val = true;
        gdjs.LoadingCode.GDpicto_95colorObjects1[k] = gdjs.LoadingCode.GDpicto_95colorObjects1[i];
        ++k;
    }
}
gdjs.LoadingCode.GDpicto_95colorObjects1.length = k;}}
if (gdjs.LoadingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LoadingCode.GDpicto_95colorObjects1 */
{gdjs.dialogueTree.setVariable("loading", 6);
}{for(var i = 0, len = gdjs.LoadingCode.GDpicto_95colorObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDpicto_95colorObjects1[i].setWidth(810);
}
}}

}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.dialogueTree.compareVariable("loading", 6);
}if (gdjs.LoadingCode.condition0IsTrue_0.val) {
gdjs.LoadingCode.GDNewObject3Objects1.createFrom(runtimeScene.getObjects("NewObject3"));
gdjs.LoadingCode.GDNewObject4Objects1.createFrom(runtimeScene.getObjects("NewObject4"));
gdjs.LoadingCode.GDpicto_95colorObjects1.createFrom(runtimeScene.getObjects("picto_color"));
gdjs.LoadingCode.GDpictoupperObjects1.createFrom(runtimeScene.getObjects("pictoupper"));
gdjs.LoadingCode.GDresult_95countObjects1.createFrom(runtimeScene.getObjects("result_count"));
{gdjs.dialogueTree.setVariable("loading", 7);
}{for(var i = 0, len = gdjs.LoadingCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDNewObject3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoadingCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDNewObject4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoadingCode.GDpictoupperObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDpictoupperObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoadingCode.GDpicto_95colorObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDpicto_95colorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoadingCode.GDresult_95countObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDresult_95countObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LoadingCode.GDresult_95countObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDresult_95countObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.dialogueTree.compareVariable("dialouge", 1);
}if (gdjs.LoadingCode.condition0IsTrue_0.val) {
gdjs.LoadingCode.GDDialougeTXTObjects1.createFrom(runtimeScene.getObjects("DialougeTXT"));
gdjs.LoadingCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));
{for(var i = 0, len = gdjs.LoadingCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDNewObject2Objects1[i].setY(1400);
}
}{for(var i = 0, len = gdjs.LoadingCode.GDDialougeTXTObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDDialougeTXTObjects1[i].setY(1466);
}
}{gdjs.dialogueTree.setVariable("dialouge", 0);
}}

}


{


gdjs.LoadingCode.condition0IsTrue_0.val = false;
{
gdjs.LoadingCode.condition0IsTrue_0.val = gdjs.dialogueTree.compareVariable("dialouge", 2);
}if (gdjs.LoadingCode.condition0IsTrue_0.val) {
gdjs.LoadingCode.GDDialougeTXTObjects1.createFrom(runtimeScene.getObjects("DialougeTXT"));
gdjs.LoadingCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));
{for(var i = 0, len = gdjs.LoadingCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDNewObject2Objects1[i].setY(26);
}
}{for(var i = 0, len = gdjs.LoadingCode.GDDialougeTXTObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDDialougeTXTObjects1[i].setY(97);
}
}{gdjs.dialogueTree.setVariable("dialouge", 0);
}}

}


{


{
}

}


}; //End of gdjs.LoadingCode.eventsList0x5b7a18


gdjs.LoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingCode.GDbackground_95backObjects1.length = 0;
gdjs.LoadingCode.GDbackground_95backObjects2.length = 0;
gdjs.LoadingCode.GDbackground_95backObjects3.length = 0;
gdjs.LoadingCode.GDbackground_95frontObjects1.length = 0;
gdjs.LoadingCode.GDbackground_95frontObjects2.length = 0;
gdjs.LoadingCode.GDbackground_95frontObjects3.length = 0;
gdjs.LoadingCode.GDNewObjectObjects1.length = 0;
gdjs.LoadingCode.GDNewObjectObjects2.length = 0;
gdjs.LoadingCode.GDNewObjectObjects3.length = 0;
gdjs.LoadingCode.GDNewObject2Objects1.length = 0;
gdjs.LoadingCode.GDNewObject2Objects2.length = 0;
gdjs.LoadingCode.GDNewObject2Objects3.length = 0;
gdjs.LoadingCode.GDDialougeTXTObjects1.length = 0;
gdjs.LoadingCode.GDDialougeTXTObjects2.length = 0;
gdjs.LoadingCode.GDDialougeTXTObjects3.length = 0;
gdjs.LoadingCode.GDNewObject3Objects1.length = 0;
gdjs.LoadingCode.GDNewObject3Objects2.length = 0;
gdjs.LoadingCode.GDNewObject3Objects3.length = 0;
gdjs.LoadingCode.GDNewObject4Objects1.length = 0;
gdjs.LoadingCode.GDNewObject4Objects2.length = 0;
gdjs.LoadingCode.GDNewObject4Objects3.length = 0;
gdjs.LoadingCode.GDpictoupperObjects1.length = 0;
gdjs.LoadingCode.GDpictoupperObjects2.length = 0;
gdjs.LoadingCode.GDpictoupperObjects3.length = 0;
gdjs.LoadingCode.GDpicto_95colorObjects1.length = 0;
gdjs.LoadingCode.GDpicto_95colorObjects2.length = 0;
gdjs.LoadingCode.GDpicto_95colorObjects3.length = 0;
gdjs.LoadingCode.GDResultpageObjects1.length = 0;
gdjs.LoadingCode.GDResultpageObjects2.length = 0;
gdjs.LoadingCode.GDResultpageObjects3.length = 0;
gdjs.LoadingCode.GDresult_95countObjects1.length = 0;
gdjs.LoadingCode.GDresult_95countObjects2.length = 0;
gdjs.LoadingCode.GDresult_95countObjects3.length = 0;

gdjs.LoadingCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['LoadingCode'] = gdjs.LoadingCode;
