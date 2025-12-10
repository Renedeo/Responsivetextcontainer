import { useEffect, useRef, useState } from 'react';

interface ResponsiveTextContainerProps {
  children: React.ReactNode;
  minFontSize?: number;
  maxFontSize?: number;
  scaleFactor?: number;
  className?: string;
  animationDuration?: number;
  animateScale?: boolean;
  animateOpacity?: boolean;
}

export function ResponsiveTextContainer({
  children,
  minFontSize = 12,
  maxFontSize = 72,
  scaleFactor = 0.05,
  className = '',
  animationDuration = 300,
  animateScale = true,
  animateOpacity = true,
}: ResponsiveTextContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(16);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let resizeTimeout: NodeJS.Timeout;

    const resizeObserver = new ResizeObserver((entries) => {
      setIsResizing(true);
      
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        
        // Calculate font size based on container dimensions
        // Using the smaller dimension to ensure text fits in both directions
        const smallerDimension = Math.min(width, height);
        const calculatedFontSize = smallerDimension * scaleFactor;
        
        // Clamp the font size between min and max
        const clampedFontSize = Math.max(
          minFontSize,
          Math.min(maxFontSize, calculatedFontSize)
        );
        
        setFontSize(clampedFontSize);
      }

      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsResizing(false);
      }, animationDuration);
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, [minFontSize, maxFontSize, scaleFactor, animationDuration]);

  return (
    <div
      ref={containerRef}
      className={`transition-all ${className}`}
      style={{ 
        fontSize: `${fontSize}px`,
        transitionDuration: `${animationDuration}ms`,
        transform: animateScale && isResizing ? 'scale(1.05)' : 'scale(1)',
        opacity: animateOpacity && isResizing ? 0.8 : 1,
      }}
    >
      {children}
    </div>
  );
}