import { useEffect, useRef } from 'react';

export const useTouchGestures = ({
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onTap,
    onDoubleTap,
    threshold = 50,
    enableHaptic = true
}) => {
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const touchStartTime = useRef(0);
    const lastTapTime = useRef(0);

    useEffect(() => {
        const handleTouchStart = (e) => {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
            touchStartTime.current = Date.now();
        };

        const handleTouchEnd = (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const touchDuration = Date.now() - touchStartTime.current;

            const diffX = touchEndX - touchStartX.current;
            const diffY = touchEndY - touchStartY.current;
            const absDiffX = Math.abs(diffX);
            const absDiffY = Math.abs(diffY);

            if (absDiffX < 10 && absDiffY < 10 && touchDuration < 200) {
                const now = Date.now();
                if (onDoubleTap && now - lastTapTime.current < 300) {
                    if (enableHaptic && navigator.vibrate) {
                        navigator.vibrate([10, 30, 10]);
                    }
                    onDoubleTap();
                    return;
                }
                lastTapTime.current = now;

                if (onTap) {
                    if (enableHaptic && navigator.vibrate) {
                        navigator.vibrate(10);
                    }
                    onTap();
                }
                return;
            }

            if (touchDuration < 500) {
                if (absDiffX > threshold && absDiffX > absDiffY) {
                    if (diffX > 0 && onSwipeRight) {
                        if (enableHaptic && navigator.vibrate) {
                            navigator.vibrate(15);
                        }
                        onSwipeRight();
                    } else if (diffX < 0 && onSwipeLeft) {
                        if (enableHaptic && navigator.vibrate) {
                            navigator.vibrate(15);
                        }
                        onSwipeLeft();
                    }
                } else if (absDiffY > threshold && absDiffY > absDiffX) {
                    if (diffY > 0 && onSwipeDown) {
                        if (enableHaptic && navigator.vibrate) {
                            navigator.vibrate(15);
                        }
                        onSwipeDown();
                    } else if (diffY < 0 && onSwipeUp) {
                        if (enableHaptic && navigator.vibrate) {
                            navigator.vibrate(15);
                        }
                        onSwipeUp();
                    }
                }
            }
        };

        document.addEventListener('touchstart', handleTouchStart, { passive: true });
        document.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onTap, onDoubleTap, threshold, enableHaptic]);
};

export const triggerHaptic = (pattern = 10) => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(pattern);
    }
};

export const TouchWrapper = ({ children, className, onTap, onLongPress, longPressDelay = 500 }) => {
    const timerRef = useRef(null);
    const isLongPress = useRef(false);

    const handleTouchStart = () => {
        isLongPress.current = false;
        timerRef.current = setTimeout(() => {
            isLongPress.current = true;
            if (onLongPress) {
                triggerHaptic([30, 50, 30]);
                onLongPress();
            }
        }, longPressDelay);
    };

    const handleTouchEnd = (e) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (!isLongPress.current && onTap) {
            triggerHaptic(10);
            onTap();
        }
    };

    const handleTouchMove = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    return (
        <div
            className={className}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            {children}
        </div>
    );
};

export default { useTouchGestures, triggerHaptic, TouchWrapper };
