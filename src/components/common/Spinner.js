import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={size || 'large'} />
		</View>
	);	
};

const styles = {
	spinnerStyle: {
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export { Spinner };
