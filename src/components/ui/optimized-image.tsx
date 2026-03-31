import React, { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  sizes?: string;
  srcSet?: string;
  className?: string;
}

/**
 * OptimizedImage Component
 * 
 * Simple wrapper around img tag that supports lazy loading
 * and is ready for WebP optimization via srcSet when images are processed.
 * 
 * Future enhancement: Will automatically generate and use WebP variants
 * after running `npm run optimize:images`
 */
export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, sizes, srcSet, className, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        className={className}
        loading="lazy"
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";
