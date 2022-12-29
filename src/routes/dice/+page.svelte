<script lang="js">
    // @ts-ignore
    import {dice} from "$lib/randomize"
    
    let diceSize = 6;
</script>

<h1 class="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
    Dice
</h1>
<div class="bg-indigo-800 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
    <div class="px-4 py-8 sm:px-10">
        <div class="mt-6">
            <div class="w-full space-y-6">
                <div class="w-full">
                    <select bind:value={diceSize} class="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="dices" required>
                        <option disabled selected>
                            Select an dice
                        </option>
                        <option value="6">
                            D6
                        </option>
                        <option value="12">
                            D12
                        </option>
                        <option value="20">
                            D20
                        </option>
                    </select>
                    <div class="">
                        <span class="block w-full rounded-md shadow-sm py-2 px-4 bg-violet-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" id="dice-site">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>