import React, { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  sizes?: string;
  srcSet?: string;
  webpSrcSet?: string;
  className?: string;
}

export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, sizes, srcSet, webpSrcSet, className, ...props }, ref) => {
    // Extract filename without extension for WebP versions
    const filename = src.substring(src.lastIndexOf("/") + 1).split(".")[0];
    const currentPath = src.substring(0, src.lastIndexOf("/") + 1);

    // Default srcSet if not provided
    const defaultWebpSet = webpSrcSet || 
      `${currentPath}${filename}-480w.webp 480w, ${currentPath}${filename}-768w.webp 768w, ${currentPath}${filename}-1024w.webp 1024w, ${src}`;
    
    const defaultSrcSet = srcSet || 
      `${currentPath}${filename}-480w.jpg 480w, ${currentPath}${filename}-768w.jpg 768w, ${currentPath}${filename}-1024w.jpg 1024w, ${src}`;

    const defaultSizes = sizes || "(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 66vw, 50vw";

    return (
      <picture>
        {/* WebP format for modern browsers */}
        <source 
          srcSet={defaultWebpSet}
          sizes={defaultSizes}
          type="image/webp" 
        />
        {/* Fallback JPG/PNG */}
        <img
          ref={ref}
          src={src}
          alt={alt}
          srcSet={defaultSrcSet}
          sizes={defaultSizes}
          className={className}
          loading="lazy"
          {...props}
        />
      </picture>
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";
