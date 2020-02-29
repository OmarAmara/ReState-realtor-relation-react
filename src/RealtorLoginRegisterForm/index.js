import React from 'react'
import { Form, Input, Label, Button } from 'semantic-ui-react'

export default function RealtorLoginRegisterForm(props) {

	return(
		<React.Fragment>

			<div className='Register-Main'>
				{/* Register Form Field */}
				<div className='Realtor-Register-Form'>
					<Form onSubmit={() => props.handleAllFormSubmission('register')}>
						<Form.Group widths='equal'>
							<Form.Field>
								<Label className='Label'>Email:</Label>
								<Input
									required
									type='email'
									name='email'
									placeholder='Enter Email'
									value={props.registerForm.email}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label className='Label'>Username:</Label>
								<Input
									required
									type='text'
									name='username'
									placeholder='Enter Username'
									value={props.registerForm.username}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
								<Form.Field>
								<Label className='Label'>Password:</Label>
								<Input
									required
									type='password'
									name='password'
									placeholder='Enter Password'
									value={props.registerForm.password}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Field>
								<Label className='Label'>First Name:</Label>
								<Input
									required
									type='text'
									name='firstName'
									placeholder='Your First Name'
									value={props.registerForm.firstName}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label className='Label'>Last Name:</Label>
								<Input
									required
									type='text'
									name='lastName'
									placeholder='Your Last Name'
									value={props.registerForm.lastName}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label className='Label'>Phone Number:</Label>
								<Input
									required
									type='tel'
									name='phoneNumber'
									placeholder='Enter Phone Number'
									value={props.registerForm.phoneNumber}
									onChange={props.handleRegisterFormChange}
									maxLength='11'
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Field>
								<Label className='Label'>Broker License Number:</Label>
								<Input
									required
									type='text'
									name='brokerLicenseNumber'
									placeholder='Broker License #'
									value={props.registerForm.brokerLicenseNumber}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label className='Label'>Website Link:</Label>
								<Input
									type='url'
									name='websiteURL'
									placeholder='Website Link'
									value={props.registerForm.websiteURL}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Field>
								<Label className='Label'>Company Name:</Label>
								<Input
									required
									type='text'
									name='companyName'
									placeholder='Your Company Name'
									value={props.registerForm.companyName}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label className='Label'>Company Number:</Label>
								<Input
									required
									type='text'
									name='companyNumber'
									placeholder='Compnay Number'
									value={props.registerForm.lastName}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label className='Label'>Street 1:</Label>
								<Input
									required
									type='text'
									name='street1'
									placeholder='Company Street Number'
									value={props.registerForm.street1}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
						</Form.Group>
							<Form.Group widths='equal'>
							<Form.Field>
								<Label className='Label'>City:</Label>
								<Input
									required
									type='text'
									name='city'
									placeholder="Your Company's City"
									value={props.registerForm.city}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label className='Label'>State:</Label>
								<Input
									required
									type='text'
									name='state'
									placeholder='State'
									value={props.registerForm.state}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label className='Label'>Zipcode:</Label>
								<Input
									required
									type='number'
									name='zipcode'
									placeholder='Zipcode'
									maxLength='10'
									value={props.registerForm.zipcode}
									onChange={props.handleRegisterFormChange}
								/>
							</Form.Field>
						</Form.Group>
						<Button color={'vk'} type='Submit'>Register</Button>
					</Form>
				</div>
				<div className='About-Us'>
					<h3>Who We Are</h3>
					<p>What We Our</p>
					<p>How We Can Help</p>
					<h5>Realtor Register Instructions</h5>
					<p>Rules of Conduct</p>
					<p>How the Realtor Portal works and how it helps organize clients...</p>
					<p>learn more</p>
				</div>
			</div>
			<div className='Login-Form'>
				<h2>Welcome {props.myName.firstName + " " + props.myName.lastName}, are you a Real Estate Broker?</h2>

				{/* Login Form Field*/}
				<Form onSubmit={() => props.handleAllFormSubmission('login')}>
					<Form.Group widths='equal'>
						<Form.Field>
							<Input
								required
								label='Email'
								type='email'
								name='email'
								placeholder='Enter Email'
								value={props.loginForm.email}
								onChange={props.handleLoginFormChange}
							/>
						</Form.Field>
						<Form.Field >
							<Input
								required
								label='Password'
								type='password'
								name='password'
								placeholder='Enter Password'
								value={props.loginForm.password}
								onChange={props.handleLoginFormChange}
							/>
						</Form.Field>
						<Button color={'vk'} type='Submit'>Login</Button>
					</Form.Group>
				</Form>
			</div>
		</React.Fragment>
	)
}
