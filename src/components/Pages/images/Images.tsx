import { useEffect } from "react";
import { useLayout } from "@/components/Layout/context/LayoutContext";
import { Modal } from "@/components/widgets/Modal";
import { CrosSvg } from "@/components/shared/Svg/CrosSvg";
import classes from "./Images.module.scss";

export const Images = () => {
	const { setHeaderContent } = useLayout();

	const inputList = [
		{
			id: "1",
			placeholder: "Название узла",
		},

		{
			id: "2",
			placeholder: "Тип узла",
		},
	];

	const btnsList = [
		{
			id: "1",
			name: "Создать",
			onClick: () => console.log("Узел создан"),
		},

		{
			id: "2",
			name: "Отмена",
			onClick: () => console.log("Создание отменено"),
		},
	];

	useEffect(() => {
		setHeaderContent(<h1>Изображения</h1>)
	}, []);

	return (
		<div className={classes.images}>
			<h1>Images</h1>

			<Modal>
				<Modal.Header title="Создать узел" button={<CrosSvg />} />
				<Modal.Content inputList={inputList} />
				<Modal.Footer btnsList={btnsList} />
			</Modal>

		</div>
	);
};