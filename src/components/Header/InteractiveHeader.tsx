import React, { useState, useEffect, useRef } from 'react';
import type { TreeInstance } from './types';
import { Tree } from './Tree';
import './treestyle.css';

interface InteractiveHeaderProps {
  title?: string;
}

export const InteractiveHeader: React.FC<InteractiveHeaderProps> = ({ title = "ITREEA" }) => {
  const [trees, setTrees] = useState<TreeInstance[]>([]);
  const ovalRef = useRef<HTMLDivElement>(null);

  const getPointInsideOval = (width: number, height: number) => {
    const rx = (width / 2) * 0.86;
    const ry = (height / 2) * 0.78;
    const cx = width / 2;
    const cy = height / 2;

    const angle = Math.random() * 2 * Math.PI;
    const r = Math.sqrt(Math.random());

    return {
      x: cx + r * rx * Math.cos(angle),
      y: cy + r * ry * Math.sin(angle),
    };
  };

  useEffect(() => {
    const MAX_TREES = 48;

    const timer = setInterval(() => {
      setTrees((prev) => {
        if (prev.length >= MAX_TREES) {
          clearInterval(timer);
          return prev;
        }

        if (!ovalRef.current) return prev;
        const width = ovalRef.current.clientWidth;
        const height = ovalRef.current.clientHeight;

        const { x, y } = getPointInsideOval(width, height);
        const verticalRatio = y / height;
        const baseScale = 0.8 + verticalRatio * 0.45;

        const newTree: TreeInstance = {
          id: `${Date.now()}-${Math.random()}`,
          x,
          y,
          scale: baseScale * (0.8 + Math.random() * 0.3),
          variant: Math.floor(Math.random() * 3),
          depthZ: Math.floor(verticalRatio * 10) + 1,
        };

        return [...prev, newTree];
      });
    }, 140);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="header-wrapper">
      {/* THE OVAL EMBLEM */}
      <div ref={ovalRef} className="oval-frame">
        {/* Layer 1: Ambient Lighting */}
        <div className="oval-inner-glow" />

        {/* Layer 2: Sprouting Trees (Z: 1 to 15) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        >
          {trees.map((tree) => (
            <Tree key={tree.id} tree={tree} />
          ))}
        </div>

        {/* Layer 3: Typography (Z: 20) */}
        <h1 className="brand-text">
          {title}
        </h1>
      </div>
    </div>
  );
};