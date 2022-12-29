<script lang="js">
    // @ts-ignore
    import {hello} from "$lib/randomize"

    let min;
    let max;
</script>

<h1 class="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
    Timer
</h1>
<div class="bg-indigo-800 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
    <div class="px-4 py-8 sm:px-10">
        <div class="mt-6">
            <div class="w-full space-y-6">
                <div class="w-full">
                    <div class=" relative ">
                        <input
                            bind:value={min}
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
                            bind:value={max}
                            type="number"
                            id="max-time"
                            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Maximum time"
                        />
                    </div>
                </div>
                <div>
                    <span class="block w-full rounded-md shadow-sm">
                        <button
                            on:click={() => hello(min, max)}
                            type="button"
                            class="py-2 px-4  bg-violet-600 hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Start timer
                        </button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
