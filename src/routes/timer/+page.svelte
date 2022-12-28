<div class="relative h-screen overflow-hidden bg-indigo-900">
	<img src="/images/firewatch.jpg" class="absolute object-cover w-full h-screen" alt="" />
	<div class="absolute inset-0 bg-black opacity-25" />
	<header class="absolute top-0 left-0 right-0 z-20" />
	<div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
		<div class="relative z-10 flex flex-col items-center w-full">
			<h1 class="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
				Random timer
			</h1>

			<div class="bg-transperent rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
				<div class="px-4 py-8 sm:px-10">
					<div class="relative mt-6">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center text-sm leading-5">
							<span class="px-2 text-gray-500 bg-white"> Timer criteria </span>
						</div>
					</div>
					<div class="mt-6">
						<div class="w-full space-y-6">
							<div class="w-full">
								<div class=" relative ">
									<input
										type="number"
										id="min-time"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Minimun time"
									/>
								</div>
							</div>
							<div class="w-full">
								<div class=" relative ">
									<input
										type="number"
										id="search-form-location"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Maximum time"
									/>
								</div>
							</div>
							<div>
								<span class="block w-full rounded-md shadow-sm">
									<button
										type="button"
										class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
									>
										Start timer
									</button>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
