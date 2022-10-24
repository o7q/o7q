function initCanvasElements() {
    // Initiliaze Input
  focus = false;
  moveX = 0;
  moveY = 0;
  canvas.onclick = function() {
    mousePress();
  }
  
  data.lastSpace = 0;

  // pointer lock event listeners
  // Hook pointer lock state change events for different browsers
  document.addEventListener('pointerlockchange', lockChangeAlert, false);
  document.addEventListener('mozpointerlockchange', lockChangeAlert, false);

  function lockChangeAlert() {
    focus = (document.pointerLockElement === canvas ||
    document.mozPointerLockElement === canvas);
    if (focus) {
      document.addEventListener("mousemove", canvasLoop, false);
    } else {
      document.removeEventListener("mousemove", canvasLoop, false);
    }
  }
  
  function canvasLoop(e) {
    var movementX = e.movementX || e.mozMovementX || 0;
    var movementY = e.movementY || e.mozMovementY ||  0;
    moveX = movementX;
    moveY = movementY;
  }
  
  document.addEventListener("keydown", function(evt){ 
    let KEY = toConstFormat(evt.key);
    if (KEY == " ") KEY = "SPACE";
    
    if (KEY == "SPACE" && !keys.SPACE) {
      let diff = performance.now() - data.lastSpace;
      if (diff < 400) {
        player.flying = !player.flying;
      } 
      data.lastSpace = performance.now();
    }

    if (KEY == "R") {
      console.log(floor(player.x), floor(player.y), floor(player.z));
    }

    if (KEY == "B") {
      player.toggleGamemode();
    }
    
    keys[KEY] = true;
  });
  
  document.addEventListener("keyup", function(evt){ 
    let KEY = toConstFormat(evt.key);
    if (KEY == " ") KEY = "SPACE";
    keys[KEY] = false;
  });

  window.addEventListener("resize", function(evt){ 
    canvasResize(canvas, gl);
    mat4.perspective(matrices.proj, player.FOV, canvas.width/canvas.height, 0.1, 1000.0);
    gl.uniformMatrix4fv(matrices.projUniform, gl.FALSE, matrices.proj);
  });

  window.addEventListener("mousedown", function(evt){
    if (evt.button == 0) {
      player.breakBlock();
    } else if (evt.button == 1) {
      player.pickBlock();
    } else if (evt.button == 2) {
      player.placeBlock();
    }
  });

}