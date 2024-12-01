import ArtImg from "@/assets/art-image.jpg";
import classes from "./HeaderModal.module.scss";

export const HeaderModal = () => {
	return (
		<div className={classes.headerModule}>
			<img
				className={classes.img}
				src={ArtImg}
				alt="Фон хедера модального окна"
			/>
	
			<h3 className={classes.title} >Создание узлов</h3>
			<p className={classes.subTitle}>Подзаголовок</p>

		</div>
	)
}
