import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component { 
	render() {
		return (
			<View>
				<CardSection>
					<Input 
					label="Имя" 
					placeholder="Jane" 
					value={this.props.name}
					onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
					/>
				</CardSection>

				<CardSection>
					<Input 
					label="Телефон" 
					placeholder="555-555-5555" 
					value={this.props.phone}
					onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
					/>
				</CardSection>
				<Text style={styles.pickerTextStyle}>Следующая смена в: </Text>
				<CardSection>									
					<Picker
						style={{ flex: 1 }}
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
					>
						<Picker.Item label="Понедельник" value="Monday" />
						<Picker.Item label="Вторник" value="Tuesday" />
						<Picker.Item label="Среда" value="Wednesday" />
						<Picker.Item label="Четверг" value="Thursday" />
						<Picker.Item label="Пятница" value="Friday" />
						<Picker.Item label="Суббота" value="Saturday" />
						<Picker.Item label="Воскресение" value="Sunday" />
					</Picker>
				</CardSection>
			</View>
		);
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
};

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};


export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
