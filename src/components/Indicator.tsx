import styled from 'styled-components'

const Bullet = styled.li<{ $selected?: boolean; }>`
	color: ${props => props.$selected ? "#000000" : "#d1d5db"};
	font-size: 1.125rem;
	padding-left: 0.25rem;
  padding-right: 0.25rem;
`

interface IndicatorProps {
	totalSteps: number
	currentStep: number
}

const Indicator = ({totalSteps, currentStep}: IndicatorProps)  => {
	const arrTotalSteps = []

	for(let i = 0; i < totalSteps; i++) {
		arrTotalSteps.push(i)
	}

	return(
		<ul className="flex">
		{
			arrTotalSteps.map((e) => e === currentStep ? <Bullet key={`bullet${e}`} $selected>&bull;</Bullet> : <Bullet key={`bullet${e}`}>&bull;</Bullet>)
		}
		</ul>
	)
}

export default Indicator