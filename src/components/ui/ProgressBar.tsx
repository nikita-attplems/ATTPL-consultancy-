interface ProgressBarProps {
  step: string;
  total: string;
}

export default function ProgressBar({ step, total  }) {
  const percentage = (step / total) * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span>Progress</span>
        <span>
          {step}/{total}
        </span>
      </div>

      <div className="bg-sky-100 h-3 rounded-full">
        <div
          className="bg-sky-400 h-3 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}