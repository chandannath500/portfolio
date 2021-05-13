import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Passwordlist from '../assets/passlist.png';
import GraphicalPasswordStrategy from '../assets/Upcoming.png';
import burger from '../assets/burger.png';
import Keylogger from '../assets/Keylogger.png';
import SafeFolderApp from '../assets/Upcoming.png';
import BFPasswordCracker from '../assets/Upcoming.png';
import { Github } from '@styled-icons/boxicons-logos';
import { ExternalLinkOutline } from '@styled-icons/evaicons-outline';
import BFPasswordCrackerVideo from '../assets/video.mov';

const Container = styled(motion.div)`
	padding-top: 2em;
	color: white;
	overflow: hidden;
	font-family: 'Asap', sans-serif;
	width: 100%;
`;

const Row = styled.div`
	padding: 4em 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media only screen and (max-width: 450px) {
		padding: 2em 0;
		flex-direction: ${(props) => (props.revert ? 'column-reverse' : 'column')};
	}
`;

const LeftRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.text ? 'flex-end' : 'flex-start')};
	width: ${(props) => (props.text ? '50%' : '50%')};
	height: 200px;
	height: ${(props) => (props.text ? '300px' : '250px')};
	border-radius: 5px;
	padding: 15px;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 100%;
		justify-content: center;
		padding: 0;
	}
`;

const RightRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.text ? 'flex-start' : 'flex-end')};
	width: ${(props) => (props.text ? '50%' : '50%')};
	height: 200px;
	height: ${(props) => (props.text ? '300px' : '250px')};
	border-radius: 5px;
	padding: 15px;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 100%;
		justify-content: center;
	}
`;

const ImgContainer = styled.div`
	width: 500px;
	height: 300px;
	position: relative;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 80%;
	}
`;

const VideoContainer = styled.div`
	position: absolute;
	top: 19px;
	left: 80px;
	width: 200px;
	height: 100px;
	@media only screen and (max-width: 450px) {
		top: 9px;
		left: 39px;
	}
	video {
		width: 395px;
		@media only screen and (max-width: 450px) {
			width: 186px;
		}
	}
`;

const Img = styled.img`
	height: 96%;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 100%;
	}
`;

const Card = styled.div`
	width: 85%;
	height: 80%;
	border-radius: 5px;
	padding: 25px 30px;
	background: #ffffff14;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
	@media only screen and (max-width: 450px) {
		width: 75%;
		padding: 15px 20px;
	}
`;

const Title = styled.h4`
	font-size: 24px;
	margin: 0;
	padding: 0;
	color: #ffc200;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 20px;
	}
`;

const Description = styled.h4`
	margin: 0;
	padding: 0;
	font-size: 18px;
	font-weight: 300;
	margin: 0;
	padding: 0;
	padding: 10px 0;
	font-family: 'Calibre', sans-serif;
	font-family: 'Roboto', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 16px;
		line-height: 23px;
	}
`;

const Technology = styled.div`
	font-family: 'Roboto';
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;
const TechItems = styled.span`
	padding-right: 10px;
	padding-top: 10px;
	font-size: 18px;
	color: #ffffffbf;
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;

const Hastag = styled.span`
	color: #ffc200;
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-top: 1em;
	a {
		color: white;
		text-decoration: none;
	}
`;

const Button = styled(motion.div)`
	padding: 0.5em;
	cursor: pointer;
	svg {
		width: 30px;
		@media only screen and (max-width: 450px) {
			width: 27px;
		}
	}
`;

const AdvancedProjects = ({ isMobile }) => {
	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={Passwordlist} alt='Expense-Income Tracker' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>Expense-Income Tracker</Title>
						<Description>
						Expense-Income tracker app powered with 'Speechly' voice commands.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Speechly
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>ReactJs
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Material UI
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>VS Code
							</TechItems>
						</Technology>
						<ButtonContainer>
						    <a href='https://github.com/chandannath500/Income-Expense-Tracker' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>
							<a href='https://incomexpensetracker.netlify.app/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</RightRow>
			</Row>
			<Row revert={true}>
				<LeftRow text={true}>
					<Card>
						<Title>Amazon-Clone</Title>
						<Description>Clone of Amazon with necessary functionalities.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>ReactJs
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Material UI
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>VSCode
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Google Firebase
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Stripe
							</TechItems>
						</Technology>
						<ButtonContainer>
						<a href='https://github.com/chandannath500/amazon-clone' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>
							<a href='https://amazon-clone-side-project.netlify.app/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={Keylogger} alt='Amazon-Clone' />
					</ImgContainer>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={burger} alt='SafeFolderApp' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>Burger-Appzz</Title>
						<Description>
						Simple Restaurant Website
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>ReactJs
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a
								href='https://github.com/chandannath500/burgerapp'
								target='_blank'
								rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>
							<a href='https://burger-appzz.netlify.app/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</RightRow>
			</Row>
			{/* <Row revert={true}>
				<LeftRow text={true}>
					<Card>
						<Title>Graphical-Password Strategy</Title>
						<Description>
						Description
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Frameworks
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Library
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag> OS
							</TechItems>
						</Technology>
						<ButtonContainer>
						<a href=''
								target='_blank'
								rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
						</a>
						<a href='' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
						</a>
						</ButtonContainer>
					</Card>
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={GraphicalPasswordStrategy} alt='GraphicalPasswordStrategy' />
					</ImgContainer>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={BFPasswordCracker} alt='BFPasswordCracker' />
						{!isMobile && (
							<VideoContainer>
								<video muted controls autoPlay loop>
									<source src={BFPasswordCrackerVideo} type='video/mp4' />
								</video>
							</VideoContainer>
						)}
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>BF Password Cracker</Title>
						<Description>
						Description
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Framework
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>OS
							</TechItems>
						</Technology>
					</Card>
				</RightRow>
			</Row> */}
		</Container>
	);
};

export default AdvancedProjects;