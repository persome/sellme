import React from 'react'
import { Flowbite } from 'flowbite-react'
import ProductDetailBreadcrumb from './ProductDetailBreadcrumb'



function ProductDetailMains() {
    return (
        <div>
            <Flowbite
                theme={{
                    theme: {
                        alert: {
                            color: {
                                primary: 'bg-primary'
                            }
                        }
                    }
                }}
            >


                <ProductDetailBreadcrumb />
                {/* <!--
            This example requires Tailwind CSS v2.0+

            This example requires some changes to your config:

            ```
            // tailwind.config.js
            module.exports = {
                // ...
                theme: {
                extend: {
                gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
            },
        },
    },
            plugins: [
            // ...
            require('@tailwindcss/aspect-ratio'),
            ],
    }
            ```
--> */}
                <div className="bg-white dark:bg-gray-900">
                    <div className="pt-6">
                        {/* <!-- Image gallery --> */}
                        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
                            </div>
                            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." className="w-full h-full object-center object-cover" />
                                </div>
                                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
                                </div>
                            </div>
                            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                                <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
                            </div>
                        </div>

                        {/* <!-- Product info --> */}
                        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Basic Tee 6-Pack</h1>
                            </div>

                            {/* <!-- Options --> */}
                            <div className="mt-4 lg:mt-0 lg:row-span-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="tracking-tight text-3xl text-gray-900 dark:text-white">$192</p>

                                {/* <!-- Reviews --> */}
                                <div className="mt-6">
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {/* <!--
                                        Heroicon name: solid/star

                                        Active: "text-gray-900", Default: "text-gray-200"
              --> */}
                                            <svg className="text-gray-900  dark:text-white h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            {/* <!-- Heroicon name: solid/star --> */}
                                            <svg className="text-gray-900  dark:text-white h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            {/* <!-- Heroicon name: solid/star --> */}
                                            <svg className="text-gray-900  dark:text-white h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            {/* <!-- Heroicon name: solid/star --> */}
                                            <svg className="text-gray-900  dark:text-white h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            {/* <!-- Heroicon name: solid/star --> */}
                                            <svg className="text-gray-300 dark:text-gray-600 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                        <p className="sr-only">4 out of 5 stars</p>
                                        <a href="/" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                                    </div>
                                </div>

                                <form className="mt-10">
                                    {/* <!-- Colors --> */}
                                    <div>
                                        <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                                        <fieldset className="mt-4">
                                            <legend className="sr-only">Choose a color</legend>
                                            <div className="flex items-center space-x-3">
                                                {/* <!--
                                            Active and Checked: "ring ring-offset-1"
                                            Not Active and Checked: "ring-2"
                --> */}
                                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                    <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                                                    <span id="color-choice-0-label" className="sr-only"> White </span>
                                                    <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                                                </label>

                                                {/* <!--
                                            Active and Checked: "ring ring-offset-1"
                                            Not Active and Checked: "ring-2"
                --> */}
                                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                    <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
                                                    <span id="color-choice-1-label" className="sr-only"> Gray </span>
                                                    <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                                                </label>

                                                {/* <!--
                                            Active and Checked: "ring ring-offset-1"
                                            Not Active and Checked: "ring-2"
                --> */}
                                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                                    <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                                                    <span id="color-choice-2-label" className="sr-only"> Black </span>
                                                    <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                                                </label>
                                            </div>
                                        </fieldset>
                                    </div>

                                    {/* <!-- Sizes --> */}
                                    <div className="mt-10">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                                            <a href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                                        </div>

                                        <fieldset className="mt-4">
                                            <legend className="sr-only">Choose a size</legend>
                                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                                {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                                                    <input type="radio" name="size-choice" value="XXS" disabled className="sr-only" aria-labelledby="size-choice-0-label" />
                                                    <span id="size-choice-0-label"> XXS </span>

                                                    <span aria-hidden="true" className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                                                        <svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                                            <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                                        </svg>
                                                    </span>
                                                </label>

                                                {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                                                    <span id="size-choice-1-label"> XS </span>

                                                    {/* <!--
                                                    Active: "border", Not Active: "border-2"
                                                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                                                    <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                </label>

                                                {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                                                    <span id="size-choice-2-label"> S </span>

                                                    {/* <!--
                                                    Active: "border", Not Active: "border-2"
                                                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                                                    <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                </label>

                                                {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label" />
                                                    <span id="size-choice-3-label"> M </span>

                                                    {/* <!--
                                                    Active: "border", Not Active: "border-2"
                                                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                                                    <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                </label>

                                                {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label" />
                                                    <span id="size-choice-4-label"> L </span>

                                                    {/* <!--
                                                    Active: "border", Not Active: "border-2"
                                                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                                                    <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                </label>

                                                {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
                                                    <span id="size-choice-5-label"> XL </span>

                                                    {/* <!--
                                                    Active: "border", Not Active: "border-2"
                                                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                                                    <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                </label>

                                                {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" value="2XL" className="sr-only" aria-labelledby="size-choice-6-label" />
                                                    <span id="size-choice-6-label"> 2XL </span>

                                                    {/* <!--
                                                    Active: "border", Not Active: "border-2"
                                                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                                                    <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                </label>

                                                {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                    <input type="radio" name="size-choice" value="3XL" className="sr-only" aria-labelledby="size-choice-7-label" />
                                                    <span id="size-choice-7-label"> 3XL </span>

                                                    {/* <!--
                                                    Active: "border", Not Active: "border-2"
                                                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                                                    <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                </label>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <button type="submit" className="mt-10 w-full bg-blue-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-offset-1 focus:ring-blue-800">Add to Cart</button>
                                </form>
                            </div>

                            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                {/* <!-- Description and details --> */}
                                <div>
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900 dark:text-gray-300">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Highlights</h3>

                                    <div className="mt-4">
                                        <list role="list" className="pl-4 list-disc text-sm space-y-2">
                                            <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>

                                            <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>

                                            <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

                                            <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
                                        </list>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h2 className="text-sm font-medium text-gray-900 dark:text-gray-400">Details</h2>

                                    <div className="mt-4 space-y-6">
                                        <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </Flowbite>
        </div>
    )
}

export default ProductDetailMains