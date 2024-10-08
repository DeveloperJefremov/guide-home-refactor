import { useState } from 'react';
// import StepsMockDataTwo from '../data/StepsMockDataTwo';
import mockData from '../../data/MockData';
import mockDataTwo from '../../data/MockDataTwo';
import GuideStepSet from './guides/GuideStepsSet';

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
	const [steps, setSteps] = useState(mockData);
	const [guideStep, setGuideStep] = useState(mockDataTwo);

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
			{guideStep.map(guideStep => (
				<GuideStepSet
					steps={steps}
					onEditStep={handleEditStep}
					onDeleteStep={handleDeleteStep}
					key={guideStep.id}
				/>
			))}
			<UserGuideFooter info='2024 Your Company. All rights reserved.' />
		</>
	);
};

export default MainContentBody;
