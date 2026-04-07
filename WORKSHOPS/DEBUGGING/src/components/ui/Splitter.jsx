import { useState } from "react";
// [ERROR] [plugin:vite:import-analysis] Failed to resolve import "./utils/utils" from "src/components/ui/Splitter.jsx". Does the file exist?
// import { cn } from "./utils/utils";
import { cn } from "../../utils/utils";

const Splitter = ({
  id = "drag-bar",
  dir,
  isDragging,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      id={id}
      data-testid={id}
      tabIndex={0}
      className={cn(
        "sample-drag-bar",
        dir === "horizontal" && "sample-drag-bar--horizontal",
        (isDragging || isFocused) && "sample-drag-bar--dragging"
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
};

export default Splitter;