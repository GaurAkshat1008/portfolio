// @ts-nocheck
import { Box, BoxProps } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface Props extends BoxProps {
  children: React.ReactNode;
  delay?: number;
}

export const FadeInSection: React.FC<Props> = ({
  children,
  delay = 0,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
