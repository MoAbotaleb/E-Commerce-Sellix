interface HeadingProps {
  title: string;
  style?: string;
}
export default function Heading({ title, style }: HeadingProps) {
  return (
    <div className={`pb-2 border-b-2 mb-5 relative ${style}`}>
      <h2 className="capitalize text-xl w-fit">{title}</h2>
      <span className="h-0.5 w-50 absolute -bottom-0.5 left-0 bg-violet-500"/>
    </div>
  );
}
