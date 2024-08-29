import confetti from 'canvas-confetti';

export const handleFireworks = () => {
  // Configuration du feu d'artifice
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(), // Position horizontale aléatoire
      y: Math.random() - 0.2, // Position verticale légèrement décalée vers le bas
    },
    zIndex: 9999, // s'assurer que l'effet est au-dessus de tout
  });
};