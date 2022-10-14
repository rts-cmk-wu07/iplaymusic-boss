import Breadcrumb from "./Breadcrumb";

const Breadcrumbs = ({ currentIndex, setIndex }) => {
	return (
		<div className="flex gap-4">
			<Breadcrumb
				currentIndex={currentIndex}
				setIndex={setIndex}
				thisIndex={0}
			/>
			<Breadcrumb
				currentIndex={currentIndex}
				setIndex={setIndex}
				thisIndex={1}
			/>
			<Breadcrumb
				currentIndex={currentIndex}
				setIndex={setIndex}
				thisIndex={2}
			/>
		</div>
	);
};

export default Breadcrumbs;
