
interface Props {
  step: number;
  total: number;
}

export default function ProgressBar({ step, total }: Props) {
  const percentage = (step / total) * 100;

  return (
    <div className="mb-4">

      {/* Progress Header */}
      <div className="flex justify-between mb-2">

        <span className="text-[#111111] font-medium">
          Consultancy Progress
        </span>

        <span className="text-[#777777]">
          {step}/{total}
        </span>

      </div>

      {/* Progress Track */}
      <div className="bg-[#F3E7B5] h-3 rounded-full overflow-hidden">

        <div
          className="bg-[#111111] h-3 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />

      </div>

    </div>
  );
}

