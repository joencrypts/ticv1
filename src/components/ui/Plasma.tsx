import React, { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";

type PlasmaProps = {
  color?: string;
  speed?: number;
  direction?: "forward" | "reverse" | "pingpong";
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
};

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
uniform float uMaxIterations;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < uMaxIterations; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`;

const Plasma: React.FC<PlasmaProps> = ({
  color = "#ffffff",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 1,
  mouseInteractive = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const useCustomColor = color ? 1.0 : 0.0;
    const customColorRgb = color ? hexToRgb(color) : [1, 1, 1];
    const directionMultiplier = direction === "reverse" ? -1.0 : 1.0;
    
    // Detect mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: isMobile ? Math.min(window.devicePixelRatio || 1, 1) : Math.min(window.devicePixelRatio || 1, 1.5), // Lower DPR on mobile
    });

    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    containerRef.current.appendChild(canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uCustomColor: { value: new Float32Array(customColorRgb) },
        uUseCustomColor: { value: useCustomColor },
        uSpeed: { value: speed * 0.4 },
        uDirection: { value: directionMultiplier },
        uScale: { value: scale },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0, 0]) },
        uMouseInteractive: { value: (mouseInteractive && !isMobile && !isTouchDevice) ? 1.0 : 0.0 },
        uMaxIterations: { value: isMobile ? 40.0 : 60.0 }, // Reduce iterations on mobile
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    let mouseMoveTimeout: ReturnType<typeof setTimeout> | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteractive || !containerRef.current) return;
      
      // Throttle mouse updates
      if (mouseMoveTimeout) return;
      
      mouseMoveTimeout = setTimeout(() => {
        const rect = containerRef.current!.getBoundingClientRect();
        mousePos.current.x = e.clientX - rect.left;
        mousePos.current.y = e.clientY - rect.top;
        const mouseUniform = program.uniforms.uMouse.value as Float32Array;
        mouseUniform[0] = mousePos.current.x;
        mouseUniform[1] = mousePos.current.y;
        mouseMoveTimeout = null;
      }, 16); // ~60fps for mouse updates
    };

    // Disable mouse interaction on mobile/touch devices to prevent flickering
    if (mouseInteractive && !isMobile && !isTouchDevice) {
      containerRef.current.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    const setSize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height);
      const res = program.uniforms.iResolution.value as Float32Array;
      res[0] = gl.drawingBufferWidth;
      res[1] = gl.drawingBufferHeight;
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(containerRef.current);
    setSize();

    let raf = 0;
    let lastFrameTime = 0;
    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let scrollEndTimeout: ReturnType<typeof setTimeout> | null = null;
    const targetFPS = isMobile ? 20 : 30; // Lower FPS on mobile to prevent flickering
    const scrollFPS = isMobile ? 10 : 20; // Even lower FPS during scroll
    let currentFPS = targetFPS;
    const t0 = performance.now();
    
    // Handle scroll events to reduce rendering during scroll
    const handleScrollStart = () => {
      if (isMobile) {
        isScrolling = true;
        currentFPS = scrollFPS;
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
          scrollTimeout = null;
        }
      }
    };
    
    const handleScrollEnd = () => {
      if (isMobile) {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
          scrollTimeout = null;
        }
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          currentFPS = targetFPS;
          scrollTimeout = null;
        }, 150);
      }
    };
    const handleScroll = () => {
      if (isMobile) {
        handleScrollStart();
        if (scrollEndTimeout) clearTimeout(scrollEndTimeout);
        scrollEndTimeout = setTimeout(() => {
          handleScrollEnd();
          scrollEndTimeout = null;
        }, 100);
      }
    };
    
    if (isMobile) {
      window.addEventListener('touchstart', handleScrollStart, { passive: true });
      window.addEventListener('touchmove', handleScrollStart, { passive: true });
      window.addEventListener('touchend', handleScrollEnd, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    const loop = (t: number) => {
      const elapsed = t - lastFrameTime;
      const currentInterval = 1000 / currentFPS;
      
      if (elapsed >= currentInterval) {
        // Skip rendering during active scroll on mobile to prevent flickering
        if (!isScrolling || !isMobile) {
          const timeValue = (t - t0) * 0.001;

          if (direction === "pingpong") {
            const pingpongDuration = 10;
            const segmentTime = timeValue % pingpongDuration;
            const isForward = Math.floor(timeValue / pingpongDuration) % 2 === 0;
            const u = segmentTime / pingpongDuration;
            const smooth = u * u * (3 - 2 * u);
            const pingpongTime = isForward ? smooth * pingpongDuration : (1 - smooth) * pingpongDuration;
            (program.uniforms.uDirection as any).value = 1.0;
            (program.uniforms.iTime as any).value = pingpongTime;
          } else {
            (program.uniforms.uDirection as any).value = directionMultiplier;
            (program.uniforms.iTime as any).value = timeValue;
          }

          renderer.render({ scene: mesh });
        }
        lastFrameTime = t - (elapsed % currentInterval);
      }
      
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (mouseMoveTimeout) {
        clearTimeout(mouseMoveTimeout);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      if (scrollEndTimeout) {
        clearTimeout(scrollEndTimeout);
      }
      if (isMobile) {
        window.removeEventListener('touchstart', handleScrollStart);
        window.removeEventListener('touchmove', handleScrollStart);
        window.removeEventListener('touchend', handleScrollEnd);
        window.removeEventListener('scroll', handleScroll);
      }
      if (mouseInteractive && !isMobile && !isTouchDevice && containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
      try {
        containerRef.current?.removeChild(canvas);
      } catch {
        // ignore
      }
    };
  }, [color, direction, mouseInteractive, opacity, scale, speed]);

  return <div ref={containerRef} className="w-full h-full relative overflow-hidden" style={{ willChange: 'auto', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }} />;
};

export default Plasma;

