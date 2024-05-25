import { useMemo } from "react";
import styles from "./Skeleton.module.css";

interface SkeletonProps {
	count?: number;
}
const Skeleton = ({ count = 1 }: Readonly<SkeletonProps>) => {
	const arr = useMemo(() => {
		return Array.from({ length: count }, (_, i) => i);
	}, [count]);

	return (
		<ul data-testid="Skeleton" className={styles.list}>
			{arr.map((i) => (
				<li key={i} className={styles.item} />
			))}
		</ul>
	);
};

Skeleton.displayName = "Skeleton";
export default Skeleton;
