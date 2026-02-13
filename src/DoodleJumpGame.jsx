import { useEffect, useRef, useState } from "react";
import "./App.css";

const DoodleJumpGame = () => {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  
  // Using ref to hold game state (avoids React rerenders)
  const gameState = useRef({
    player: { x: 0, y: 0, dy: 0, w: 30, h: 30 },
    platforms: [],
    keys: { left: false, right: false },
    tilt: 0,
    score: 0
  });

  const initGame = (width, height) => {
    const PLATFORM_COUNT = 7;
    const PLATFORM_GAP = height / PLATFORM_COUNT;
    gameState.current.platforms = [];

    for (let i = 0; i < PLATFORM_COUNT; i++) {
      gameState.current.platforms.push({
        x: Math.random() * (width - 60),
        y: height - i * PLATFORM_GAP,
        w: 60,
        h: 10
      });
    }

    const startP = gameState.current.platforms[0];
    gameState.current.player = {
      x: startP.x + 15,
      y: startP.y - 40,
      dy: 0,
      w: 30,
      h: 30
    };
    gameState.current.score = 0;
  };

  const startGame = async () => {
    // Motion permissions for iOS
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      try {
        const response = await DeviceOrientationEvent.requestPermission();
        if (response === "granted") {
          window.addEventListener("deviceorientation", (e) => {
            gameState.current.tilt = e.gamma;
          }, true);
        }
      } catch (e) { console.error(e); }
    } else {
      window.addEventListener("deviceorientation", (e) => {
        gameState.current.tilt = e.gamma;
      }, true);
    }

    setGameStarted(true);
  };

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = Math.min(window.innerWidth - 20, 350);
    const height = canvas.height = 500;

    initGame(width, height);

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") gameState.current.keys.left = true;
      if (e.key === "ArrowRight") gameState.current.keys.right = true;
    };
    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft") gameState.current.keys.left = false;
      if (e.key === "ArrowRight") gameState.current.keys.right = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    let animationId;
    const loop = () => {
      const { player, platforms, keys, tilt } = gameState.current;
      ctx.clearRect(0, 0, width, height);

      // Movement
      if (keys.left) player.x -= 5;
      if (keys.right) player.x += 5;
      if (Math.abs(tilt) > 2) player.x += tilt * 0.5;

      // Horizontal wrap
      if (player.x > width) player.x = -player.w;
      if (player.x < -player.w) player.x = width;

      // Gravity
      player.dy += 0.4;
      player.y += player.dy;

      // Platform collisions
      platforms.forEach(p => {
        if (
          player.dy > 0 &&
          player.y + player.h >= p.y &&
          player.y + player.h <= p.y + p.h + 10 &&
          player.x + player.w > p.x &&
          player.x < p.x + p.w
        ) {
          player.dy = -10;
        }
      });

      // Camera scroll
      if (player.y < height / 2) {
        const diff = height / 2 - player.y;
        player.y = height / 2;
        platforms.forEach(p => {
          p.y += diff;
          if (p.y > height) {
            p.y = 0;
            p.x = Math.random() * (width - p.w);
            gameState.current.score += 10;
          }
        });
      }

      // Game Over
      if (player.y > height) {
        setGameStarted(false);
        return;
      }

      // Draw platforms
      ctx.fillStyle = "#22c55e";
      platforms.forEach(p => ctx.fillRect(p.x, p.y, p.w, p.h));

      // Draw player
      ctx.fillStyle = "#2563eb";
      ctx.fillRect(player.x, player.y, player.w, player.h);

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameStarted]);

  return (
    <div className="doodle-game-wrapper">
      <h2 className="score">Score: {gameState.current.score}</h2>
      <div className="canvas-container">
        <canvas ref={canvasRef} className="doodle-canvas" />
        {!gameStarted && (
          <div className="start-overlay" onClick={startGame}>
            <h1>Doodle Jump</h1>
            <p>Tap to Play</p>
            <small>(Tilt phone or use Arrow Keys)</small>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoodleJumpGame;
