import { useState, useEffect } from 'react';

/**
 * useCountUp hook with ease-out expo curve for ultra-smooth counter animations
 * @param {number} end - Target value
 * @param {number} duration - Animation duration in ms (default 1800ms)
 * @param {number} decimal - Decimal places (e.g. 2 for 9.11)
 * @param {boolean} trigger - Whether animation is active
 */
export const useCountUp = (end, duration = 1800, decimal = 0, trigger = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime = null;
    let frameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease-out expo curve: 1 - 2^(-10 * progress)
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = easedProgress * end;

      setCount(parseFloat(currentVal.toFixed(decimal)));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, decimal, trigger]);

  return count;
};
