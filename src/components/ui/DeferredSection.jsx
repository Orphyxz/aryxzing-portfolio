import { useEffect, useRef, useState } from "react";

export function DeferredSection({
  children,
  className = "",
  rootMargin = "320px 0px",
  minHeightClass = "min-h-[12rem]",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || visible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setVisible(true);
        observer.disconnect();
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} className={`${visible ? "" : minHeightClass} ${className}`}>
      {visible ? children : null}
    </div>
  );
}
