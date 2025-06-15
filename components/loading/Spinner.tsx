import { cn } from "@/lib/utils";
interface IProps {
  className?: string;
}

export const Spinner = ({ className }: IProps) => {
  return (
    <div
      className={cn("flex justify-center", className)}
      aria-label="読み込み中"
    >
      <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>
  );
};
export default Spinner;
