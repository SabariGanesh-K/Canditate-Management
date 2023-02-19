import { Button } from '@mui/material'
import React, { useContext,useState } from 'react'

import bar from '../../assets/bar.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { FireBaseContext } from '../../context/FireBaseConfig';
import logo from '../../assets/homepage/logo.png'
export const Header = () => {
   const {loggedIn,signInWithGoogle} = useContext(FireBaseContext);
    const [NavBarOpen, setNavBarOpen] = useState(false);
    		// open
		const burger = document.querySelectorAll('.navbar-burger');
		const menu = document.querySelectorAll('.navbar-menu');
	
		if (burger.length && menu.length) {
			for (var i = 0; i < burger.length; i++) {
				burger[i].addEventListener('click', function() {
					for (var j = 0; j < menu.length; j++) {
						menu[j].classList.toggle('hidden');
					}
				});
			}
		}
	
		// close
		const close = document.querySelectorAll('.navbar-close');
		const backdrop = document.querySelectorAll('.navbar-backdrop');
	
		if (close.length) {
			for (var i = 0; i < close.length; i++) {
				close[i].addEventListener('click', function() {
					for (var j = 0; j < menu.length; j++) {
						menu[j].classList.toggle('hidden');
					}
				});
			}
		}
	
		if (backdrop.length) {
			for (var i = 0; i < backdrop.length; i++) {
				backdrop[i].addEventListener('click', function() {
					for (var j = 0; j < menu.length; j++) {
						menu[j].classList.toggle('hidden');
					}
				});
			}
		}
	
  return (
	<div >
	<body >
		<nav class="relative px-4 py-4 flex justify-between items-center bg-[#4434A7]">
			<a class ="no-underline  text-3xl font-bold leading-none" href="/home">
				<img className='bg-white  p-2 rounded-lg' src = {logo}/>
			</a>
			<div class="lg:hidden">
				<button class="navbar-burger flex items-center text-blue-600 p-3">
					<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Mobile menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
			</div>
			<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
				<li><a class ="no-underline ' text-sm text-gray-400 hover:text-gray-500" href="#">HOME</a></li>
				<li class="text-gray-300">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
					</svg>
				</li>
				<li><a class ="no-underline ' text-sm text-gray-400 font-bold" href="#">About Us</a></li>
				<li class="text-gray-300">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
					</svg>
				</li>
				<li><a class ="no-underline text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
				<li class="text-gray-300">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
					</svg>
				</li>
				<li><a class ="no-underline text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
				<li class="text-gray-300">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
					</svg>
				</li>
				<li><a class ="no-underline text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
			</ul>
		{!loggedIn && <>	<Button onClick={signInWithGoogle} class ="no-underline hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</Button>
			<Button class ="no-underline hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</Button></>}
		{loggedIn && <div>🤝✅</div> }
		</nav>
		<div class="navbar-menu relative z-50 hidden">
			<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
			<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
				<div class="flex items-center mb-8">
					<a class ="no-underline 'mr-auto text-3xl font-bold leading-none" href="/home">
					<img src = {logo}/>
					</a>
					<button class="navbar-close">
						<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>
				<div>
					<ul>
						<li class="mb-1">
							<a class ="no-underline block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
						</li>
						<li class="mb-1">
							<a class ="no-underline block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
						</li>
						<li class="mb-1">
							<a class ="no-underline block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
						</li>
						<li class="mb-1">
							<a class ="no-underline block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
						</li>
						<li class="mb-1">
							<a class ="no-underline block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
						</li>
					</ul>
				</div>
			{!loggedIn &&	<div class="mt-auto">
					<div class="pt-6">
						<Button onClick={signInWithGoogle} className ="no-underline block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</Button>
						<Button onClick={signInWithGoogle} class ="no-underline block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</Button>
					</div>
					<p class="my-4 text-xs text-center text-gray-400">
						<span>Copyright © 2021</span>
					</p>
				</div>}
				{loggedIn &&  <div>Logged in</div> }
			</nav>
		</div>
	</body>
	

	</div>
  )
}
