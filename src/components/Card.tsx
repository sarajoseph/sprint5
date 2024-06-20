import { MouseEventHandler } from "react";
import { NextButton, PrevButton } from "./Buttons";

interface TutorialProps {
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string;
  nextStepFN: MouseEventHandler<HTMLButtonElement> | undefined;
  prevStepFN: MouseEventHandler<HTMLButtonElement> | undefined;
	prevButton: boolean;
	nextButton: boolean;
}

export const Card = ({ title, description, imageUrl, bgColor, nextStepFN, prevStepFN, prevButton, nextButton }: TutorialProps) => {
	return (
		<div className="card-container max-w-xs m-auto flex flex-col font-sans">
			<div className={`card-image-section bg-color-${bgColor} rounded-t-3xl py-24 px-5`}>
				<img src={imageUrl}/>
			</div>
			<div className="card-text-section bg-white rounded-b-3xl px-4 pt-5 pb-12">
				<h3 className="text-lg font-bold mb-2">{ title }</h3>
				<p className="text-sm">{ description }</p>
				<div className="card-buttons-section mt-8 flex justify-between items-center">
					<div className="indicator-container">
						Indicator
					</div>
					<div className="buttons-container flex justify-between">
						<PrevButton
							showButton={prevButton}
							buttonMethod={prevStepFN}
						/>
						<NextButton
							showButton={nextButton}
							buttonMethod={nextStepFN}
						/>
					</div>
				</div>
			</div>
		</div>		
	)
}