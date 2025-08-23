import clsx from "clsx";

type ShimmerSkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
	show?: boolean;
};

function ShimmerSkeleton({
	show,
	children,
	className,
	...rest
}: ShimmerSkeletonProps) {
	const hasHeight = className?.match(/\bh-\w+\b/);
	const hasWidth = className?.match(/\bw-\w+\b/);

	if (show) {
		return children;
	}

	return (
		<div
			className={clsx(
				"bg-gray-300 rounded w-40 animate-pulse",
				!hasHeight && "h-6",
				!hasWidth && "w-40",
				className,
			)}
			{...rest}
		/>
	);
}

export default ShimmerSkeleton;
