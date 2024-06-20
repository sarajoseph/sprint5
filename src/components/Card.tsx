import { MouseEventHandler } from "react";

interface TutorialProps {
  title: string;
  description: string;
  nextStepFN: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Card = ({ title, description, nextStepFN }: TutorialProps) => {
	return (
		<>
			<h1>{ title }</h1>
			<p>{ description }</p>
			<button onClick={nextStepFN}>Next</button>
		</>
		
	)
}