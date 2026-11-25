import React from "react";

export default function Image({
  src,
  alt = "",
  fill,
  width,
  height,
  className = "",
  priority,
  sizes,
  style,
  ...props
}: any) {
  const fillStyle: React.CSSProperties = fill
    ? {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: className.includes("object-contain") ? "contain" : "cover",
      }
    : {};

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ ...fillStyle, ...style }}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
