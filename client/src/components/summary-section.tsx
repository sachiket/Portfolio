import { summary } from "@/content";
import type { SummarySegment } from "@shared/schema";

function renderSegment(segment: SummarySegment, index: number) {
  if (segment.type === "strong") {
    return (
      <strong key={index} style={{ color: `var(--portfolio-${segment.color ?? "primary"})` }}>
        {segment.content}
      </strong>
    );
  }

  return <span key={index}>{segment.content}</span>;
}

export default function SummarySection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "var(--portfolio-secondary)" }}>
            Professional Summary
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-gray-700">
                {summary.segments.map(renderSegment)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
