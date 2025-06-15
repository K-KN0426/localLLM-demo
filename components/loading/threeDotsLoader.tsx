import { cn } from "@/lib/utils";
interface IProps {
  className?: string;
}

export const ThreeDotsLoader = ({ className }: IProps) => {
  return (
    <div
      className={cn("flex justify-center", className)}
      aria-label="読み込み中"
    >
      <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
      <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
      <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
    </div>
  );
};
export default ThreeDotsLoader;
