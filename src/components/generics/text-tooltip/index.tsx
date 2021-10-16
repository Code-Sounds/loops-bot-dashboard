import ReactTooltip from "react-tooltip";
import ReactHTMLParser from "react-html-parser";

type TextHideTooltipProps = {
  fullText: string;
  displayText: string;
  tooltipKey: string;
  className?: string;
};

export function TextHideTooltip({
  displayText,
  fullText,
  tooltipKey,
  className,
}: TextHideTooltipProps) {
  return (
    <>
      <p data-tip data-for={tooltipKey} className={className}>
        {ReactHTMLParser(displayText)}
      </p>
      <ReactTooltip
        className="text-hide-tooltip"
        id={tooltipKey}
        place="bottom"
        type="info"
        effect="float"
        textColor="#2b2e3d"
        backgroundColor="#fff"
      >
        <span
          style={{
            maxWidth: 500,
            display: "block",
          }}
        >
          {fullText}
        </span>
      </ReactTooltip>
    </>
  );
}
