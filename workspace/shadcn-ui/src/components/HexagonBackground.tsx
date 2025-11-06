import { useEffect, useRef } from 'react';

export default function HexagonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Hexagon class - STATIC VERSION
    class Hexagon {
      x: number;
      y: number;
      size: number;
      opacity: number;
      color: string;
      rotation: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 50 + 25;
        this.opacity = Math.random() * 0.4 + 0.15;
        this.rotation = Math.random() * Math.PI * 2;
        const colors = ['#F5D11B', '#FFD700', '#FFA500', '#FFEB3B'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const x = this.size * Math.cos(angle);
          const y = this.size * Math.sin(angle);
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.closePath();
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2.5;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Create hexagons - more for better coverage
    const hexagons: Hexagon[] = [];
    for (let i = 0; i < 30; i++) {
      hexagons.push(new Hexagon());
    }

    // Draw once - STATIC
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hexagons.forEach(hexagon => {
      hexagon.draw();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}
