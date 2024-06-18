interface TutorialProps {
  title: string;
  description: string;
}

export const Card = ({ title, description }: TutorialProps) => {
	return (
		<>
			<h1>{ title }</h1>
			<p>{ description }</p>
		</>
		
	)
}