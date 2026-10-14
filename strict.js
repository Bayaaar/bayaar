(() => {
    "use strict";

    const $ = (selector, parent = document) => parent.querySelector(selector);
    const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

    const categoryNames = {
        all: "Бүх ангилал",
        soft: "Чихмэл",
        car: "Машин",
        lego: "Угсардаг",
        doll: "Хүүхэлдэй",
        sport: "Спорт",


        bambruush: "Бамбуруш"
    };

    const products = [
        {
            id: "bear",
            name: "Баавгайн чихмэл тоглоом",
            category: "soft",
            price: 35000,
            oldPrice: 45000,
            discount: 20,
            rating: 5,
            reviews: 128,
            badge: "Хамгийн дуртай",
            description: "Маш зөөлөн, хөөрхөн баавгай.",
            emoji: "🧸",
            localImage: "bambruush.png",
            image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "car",
            name: "Удирдлагатай машин",
            category: "car",
            price: 55000,
            rating: 5,
            reviews: 96,
            badge: "Шинэ",
            description: "Хурдан, хөгжилтэй RC машин.",
            emoji: "🚗",
            localImage: "mashin.png",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "lego",
            name: "Creative LEGO Set",
            category: "lego",
            price: 45000,
            rating: 5,
            reviews: 215,
            badge: "Шинэ",
            description: "Бүтээлч сэтгэлгээг хөгжүүлэх LEGO.",
            emoji: "🧩",
            localImage: "lego.png",
            image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "doll",
            name: "Princess Doll",
            category: "doll",
            price: 40000,
            oldPrice: 47000,
            discount: 15,
            rating: 5,
            reviews: 74,
            badge: "Хямдрал",
            description: "Өхөөрдөм, гоёмсог хүүхэлдэй.",
            emoji: "🎎",
            localImage: "doll.png",
            image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "ball",
            name: "Colorful Kids Ball",
            category: "sport",
            price: 20000,
            rating: 5,
            reviews: 61,
            badge: "Сонголт",
            description: "Гадаа тоглоход тохиромжтой бөмбөг.",
            emoji: "⚽",
            localImage: "ball.png",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "rabbit",
            name: "Туулайн чихмэл",
            category: "soft",
            price: 30000,
            oldPrice: 40000,
            discount: 25,
            rating: 5,
            reviews: 183,
            badge: "Хямдрал",
            description: "Маш зөөлөн, хөөрхөн туулай.",
            emoji: "🐰",
            localImage: "rabbit.png",
            image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "robot",
            name: "Өнгөтэй робот",
            category: "lego",
            price: 68000,
            rating: 5,
            reviews: 84,
            badge: "Хамгийн дуртай",
            description: "Хөгжилтэй хөдөлгөөнтэй робот найз.",
            emoji: "🤖",
            image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "blocks",
            name: "Pastel Building Blocks",
            category: "lego",
            price: 32000,
            rating: 5,
            reviews: 102,
            badge: "Шинэ",
            description: "Өнгөөтэй хэсгүүдээр бүтээлтэй дүүрэг үүсгэ.",
            emoji: "🧱",
            image: "https://images.unsplash.com/photo-1560961911-ba7ef651a56c?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush1",
            name: "Зурагны бамбуруш (энгийн)",
            category: "bambruush",
            price: 12000,
            oldPrice: 15000,
            discount: 20,
            rating: 5,
            reviews: 45,
            badge: "Хямдрал",
            description: "Зургийн бамбуруш, энгийн хэмжээтэй, сайн чанарын сүлмий хөтөч.",
            emoji: "🖌️",
            localImage: "bambruush1.png",
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush2",
            name: "Зурагны бамбуруш (том)",
            category: "bambruush",
            price: 18000,
            rating: 5,
            reviews: 38,
            badge: "Шинэ",
            description: "Зургийн бамбуруш, том хэмжээтэй, бүрэн хөтөч.",
            emoji: "🖌️",
            localImage: "bambruush2.png",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush3",
            name: "Зурагны бамбуруш (жижиг)",
            category: "bambruush",
            price: 8000,
            rating: 4,
            reviews: 22,
            badge: "Сонголт",
            description: "Зургийн бамбуруш, жижиг хэмжээтэй, нарийн зургуудад зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush3.png",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush4",
            name: "Зурагны бамбуруш (овоолгын)",
            category: "bambruush",
            price: 25000,
            oldPrice: 30000,
            discount: 17,
            rating: 5,
            reviews: 56,
            badge: "Хамгийн дуртай",
            description: "Зургийн бамбуруш, овоолгын хэмжээтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush4.png",
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush5",
            name: "Зурагны бамбуруш (хагас овоолгын)",
            category: "bambruush",
            price: 22000,
            rating: 5,
            reviews: 41,
            badge: "Шинэ",
            description: "Зургийн бамбуруш, хагас овоолгын хэмжээтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush5.png",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush6",
            name: "Зурагны бамбуруш (хөх)",
            category: "bambruush",
            price: 15000,
            rating: 4,
            reviews: 19,
            badge: "Сонголт",
            description: "Зургийн бамбуруш, хөх өнгийтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush6.png",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush7",
            name: "Зурагны бамбуруш (улаан)",
            category: "bambruush",
            price: 15000,
            rating: 4,
            reviews: 17,
            badge: "Сонголт",
            description: "Зургийн бамбуруш, улаан өнгийтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush7.png",
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush8",
            name: "Зурагны бамбуруш (ногоон)",
            category: "bambruush",
            price: 15000,
            rating: 4,
            reviews: 15,
            badge: "Сонголт",
            description: "Зургийн бамбуруш, ногоон өнгийтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush8.png",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush9",
            name: "Зурагны бамбуруш (цэнхэр)",
            category: "bambruush",
            price: 15000,
            rating: 4,
            reviews: 14,
            badge: "Сонголт",
            description: "Зургийн бамбуруш, цэнхэр өнгийтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush9.png",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush10",
            name: "Зурагны бамбуруш (шар)",
            category: "bambruush",
            price: 15000,
            rating: 4,
            reviews: 13,
            badge: "Сонголт",
            description: "Зургийн бамбуруш, шар өнгийтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush10.png",
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush11",
            name: "Зурагны бамбуруш (хөх-улаан)",
            category: "bambruush",
            price: 16000,
            rating: 5,
            reviews: 28,
            badge: "Шинэ",
            description: "Зургийн бамбуруш, хөх-улаан өнгийтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush11.png",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush12",
            name: "Зурагны бамбуруш (ногоон-цэнхэр)",
            category: "bambruush",
            price: 16000,
            rating: 5,
            reviews: 26,
            badge: "Шинэ",
            description: "Зургийн бамбуруш, ногоон-цэнхэр өнгийтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush12.png",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush13",
            name: "Зурагны бамбуруш (улаан-шар)",
            category: "bambruush",
            price: 16000,
            rating: 5,
            reviews: 24,
            badge: "Шинэ",
            description: "Зургийн бамбуруш, улаан-шар өнгийтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush13.png",
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush14",
            name: "Зурагны бамбуруш (цэнхэр-ногоон)",
            category: "bambruush",
            price: 16000,
            rating: 5,
            reviews: 22,
            badge: "Шинэ",
            description: "Зургийн бамбуруш, цэнхэр-ногоон өнгийтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush14.png",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bambruush15",
            name: "Зурагны бамбуруш (шар-улаан)",
            category: "bambruush",
            price: 16000,
            rating: 5,
            reviews: 20,
            badge: "Шинэ",
            description: "Зургийн бамбуруш, шар-улаан өнгийтэй, уран зурагчинд зориулагдсан.",
            emoji: "🖌️",
            localImage: "bambruush15.png",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bear2",
            name: "Баавгайн чихмэл (том)",
            category: "soft",
            price: 55000,
            oldPrice: 65000,
            discount: 15,
            rating: 5,
            reviews: 89,
            badge: "Хямдрал",
            description: "Маш зөөлөн, хөөрхөн том баавгай.",
            emoji: "🧸",
            localImage: "bear2.png",
            image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "bear3",
            name: "Баавгайн чихмэл (жижиг)",
            category: "soft",
            price: 25000,
            rating: 5,
            reviews: 67,
            badge: "Шинэ",
            description: "Маш зөөлөн, хөөрхөн жижиг баавгай.",
            emoji: "🧸",
            localImage: "bear3.png",
            image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "car2",
            name: "Удирдлагатай машин (спорт)",
            category: "car",
            price: 75000,
            rating: 5,
            reviews: 54,
            badge: "Шинэ",
            description: "Хурдан, хөгжилтэй спорт RC машин.",
            emoji: "🏎️",
            localImage: "car2.png",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "car3",
            name: "Удирдлагатай машин (жийп)",
            category: "car",
            price: 85000,
            oldPrice: 95000,
            discount: 11,
            rating: 5,
            reviews: 43,
            badge: "Хямдрал",
            description: "Хүчтэй, хөгжилтэй жийп RC машин.",
            emoji: "🚙",
            localImage: "car3.png",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "lego2",
            name: "LEGO City Set",
            category: "lego",
            price: 55000,
            rating: 5,
            reviews: 167,
            badge: "Хамгийн дуртай",
            description: "Хот, барилга, машин бүхий LEGO багц.",
            emoji: "🧱",
            localImage: "lego2.png",
            image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "lego3",
            name: "LEGO Technic Set",
            category: "lego",
            price: 89000,
            rating: 5,
            reviews: 98,
            badge: "Шинэ",
            description: "Нарийн механик хэсгүүдтэй LEGO Technic.",
            emoji: "⚙️",
            localImage: "lego3.png",
            image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "doll2",
            name: "Princess Doll (цэнхэр)",
            category: "doll",
            price: 42000,
            rating: 5,
            reviews: 56,
            badge: "Шинэ",
            description: "Цэнхэр өнгийтэй гоёмсог хүүхэлдэй.",
            emoji: "🎎",
            localImage: "doll2.png",
            image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "doll3",
            name: "Princess Doll (улаан)",
            category: "doll",
            price: 42000,
            oldPrice: 50000,
            discount: 16,
            rating: 5,
            reviews: 48,
            badge: "Хямдрал",
            description: "Улаан өнгийтэй гоёмсог хүүхэлдэй.",
            emoji: "🎎",
            localImage: "doll3.png",
            image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "ball2",
            name: "Хөлбөмбөг",
            category: "sport",
            price: 28000,
            rating: 5,
            reviews: 73,
            badge: "Сонголт",
            description: "Гадаа тоглоход тохиромжтой хөлбөмбөг.",
            emoji: "⚽",
            localImage: "ball2.png",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=900&q=85"
        },
        {
            id: "ball3",
            name: "Сагс",
            category: "sport",
            price: 22000,
            rating: 4,
            reviews: 39,
            badge: "Шинэ",
            description: "Гадаа тоглоход тохиромжтой сагс.",
            emoji: "🏀",
            localImage: "ball3.png",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=900&q=85"
        }
    ];

    const galleryItems = [
        { title: "Өнгөөтэй дэлгэц", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=85", emoji: "🧸" },
        { title: "Бүтээх хүч", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=85", emoji: "🧩" },
        { title: "Мөрөөдөг найзах", image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=1000&q=85", emoji: "🧸" },
        { title: "Хөгжүүлэх мөч", image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1000&q=85", emoji: "⚽" },
        { title: "Найзтай хүүхэл", image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=1000&q=85", emoji: "🎎" }
    ];

    const storageKeys = {
        cart: "happy-toy-cart",
        wishlist: "happy-toy-wishlist",
        saleEnd: "happy-toy-sale-end"
    };

    const state = {
        cart: readArrayStorage(storageKeys.cart),
        wishlist: readArrayStorage(storageKeys.wishlist),
        category: "all",
        query: "",
        sort: "featured",
        saleOnly: false,
        slide: 0
    };

    let elements = {};
    let slideTimer = null;
    let toastTimer = null;
    let touchStartX = 0;

    function readStorage(key, fallback) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch (error) {
            return fallback;
        }
    }

    function readArrayStorage(key) {
        const value = readStorage(key, []);
        return Array.isArray(value) ? value : [];
    }

    function writeStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // Local storage may be disabled; the UI still works for this session.
        }
    }

    function formatPrice(value) {
        return ${Number(value).toLocaleString("en-US")}₮;
    }

    function escapeHtml(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function getProduct(id) {
        return products.find((product) => product.id === id);
    }

    function cacheElements() {
        elements = {
            header: $("#siteHeader"),
            nav: $("#mainNav"),
            menuToggle: $(".menu-toggle"),
            navLinks: $$(".nav-link"),
            productGrid: $("#productGrid"),
            productSearch: $("#productSearch"),
            categoryFilter: $("#categoryFilter"),
            sortFilter: $("#sortFilter"),
            resultCount: $("#resultCount"),
            activeFilterWrap: $("#activeFilterWrap"),
            activeFilterText: $("#activeFilterText"),
            emptyResults: $("#emptyResults"),
            cartDrawer: $("#cartDrawer"),
            wishlistDrawer: $("#wishlistDrawer"),
            pageOverlay: $("#pageOverlay"),
            cartItems: $("#cartItems"),
            wishlistItems: $("#wishlistItems"),
            cartFooter: $("#cartFooter"),
            cartCount: $("#cartCount"),
            wishlistCount: $("#wishlistCount"),
            drawerCartCount: $("#drawerCartCount"),
            drawerWishlistCount: $("#drawerWishlistCount"),
            cartTotal: $("#cartTotal"),
            searchModal: $("#searchModal"),
            searchForm: $("#searchForm"),
            modalSearchInput: $("#modalSearchInput"),
            checkoutModal: $("#checkoutModal"),
            checkoutForm: $("#checkoutForm"),
            successModal: $("#successModal"),
            successMessage: $("#successMessage"),
            contactForm: $("#contactForm"),
            emailInput: $("#emailInput"),
            toast: $("#toast"),
            toastMessage: $("#toastMessage"),
            backToTop: $("#backToTop"),
            currentYear: $("#currentYear"),
            heroSlides: $$(".hero-slide"),
            heroArts: $$(".hero-art"),
            sliderDots: $$(".slider-dot"),
            currentSlide: $("#currentSlide"),
            heroVisual: $(".hero-visual"),
            hero: $(".hero"),
            countdown: {
                days: $("#days"),
                hours: $("#hours"),
                minutes: $("#minutes"),
                seconds: $("#seconds")
            }
        };
    }

    function bindEvents() {
        document.addEventListener("click", handleDocumentClick);
        document.addEventListener("keydown", handleKeydown);

        elements.productSearch.addEventListener("input", (event) => {
            state.query = event.target.value;
            renderProducts();
        });

        elements.categoryFilter.addEventListener("change", (event) => {
            state.category = event.target.value;
            state.saleOnly = false;
            renderProducts();
        });

        elements.sortFilter.addEventListener("change", (event) => {
            state.sort = event.target.value;
            renderProducts();
        });

        elements.searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            submitSearch(elements.modalSearchInput.value);
        });

        elements.checkoutForm.addEventListener("submit", handleCheckout);
        elements.contactForm.addEventListener("submit", handleContactSubmit);
        elements.emailInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                subscribeNewsletter();
            }
        });
        elements.backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        elements.heroVisual.addEventListener("mouseenter", stopSlider);
        elements.heroVisual.addEventListener("mouseleave", startSlider);
        elements.hero.addEventListener("touchstart", (event) => {
            touchStartX = event.changedTouches[0].screenX;
            stopSlider();
        }, { passive: true });
        elements.hero.addEventListener("touchend", (event) => {
            const difference = event.changedTouches[0].screenX - touchStartX;
            if (Math.abs(difference) > 45) {
                difference < 0 ? setSlide(state.slide + 1) : setSlide(state.slide - 1);
            }
            startSlider();
        }, { passive: true });

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", () => {
            if (window.innerWidth > 930) closeMenu();
            handleScroll();
        });
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) stopSlider();
            else startSlider();
        });
    }

    function handleDocumentClick(event) {
        const actionElement = event.target.closest("[data-action]");

        if (actionElement) {
            const action = actionElement.dataset.action;

            if (action === "open-search") {
                event.preventDefault();
                openSearch();
                return;
            }
            if (action === "close-search") {
                event.preventDefault();
                closeSearch();
                return;
            }
            if (action === "open-cart") {
                event.preventDefault();
                openCart();
                return;
            }
            if (action === "close-cart") {
                event.preventDefault();
                closePanels();
                return;
            }
            if (action === "open-wishlist") {
                event.preventDefault();
                openWishlist();
                return;
            }
            if (action === "close-wishlist") {
                event.preventDefault();
                closePanels();
                return;
            }
            if (action === "close-panels") {
                event.preventDefault();
                closePanels();
                return;
            }
            if (action === "toggle-menu") {
                event.preventDefault();
                toggleMenu();
                return;
            }
            if (action === "prev-slide") {
                event.preventDefault();
                setSlide(state.slide - 1);
                startSlider();
                return;
            }
            if (action === "next-slide") {
                event.preventDefault();
                setSlide(state.slide + 1);
                startSlider();
                return;
            }
            if (action === "clear-filters") {
                event.preventDefault();
                clearFilters();
                return;
            }
            if (action === "add-cart") {
                event.preventDefault();
                addToCart(actionElement.dataset.id);
                return;
            }
            if (action === "toggle-wishlist") {
                event.preventDefault();
                toggleWishlist(actionElement.dataset.id);
                return;
            }
            if (action === "increase") {
                event.preventDefault();
                changeQuantity(actionElement.dataset.id, 1);
                return;
            }
            if (action === "decrease") {
                event.preventDefault();
                changeQuantity(actionElement.dataset.id, -1);
                return;
            }
            if (action === "remove-cart") {
                event.preventDefault();
                removeFromCart(actionElement.dataset.id);
                return;
            }
            if (action === "add-wishlist-item") {
                event.preventDefault();
                addToCart(actionElement.dataset.id);
                return;
            }
            if (action === "checkout") {
                event.preventDefault();
                openCheckout();
                return;
            }
            if (action === "close-checkout") {
                event.preventDefault();
                closeModal(elements.checkoutModal);
                return;
            }
            if (action === "close-success") {
                event.preventDefault();
                closeModal(elements.successModal);
                return;
            }
            if (action === "go-products") {
                event.preventDefault();
                closePanels();
                scrollToSection("#products");
                return;
            }
            if (action === "show-sale") {
                event.preventDefault();
                showSaleProducts();
                return;
            }
            if (action === "subscribe") {
                event.preventDefault();
                subscribeNewsletter();
                return;
            }
            if (action === "close-gallery") {
                event.preventDefault();
                closeGallery();
                return;
            }
        }

        const categoryButton = event.target.closest(".category-card[data-category]");
        if (categoryButton) {
            event.preventDefault();
            state.category = categoryButton.dataset.category;
            state.saleOnly = false;
            state.query = "";
            elements.productSearch.value = "";
            renderProducts();
            closeMenu();
            scrollToSection("#products");
            return;
        }

        const slideButton = event.target.closest("[data-slide-to]");
        if (slideButton) {
            event.preventDefault();
            setSlide(Number(slideButton.dataset.slideTo));
            startSlider();
            return;
        }

        const suggestion = event.target.closest("[data-search-value]");
        if (suggestion) {
            event.preventDefault();
            elements.modalSearchInput.value = suggestion.dataset.searchValue;
            submitSearch(suggestion.dataset.searchValue);
            return;
        }

        const galleryButton = event.target.closest("[data-gallery]");
        if (galleryButton) {
            event.preventDefault();
            openGallery(Number(galleryButton.dataset.gallery));
            return;
        }

        if (event.target === elements.searchModal) {
            closeSearch();
            return;
        }
        if (event.target === elements.checkoutModal) {
            closeModal(elements.checkoutModal);
            return;
        }
        if (event.target === elements.successModal) {
            closeModal(elements.successModal);
            return;
        }
        if (event.target.id === "galleryLightbox") {
            closeGallery();
            return;
        }

        const anchor = event.target.closest('a[href^="#"]');
        if (anchor) {
            const target = anchor.getAttribute("href");
            if (target === "#") {
                event.preventDefault();
                showToast("Энэ холбоос удахгүй нээгдэнэ ✨");
            } else if (target.length > 1) {
                event.preventDefault();
                closeMenu();
                scrollToSection(target);
            }
        }

        if (elements.nav.classList.contains("is-open") &&
            !elements.nav.contains(event.target) &&
            !elements.menuToggle.contains(event.target)) {
            closeMenu();
        }
    }

    function handleKeydown(event) {
        if (event.key === "Escape") {
            const galleryLightbox = $("#galleryLightbox");
            if (galleryLightbox?.classList.contains("is-open")) {
                closeGallery();
            } else if (elements.checkoutModal.classList.contains("is-open")) {
                closeModal(elements.checkoutModal);
            } else if (elements.successModal.classList.contains("is-open")) {
                closeModal(elements.successModal);
            } else if (elements.searchModal.classList.contains("is-open")) {
                closeSearch();
            } else if (elements.cartDrawer.classList.contains("is-open") || elements.wishlistDrawer.classList.contains("is-open")) {
                closePanels();
            } else {
                closeMenu();
            }
        }
    }

    function handleScroll() {
        const isScrolled = window.scrollY > 8;

        elements.header.classList.toggle("is-scrolled", isScrolled);
        elements.backToTop.classList.toggle("is-visible", window.scrollY > 500);
        updateActiveNav();
    }

    function updateActiveNav() {
        const sectionIds = ["home", "categories", "products", "sale", "about", "contact"];
        let currentId = "home";

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section && section.getBoundingClientRect().top <= 150) currentId = id;
        });

        elements.navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === #${currentId});
        });
    }

    function renderProducts() {
        const query = state.query.trim().toLocaleLowerCase("mn-MN");
        let filtered = products.filter((product) => {
            const searchable = ${product.name} ${product.description} ${categoryNames[product.category]}.toLocaleLowerCase("mn-MN");
            const matchesCategory = state.category === "all" || product.category === state.category;
            const matchesQuery = !query || searchable.includes(query);
            const matchesSale = !state.saleOnly || Boolean(product.oldPrice);
            return matchesCategory && matchesQuery && matchesSale;
        });

        if (state.sort === "price-low") filtered.sort((a, b) => a.price - b.price);
        if (state.sort === "price-high") filtered.sort((a, b) => b.price - a.price);
        if (state.sort === "rating") filtered.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);

        elements.productSearch.value = state.query;
        elements.categoryFilter.value = state.category;
        elements.sortFilter.value = state.sort;
        elements.resultCount.textContent = filtered.length;
        elements.productGrid.innerHTML = filtered.map(productCardTemplate).join("");
        elements.productGrid.hidden = filtered.length === 0;
        elements.emptyResults.hidden = filtered.length !== 0;

        const activeFilters = [];
        if (state.category !== "all") activeFilters.push(categoryNames[state.category]);
        if (state.query.trim()) activeFilters.push("${state.query.trim()}");
        if (state.saleOnly) activeFilters.push("Хямдрал");
        elements.activeFilterWrap.hidden = activeFilters.length === 0;
        elements.activeFilterText.textContent = activeFilters.join(" · ");

        setupImageFallbacks(elements.productGrid);
    }

    function productCardTemplate(product) {
        const wished = state.wishlist.includes(product.id);
        const badge = product.oldPrice
            ? <span class="product-discount">-${product.discount || Math.round((1 - product.price / product.oldPrice) * 100)}%</span>
            : <span class="product-badge">${escapeHtml(product.badge)}</span>;

        return `
            <article class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    ${badge}
                    <button class="wishlist-button ${wished ? "is-active" : ""}" data-action="toggle-wishlist" data-id="${product.id}" aria-label="${wished ? "Хүссэн бараанаас хасах" : "Хүссэн бараанд нэмэх"}" aria-pressed="${wished}">
                        <svg class="icon"><use href="#icon-heart"></use></svg>
                    </button>
                    <img src="${product.localImage || product.image}" data-remote-image="${product.localImage ? product.image : ""}" alt="${escapeHtml(product.name)}" data-fallback="true" loading="lazy" decoding="async">
                    <span class="product-fallback" hidden>${product.emoji}</span>
                    <span class="product-category-tag">${categoryNames[product.category]}</span>
                </div>
                <div class="product-info">
                    <div class="product-rating">★★★★★ <span>(${product.reviews})</span></div>
                    <h3>${escapeHtml(product.name)}</h3>
                    <p>${escapeHtml(product.description)}</p>
                    <div class="price-row">
                        <div class="price-copy">
                            ${product.oldPrice ? <del>${formatPrice(product.oldPrice)}</del> : ""}
                            <strong>${formatPrice(product.price)}</strong>
                        </div>
                        <button class="add-button" data-action="add-cart" data-id="${product.id}" aria-label="${escapeHtml(product.name)}-ийг сагсанд нэмэх">+</button>
                    </div>
                </div>
            </article>`;
    }

    function renderCart() {
        const cartItems = state.cart.map((item) => ({ ...item, product: getProduct(item.id) })).filter((item) => item.product);
        const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

        elements.drawerCartCount.textContent = (${cartItems.reduce((sum, item) => sum + item.quantity, 0)});
        elements.cartTotal.textContent = formatPrice(total);
        elements.cartFooter.hidden = cartItems.length === 0;

        if (cartItems.length === 0) {
            elements.cartItems.innerHTML = emptyDrawerMarkup("🛍️", "Сагс хоосон байна", "Дуртай тоглоомоо сагсандаа нэмээрэй.", "Бүх тоглоом үзэх", "go-products");
        } else {
            elements.cartItems.innerHTML = cartItems.map(cartItemTemplate).join("");
            setupImageFallbacks(elements.cartItems);
        }
    }

    function cartItemTemplate(item) {
        const { product, quantity } = item;
        return `
            <div class="cart-item">
                <div class="cart-item-image"><img src="${product.localImage || product.image}" data-remote-image="${product.localImage ? product.image : ""}" alt="${escapeHtml(product.name)}" data-fallback="true"><span class="visual-fallback" hidden>${product.emoji}</span></div>
                <div class="cart-item-info">
                    <h3>${escapeHtml(product.name)}</h3>
                    <p>${formatPrice(product.price)}</p>
                    <div class="cart-item-actions">
                        <div class="quantity-control" aria-label="Тоо ширхэг">
                            <button data-action="decrease" data-id="${product.id}" aria-label="Тоо багасгах">−</button>
                            <span>${quantity}</span>
                            <button data-action="increase" data-id="${product.id}" aria-label="Тоо нэмэх">+</button>
                        </div>
                    </div>
                </div>
                <button class="remove-item" data-action="remove-cart" data-id="${product.id}" aria-label="Багаа хасах">×</button>
            </div>`;
    }

    function renderWishlist() {
        const wishlistProducts = state.wishlist.map(getProduct).filter(Boolean);
        elements.drawerWishlistCount.textContent = (${wishlistProducts.length});

        if (wishlistProducts.length === 0) {
            elements.wishlistItems.innerHTML = emptyDrawerMarkup("♡", "Хүссэн бараа хоосон", "Дуртай тоглоомуудаа хэтгээд хадгална уу.", "Тоглоом үзэх", "go-products");
            return;
        }

        elements.wishlistItems.innerHTML = wishlistProducts.map((product) => `
            <div class="wishlist-item">
                <div class="wishlist-item-image"><img src="${product.localImage || product.image}" data-remote-image="${product.localImage ? product.image : ""}" alt="${escapeHtml(product.name)}" data-fallback="true"><span class="visual-fallback" hidden>${product.emoji}</span></div>
                <div class="wishlist-item-info"><h3>${escapeHtml(product.name)}</h3><p>${formatPrice(product.price)}</p><small>${categoryNames[product.category]}</small></div>
                <button class="add-button" data-action="add-wishlist-item" data-id="${product.id}" aria-label="Сагсанд нэмэх">+</button>
            </div>`).join("");
        setupImageFallbacks(elements.wishlistItems);
    }

    function emptyDrawerMarkup(icon, title, text, buttonText, action) {
        return <div class="empty-drawer"><span>${icon}</span><h3>${title}</h3><p>${text}</p><button class="button button-ghost" data-action="${action}">${buttonText}</button></div>;
    }

    function updateCounts() {
        const cartQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        elements.cartCount.textContent = cartQuantity > 0 ? cartQuantity : "";
        elements.wishlistCount.textContent = state.wishlist.length > 0 ? state.wishlist.length : "";
        elements.cartCount.parentElement.classList.toggle("has-items", cartQuantity > 0);
        elements.wishlistCount.parentElement.classList.toggle("has-items", state.wishlist.length > 0);
    }

    function persistCart() {
        writeStorage(storageKeys.cart, state.cart);
    }

    function persistWishlist() {
        writeStorage(storageKeys.wishlist, state.wishlist);
    }

    function addToCart(id) {
        const product = getProduct(id);
        if (!product) return;
        const existing = state.cart.find((item) => item.id === id);

        if (existing) existing.quantity += 1;
        else state.cart.push({ id, quantity: 1 });

        persistCart();
        renderCart();
        updateCounts();
        elements.cartCount.closest(".cart-trigger")?.classList.remove("bump");
        void elements.cartCount.offsetWidth;
        elements.cartCount.closest(".cart-trigger")?.classList.add("bump");
        showToast(${product.name} сагсанд нэмэгдлээ ✦);
    }

    function changeQuantity(id, delta) {
        const item = state.cart.find((cartItem) => cartItem.id === id);
        if (!item) return;
        item.quantity += delta;
        if (item.quantity <= 0) state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
        persistCart();
        renderCart();
        updateCounts();
    }

    function removeFromCart(id) {
        const product = getProduct(id);
        state.cart = state.cart.filter((item) => item.id !== id);
        persistCart();
        renderCart();
        updateCounts();
        showToast(${product?.name || "Бараа"} сагсаас хасагдлаа);
    }

    function toggleWishlist(id) {
        const product = getProduct(id);
        if (!product) return;
        const index = state.wishlist.indexOf(id);
        const isRemoving = index !== -1;

        if (isRemoving) state.wishlist.splice(index, 1);
        else state.wishlist.push(id);

        persistWishlist();
        updateCounts();
        renderProducts();
        renderWishlist();
        showToast(isRemoving ? "Хүссэн бараанаас хасагдлаа" : "Хүссэн бараанд нэмэгдлээ ♡");
    }

    function openSearch() {
        closeMenu();
        closePanels();
        elements.modalSearchInput.value = state.query;
        openModal(elements.searchModal);
        window.setTimeout(() => elements.modalSearchInput.focus(), 100);
    }

    function closeSearch() {
        closeModal(elements.searchModal);
    }

    function submitSearch(value) {
        state.query = value.trim();
        closeSearch();
        renderProducts();
        scrollToSection("#products");
        if (state.query) showToast("${state.query}" гэж хайж байна);
    }

    function openCart() {
        closeMenu();
        closeSearch();
        closePanels();
        renderCart();
        elements.cartDrawer.classList.add("is-open");
        elements.cartDrawer.setAttribute("aria-hidden", "false");
        elements.pageOverlay.classList.add("is-visible");
        syncBodyLock();
    }

    function closePanels() {
        elements.cartDrawer.classList.remove("is-open");
        elements.cartDrawer.setAttribute("aria-hidden", "true");
        elements.wishlistDrawer.classList.remove("is-open");
        elements.wishlistDrawer.setAttribute("aria-hidden", "true");
        elements.pageOverlay.classList.remove("is-visible");
        syncBodyLock();
    }

    function openWishlist() {
        closeMenu();
        closePanels();
        renderWishlist();
        elements.wishlistDrawer.classList.add("is-open");
        elements.wishlistDrawer.setAttribute("aria-hidden", "false");
        elements.pageOverlay.classList.add("is-visible");
        syncBodyLock();
    }

    function openModal(modal) {
        closePanels();
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        syncBodyLock();
    }

    function closeModal(modal) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        syncBodyLock();
    }

    function syncBodyLock() {
        const shouldLock = $$(".drawer.is-open, .search-modal.is-open, .checkout-modal.is-open, .success-modal.is-open, .gallery-lightbox.is-open").length > 0;
        document.body.classList.toggle("no-scroll", shouldLock);
    }

    function openCheckout() {
        closeMenu();
        if (state.cart.length === 0) {
            showToast("Эхлээд сагсанд бараа нэмээрэй 🛍️", true);
            return;
        }
        closePanels();
        openModal(elements.checkoutModal);
    }

    function handleCheckout(event) {
        event.preventDefault();
        const name = $("#checkoutName").value.trim();
        const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        closeModal(elements.checkoutModal);
        elements.successMessage.textContent = ${name || "Харилцагч"}, таны ${totalItems} бараа бүхий захиалгыг хүлээн авч, хамгийн удахгүй холбогдоно. Баяртай нааштай өдөр өтгөөг!;
        state.cart = [];
        persistCart();
        renderCart();
        updateCounts();
        window.setTimeout(() => openModal(elements.successModal), 180);
    }

    function handleContactSubmit(event) {
        event.preventDefault();
        event.currentTarget.reset();
        showToast("Мессеж хүргэлдээ. Бид тун удахгүй холбогдоно 💌");
    }

    function subscribeNewsletter() {
        const email = elements.emailInput.value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast("Зөв и-мэйл хаяг оруулна уу", true);
            elements.emailInput.focus();
            return;
        }
        elements.emailInput.value = "";
        showToast("Аз жаргалын мэдээлэлд бүртгүүллээ 🎉");
    }

    function clearFilters() {
        state.category = "all";
        state.query = "";
        state.saleOnly = false;
        renderProducts();
    }

    function showSaleProducts() {
        closeMenu();
        state.category = "all";
        state.query = "";
        state.saleOnly = true;
        renderProducts();
        scrollToSection("#products");
        showToast("Хямдралтай бараануудыг шүүж байна ✨");
    }

    function toggleMenu() {
        const isOpen = elements.nav.classList.toggle("is-open");
        elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
        elements.menuToggle.innerHTML = isOpen
            ? <svg class="icon"><use href="#icon-close"></use></svg>
            : <svg class="icon menu-icon"><use href="#icon-menu"></use></svg>;
    }

    function closeMenu() {
        elements.nav.classList.remove("is-open");
        elements.menuToggle.setAttribute("aria-expanded", "false");
        elements.menuToggle.innerHTML = <svg class="icon menu-icon"><use href="#icon-menu"></use></svg>;
    }

    function scrollToSection(selector) {
        const target = document.querySelector(selector);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function setSlide(index) {
        const normalizedIndex = (index + elements.heroSlides.length) % elements.heroSlides.length;
        state.slide = normalizedIndex;
        elements.heroSlides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === normalizedIndex));
        elements.heroArts.forEach((art, artIndex) => art.classList.toggle("is-active", artIndex === normalizedIndex));
        elements.sliderDots.forEach((dot, dotIndex) => {
            const active = dotIndex === normalizedIndex;
            dot.classList.toggle("is-active", active);
            dot.setAttribute("aria-selected", String(active));
        });
        elements.currentSlide.textContent = String(normalizedIndex + 1).padStart(2, "0");
    }

    function startSlider() {
        stopSlider();
        if (document.hidden) return;
        slideTimer = window.setInterval(() => setSlide(state.slide + 1), 6500);
    }

    function stopSlider() {
        if (slideTimer) window.clearInterval(slideTimer);
        slideTimer = null;
    }

    function startCountdown() {
        let saleEnd = Number(readStorage(storageKeys.saleEnd, 0));
        if (!saleEnd || saleEnd < Date.now()) {
            saleEnd = Date.now() + 7 * 24 * 60 * 60 * 1000;
            writeStorage(storageKeys.saleEnd, saleEnd);
        }

        const update = () => {
            const difference = Math.max(0, saleEnd - Date.now());
            const totalSeconds = Math.floor(difference / 1000);
            const days = Math.floor(totalSeconds / 86400);
            const hours = Math.floor((totalSeconds % 86400) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            elements.countdown.days.textContent = String(days).padStart(2, "0");
            elements.countdown.hours.textContent = String(hours).padStart(2, "0");
            elements.countdown.minutes.textContent = String(minutes).padStart(2, "0");
            elements.countdown.seconds.textContent = String(seconds).padStart(2, "0");
        };
        update();
        window.setInterval(update, 1000);
    }

    function showToast(message, isError = false) {
        elements.toastMessage.textContent = message;
        elements.toast.classList.toggle("is-error", isError);
        elements.toast.classList.add("is-visible");
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 3000);
    }

    function openGallery(index) {
        const item = galleryItems[index];
        if (!item) return;
        closeMenu();
        closeGallery();
        const lightbox = document.createElement("div");
        lightbox.className = "gallery-lightbox";
        lightbox.id = "galleryLightbox";
        lightbox.setAttribute("role", "dialog");
        lightbox.setAttribute("aria-modal", "true");
        lightbox.setAttribute("aria-hidden", "false");
        lightbox.innerHTML = <div class="gallery-lightbox-card"><button class="modal-close" data-action="close-gallery" aria-label="Галерей хаах"><svg class="icon"><use href="#icon-close"></use></svg></button><div class="gallery-lightbox-image"><span>${item.emoji}</span><img src="${item.image}" alt="${escapeHtml(item.title)}" data-fallback="true"></div><div class="gallery-lightbox-caption"><span class="section-kicker">HAPPY TOY GALLERY</span><h2>${escapeHtml(item.title)}</h2><p>Энэ удаагийн сонголтыг ч хүүхдийн инээмсэглэлтэй хамт дурших өдөр болсонгоор хайж авъя.</p></div></div>;
        document.body.appendChild(lightbox);
        lightbox.classList.add("is-open");
        syncBodyLock();
        setupImageFallbacks(lightbox);
    }

    function closeGallery() {
        const lightbox = $("#galleryLightbox");
        if (!lightbox) return;
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        window.setTimeout(() => lightbox.remove(), 280);
        syncBodyLock();
    }

    function setupImageFallbacks(root = document) {
        $$("img[data-fallback]", root).forEach((image) => {
            if (image.dataset.fallbackBound === "true") return;
            image.dataset.fallbackBound = "true";
            const nextFallback = image.nextElementSibling?.matches(".product-fallback, .visual-fallback")
                ? image.nextElementSibling
                : null;
            const heroEmoji = image.closest(".art-image-frame")?.querySelector(".art-emoji");

            const onLoad = () => {
                image.classList.add("is-ready");
                if (nextFallback) nextFallback.hidden = true;
                if (heroEmoji) heroEmoji.style.opacity = "0";
            };
            const onError = () => {
                const remoteImage = image.dataset.remoteImage;
                if (remoteImage && !image.dataset.remoteTried) {
                    image.dataset.remoteTried = "true";
                    image.src = remoteImage;
                    return;
                }
                image.hidden = true;
                if (nextFallback) nextFallback.hidden = false;
                if (heroEmoji) heroEmoji.style.opacity = "1";
            };

            image.addEventListener("load", onLoad);
            image.addEventListener("error", onError);
            if (image.complete) {
                if (image.naturalWidth > 0) onLoad();
                else onError();
            }
        });
    }

    function init() {
        state.cart = state.cart
            .filter((item) => item && getProduct(item.id) && Number.isFinite(Number(item.quantity)))
            .map((item) => ({ id: item.id, quantity: Math.max(1, Math.floor(Number(item.quantity))) }));
        state.wishlist = [...new Set(state.wishlist.filter((id) => getProduct(id)))];
        cacheElements();
        bindEvents();
        renderProducts();
        renderCart();
        renderWishlist();
        updateCounts();
        setSlide(0);
        startSlider();
        startCountdown();
        setupImageFallbacks();
        elements.currentYear.textContent = new Date().getFullYear();
        handleScroll();
    }

    init();
})();

