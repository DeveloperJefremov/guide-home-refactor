import { useState } from 'react';
import StepsMockData from '../data/StepsMockData';
import GuideStepSet from './guides/GuideStepsSet';

GuideStepSet;

const UserGuideHeader = ({ title, description }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

// src/components/UserGuideFooter.jsx

const UserGuideFooter = ({ info }) => {
	return (
		<footer>
			<div>
				<div>{info}</div>
			</div>
		</footer>
	);
};

const MainContentBody = () => {
	const [steps, setSteps] = useState(StepsMockData);

	// const handleSaveStep = newStep => {
	// 	setSteps(prevSteps => [...prevSteps, newStep]);
	// };

	const handleEditStep = updatedStep => {
		setSteps(prevSteps =>
			prevSteps.map(step => (step.id === updatedStep.id ? updatedStep : step))
		);
	};

	const handleDeleteStep = stepId => {
		setSteps(prevSteps => prevSteps.filter(step => step.id !== stepId));
	};

	return (
		<>
			<UserGuideHeader
				title='User Guide'
				description='User guides are a type of technical documentation that enables customers and end-users with step-by-step instructions on how to execute a task or process.'
			/>
			<GuideStepSet
				steps={steps}
				onEditStep={handleEditStep}
				onDeleteStep={handleDeleteStep}
			/>
			<UserGuideFooter info='2024 Your Company. All rights reserved.' />
		</>
	);
};

export default MainContentBody;
