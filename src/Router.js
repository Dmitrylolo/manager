import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Войти" />
			</Scene>

			<Scene key="main">
				<Scene
					initial
					key="employeeList" 
					component={EmployeeList} 
					title="Сотрудники"
					rightTitle="добавить"
					onRight={() => Actions.employeeCreate()}
				/>
				<Scene key="employeeCreate" title="Создать сотрудника" component={EmployeeCreate} />
				<Scene key="employeeEdit" title="Редактировать сотрудника" component={EmployeeEdit} />
			</Scene>
		</Router>
	);
};

export default RouterComponent;
