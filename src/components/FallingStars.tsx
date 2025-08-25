"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

interface Star {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
  delay: number;
  type: "star" | "sparkle" | "heart" | "confetti";
  phase: "burst" | "continuous";
}

export default function FallingStars() {
  const { isDark } = useTheme();
  const [burstStars, setBurstStars] = useState<Star[]>([]);
  const [continuousStars, setContinuousStars] = useState<Star[]>([]);
  const [showBurst, setShowBurst] = useState(true);
  const [showContinuous, setShowContinuous] = useState(false);

  useEffect(() => {
    // Create initial burst with many elements (150+ elements)
    const newBurstStars: Star[] = [];

    // More stars for dramatic effect
    for (let i = 0; i < 80; i++) {
      newBurstStars.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 2 + 1.5, // Faster initial fall
        opacity: Math.random() * 0.9 + 0.1,
        size: Math.random() * 6 + 3, // Larger initial stars
        delay: Math.random() * 1, // Quick burst, minimal delay
        type: "star",
        phase: "burst",
      });
    }

    // Sparkles for extra impact
    for (let i = 0; i < 60; i++) {
      newBurstStars.push({
        id: i + 80,
        left: Math.random() * 100,
        animationDuration: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        size: Math.random() * 5 + 2,
        delay: Math.random() * 0.8,
        type: "sparkle",
        phase: "burst",
      });
    }

    // Hearts for celebration
    for (let i = 0; i < 40; i++) {
      newBurstStars.push({
        id: i + 140,
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 1.5,
        opacity: Math.random() * 0.7 + 0.3,
        size: Math.random() * 4 + 10,
        delay: Math.random() * 1.2,
        type: "heart",
        phase: "burst",
      });
    }

    // Confetti pieces
    for (let i = 0; i < 30; i++) {
      newBurstStars.push({
        id: i + 180,
        left: Math.random() * 100,
        animationDuration: Math.random() * 2 + 1,
        opacity: Math.random() * 0.9 + 0.1,
        size: Math.random() * 3 + 5,
        delay: Math.random() * 0.5,
        type: "confetti",
        phase: "burst",
      });
    }

    setBurstStars(newBurstStars);

    // After 4 seconds, hide burst and start continuous gentle fall
    const burstTimer = setTimeout(() => {
      setShowBurst(false);
      setShowContinuous(true);

      // Create fewer continuous elements
      const continuousElements: Star[] = [];
      for (let i = 0; i < 25; i++) {
        continuousElements.push({
          id: i + 1000,
          left: Math.random() * 100,
          animationDuration: Math.random() * 4 + 3, // Slower continuous fall
          opacity: Math.random() * 0.6 + 0.2,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 8, // More spread out timing
          type: Math.random() > 0.5 ? "star" : "sparkle",
          phase: "continuous",
        });
      }
      setContinuousStars(continuousElements);
    }, 4000);

    return () => clearTimeout(burstTimer);
  }, []);

  const getElementSymbol = (type: string) => {
    switch (type) {
      case "star":
        return "⭐";
      case "sparkle":
        return "✨";
      case "heart":
        return "💖";
      case "confetti":
        return ["🎊", "🎉", "🟡", "🔵", "🟢", "🟠", "🟣"][
          Math.floor(Math.random() * 7)
        ];
      default:
        return "⭐";
    }
  };

  const getElementColor = (type: string) => {
    switch (type) {
      case "star":
        return isDark ? "text-yellow-300" : "text-yellow-400";
      case "sparkle":
        return isDark ? "text-blue-300" : "text-blue-400";
      case "heart":
        return "text-pink-400";
      case "confetti":
        return isDark ? "text-purple-300" : "text-purple-500";
      default:
        return isDark ? "text-yellow-300" : "text-yellow-400";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Initial Burst Phase - MAXIMUM VISUAL IMPACT */}
      {showBurst &&
        burstStars.map(star => (
          <div
            key={`burst-${star.id}`}
            className={`absolute ${
              star.type === "confetti" ? "" : "animate-burst-fall"
            } ${getElementColor(star.type)}`}
            style={{
              left: `${star.left}%`,
              top: star.type === "confetti" ? "-100px" : "-150px",
              opacity: star.opacity,
              fontSize: `${star.size}px`,
              animationDuration: `${star.animationDuration}s`,
              animationDelay: `${star.delay}s`,
              animationFillMode: "forwards",
              animationName:
                star.type === "confetti" ? "confettiFall" : "burstFall",
              animationTimingFunction:
                star.type === "confetti" ? "ease-out" : "ease-in",
            }}
          >
            {getElementSymbol(star.type)}
          </div>
        ))}

      {/* Continuous Phase - Gentle and peaceful */}
      {showContinuous &&
        continuousStars.map(star => (
          <div
            key={`continuous-${star.id}`}
            className={`absolute animate-fall ${getElementColor(star.type)}`}
            style={{
              left: `${star.left}%`,
              top: "-20px",
              opacity: star.opacity,
              fontSize: `${star.size}px`,
              animationDuration: `${star.animationDuration}s`,
              animationDelay: `${star.delay}s`,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
            }}
          >
            {getElementSymbol(star.type)}
          </div>
        ))}
    </div>
  );
}
