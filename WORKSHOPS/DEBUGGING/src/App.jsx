import { useResizable } from "react-resizable-layout";
import Dashboard from "./Dashboard/Dashboard";
import Splitter from "./components/ui/Splitter";
import FileTree from "./FileTree/FileTree";
import Plugin from "./Plugin/Plugin";
import Terminal from "./Terminal/Terminal";
import ErrorBoundary from "./components/ErrorBoundary";
import { cn } from "./utils/utils";
import "./App.css";

function App() {

  const {
    isDragging: isTerminalDragging,
    position: terminalH,
    separatorProps: terminalDragBarProps,
  } = useResizable({
    axis: "y",
    initial: 150,
    min: 50,
    reverse: true,
  });

  const {
    isDragging: isFileDragging,
    position: fileW,
    separatorProps: fileDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 250,
    min: 50,
  });

  const {
    isDragging: isPluginDragging,
    position: pluginW,
    separatorProps: pluginDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 200,
    min: 50,
    reverse: true,
  });

  return (
    <div
      className={
        "flex flex-column h-screen bg-dark font-mono color-white overflow-hidden"
      }
    >
      <div className={"flex grow"}>

        {/* FILE TREE */}
        <div
          className={cn("shrink-0 contents", isFileDragging && "dragging")}
          style={{ width: fileW }}
        >
          <FileTree />
        </div>
        <Splitter isDragging={isFileDragging} {...fileDragBarProps} />

        {/* DASHBOARD */}
        <div className={"flex grow"}>
          <div className={"grow bg-darker contents"}>
            <ErrorBoundary fallback={<p>Ops!</p>}>
              <Dashboard />
            </ErrorBoundary>
          </div>
          <Splitter
            isDragging={isPluginDragging}
            {...pluginDragBarProps}
          />

          {/* PLUGIN */}
          <div
            className={cn("shrink-0 contents", isPluginDragging && "dragging")}
            style={{ width: pluginW }}
          >
            <Plugin />
          </div>

        </div>
      </div>

      <Splitter
        dir={"horizontal"}
        isDragging={isTerminalDragging}
        {...terminalDragBarProps}
      />

      {/* TERMINAL */}
      <div
        className={cn(
          "shrink-0 bg-darker contents",
          isTerminalDragging && "dragging"
        )}
        style={{ height: terminalH }}
      >
        <Terminal />
      </div>

    </div>
  );
};




export default App;
