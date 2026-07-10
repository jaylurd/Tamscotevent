// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", reveal);

// ── Pricing Tier Switcher ──
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll("[data-pricing-card]");
    if (!cards.length) return;

    cards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            // Reset all cards to default (light) style
            cards.forEach(function (c) {
                c.classList.remove("bg-noir", "text-white", "shadow-2xl", "shadow-noir/30", "border-white/5", "scale-105");
                c.classList.add("bg-white/85", "border-white/50");
                // Reset badge
                var badge = c.querySelector("[data-badge]");
                if (badge) badge.classList.add("hidden");
                // Reset list bullets
                c.querySelectorAll("[data-bullet]").forEach(function (b) {
                    b.classList.remove("bg-secondary");
                    b.classList.add("bg-primary");
                });
                // Reset text colors
                c.querySelectorAll("[data-tier-label]").forEach(function (t) {
                    t.classList.remove("text-white/40");
                    t.classList.add("text-noir/40");
                });
                c.querySelectorAll("[data-tier-title]").forEach(function (t) {
                    t.classList.remove("text-white");
                    t.classList.add("text-noir");
                });
                c.querySelectorAll("[data-tier-price]").forEach(function (t) {
                    t.classList.remove("text-secondary");
                    t.classList.add("text-primary");
                });
                c.querySelectorAll("[data-tier-divider]").forEach(function (t) {
                    t.classList.remove("bg-white/10");
                    t.classList.add("bg-primary/10");
                });
                c.querySelectorAll("[data-tier-item]").forEach(function (t) {
                    t.classList.remove("text-white/70");
                    t.classList.add("text-noir/70");
                });
                // Reset CTA button
                var cta = c.querySelector("[data-tier-cta]");
                if (cta) {
                    cta.classList.remove("bg-secondary", "text-noir", "font-semibold");
                    cta.classList.add("border", "border-primary/20", "text-primary");
                }
            });

            // Apply featured (dark) style to clicked card
            card.classList.remove("bg-white/85", "border-white/50");
            card.classList.add("bg-noir", "text-white", "shadow-2xl", "shadow-noir/30", "border-white/5", "scale-105");
            // Show badge
            var badge = card.querySelector("[data-badge]");
            if (badge) badge.classList.remove("hidden");
            // Featured list bullets
            card.querySelectorAll("[data-bullet]").forEach(function (b) {
                b.classList.remove("bg-primary");
                b.classList.add("bg-secondary");
            });
            // Featured text colors
            card.querySelectorAll("[data-tier-label]").forEach(function (t) {
                t.classList.remove("text-noir/40");
                t.classList.add("text-white/40");
            });
            card.querySelectorAll("[data-tier-title]").forEach(function (t) {
                t.classList.remove("text-noir");
                t.classList.add("text-white");
            });
            card.querySelectorAll("[data-tier-price]").forEach(function (t) {
                t.classList.remove("text-primary");
                t.classList.add("text-secondary");
            });
            card.querySelectorAll("[data-tier-divider]").forEach(function (t) {
                t.classList.remove("bg-primary/10");
                t.classList.add("bg-white/10");
            });
            card.querySelectorAll("[data-tier-item]").forEach(function (t) {
                t.classList.remove("text-noir/70");
                t.classList.add("text-white/70");
            });
            // Featured CTA button
            var cta = card.querySelector("[data-tier-cta]");
            if (cta) {
                cta.classList.remove("border", "border-primary/20", "text-primary");
                cta.classList.add("bg-secondary", "text-noir", "font-semibold");
            }
        });
    });
});

// ── WhatsApp Floating Button ──
document.addEventListener("DOMContentLoaded", function () {
    var whatsappBtn = document.createElement("a");
    whatsappBtn.href = "https://wa.me/2349034486406";
    whatsappBtn.target = "_blank";
    whatsappBtn.setAttribute("aria-label", "Chat on WhatsApp");
    whatsappBtn.className = "fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300 group";
    whatsappBtn.innerHTML = '<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
    document.body.appendChild(whatsappBtn);
});

// ── Mobile hamburger menu (builds a mobile menu from desktop links and toggles it)
document.addEventListener("DOMContentLoaded", function () {
    try {
        var nav = document.querySelector('nav#navbar');
        if (!nav) return;
        var toggleBtn = nav.querySelector('button');
        var desktopLinks = nav.querySelector('.desktop-nav');
        if (!toggleBtn || !desktopLinks) return;

        // Clone and adapt for mobile
        var mobileMenu = desktopLinks.cloneNode(true);
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.remove('md:flex');
        mobileMenu.classList.add('md:hidden','flex','flex-col','gap-4','p-4','w-full','bg-noir/95','text-white','absolute','inset-x-0','top-full','mt-2','z-40','rounded-b-lg','shadow-lg','backdrop-blur-xl');
        // Make links full-width blocks for easy tapping and ensure readability on dark mobile menu
        mobileMenu.querySelectorAll('a').forEach(function(a){
            a.classList.remove('ml-6', 'text-noir/60', 'text-noir', 'text-primary', 'hover:text-primary');
            a.classList.add('block','w-full','text-left','py-4','px-4','rounded-xl','text-white','hover:text-white/90');
        });

        // Ensure Book Consultation anchor opens the WhatsApp link target
        var book = mobileMenu.querySelector('a[href*="wa.me"]');
        if (book) book.setAttribute('target','_blank');

        // Start hidden
        mobileMenu.classList.add('hidden');
        nav.appendChild(mobileMenu);

        // Toggle behaviour
        toggleBtn.addEventListener('click', function(e){
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            var icon = toggleBtn.querySelector('.material-symbols-outlined');
            if (icon) icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu_open' : 'close';
        });

        // Close when clicking outside
        document.addEventListener('click', function(e){
            if (!nav.contains(e.target)) {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    var icon = toggleBtn.querySelector('.material-symbols-outlined');
                    if (icon) icon.textContent = 'menu_open';
                }
            }
        });
    } catch (err) {
        console.error('Mobile menu init error:', err);
    }
});
