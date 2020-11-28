Vue.component('navbar', {
    template: /*html*/ `
        <div class="navbar fixed w-screen z-10 bg-gray-800 md:bg-opacity-75 shadow-lg" :class="{ 'navbar--hidden': !showNavbar }">
            <div class="hidden md:block mx-auto py-4">
                <img class="mx-auto md:w-28 lg:w-38" src="/assets/jeit-logo.png" alt="logo de JEIT">
            </div>
            <div class="max-w-7xl mx-auto px-2 sm:px-3">
                <div class="flex justify-between items-center sm:py-4 py-2 md:justify-start md:space-x-10">
                    <div class="flex justify-start md:w-0 md:flex-1 bg-fixed ml-4">
                        <img class="md:hidden mx-auto w-20" src="/assets/jeit-logo-min.png" alt="logo de JEIT">
                    </div>
                    <div class="md:hidden">
                        <button @click="isOpen = !isOpen" type="button" class="mr-4 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-300">
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                    <nav id="menu" class="hidden md:flex space-x-10 menu">
                        <a href="#home" data-scrollspy="#home" class="text-base font-medium text-gray-100 hover:text-gray-300 active">
                        Inicio
                        </a>
                        <a href="#about-us" data-scrollspy="#about-us" class="text-base font-medium text-gray-100 hover:text-gray-300">
                        Quiénes Somos
                        </a>
                        <a href="#contact" data-scrollspy="#contact" class="text-base font-medium text-gray-100 hover:text-gray-300">
                        Contacto
                        </a>
                        <a href="#products" data-scrollspy="#products" class="text-base font-medium text-gray-100 hover:text-gray-300">
                        Productos
                        </a>
                    </nav>
                    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
                </div>
                <div v-if="isOpen" class="w-full flex flex-col ml-4 menu">
                    <a href="#home" data-scrollspy="#home" class="text-base font-medium text-gray-100 hover:text-gray-300 my-2 active">
                    Inicio
                    </a>
                    <a href="#about-us" data-scrollspy="#about-us" class="text-base font-medium text-gray-100 hover:text-gray-300 my-2">
                    Quiénes Somos
                    </a>
                    <a href="#contact" data-scrollspy="#contact" class="text-base font-medium text-gray-100 hover:text-gray-300 my-2">
                    Contacto
                    </a>
                    <a href="#products" data-scrollspy="#products" class="text-base font-medium text-gray-100 hover:text-gray-300 my-2 mb-4">
                    Productos
                    </a>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            isOpen: false,
            showNavbar: true,
            lastScrollPosition: 0
        }
    },
    methods: {
        onScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
                return
            }
            // Stop executing this function if the difference between
            // current scroll position and last scroll position is less than some offset
            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 40) {
                if (this.isOpen) this.isOpen = !this.isOpen
                return
            }
            this.showNavbar = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    }
});

Vue.component('slider-section', {
    template: /*html*/ `
    <div class="img-slider w-screen h-screen">
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover actived"
            style="background-image:url('/assets/bg-2.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h1 class="font-semibold text-5xl">Condimentos JEIT</h1>
                <h2 class="my-5 text-3xl font-regular capitalize">Envasamos lo mejor para usted</h2>
                <p class="mb-5 text-lg font-light">Tenemos a disposición mas de 100 productos.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('/assets/banners/alinos_y_especias.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Aliños y especias</h2>
                <p class="mb-5 text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque quod ipsum pariatur doloribus atque cum quis mollitia nisi ad modi maxime, distinctio
                    id ab, dignissimos ullam? Maxime beatae aspernatur repudiandae.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('/assets/banners/decoracion_torta.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Decoración torta</h2>
                <p class="mb-5 text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque quod ipsum pariatur doloribus atque cum quis mollitia nisi ad modi maxime, distinctio
                    id ab, dignissimos ullam? Maxime beatae aspernatur repudiandae.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('/assets/banners/frutossecos_y_manies.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Frutos secos y manies</h2>
                <p class="mb-5 text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque quod ipsum pariatur doloribus atque cum quis mollitia nisi ad modi maxime, distinctio
                    id ab, dignissimos ullam? Maxime beatae aspernatur repudiandae.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('/assets/banners/grupo_encurtidos.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Grupo encurtidos</h2>
                <p class="mb-5 text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque quod ipsum pariatur doloribus atque cum quis mollitia nisi ad modi maxime, distinctio
                    id ab, dignissimos ullam? Maxime beatae aspernatur repudiandae.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('/assets/banners/linea_tostaduria.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Línea tostaduría</h2>
                <p class="mb-5 text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque quod ipsum pariatur doloribus atque cum quis mollitia nisi ad modi maxime, distinctio
                    id ab, dignissimos ullam? Maxime beatae aspernatur repudiandae.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('/assets/banners/grupo_fiesta.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Grupo fiesta</h2>
                <p class="mb-5 text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque quod ipsum pariatur doloribus atque cum quis mollitia nisi ad modi maxime, distinctio
                    id ab, dignissimos ullam? Maxime beatae aspernatur repudiandae.</p>
            </div>
        </div>
        <div class="navigation">
            <button class="btn actived"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
        </div>
    </div>
    `,
});

Vue.component('hero-section', {
    template: /*html*/ `
        <div id="home" class="h-screen w-screen relative pt-16 pb-32 flex content-center items-center justify-center scrollspy">
            <div class="absolute top-0 w-full h-full bg-center bg-cover"
                style="background-image:url('/assets/bg-2.jpg')">
                <span class="w-full h-full absolute opacity-75 bg-black"></span></div>
            <div class="container relative mx-auto">
                <div class="items-center flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div class="px-4 text-gray-100">
                            <h1 class="font-semibold text-5xl">Condimentos JEIT</h1>
                            <p class="my-5 text-2xl font-regular">Envasamos lo mejor para usted</p>
                            <p class="mb-5 text-lg font-light">Tenemos a disposición mas de 100 productos. Para revisar los productos que tenemos, puedes ir a la sección de <a href="#catalog"><strong>Catálogo</strong></a> </p>
                            <div class="relative text-gray-600 my-3 hidden">
                                <input type="search" name="serch" placeholder="Busca un producto..." class="bg-white w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
                                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                                    <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden hidden"
                style="height:70px;transform:translateZ(0)"><svg class="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100"
                    x="0" y="0">
                    <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg></div>
        </div>
    `,
});

Vue.component('about-section', {
    template: /*html*/ `
        <div id="about-us" class="mx-auto bg-yellow-200 py-12 scrollspy">
            <h1 class="font-medium text-3xl md:text-5xl text-gray-700 text-center pb-8">¿Quiénes Somos?</h1>
            <div class="relative">
                <div class="line-onside grid items-center text-center gap-4 w-screen pb-8">
                    <img class="mx-auto w-20" src="/assets/jeit-logo-min.png" alt="logo de JEIT">
                </div>
            </div>
            <div class="container mx-auto px-8 md:px-24">
                <p class="font-medium text-md text-justify md:text-center md:text-lg text-gray-800">Lorem ipsum dolor,
                    sit amet
                    consectetur adipisicing elit. Itaque labore obcaecati omnis debitis distinctio autem, laboriosam
                    voluptate! Accusamus laudantium minus quibusdam sint tenetur reprehenderit enim, sit, quos minima
                    facere totam?</p>
            </div>
        </div>
    `,
});

Vue.component('contact-section', {
    template: /*html*/ `
        <div id="contact" class="mx-auto bg-gray-800 text-yellow-200 py-12 scrollspy">
            <h1 class="font-medium text-3xl md:text-5xl text-center pb-8">Contacto</h1>
            <div class="relative">
                <div class="line-onside grid items-center text-center gap-4 w-screen pb-8">
                    <img class="mx-auto w-20" src="/assets/jeit-logo-min.png" alt="logo de JEIT">
                </div>
            </div>
            <div class="container mx-auto px-8 md:px-24">
                <p class="font-medium text-md text-justify md:text-center md:text-lg mb-8">Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Itaque labore obcaecati omnis debitis distinctio autem, laboriosam
                    voluptate! Accusamus laudantium minus quibusdam sint tenetur reprehenderit enim, sit, quos minima
                    facere totam?</p>
                <ul class="text-left list-none">
                    <li class="mb-6">
                        <h4 class="font-medium text-lg my-3 text-light flex items-center"><svg width="20" height="18"
                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile"
                                class="svg-inline--fa fa-mobile fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z">
                                </path>
                            </svg>&nbsp;Número de contacto</h4>
                        <p class="mx-3 my-1"><a href="tel:+56966940056" class="font-light">+56 9 6694
                                0056</a></p>
                    </li>
                    <li class="mb-6">
                        <h4 class="font-medium text-lg my-3 text-light flex items-center"><svg width="20" height="18"
                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                                class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                </path>
                            </svg>&nbsp;Correo electrónico</h4>
                        <p class="mx-3 my-1"><a href="mailto:jeit1733@hotmail.com"
                                class="font-light">jeit1733@hotmail.com</a></p>
                    </li>
                    <li class="mb-6">
                        <h4 class="font-medium text-lg my-3 text-light flex items-center"><svg width="20" height="20"
                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-clock"
                                class="svg-inline--fa fa-user-clock fa-w-20" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path fill="currentColor"
                                    d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z">
                                </path>
                            </svg>&nbsp;Horario de atención</h4>
                        <p class="mx-3 font-light">Las 24 horas, 7 días a la semana, domingos y festivos.</p>
                    </li>
                    <li class="mb-6">
                        <h4 class="font-medium text-lg my-3 text-light flex items-center"><svg width="18" height="20"
                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                                class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                </path>
                            </svg>&nbsp;Ubicación</h4>
                        <p class="mx-3 font-light">Lugar de ubicación</p>
                    </li>

                    
                </ul>
            </div>
            <div class="mx-auto mapouter mb-3 mx-4">
                <div class="gmap_canvas px-4"><iframe class="rounded w-11/12 mx-auto" loading="lazy" width="900"
                    height="400" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=22%20norte%201733&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                    href="https://www.embedgooglemap.net"></a></div>
            </div>
        </div>
    `
});

Vue.component('products-section', {
    template: /*html*/ `
        <div id="products" class="mx-auto bg-gray-50 py-12 scrollspy">
            <h1 class="font-medium text-3xl md:text-5xl text-gray-700 text-center pb-8">Productos</h1>
            <div class="relative">
                <div class="line-onside grid items-center text-center gap-4 w-screen pb-8">
                    <img class="mx-auto w-20" src="/assets/jeit-logo-min.png" alt="logo de JEIT">
                </div>
            </div>
            <div class="container mx-auto px-8 md:px-24">
                <p class="font-medium text-md text-justify md:text-center md:text-lg mb-8">Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Itaque labore obcaecati omnis debitis distinctio autem, laboriosam
                    voluptate! Accusamus laudantium minus quibusdam sint tenetur reprehenderit enim, sit, quos minima
                    facere totam?</p>
            </div>
            <!--  <div class="container mx-auto px-8 md:px-24 grid grid-rows-2 grid-flow-col gap-2 mb-4">
                <div class="rounded row-span-1 flex">
                    <img class="rounded shadow-lg" src="assets/banners/1.jpg" alt="grupo de productos 1">
                </div>
                <div class="rounded row-span-1 flex">
                    <img class="rounded shadow-lg" src="assets/banners/3.jpg" alt="grupo de productos 3">
                </div>
                <div class="rounded row-span-2 flex">
                    <img class="rounded shadow-lg" src="assets/banners/2.jpg" alt="grupo de productos 2">
                </div>
                <div class="rounded row-span-1 flex">
                    <img class="rounded shadow-lg" src="assets/banners/4.jpg" alt="grupo de productos 4">
                </div>
                <div class="rounded row-span-1 flex">
                    <img class="rounded shadow-lg" src="assets/banners/5.jpg" alt="grupo de productos 5">
                </div>
            </div> -->
            <div class="mx-auto grid md:grid-rows-2 md:grid-flow-col mb-4 px-4 md:px-0 space-y-3 md:space-y-0">
                <div class="md:row-span-1 relative flex">
                    <div class="absolute flex h-full w-full">
                        <div class="m-auto py-4 px-8 rounded bg-gray-900 bg-opacity-50">
                        <p class="text-lg font-semibold capitalize text-white">Decoración torta</p>
                        </div>
                    </div>
                    <img class="rounded-md md:rounded-none" src="assets/banners/decoracion_torta.jpg" alt="grupo decoración torta">
                </div>
                <div class="md:col-span-2 md:row-span-1 relative flex">
                    <div class="absolute flex h-full w-full">
                        <div class="m-auto py-4 px-8 rounded bg-gray-900 bg-opacity-50">
                        <p class="text-lg font-semibold capitalize text-white">Grupo encurtidos</p>
                        </div>
                    </div>
                    <img class="rounded-md md:rounded-none" src="assets/banners/grupo_encurtidos.jpg" alt="grupo de encurtidos">
                </div>
                <div class="md:row-span-2 relative flex">
                    <div class="absolute flex h-full w-full">
                        <div class="m-auto py-4 px-8 rounded bg-gray-900 bg-opacity-50">
                        <p class="text-lg font-semibold capitalize text-white">Grupo fiesta</p>
                        </div>
                    </div>
                    <img class="rounded-md md:rounded-none" src="assets/banners/grupo_fiesta.jpg" alt="grupo fiesta">
                </div>
                <div class="md:row-span-1 relative flex">
                    <div class="absolute flex h-full w-full">
                        <div class="m-auto py-4 px-8 rounded bg-gray-900 bg-opacity-50">
                        <p class="text-lg font-semibold capitalize text-white">Línea tostaduría</p>
                        </div>
                    </div>
                    <img class="rounded-md md:rounded-none" src="assets/banners/linea_tostaduria.jpg" alt="grupo de linea tostaduría">
                </div>
                <div class="md:col-span-2 relative flex">
                    <div class="absolute flex h-full w-full">
                        <div class="m-auto py-4 px-8 rounded bg-gray-900 bg-opacity-50">
                        <p class="text-lg font-semibold capitalize text-white">Frutos secos y maníes</p>
                        </div>
                    </div>
                    <img class="rounded-md md:rounded-none" src="assets/banners/frutossecos_y_manies.jpg" alt="grupo de frutos secos">
                </div>
                <div class="md:row-span-1 relative flex">
                    <div class="absolute flex h-full w-full">
                        <div class="m-auto py-4 px-8 rounded bg-gray-900 bg-opacity-50">
                        <p class="text-lg font-semibold capitalize text-white">Aliños y especias</p>
                        </div>
                    </div>
                    <img class="rounded-md md:rounded-none" src="assets/banners/alinos_y_especias.jpg" alt="grupo de aliños y especias">
                </div>
            </div>

            <!-- <div class="mx-auto px-2 grid space-y-6">
                <div class="rounded">
                    <img class="rounded shadow-lg" src="assets/banners/1.jpg" alt="grupo de productos 1">
                </div>
                <div class="rounded">
                    <img class="rounded shadow-lg" src="assets/banners/3.jpg" alt="grupo de productos 3">
                </div>
                <div class="rounded">
                    <img class="rounded shadow-lg" src="assets/banners/2.jpg" alt="grupo de productos 2">
                </div>
                <div class="rounded">
                    <img class="rounded shadow-lg" src="assets/banners/4.jpg" alt="grupo de productos 4">
                </div>
                <div class="rounded">
                    <img class="rounded shadow-lg" src="assets/banners/5.jpg" alt="grupo de productos 5">
                </div>
            </div> -->
        </div>
    `,
});

Vue.component('footer-section', {
    template: /*html*/ `
        <footer>
            <div class="bg-gray-800 text-center text-gray-100 py-4">
                <p class="font-regular">Desarrollado por <strong><a class="no-underline hover:text-gray-300"
                            href="https://www.softmaking.cl/">SOFTMAKING</a></strong> © 2020</p>
            </div>
        </footer>
    `,
});

Vue.component('products', {
    template: /*html*/ `
        <div id="catalog" v-if="products" class="bg-gray-100">
            <h1 class="text-4xl text-yellow-500 font-light tracking-wide text-center py-4">{{ title }}</h1>
            <div class="relative">
                <div class="line-onside grid items-center text-center gap-4 w-screen">
                    <img class="mx-auto w-16" src="/assets/jeit-logo-min.png" alt="logo de JEIT">
                </div>
            </div>
            <div class="px-6 mx-2 flex md:grid grid-cols-1 md:grid-cols-6 gap-4 overflow-auto overflow-x-scroll md:overflow-x-hidden">
                <div v-for="product of products[title]" class="flex flex-col items-center">
                    <!-- <div class="bg-white rounded-lg mt-5">
                        <img :src="product.imagen_url" class="h-30 rounded-md" alt="">
                    </div> -->
                    <div class="bg-white shadow-sm rounded-md w-64 md:w-full">
                        <div class="py-5 px-5">
                            <p class="font-medium text-gray-800 text-lg leading-4 mb-2">{{ product.nombre }}</p>
                            <div class="flex items-center justify-between">
                                <div class="text-red-600 font-light flex">
                                    <div class="w-6 h-6 bg-red-600 rounded-full flex items-center text-center mr-1">
                                        <svg class="w-4 h-4 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                                    </div>
                                    {{ product.cantidad[0] }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    `,
    props: ['products'],
    computed: {
        title() {
            return Object.keys(this.products).toString()
        }
    },
});

const store = new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        loadProducts(state, products) {
            state.products = products
        }
    },
    actions: {
        getProducts: async function ({ commit }) {
            const data = await fetch('productos.json')
            const products = await data.json()
            commit('loadProducts', products)
        }
    },
});

new Vue({
    el: "#app",
    store,
    data: {},
    computed: {
        ...Vuex.mapState(['products'])
    },
    methods: {
        ...Vuex.mapMutations(['loadProducts']),
        ...Vuex.mapActions(['getProducts'])
    },
    mounted() {
        store.dispatch('getProducts')
    },
});