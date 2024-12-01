import { PropsWithChildren } from "react";

import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

import classes from "./Modal.module.scss";

const ModalWrapper = ({ children }: PropsWithChildren) => {
	return (
		<div className={classes.modal}>
				{children}
		</div>
	);
};

export const Modal = Object.assign(ModalWrapper, { Header, Content, Footer });

/**
 * * I. Модальное окно должно быть гибко настраиваемым. Это значит что у него:
 * *	1) Должен легко изменяться интерфейс.
 * *  2) Чтобы он легко расширялся дополнительным функционалом.
 * 
 * * II. Ддя решения этих задач нужно применить:
 * *  1) Контекст.
 * *  2) ...
 * 
 * * III. Как будут спроектированы компоненты:
 * *  1) Внутрь всех дочерних компонентов Modal будут передоваться childrens
 * *  2) 
 */