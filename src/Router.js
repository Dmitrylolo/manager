import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" />
			</Scene>

			<Scene key="main">
				<Scene
					initial
					key="employeelist" 
					component={EmployeeList} 
					title="Employees"
					rightTitle="add"
					onRight={() => Actions.employeecreate()}
				/>
				<Scene key="employeecreate" title="Create Employee" component={EmployeeCreate} />
			</Scene>
		</Router>
	);
};

export default RouterComponent;