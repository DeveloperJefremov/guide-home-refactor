import Card from '../../UI/Card';
import GuideStep from './GuideStep'; // Импортируем компонент StepItem
import styles from './GuideStepsSet.module.css';

const GuideStepSet = ({ steps, onEditStep, onDeleteStep }) => {
	return (
		<>
			{steps.length > 0 && (
				<Card className={styles.stepsContainer}>
					{steps.map(step => (
						<GuideStep
							key={step.id}
							stepData={step}
							onEditStep={onEditStep}
							onDelete={onDeleteStep}
						/>
					))}
				</Card>
			)}
		</>
	);
};

export default GuideStepSet;
