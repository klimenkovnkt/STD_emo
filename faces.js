/************** 
 * Faces *
 **************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'faces';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);





flowScheduler.add(byeRoutineBegin());
flowScheduler.add(byeRoutineEachFrame());
flowScheduler.add(byeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
    expName: expName,
    expInfo: expInfo,
    resources: [
      {'name': 'blocks.xlsx', 'path': 'blocks.xlsx'},
      {'name': 'angry_f.xlsx', 'path': 'angry_f.xlsx'},
      {'name': 'angry_m.xlsx', 'path': 'angry_m.xlsx'},
      {'name': 'happy_f.xlsx', 'path': 'happy_f.xlsx'},
      {'name': 'happy_m.xlsx', 'path': 'happy_m.xlsx'},
      {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
      {'name': 'face_mask/mask_28M_CA_C.png', 'path': 'face_mask/mask_28M_CA_C.png'},
      {'name': 'stimuli/21M_NE_C.png', 'path': 'stimuli/21M_NE_C.png'}, {'name': 'stimuli/35M_NE_C.png', 'path': 'stimuli/35M_NE_C.png'}, {'name': 'stimuli/32M_HA_C.png', 'path': 'stimuli/32M_HA_C.png'}, {'name': 'stimuli/33M_AN_C.png', 'path': 'stimuli/33M_AN_C.png'}, {'name': 'stimuli/27M_AN_C.png', 'path': 'stimuli/27M_AN_C.png'}, {'name': 'stimuli/26M_HA_C.png', 'path': 'stimuli/26M_HA_C.png'}, {'name': 'stimuli/12F_AN_C.png', 'path': 'stimuli/12F_AN_C.png'}, {'name': 'stimuli/13F_HA_C.png', 'path': 'stimuli/13F_HA_C.png'}, {'name': 'stimuli/07F_HA_C.png', 'path': 'stimuli/07F_HA_C.png'}, {'name': 'stimuli/42M_NE_C.png', 'path': 'stimuli/42M_NE_C.png'}, {'name': 'stimuli/06F_AN_C.png', 'path': 'stimuli/06F_AN_C.png'}, {'name': 'stimuli/38M_NE_C.png', 'path': 'stimuli/38M_NE_C.png'}, {'name': 'stimuli/14F_NE_C.png', 'path': 'stimuli/14F_NE_C.png'}, {'name': 'stimuli/35M_AN_C.png', 'path': 'stimuli/35M_AN_C.png'}, {'name': 'stimuli/34M_HA_C.png', 'path': 'stimuli/34M_HA_C.png'}, {'name': 'stimuli/20M_HA_C.png', 'path': 'stimuli/20M_HA_C.png'}, {'name': 'stimuli/21M_AN_C.png', 'path': 'stimuli/21M_AN_C.png'}, {'name': 'stimuli/27M_NE_C.png', 'path': 'stimuli/27M_NE_C.png'}, {'name': 'stimuli/33M_NE_C.png', 'path': 'stimuli/33M_NE_C.png'}, {'name': 'stimuli/06F_NE_C.png', 'path': 'stimuli/06F_NE_C.png'}, {'name': 'stimuli/38M_AN_C.png', 'path': 'stimuli/38M_AN_C.png'}, {'name': 'stimuli/43M_HA_C.png', 'path': 'stimuli/43M_HA_C.png'}, {'name': 'stimuli/42M_AN_C.png', 'path': 'stimuli/42M_AN_C.png'}, {'name': 'stimuli/39M_HA_C.png', 'path': 'stimuli/39M_HA_C.png'}, {'name': 'stimuli/12F_NE_C.png', 'path': 'stimuli/12F_NE_C.png'}, {'name': 'stimuli/14F_AN_C.png', 'path': 'stimuli/14F_AN_C.png'}, {'name': 'stimuli/01F_HA_C.png', 'path': 'stimuli/01F_HA_C.png'}, {'name': 'stimuli/34M_NE_C.png', 'path': 'stimuli/34M_NE_C.png'}, {'name': 'stimuli/20M_NE_C.png', 'path': 'stimuli/20M_NE_C.png'}, {'name': 'stimuli/26M_AN_C.png', 'path': 'stimuli/26M_AN_C.png'}, {'name': 'stimuli/33M_HA_C.png', 'path': 'stimuli/33M_HA_C.png'}, {'name': 'stimuli/32M_AN_C.png', 'path': 'stimuli/32M_AN_C.png'}, {'name': 'stimuli/06F_HA_C.png', 'path': 'stimuli/06F_HA_C.png'}, {'name': 'stimuli/43M_NE_C.png', 'path': 'stimuli/43M_NE_C.png'}, {'name': 'stimuli/39M_NE_C.png', 'path': 'stimuli/39M_NE_C.png'}, {'name': 'stimuli/07F_AN_C.png', 'path': 'stimuli/07F_AN_C.png'}, {'name': 'stimuli/13F_AN_C.png', 'path': 'stimuli/13F_AN_C.png'}, {'name': 'stimuli/12F_HA_C.png', 'path': 'stimuli/12F_HA_C.png'}, {'name': 'stimuli/01F_NE_C.png', 'path': 'stimuli/01F_NE_C.png'}, {'name': 'stimuli/21M_HA_C.png', 'path': 'stimuli/21M_HA_C.png'}, {'name': 'stimuli/20M_AN_C.png', 'path': 'stimuli/20M_AN_C.png'}, {'name': 'stimuli/34M_AN_C.png', 'path': 'stimuli/34M_AN_C.png'}, {'name': 'stimuli/35M_HA_C.png', 'path': 'stimuli/35M_HA_C.png'}, {'name': 'stimuli/32M_NE_C.png', 'path': 'stimuli/32M_NE_C.png'}, {'name': 'stimuli/26M_NE_C.png', 'path': 'stimuli/26M_NE_C.png'}, {'name': 'stimuli/13F_NE_C.png', 'path': 'stimuli/13F_NE_C.png'}, {'name': 'stimuli/39M_AN_C.png', 'path': 'stimuli/39M_AN_C.png'}, {'name': 'stimuli/07F_NE_C.png', 'path': 'stimuli/07F_NE_C.png'}, {'name': 'stimuli/42M_HA_C.png', 'path': 'stimuli/42M_HA_C.png'}, {'name': 'stimuli/43M_AN_C.png', 'path': 'stimuli/43M_AN_C.png'}, {'name': 'stimuli/38M_HA_C.png', 'path': 'stimuli/38M_HA_C.png'}, {'name': 'stimuli/01f_an_c.png', 'path': 'stimuli/01f_an_c.png'}, {'name': 'stimuli/14F_HA_C.png', 'path': 'stimuli/14F_HA_C.png'}, {'name': 'stimuli/30M_HA_C.png', 'path': 'stimuli/30M_HA_C.png'}, {'name': 'stimuli/31M_AN_C.png', 'path': 'stimuli/31M_AN_C.png'}, {'name': 'stimuli/25M_AN_C.png', 'path': 'stimuli/25M_AN_C.png'}, {'name': 'stimuli/24M_HA_C.png', 'path': 'stimuli/24M_HA_C.png'}, {'name': 'stimuli/23M_NE_C.png', 'path': 'stimuli/23M_NE_C.png'}, {'name': 'stimuli/08F_HA_C.png', 'path': 'stimuli/08F_HA_C.png'}, {'name': 'stimuli/37M_NE_C.png', 'path': 'stimuli/37M_NE_C.png'}, {'name': 'stimuli/09F_AN_C.png', 'path': 'stimuli/09F_AN_C.png'}, {'name': 'stimuli/02F_NE_C.png', 'path': 'stimuli/02F_NE_C.png'}, {'name': 'stimuli/28M_AN_C.png', 'path': 'stimuli/28M_AN_C.png'}, {'name': 'stimuli/29M_HA_C.png', 'path': 'stimuli/29M_HA_C.png'}, {'name': 'stimuli/10F_AN_C.png', 'path': 'stimuli/10F_AN_C.png'}, {'name': 'stimuli/11F_HA_C.png', 'path': 'stimuli/11F_HA_C.png'}, {'name': 'stimuli/40M_NE_C.png', 'path': 'stimuli/40M_NE_C.png'}, {'name': 'stimuli/05F_HA_C.png', 'path': 'stimuli/05F_HA_C.png'}, {'name': 'stimuli/25M_NE_C.png', 'path': 'stimuli/25M_NE_C.png'}, {'name': 'stimuli/31M_NE_C.png', 'path': 'stimuli/31M_NE_C.png'}, {'name': 'stimuli/37M_AN_C.png', 'path': 'stimuli/37M_AN_C.png'}, {'name': 'stimuli/09F_NE_C.png', 'path': 'stimuli/09F_NE_C.png'}, {'name': 'stimuli/36M_HA_C.png', 'path': 'stimuli/36M_HA_C.png'}, {'name': 'stimuli/22M_HA_C.png', 'path': 'stimuli/22M_HA_C.png'}, {'name': 'stimuli/23M_AN_C.png', 'path': 'stimuli/23M_AN_C.png'}, {'name': 'stimuli/28M_NE_C.png', 'path': 'stimuli/28M_NE_C.png'}, {'name': 'stimuli/02f_an_c.png', 'path': 'stimuli/02f_an_c.png'}, {'name': 'stimuli/03F_HA_C.png', 'path': 'stimuli/03F_HA_C.png'}, {'name': 'stimuli/41M_HA_C.png', 'path': 'stimuli/41M_HA_C.png'}, {'name': 'stimuli/40M_AN_C.png', 'path': 'stimuli/40M_AN_C.png'}, {'name': 'stimuli/10F_NE_C.png', 'path': 'stimuli/10F_NE_C.png'}, {'name': 'stimuli/24M_AN_C.png', 'path': 'stimuli/24M_AN_C.png'}, {'name': 'stimuli/25M_HA_C.png', 'path': 'stimuli/25M_HA_C.png'}, {'name': 'stimuli/31M_HA_C.png', 'path': 'stimuli/31M_HA_C.png'}, {'name': 'stimuli/30M_AN_C.png', 'path': 'stimuli/30M_AN_C.png'}, {'name': 'stimuli/09F_HA_C.png', 'path': 'stimuli/09F_HA_C.png'}, {'name': 'stimuli/08F_AN_C.png', 'path': 'stimuli/08F_AN_C.png'}, {'name': 'stimuli/36M_NE_C.png', 'path': 'stimuli/36M_NE_C.png'}, {'name': 'stimuli/22M_NE_C.png', 'path': 'stimuli/22M_NE_C.png'}, {'name': 'stimuli/29M_AN_C.png', 'path': 'stimuli/29M_AN_C.png'}, {'name': 'stimuli/28M_HA_C.png', 'path': 'stimuli/28M_HA_C.png'}, {'name': 'stimuli/03F_NE_C.png', 'path': 'stimuli/03F_NE_C.png'}, {'name': 'stimuli/41M_NE_C.png', 'path': 'stimuli/41M_NE_C.png'}, {'name': 'stimuli/05F_AN_C.png', 'path': 'stimuli/05F_AN_C.png'}, {'name': 'stimuli/11F_AN_C.png', 'path': 'stimuli/11F_AN_C.png'}, {'name': 'stimuli/10F_HA_C.png', 'path': 'stimuli/10F_HA_C.png'}, {'name': 'stimuli/30M_NE_C.png', 'path': 'stimuli/30M_NE_C.png'}, {'name': 'stimuli/24M_NE_C.png', 'path': 'stimuli/24M_NE_C.png'}, {'name': 'stimuli/23M_HA_C.png', 'path': 'stimuli/23M_HA_C.png'}, {'name': 'stimuli/22M_AN_C.png', 'path': 'stimuli/22M_AN_C.png'}, {'name': 'stimuli/08F_NE_C.png', 'path': 'stimuli/08F_NE_C.png'}, {'name': 'stimuli/36M_AN_C.png', 'path': 'stimuli/36M_AN_C.png'}, {'name': 'stimuli/37M_HA_C.png', 'path': 'stimuli/37M_HA_C.png'}, {'name': 'stimuli/03F_AN_C.png', 'path': 'stimuli/03F_AN_C.png'}, {'name': 'stimuli/02F_HA_C.png', 'path': 'stimuli/02F_HA_C.png'}, {'name': 'stimuli/29M_NE_C.png', 'path': 'stimuli/29M_NE_C.png'}, {'name': 'stimuli/11F_NE_C.png', 'path': 'stimuli/11F_NE_C.png'}, {'name': 'stimuli/40M_HA_C.png', 'path': 'stimuli/40M_HA_C.png'}, {'name': 'stimuli/05F_NE_C.png', 'path': 'stimuli/05F_NE_C.png'}, {'name': 'stimuli/41M_AN_C.png', 'path': 'stimuli/41M_AN_C.png'}
  ]});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var text_2;
var key_resp;
var trialClock;
var image;
var image_2;
var ansClock;
var text;
var key_resp_2;
var byeClock;
var text_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Вам будут предъявляться изображения лиц людей на очень короткие промежутки времени.\nВам нужно определить является ли лицо эмоциональным или нет\nЕсли эмоциональное (да), нажмите стрелку вправо ->\nЕсли нет, нажмите стрелку влево <-\n\nЕсли готовы начать эксперимент, нажмите пробел',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_2
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'pix', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [250, 325],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : 'pix', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [250, 325],
    color : new util.Color([1,1,1]), opacity : 0.5,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "ans"
  ansClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "bye"
  byeClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Эксперимент окончен!\nПожалуйста, подождите пока данные сохраняются — не закрывайте вкладку',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instrMaxDurationReached;
var _key_resp_allKeys;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(text_2);
    instrComponents.push(key_resp);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'blocks.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      trials_2LoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      trials_2LoopScheduler.add(trialsLoopScheduler);
      trials_2LoopScheduler.add(trialsLoopEnd);
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: block_order,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(ansRoutineBegin(snapshot));
      trialsLoopScheduler.add(ansRoutineEachFrame());
      trialsLoopScheduler.add(ansRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    image.setImage(`stimuli/${picture}`);
    image_2.setImage('face_mask/mask_28M_CA_C.png');
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image);
    trialComponents.push(image_2);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.5 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + Number.parseFloat((duration + 0.02)) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image.tStop = t;  // not accounting for scr refresh
      image.frameNStop = frameN;  // exact frame index
      // update status
      image.status = PsychoJS.Status.FINISHED;
      image.setAutoDraw(false);
    }
    
    
    // *image_2* updates
    if (t >= Number.parseFloat(((duration + 0.02) + 0.5)) && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // if image_2 is active this frame...
    if (image_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = Number.parseFloat(((duration + 0.02) + 0.5)) + Number.parseFloat((((duration + 0.02) + 0.5) + 0.3)) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_2.tStop = t;  // not accounting for scr refresh
      image_2.frameNStop = frameN;  // exact frame index
      // update status
      image_2.status = PsychoJS.Status.FINISHED;
      image_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ansMaxDurationReached;
var _key_resp_2_allKeys;
var ansMaxDuration;
var ansComponents;
function ansRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ans' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ansClock.reset();
    routineTimer.reset();
    ansMaxDurationReached = false;
    // update component parameters for each repeat
    text.setText('<- нет                         да ->\n');
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('ans.started', globalClock.getTime());
    ansMaxDuration = null
    // keep track of which components have finished
    ansComponents = [];
    ansComponents.push(text);
    ansComponents.push(key_resp_2);
    
    for (const thisComponent of ansComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ansRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ans' ---
    // get current time
    t = ansClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.6 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.6 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['left','right'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ansComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ansRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ans' ---
    for (const thisComponent of ansComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ans.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "ans" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var byeMaxDurationReached;
var byeMaxDuration;
var byeComponents;
function byeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    byeClock.reset();
    routineTimer.reset();
    byeMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = psychoS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '. csv';
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
         },   
         body: JSON.stringify({
            experimentID: '1aALn2OO9S9P', // * UPDATE WITH YOUR DATAPIPE EXPERIMENT ID *
            filename: filename, 
            data: data,
         }),
    }).then(response => response.json()).then(data => {
    // Log response and force experiment 
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('bye.started', globalClock.getTime());
    byeMaxDuration = null
    // keep track of which components have finished
    byeComponents = [];
    byeComponents.push(text_3);
    
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function byeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bye' ---
    // get current time
    t = byeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function byeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bye' ---
    for (const thisComponent of byeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('bye.stopped', globalClock.getTime());
    // the Routine "bye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
