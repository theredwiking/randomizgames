<script>
	import '../app.css';
</script>

<div class="relative h-screen overflow-hidden bg-indigo-900">
	<img src="/images/firewatch.jpg" class="absolute object-cover w-full h-screen" alt="" />
	<div class="absolute inset-0 bg-black opacity-25" />
	<header class="absolute top-0 left-0 right-0 z-20">
        <nav class="container px-6 py-4 mx-auto md:px-12">
            <div class="items-center justify-center md:flex">
                <div class="flex items-center justify-between">
                    <div class="md:hidden">
                        <button class="text-white focus:outline-none">
                            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="items-center hidden md:flex">
                    <a class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300" href="/">
                        Home
                    </a>
                    <a class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300" href="/timer">
                        Timer
                    </a>
                    <a class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300" href="/dice">
                        Dice
                    </a>
                </div>
            </div>
        </nav>
	</header>
	<div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
		<div class="relative z-10 flex flex-col items-center w-full">
			<slot />
		</div>
	</div>
</div>